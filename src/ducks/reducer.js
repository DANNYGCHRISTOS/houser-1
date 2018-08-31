import axios from 'axios'

const initialState = {
  houses: [],
  propertyName: '',
  address: '',
  city: '',
  propertyState: '',
  zip: 0,
  image: '',
  mortgage: 0,
  rent: 0
}

const GET_HOUSES = 'GET_HOUSES'
const DELETE_HOUSE = 'DELETE_HOUSE'
const NEW_NAME = 'NEW_NAME'
const NEW_ADDRESS = 'NEW_ADDRESS'
const NEW_CITY = 'NEW_CITY'
const NEW_STATE = 'NEW_STATE'
const NEW_ZIP = 'NEW_ZIP'
const NEW_IMAGE = 'NEW_IMAGE' 
const NEW_MORTGAGE = 'NEW_MORTGAGE'
const NEW_RENT = 'NEW_RENT'
const ADD_HOUSE = 'ADD_HOUSE'
const CLEAR_INPUTS = 'CLEAR_INPUTS'

export default function(state=initialState, action){
  switch (action.type) {
    case NEW_RENT:
    return{
      ...state,
      rent: action.payload
    }
    case NEW_MORTGAGE:
    return{
      ...state,
      mortgage: action.payload
    }
    case NEW_IMAGE:
    return{
      ...state,
      image: action.payload
    }
    case NEW_ZIP:
    return{
      ...state,
      zip: action.payload
    }
    case NEW_STATE:
    return{
      ...state,
      propertyState: action.payload
    }
    case NEW_CITY:
    return{
      ...state,
      city: action.payload
    }
    case NEW_ADDRESS:
    return{
      ...state,
      address: action.payload
    }
    case NEW_NAME:
    return{
      ...state,
      propertyName: action.payload
    }
    case GET_HOUSES:
    return{
      ...state,
      houses: action.payload
    }
    case DELETE_HOUSE:
    return{
      ...state,
      houses: action.payload
    }
    case ADD_HOUSE:
    return{
      ...state,
      houses: action.payload
    }
    case CLEAR_INPUTS:
    return{
      ...state,
      propertyName: '',
      address: '',
      city: '',
      propertyState: '',
      zip: 0,
      image: '',
      mortgage: 0,
      rent: 0
    }
    
    default:
    return state
  }
}

export function newRent(rent){
  return{
    type: NEW_RENT,
    payload: rent
  }
}

export function newMortgage(mort){
  return{
    type: NEW_MORTGAGE,
    payload: mort
  }
}

export function newImage(image){
  return{
    type: NEW_IMAGE,
    payload: image
  }
}

export function newZip(zip){
  return{
    type: NEW_ZIP,
    payload: zip
  }
}

export function newState(state){
  return{
    type: NEW_STATE,
    payload: state
  }
}

export function newCity(city){
  return{
    type: NEW_CITY,
    payload: city
  }
}

export function newAddress(add){
  return{
    type: NEW_ADDRESS,
    payload: add
  }
}

export function newName(name){
  return{
    type: NEW_NAME,
    payload: name
  }
}

export function getHomes(houses){
  return{
    type: GET_HOUSES,
    payload: houses
  }
}
export function deleteHouse(houseID){
  console.log(houseID)
  let newHouses = []
  axios.delete(`/api/houses/${houseID}`)
  .then(res=> newHouses = res.data)
  .catch(err => alert(`Cannot get houses :(  Error: ${err}`))
  return{
    type: DELETE_HOUSE,
    payload: newHouses
  }
}

export function addHouse(name, address, city, state, zip, img, mortgage, rent){
  let body = {name, address, city, state, zip, img, mortgage, rent}
  let newHouses = []
  console.log(body)
  axios.post('/api/houses', body).then(res => newHouses = res.data)
  .catch(err => console.log(err))
  return{
    type: ADD_HOUSE,
    payload: newHouses
  }
}
export function clearInputs(){
  return{
    type: CLEAR_INPUTS
  }
}

