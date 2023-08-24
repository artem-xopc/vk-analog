import axios from "axios";

export default class NewsService {
  static async getAllNews(userId = 1, limit = 12) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?`,
      {
        params: {
          userId: userId,
          _limit: limit,
        },
      }
    );
    return response;
  }
}
