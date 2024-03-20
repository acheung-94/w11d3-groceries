
export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            const newState = {...state}
            newState[action.id] = {
                id: action.id,
                count: 1
            }
            return newState
        }
        default:
            return state;
    }
  }

const ADD_TO_CART = 'cart/ADD_TO_CART';
//action creator
export const addToCart = (id) => {
    //action object
    return {
        type: ADD_TO_CART,
        id
    }
}