import axios from "axios";

class UserService {
  async registerUser(username, email, password) {
    try {
      const response = axios.post("https://todovueserver-bba87754e80e.herokuapp.com/register", {
        username,
        email,
        password,
      });
      console.log((await response).data);

      return (await response).data;
    } catch (e) {
      console.log(e);
    }
  }

  async loginUser(email, password) {
    try {
      const response = axios.post("https://todovueserver-bba87754e80e.herokuapp.com/login", {
        email,
        password,
      });
      console.log((await response).data);
      return (await response).data;
    } catch (e) {
      console.log(e);
    }
  }
}

export const userService = new UserService();
