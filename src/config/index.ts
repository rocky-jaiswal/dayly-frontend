const environmentConfiguration = (environment: string) => {

  if (environment === 'development') {
    return {
      apiKey: process.env.REACT_APP_API_KEY,
      baseURL: `http://localhost:5000/dayly-test/us-central1/app`
    };
  }
  return {
    baseURL: `https://us-central1-dayly-test.cloudfunctions.net/app`
  };
};

const Config = {
  env: environmentConfiguration(process.env.APP_ENV || 'development')
};

export default Config;
