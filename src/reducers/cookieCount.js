import c from './../constants';

const count = (state = 0, action) => {
  switch(action.type) {
    case c.COOKIE_COUNT:
      state = state + 1;
      return state;
    default:
      return state;
  }
}


export default count;
