const Post = (state = []
    , action) => {
    switch (action.type) {
        case 'GET_POSTS':
            state = action.payload
            console.log("in reducer post: ", state);
            return state
        default:
            return state
    }

}

export default Post