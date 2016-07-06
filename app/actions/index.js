import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://localhost:3000';

export function fetchPins() {
  const request = axios.get(`${ROOT_URL}/pins`);
  return {type: 'FETCH_PINS',payload:request};
}

export function addPin(pin) {
  const request = axios.post(`${ROOT_URL}/pins`,pin);
  return {type: 'ADD_PIN', payload:pin};
}

export function deletePin(id,index) {
  axios.delete(`${ROOT_URL}/pins/${id}`);
  return {type: 'DELETE_PIN', payload:index};
}

export function logoutUser() {
  localStorage.removeItem('token');
  browserHistory.push('/');
  return {type: 'UNAUTH_USER'};
}

export function loginUser(token) {
  return function(dispatch) {
    axios.post('http://localhost:3000/authenticate', {token})
      .then((response) => {
        localStorage.setItem('token', token);
        dispatch({type: 'AUTH_USER', payload:response});
        browserHistory.push('/profile');
      })
  }
}