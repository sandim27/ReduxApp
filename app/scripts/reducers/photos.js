export default function ( state = [],action) {
  switch (action.type) {
    case 'GET_PHOTOS':
      return action.data;
    default:
      return state;
  }
};

