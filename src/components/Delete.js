import React, {Component} from 'react'
import { connect } from 'react-redux';
import {deleteHouse} from '../ducks/reducer'

class Delete extends Component{
constructor(props){
  super(props)
}
render(){
  return(
    <button onClick={() => this.props.deleteHouse(this.props.id)} className='Dbutton'>X</button>
  )
}
}

function mapStateToProps(state){
  return{
    house: state.houses
  }
}

export default connect(mapStateToProps, {deleteHouse})(Delete)