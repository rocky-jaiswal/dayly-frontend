import axios from 'axios';

import Config from '../config';
import { LogEntry } from '../constants/types';

const AppAPI = {

  init() {
    return axios.create({
      headers: {
        common: {
          Authorization: `Bearer ${localStorage.getItem('token')}` || ''
        }
      }
    });
  },

  async fetchToken(userId: string) {
    return await AppAPI.init()
      .post(`${Config.env.baseURL}/login`, { userId });
  },

  async submitLog(log: LogEntry) {
    return await AppAPI.init()
      .post(`${Config.env.baseURL}/logEntry`, log);
  }

};

export default AppAPI;
