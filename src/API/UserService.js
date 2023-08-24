import axios from "axios";

export default class UserService {
  static async getUserById(userId) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + userId
    );
    return response;
  }
}
