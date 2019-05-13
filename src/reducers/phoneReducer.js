import * as types from '../actions/actionsTypes';

const initialState = {
    phones: [],
    selectedPhone: {},
    loading: false
};

export default function phoneReducer(state = initialState, action) {
    switch(action.type) {
        case types.LOAD_PHONES_SUCCESS:
            return Object.assign({}, state, {phones: action.phones, loading: false});
        case types.LOAD_PHONE_SUCCESS:
            return Object.assign({}, state, {selectedPhone: action.phone, loading: false});
        case types.SET_PHONE_LOADING:
            return Object.assign({}, state, {loading: action.loading});
        case types.SELECT_PHONE_SUCCESS:
            const selectedPhone = state.phones.find(({id}) => id == action.id);
            return Object.assign({}, state, {selectedPhone});
        default:
            return state;
    }
}
