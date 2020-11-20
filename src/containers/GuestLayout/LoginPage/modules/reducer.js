import {
  LOGIN_PAGE_REQUEST,
  LOGIN_PAGE_SUCCESS,
  LOGIN_PAGE_FAILED,
} from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PAGE_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case LOGIN_PAGE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case LOGIN_PAGE_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default loginReducer;
