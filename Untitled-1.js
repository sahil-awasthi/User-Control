//how to update store on redux
/*
  Step 1: Dispatch Action
  Step 2: Reducer will call after dispatching action
  Step 3: Return state from reducer 
*/
const store = {
  users: [
    { name: 'Swapnil', age: 21 }
  ],
  products: [
    { name: 'Pillow' }
  ]
}
const logData = (store, action) => {
   console.log('Current Store', store);
  console.log('action', action);
  if (action.type === 'ADD_USER') return false;
}

const dispatch = (action) => {
   const value = logData(store, action);
   productReducer(state.products, action);
   userReducer(state.users, action);
}
const addUserAction = (user) => {
  return {
    type: 'ADD_USER',
    payload: user
  }
}
const handleUserAction = (userData) => {
  return async dispatch => {
    const data = await axios.post('http://localhost:400/add-user', userData);
    dispatch(addUserAction(data));
  } 
}
function productReducer = (state, action) => {
  switch(action.type) {
    default:
       return state;
  }
}
function userReducer = (state, action) => {
   switch(action.type) {
       case 'ADD_USER':
          return [ ...state, action.payload];
      default:
        return state; 
   }
}
dispatch(handleUserAction({ name: 'Sahil', age: 23 }));