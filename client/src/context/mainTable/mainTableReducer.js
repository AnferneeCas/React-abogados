import {
  GET_ACCOUNTS,
  CHANGED_SELECTED_ACCOUNT,
  CHANGE_SHOW_ADD_ARRANGEMENT_ACTION,
  GET_CHARACTERIZATION,
  CHANGE_CHARACTERIZATION
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_ACCOUNTS:
      return {
        ...state,
        accounts: action.payload
      };
    case CHANGED_SELECTED_ACCOUNT:
      return {
        ...state,
        selectedAccount: action.payload
      };

    case CHANGE_SHOW_ADD_ARRANGEMENT_ACTION:
      return {
        ...state,
        showAddArrangementAccion: action.payload
      };
    case GET_CHARACTERIZATION:
      return {
        ...state,
        characterizations: action.payload
      };

    case CHANGE_CHARACTERIZATION:
      return {
        ...state,
        accounts: state.accounts.map(ac => {
          if (ac.id === action.payload.id) {
            ac.characterization = action.payload.newCharacterization;
          }
        })
      };
    default:
      return state;
  }
};
