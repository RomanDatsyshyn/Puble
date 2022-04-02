import http from '../http-common';
import {getToken} from '../../../asyncStorage/token';

class DataService {
  login = async data => {
    try {
      return http.post('/auth', data);
    } catch (e) {
      console.log(e);
    }
  };

  logout = async () => {
    try {
      let token = await getToken();

      return http.post(
        '/auth/logout',
        {},
        {
          headers: {
            Authorization: token,
          },
        },
      );
    } catch (e) {
      console.log(e);
    }
  };

  register = async data => {
    try {
      return http.post('/user', data);
    } catch (e) {
      console.log(e);
    }
  };

  //   getMarks = async () => {
  //     try {
  //       return http.get('/driver/get_makes/', await this.returnUdidHeader());
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
}

export default new DataService();
