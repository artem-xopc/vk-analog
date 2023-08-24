import axios from "axios";

export default class UserService {
  static async getAllUsers(limit = 10, page = 1) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return response;
  }

  static async getUserById(userId) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + userId
    );
    return response;
  }

  static async updateUserInfo(values) {
    const response = await axios.put(
      "https://jsonplaceholder.typicode.com/users/1",
      values
    );
    return response;
  }
}
