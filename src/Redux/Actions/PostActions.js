import { ActionsObject } from "./ActionTypes"

export const postCreatePostFormData =(payload, callback)=>{

    return{
        type : ActionsObject.POST_CREATE_POST_FORMDATA,
        payload,
        callback
    }
}



export const GetAllPostaAction = (callback)=>{

    return{
        type: ActionsObject.GET_ALL_POST,
        callback
    }
}

export const SaveAllPostAction=(payload)=>{

    return{
        type:ActionsObject.SAVE_ALL_POST,
        payload
    }
}

export const deletePostAction =(payload,callback)=>{

    return{
        type: ActionsObject.DELETE_POST,
        payload,
        callback
    }
}   

export const updatePostAction =(payload,id,callback)=>{

    return{
        type: ActionsObject.UPDATE_POST,
        payload,
        id,
        callback
    }
}  