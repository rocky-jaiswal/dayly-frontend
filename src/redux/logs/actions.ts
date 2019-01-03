export const CHANGE_THANKFUL_FOR = 'app/CHANGE_THANKFUL_FOR';
export const CHANGE_LEARNED_TODAY = 'app/CHANGE_LEARNED_TODAY';
export const CHANGE_STRESSED_OUT = 'app/CHANGE_STRESSED_OUT';

export const SUBMIT_LOG = 'app/SUBMIT_LOG';
export const SUBMIT_LOG_IN_PROGESS = 'app/SUBMIT_LOG_IN_PROGESS';
export const SUBMIT_LOG_FAILED = 'app/SUBMIT_LOG_FAILED';
export const SUBMIT_LOG_SUCCESSFUL = 'app/SUBMIT_LOG_SUCCESSFUL';

export const changeThankfulFor = (payload: string) => {
  return {
    payload,
    type: CHANGE_THANKFUL_FOR
  };
};

export const changeLearnedToday = (payload: string) => {
  return {
    payload,
    type: CHANGE_LEARNED_TODAY
  };
};

export const changeStressedOut = (payload: string) => {
  return {
    payload,
    type: CHANGE_STRESSED_OUT
  };
};

export const submitLog = () => {
  return {
    type: SUBMIT_LOG
  };
};

export const submitLogInProgress = () => {
  return {
    type: SUBMIT_LOG_IN_PROGESS
  };
};

export const submitLogFailed = () => {
  return {
    type: SUBMIT_LOG_FAILED
  };
};

export const submitLogSuccessful = () => {
  return {
    type: SUBMIT_LOG_SUCCESSFUL
  };
};
