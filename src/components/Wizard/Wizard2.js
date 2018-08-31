import React, {Component} from 'react'
import {connect} from 'react-redux'
import {newImage, clearInputs} from '../../ducks/reducer'
import {Link} from 'react-router-dom'

class Wizard2 extends Component{


  render(){
    return(
      <div>
        <Link to={'/'}><button onClick={()=> this.props.clearInputs()}>Cancel</button></Link>
         Image URL:
        <input placeholder={this.props.image} onChange={e=> this.props.newImage(e.target.value)}></input>
        <Link to={'/wiz1'}><button>Previous Step</button></Link>
        <Link to={'/wiz3'}><button>Next Step</button></Link>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    image: state.image
  }
}

export default connect(mapStateToProps, {newImage, clearInputs})(Wizard2)