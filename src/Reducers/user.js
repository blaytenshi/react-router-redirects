const initialState = {
  authenticated: false,
  userLevel: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log(action);
      return {
        ...state,
        authenticated: action.dataFromLoginComponent.authenticated,
        userLevel: action.dataFromLoginComponent.userLevel
      };
    default:
      return state
  }
};

export default user