const environmentConfiguration = (environment: string) => {

  if (environment === 'development') {
    return {
      apiKey: process.env.REACT_APP_API_KEY,
      baseURL: `https://us-central1-dayly-test.cloudfunctions.net/app`
    };
  }
  return {
    baseURL: `https://${window.location.hostname}/api`
  };
};

const Config = {
  env: environmentConfiguration(process.env.APP_ENV || 'development')
};

export default Config;
