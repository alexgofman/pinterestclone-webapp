export default function(state = null, action) {
  switch(action.type) {
    case 'AUTH_USER':
      return {...action.payload.data,authorized:true}
    case 'UNAUTH_USER':
      return {...state, authorized: false}
  }
  
  return state;
}