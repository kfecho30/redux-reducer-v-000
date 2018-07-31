export function managePresents(state, action){
  switch(action) {
    case 'INCREASE':
      return {numberOfPresents: state.numberOfPresents + 1}
    case 'DECREASE':
      return {numberOfPresents: state.numberOfPresents - 1}
    default:
      return state;
  }
}
