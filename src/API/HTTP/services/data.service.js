import http from '../http-common';

class DataService {
  login = async data => {
    try {
      return http.post('/auth', data);
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
