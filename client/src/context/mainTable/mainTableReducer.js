import {
  GET_ACCOUNTS,
  CHANGED_SELECTED_ACCOUNT,
  SHOW_MENU,
  GET_CHARACTERIZATION,
  CHANGE_CHARACTERIZATION,
  CHANGE_INDEX
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

    case SHOW_MENU:
      return {
        ...state,
        isMenuActive: action.payload
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

      case CHANGE_INDEX:
        return{
          ...state,
          menuIndex: action.payload
        }
    default:
      return state;
  }
};
