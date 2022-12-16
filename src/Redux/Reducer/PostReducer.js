
const initalState = {
    AllPosts : []
}

const PostReducer = (state=initalState,action)=>{

    switch (action.type) {
        case "SAVE_ALL_POST":
            return{
                AllPosts :[...action.payload]
            }
    
        default:
            return state
    }
}
export default PostReducer;

