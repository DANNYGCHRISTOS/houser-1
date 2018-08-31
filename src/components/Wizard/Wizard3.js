import React, {Component} from 'react'
import {connect} from 'react-redux'
import {newMortgage, newRent, addHouse, clearInputs} from '../../ducks/reducer'
import {Link} from 'react-router-dom'

class Wizard3 extends Component{


  render(){
    return(
      <div>
        <Link to={'/'}><button onClick={()=> this.props.clearInputs()}>Cancel</button></Link>
        Recommended Rent: {Math.trunc(this.props.mortgage*1.25)}
        <br/>
         Monthly Mortgage:
        <input placeholder={this.props.mortgage} onChange={e=> this.props.newMortgage(e.target.value)}></input>
        Desired Rent:
        <input placeholder={this.props.rent} onChange={e => this.props.newRent(e.target.value)}></input>
        <Link to={'/wiz2'}><button>Previous Step</button></Link>
        <Link to={'/'}><button onClick={() => this.props.addHouse(
          this.props.propertyName,
          this.props.address,
          this.props.city,
          this.props.propertyState,
          this.props.zip,
          this.props.image,
          this.props.mortgage,
          this.props.rent
        )}>Complete</button></Link>
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