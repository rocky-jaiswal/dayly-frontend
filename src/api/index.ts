import axios from 'axios';

import Config from '../config';

const AppAPI = {

  init() {
    return axios.create({
      headers: {
        common: {
          Authorization: sessionStorage.getItem('token') || ''
        }
      }
    });
  },

  async fetchToken(userId: string) {
    return await AppAPI.init()
      .post(`${Config.env.baseURL}/login`, { userId });
  }

};

export default AppAPI;
