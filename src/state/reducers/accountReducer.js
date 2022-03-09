// ? A reducer is a function that return state
// ? 1.
// ? We can see the reducer as the banker
// ? 2.
// ? He receivess the envelope with an action type and payload
// ? 3.
// ? Depending on the action type the banker decides what todo with the payload
// ? 4.
// ? In the case of the deposit, is the amount the king watns to deposit

const bankerReducer = (state = 0, action) => {
  switch (action.type) {
    case "Increase":
      return state + action.payload;
    case "Decrease":
      return state - action.payload;
    default:
      return state
  }
};


export default bankerReducer