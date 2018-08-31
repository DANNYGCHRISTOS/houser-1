import React, {Component} from 'react'
import {connect} from 'react-redux'
import {newMortgage, newRent, addHouse, clearInputs} from '../../ducks/reducer'
import {Link} from 'react-router-dom'

class Wizard3 extends Component{


  render(){
    return(
      <div className='listing'>
        <p className='db_top'>
          <h1>Add New Listing</h1>
          <Link to={'/'}><button onClick={()=> this.props.clearInputs()} className='cancel'>Cancel</button></Link>
        </p>
        Recommended Rent: {Math.trunc(this.props.mortgage*1.25)}
        <br/>
        <br/>
        <p className='propin2'>
         Monthly Mortgage:
        <input placeholder={this.props.mortgage} onChange={e=> this.props.newMortgage(e.target.value)}></input>
        <br/>
        <br/>
        Desired Rent:
        <input placeholder={this.props.rent} onChange={e => this.props.newRent(e.target.value)}></input>
        </p>
        <p className="PandN">
        <Link to={'/wiz2'}><button className='botbut'>Previous Step</button></Link>
        <Link to={'/'}><button onClick={() => this.props.addHouse(
          this.props.propertyName,
          this.props.address,    
          this.props.city,
          this.props.propertyState,
          this.props.zip,
          this.props.image,
          this.props.mortgage,
          this.props.rent
        )} className='botbut'>Complete</button></Link>
        </p>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    mortgage: state.mortgage,
    rent: state.rent,
    image: state.image,
    propertyName: state.propertyName,
    address: state.address,
    city: state.city,
    propertyState: state.propertyState,
    zip: state.zip
  }
}

export default connect(mapStateToProps, {newMortgage, newRent, addHouse, clearInputs})(Wizard3)