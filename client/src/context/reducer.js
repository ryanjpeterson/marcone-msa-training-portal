export const initialState = {
  adminUser: null,
  webinars: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ADMIN_USER':
      return {
        ...state,
        adminUser: action.adminUser,
      };

    case 'LOGOUT_ADMIN_USER': {
      return {
        ...state,
        adminUser: null,
      };
    }

    case 'SET_WEBINARS':
      return {
        ...state,
        webinars: action.webinars,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
