import axios from "axios";

export default class GalleryService {
  static async getAllPhotos(count = 1, limit = 10) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos`, {
        params: {
            _count: count,
            _limit: limit,
        }
      }
    );
    return response;
  }
}
