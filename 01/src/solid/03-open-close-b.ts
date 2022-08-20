import { HttpClient } from './04-open-close-c'

export class TodoService {
  private httpClient: HttpClient

  constructor (httpClient : HttpClient) {
    this.httpClient = httpClient
  }

  async getTodoItems () {
    const { data } = await this.httpClient.get('https://jsonplaceholder.typicode.com/todos/')
    return data
  }
}

export class PostService {
  private httpClient: HttpClient

  constructor (httpClient : HttpClient) {
    this.httpClient = httpClient
  }

  async getPosts () {
    const { data } = await this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
    return data
  }
}

export class PhotosService {
  private httpClient: HttpClient

  constructor (httpClient : HttpClient) {
    this.httpClient = httpClient
  }

  async getPhotos () {
    const { data } = await this.httpClient.get('https://jsonplaceholder.typicode.com/photos')
    return data
  }
}
