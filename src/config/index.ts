const environmentConfiguration = (environment: string) => {

  const defaults = {
    authDomain: 'dayly-test.firebaseapp.com',
    databaseURL: 'https://dayly-test.firebaseio.com',
    projectId: 'dayly-test',
    storageBucket: 'dayly-test.appspot.com',
    messagingSenderId: '949817480590'
  };

  if (environment === 'development') {
    return Object.assign(defaults, {
      apiKey: process.env.REACT_APP_API_KEY,
      baseURL: `http://localhost:5000/dayly-test/us-central1/app`
    });
  }
  return Object.assign(defaults, {
    apiKey: process.env.REACT_APP_API_KEY,
    baseURL: `https://us-central1-dayly-test.cloudfunctions.net/app`
  });
};

const Config = {
  env: environmentConfiguration(process.env.APP_ENV || 'development')
};

export default Config;
