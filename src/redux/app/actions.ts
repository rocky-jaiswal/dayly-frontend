export const LOAD_INITIAL_DATA = 'app/LOAD_INITIAL_DATA';
export const LOAD_INITIAL_DATA_INPROGRESS = 'app/LOAD_INITIAL_DATA_INPROGRESS';
export const LOAD_INITIAL_DATA_SUCCESS = 'app/LOAD_INITIAL_DATA_SUCCESS';
export const LOAD_INITIAL_DATA_FAILED = 'app/LOAD_INITIAL_DATA_FAILED';
export const LOGIN = 'app/LOGIN';
export const LOGIN_SUCCESSFUL = 'app/LOGIN_SUCCESSFUL';
export const LOGOUT = 'app/LOGOUT';

export const loadInitialData = () => {
  return {
    type: LOAD_INITIAL_DATA
  };
};

export const loadInitialDataInProgress = () => {
  return {
    type: LOAD_INITIAL_DATA_INPROGRESS
  };
};

export const loadInitialDataSuccess = () => {
  return {
    type: LOAD_INITIAL_DATA_SUCCESS
  };
};

export const loadInitialDataFailed = () => {
  return {
    type: LOAD_INITIAL_DATA_FAILED
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
