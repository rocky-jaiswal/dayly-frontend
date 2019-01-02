export const FETCH_TOKEN = 'app/FETCH_TOKEN';
export const FETCH_TOKEN_INPROGRESS = 'app/FETCH_TOKEN_INPROGRESS';
export const FETCH_TOKEN_SUCCESS = 'app/FETCH_TOKEN_SUCCESS';
export const FETCH_TOKEN_FAILED = 'app/FETCH_TOKEN_FAILED';

export const LOGIN = 'app/LOGIN';
export const LOGIN_SUCCESSFUL = 'app/LOGIN_SUCCESSFUL';
export const LOGOUT = 'app/LOGOUT';

export const fetchToken = () => {
  return {
    type: FETCH_TOKEN
  };
};

export const fetchTokenInProgress = () => {
  return {
    type: FETCH_TOKEN_INPROGRESS
  };
};

export const fetchTokenSuccess = (payload: string) => {
  return {
    payload,
    type: FETCH_TOKEN_SUCCESS
  };
};

export const fetchTokenFailed = () => {
  return {
    type: FETCH_TOKEN_FAILED
  };
};

export const login = () => {
  return {
    type: LOGIN
  };
};

export const loginSuccessful = (payload: string) => {
  return {
    payload,
    type: LOGIN_SUCCESSFUL
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};
