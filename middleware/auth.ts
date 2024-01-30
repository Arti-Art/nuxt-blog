export default defineNuxtRouteMiddleware((to, from) => {
  console.log('Hi from /middleware/auth.ts')
  // console.log(to)
  // console.log(from)
  const isLoggedIn = false
  if (!isLoggedIn) {
    console.log('You need to login!!')
  }
})