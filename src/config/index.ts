import secrets from './secrets';

const environmentConfiguration = (environment: string) => {
  if (environment === 'development') {
    return Object.assign(secrets, {
      baseURL: `http://localhost:5000/dayly-test/us-central1/app`
    });
  }
  return Object.assign(secrets, {
    baseURL: `https://us-central1-dayly-test.cloudfunctions.net/app`
  });
};

const Config = {
  env: environmentConfiguration(process.env.REACT_APP_ENV || 'development')
};

export default Config;
