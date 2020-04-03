import { GET_GESTIONES, ADD_GESTIONES } from "../../types/index";
import firebase from "../../firebase";
export default (state, action) => {
  switch (action.type) {
    case GET_GESTIONES:
      return {
        ...state,
      };

    case ADD_GESTIONES:
      firebase.addGestion(action.payload);
      return {
        ...state,
      };

    default:
      return state;
  }
};
