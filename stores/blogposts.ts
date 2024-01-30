import { defineStore } from 'pinia'

interface Post {
  title: string;
  author: string;
  thumbnail: string;
  updatedDate: string;
  previewText: string;
  content: string;
}

interface PostsState {
  posts: Record<string, Post>;
  singlePost: Post;
  isAdmin: boolean;
}

export const usePostsStore = defineStore('blogPosts', {
  state: (): PostsState => ({
    posts: {},
    singlePost: {
      title: "",
      author: "",
      thumbnail: "",
      updatedDate: "",
      previewText: "",
      content: "",
    },
    isAdmin: false,
  }),
  // actions - like methods in vue
  actions: {
    async fetchPosts() {
      const runtimeConfig = useRuntimeConfig()
      const firebaseDbUrl = runtimeConfig.public.firebaseDbUrl + '.json'
      const { data: responseData, status, error, refresh } = await useFetch(firebaseDbUrl)
      this.posts = responseData.value as Record<string, Post>
    },
    updatePost(postId: string, post: Post) {
      this.posts[postId] = post
    }
  }
})