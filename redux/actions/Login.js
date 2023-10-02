export const login = (payload) => {
    // console.log('in action login', payload)
    return{
        type: "LOGIN",
        payload
    }
}