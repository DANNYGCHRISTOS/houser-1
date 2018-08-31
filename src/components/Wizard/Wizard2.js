import React, {Component} from 'react'
import {connect} from 'react-redux'
import {newImage, clearInputs} from '../../ducks/reducer'
import {Link} from 'react-router-dom'

class Wizard2 extends Component{


  render(){
    return(
      <div className='listing'>
        <p className='db_top'>
        <h1>Add New Listing</h1>
        <Link to={'/'}><button onClick={()=> this.props.clearInputs()} className='cancel'>Cancel</button></Link>
        </p>
        <p className='propin'>
         Image URL:
        <input placeholder={this.props.image} onChange={e=> this.props.newImage(e.target.value)}></input>
        </p>
        <p className="PandN">
        <Link to={'/wiz1'}><button className='botbut'>Previous Step</button></Link>
        <Link to={'/wiz3'}><button className='botbut'>Next Step</button></Link>
        </p>
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