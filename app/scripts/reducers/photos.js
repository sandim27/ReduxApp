export default function (state = [], action) {
  switch (action.type) {
    case 'LOADED_USERS':
      return action.data;
    default:
      return state;
  }
}