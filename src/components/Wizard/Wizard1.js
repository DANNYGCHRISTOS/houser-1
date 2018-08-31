import React, {Component} from 'react'
import {connect} from 'react-redux'
import {newName, newAddress, newCity, newState, newZip, clearInputs} from '../../ducks/reducer'
import {Link} from 'react-router-dom'
import Header from '../Header/Header'

class Wizard1 extends Component{
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div>
        <Link to={'/'}><button onClick={()=> this.props.clearInputs()}>Cancel</button></Link>
        Property Name:
        <input placeholder={this.props.propertyName} onChange={e=> this.props.newName(e.target.value)}></input>
        Address:
        <input placeholder={this.props.address} onChange={e=> this.props.newAddress(e.target.value)}></input>
        City:
        <input placeholder={this.props.city} onChange={e=> this.props.newCity(e.target.value)}></input>
        State:
        <input placeholder={this.props.propertyState} onChange={e=> this.props.newState(e.target.value)}></input>
        Zip Code:
        <input placeholder={this.props.zip} onChange={e=> this.props.newZip(e.target.value)}></input>
        <Link to={'/wiz2'}><button>Next Step</button></Link>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    propertyName: state.propertyName,
    address: state.address,
    city: state.city,
    propertyState: state.propertyState,
    zip: state.zip,
  }
}

export default connect(mapStateToProps, {newName, newAddress, newCity, newState, newZip, clearInputs})(Wizard1)