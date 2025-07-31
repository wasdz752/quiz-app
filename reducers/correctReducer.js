export default function correctReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case "reset" :
      return state - state
    default:
      return state;
  }
}
