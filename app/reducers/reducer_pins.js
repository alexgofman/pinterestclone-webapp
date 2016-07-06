export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_PINS':
      return action.payload.data;
    case 'ADD_PIN':
      return [...state,action.payload];
    case 'DELETE_PIN':
      return [...state.slice(0,action.payload), ...state.slice(action.payload+1)];
  }
  
  return state;
}