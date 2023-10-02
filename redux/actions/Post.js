export const getPosts = (payload) => {
    console.log('in action getPosts', payload)
    return{
        type: "GET_POSTS",
        payload
    }
}