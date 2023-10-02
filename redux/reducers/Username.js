const Username = (state = {
    name:'Iqra',
    password: 123
} , action) => {
    switch (action.type) {
        case 'LOGIN':
            // console.log('in reducer LOGIN', action)
            state.name = action.payload || state.name
            return state
        default:
            return state
    }

}



export default Username