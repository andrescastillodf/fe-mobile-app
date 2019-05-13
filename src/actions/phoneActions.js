import * as types from './actionsTypes';
import phoneApi from '../api/mockPhonesApi';
const axios = require('axios');
const url ="http://localhost:3977/api/";
//dev server
//const url ="http://andrescastillo.ddns.net:3977/api/";

export function loadPhonesSuccess(phones) {
    return { type: types.LOAD_PHONES_SUCCESS, phones };
}

export function loadPhones(){
    return function(dispatch){
      dispatch(setLoading(true));
        // return axios.get(url+'phone')
        // .then(function (response) {
        //     dispatch(loadPhonesSuccess(response.data.result));
        // })
        // .catch(function (error) {
        //     throw(error);
        // });
        return phoneApi.getAllPhones().then(phones => {
          dispatch(loadPhonesSuccess(phones));
        });
    };
}

export function loadPhoneSuccess(phone) {
    return { type: types.LOAD_PHONE_SUCCESS, phone };
}

export function loadPhone(id){
    return function(dispatch){
      dispatch(setLoading(true));
        // return axios.get(url+'phone/'+id)
        // .then(function (response) {
        //     dispatch(loadPhoneSuccess(response.data.result));
        // })
        // .catch(function (error) {
        //     throw(error);
        // });
        return phoneApi.getPhone(id).then(phone => {
          dispatch(loadPhoneSuccess(phone));
        });
    };
}

export function selectPhoneSuccess(id) {
  return { type: types.SELECT_PHONE_SUCCESS, id };
}

export function selectPhone(id){
  return function(dispatch){
    dispatch(selectPhoneSuccess(id));
  };
}

export function removePhone(){
    return function(dispatch){
        return dispatch(loadPhoneSuccess({}));
    };
}
export function setLoading(loading) {
    return { type: types.SET_PHONE_LOADING, loading };
}
export function startLoading(){
    return function(dispatch){
        return dispatch(setLoading(true));
    };
}
