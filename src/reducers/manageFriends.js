export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return {friends: Object.assign([...state.friends, action.friend])}
    case 'REMOVE_FRIEND':
      return
    default:
      return state;
  }
}
