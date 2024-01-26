import { defineStore } from 'pinia'

interface Post {
  id: string;
  title: string;
  author: string;
  thumbnail: string;
  updatedDate: string;
  previewText: string;
  content: string;
}

export const usePostsStore = defineStore('blogPosts', {
  state: () => ({
    posts: {},
  }),
  // actions - like methods in vue
  actions: {
    async fetchPosts() {
      const firebaseDbUrl = 'https://nuxt-blog-aa8ce-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
      const { data: responseData, status, error } = await useFetch(firebaseDbUrl)
      this.posts = responseData.value
    },
    // addPost(post: Post) {
    //   this.posts.push(post)
    //   this.newPostId++
    // },
    // deletePost(idToDelete: string) {
    //   this.posts = this.posts.filter((post) => post.id !== idToDelete)
    // }
  }
})