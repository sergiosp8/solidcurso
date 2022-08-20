import { PhotosService, PostService, TodoService } from './03-open-close-b'
import { HttpClient } from './04-open-close-c';

(async () => {
  const httpClient = new HttpClient()
  const todoService = new TodoService(httpClient)
  const postService = new PostService(httpClient)
  const photosService = new PhotosService(httpClient)

  const todos = await todoService.getTodoItems()
  const posts = await postService.getPosts()
  const photos = await photosService.getPhotos()

  console.log({ todos, posts, photos })
})()
