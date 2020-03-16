import { GET_STATS } from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case GET_STATS:
      return {
        ...state,
        statsCounters: action.payload
      };
    default:
      return state;
  }
};
