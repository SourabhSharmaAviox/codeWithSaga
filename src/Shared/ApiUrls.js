export const  BaseUrl = "http://192.168.0.199:8000/"
export const ApiUrls={
    REGISTER_DATA : BaseUrl + "account/register/",
    LOGIN_DATA: BaseUrl + "account/login/",
    CREATE_POST : BaseUrl + "post/post/",
    GET_ALL_POST : BaseUrl + "post/post/",
    DELETE_POST_API : BaseUrl + "post/postdetail/",
    UPDATE_POST_API : BaseUrl + "post/postdetail/"
}

export const ApiMethods = {
    GET:"GET",
    POST:"POST",
    DELETE:"DELETE",
    PATCH :"PATCH"
}


