import axios from "axios";

export default class NewsService {
  static async getAllNews(count = 1, limit = 12) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?`,
      {
        params: {
          _count: count,
          _limit: limit,
        },
      }
    );
    return response;
  }
}
