import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getHomes} from '../../ducks/reducer'
import Delete from '../Delete'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Dashboard extends Component{
  constructor(props){
    super(props)

    this.state = {
      houses: []
    }

    this.getHouses = this.getHouses.bind(this)
  }

  async componentDidMount(){
      this.getHouses()
    }

  async getHouses(){
    await axios.get('/api/houses')
    .then(res=> {this.setState({houses: res.data})})
    .catch(err => alert(`Cannot get houses :(  Error: ${err}`))
    this.props.getHomes(this.state.houses)
   }

   async componentDidUpdate(prevProps) {
    if(this.props.houses.length !== prevProps.houses.length)
   await this.getHouses()
  }

  render(){
    const homes = this.props.houses.map(e=> 
      <div className = 'card'>
        <Delete id={e.house_id}/>
        <img src={e.img} height='200' width='300' className='housepic'/>
        <div className='info'>
          <div>Property Name: {e.name}</div>
          <div>Address: {e.address}</div>
          <div>City: {e.city}</div>
          <div>State: {e.state}</div>
          <div>Zip Code: {e.zip}</div>
        </div>
        <div className='moneyinfo'>
          <div>Mortgage: {e.mortgage}</div>
          <div>Rent: {e.rent}</div>
        </div>
        
      </div>
     )
     
    return(
      <div className='dash'>
        <p className='db_top'>
          <h1>Dashboard</h1>
          <Link to={'/wiz1'}><button className='add_prop'>Add New Property</button></Link>
        </p>
      {homes}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    houses: state.houses
  }
}


export default connect(mapStateToProps, {getHomes})(Dashboard)