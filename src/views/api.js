export let API = {
    BASE_URL: "http://localhost:9527",
    getArticleMessageById: "/article/getArticleMessageById",
    getCommentListByArticleId: "/comment/getCommentListByArticleId",
    countArticleByUser: "/article/countArticleByUser",
    countLikeByUser: "/article/countLikeByUser",
    countFollowed: "/user/countFollowed",
    countFollow: "/user/countFollow",
    countCommentByUser: "/comment/countCommentByUser",
    countQuestionByUser: "/article/question/countQuestionByUser",
    countUserAnswer: "/comment/answer/countUserAnswer",
    addComment: "/comment/addComment",
    unfollow: "/user/unfollow",
    follow: "/user/follow",
    addQuestion: "/article/question/addQuestion",
    uploadImage: "/article/uploadImage",
    deleteImage: "/article/deleteImage",
    getUserByUsername: "/user/getUserByUsername",
    uploadAvatar: "/user/uploadAvatar",
    getUserAnswerList: "/comment/answer/getUserAnswerList",
    deleteAnswer: "/comment/answer/deleteAnswer",
    deleteArticle: "/article/deleteArticle",
    getArticleListByUsername: "/article/getArticleListByUsername",
    getCommentListByUser: "/comment/getCommentListByUser",
    deleteComment: "/comment/deleteComment",
    getFollowList: "/user/getFollowList",
    getLikeListByUser: "/article/getLikeListByUser",
    unlike: "/article/unlike",
    like: "/article/like",
    modifyMessage: "/user/modifyMessage",
    getUserQuestionList: "/article/question/getUserQuestionList",
    deleteQuestion: "/article/question/deleteQuestion",
    getArticleClassify: "/article/getArticleClassify",
    logout: "/user/logout",
    login: "/user/login",
    autoLogin: "/user/autoLogin",
    register: "/user/register",
    getAllBacklogs: "/backlog/getAllBacklogs",
    addBacklog: "/backlog/addBacklog",
    deleteBacklog: "/backlog/deleteBacklog",
    undone: "/backlog/undone",
    done: "/backlog/done",
    checkAllOrNone: "/backlog/checkAllOrNone",
    clearCompleted: "/backlog/clearCompleted",
    searchArticle: "/article/searchArticle",
    searchQuestion: "/article/question/searchQuestion",
    addAnswer: "/comment/answer/addAnswer",
    getAnswerListByQuestion: "/comment/answer/getAnswerListByQuestion",
    getQuestionMessageById: "/article/question/getQuestionMessageById",
    addArticle: "/article/addArticle",
    getCode: "/user/getCode",
    modifyPassword: "/user/modifyPassword",
    findPassword: "/user/findPassword",
    uploadChatImage: "/chat/uploadImage",
    getChatList: "/chat/getChatList",
    getChatMessageList: "/chat/getChatMessageList",
    getUserChatMessage: "/chat/getUserChatMessage",
    countAllUnread: "/chat/countAllUnread",
    clearUnreadCount: "/chat/clearUnreadCount",
    searchUser: "/user/searchUser"
}
