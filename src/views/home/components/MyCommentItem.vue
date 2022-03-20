<template>
    <div id="commentItem">
        <div class="commentItemTopMessage">
            <span class="tip">评论了文章</span>
            <span class="commentTime">{{formatDate}}</span>
        </div>
        <div class="articleMessage">
            <span class="articleTitle">{{commentObj.articleVo.title}}</span>
        </div>
        <div class="commentMessage">
            <span class="commentContent">{{commentObj.content}}</span>
        </div>
        <div class="bottomFunctional">
            <div class="detailBtn" @click="checkDetail()">查看详情</div>
            <div v-if="this.userInfo.username == this.loginUser.username" class="deleteBtn" @click="deleteComment()">删除评论</div>
        </div>
    </div>
</template>

<script>

    import axios from 'axios'
    import {API} from '../../api'

    export default {
        name: "MyCommentItem",
        props: {
            commentObj: Object,
            userInfo: Object
        },
        methods: {
            deleteComment() {
                if(confirm("您确定要删除评论吗?")) {
                    let deleteCommentUrl = API.BASE_URL + API.deleteComment + "?commentId=" + this.commentObj.id + "&username=" + this.userInfo.username
                    axios.get(deleteCommentUrl).then(res => {
                        if(res.data.code === 200) {
                            alert("删除成功")
                            this.$router.go(0)
                        } else if(res.data.code === 519) {
                            alert("用户登录认证信息已过期, 请重新登录")
                            window.location.href = 'login.html'
                        } else {
                            alert(res.data.msg)
                        }
                    })
                }
            },
            checkDetail() {
                // 当点击查看详情按钮时 跳转到对应的文章页面
                let href = "article.html#/" + this.commentObj.articleVo.id
                window.open(href, "_blank")
            }
        },
        computed: {
            formatDate() { 
                const arr = this.commentObj.publishDate.split('T');
                const d = arr[0];

                const t = arr[1];
                const tarr = t.split('.000');
                const marr = tarr[0].split(':');

                const dd = d + ' ' + marr[0] + ':' + marr[1] + ':' + marr[2].split('.')[0]

                return dd;
            }
        },
        data() {
            return {
                loginUser: Object
            }
        },  
        mounted() {
            this.loginUser = JSON.parse(sessionStorage.getItem('userInfo'))
        }
    }
</script>

<style>
    #commentItem {
        width: 70%;
        padding: 4px;
        padding-bottom: 6px;
        box-sizing: border-box;
        border-bottom: 1px solid rgb(240, 242, 247);
    }

    #commentItem .commentItemTopMessage {
        height: 30px;
        line-height: 30px;
        padding: 0 4px;
    }

    #commentItem .articleMessage {
        font-size: 20px;
        padding: 0 30px;
        margin-top: 4px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    #commentItem .commentMessage {
        padding: 4px;
        box-sizing: border-box;
        width: 90%;
        margin: 0 auto;
        margin-top: 4px;
        white-space: nowrap;
        overflow: hidden;
        font-size: 14px;
        text-overflow: ellipsis;
        background-color: rgb(176, 178, 185);
    }

    #commentItem .bottomFunctional {
        margin-top: 4px;
    }

    #commentItem .bottomFunctional .detailBtn {
        display: inline-block;
        margin-left: 400px;
        background-color: #0066FF;
        border: 1px solid #0066FF;
        padding: 0 6px;
        border-radius: 4px;
        line-height: 30px;
        color: #FFF;
    }

    #commentItem .bottomFunctional .detailBtn:hover {
        background-color: #1d61c7;
        cursor: pointer;
    }

    #commentItem .bottomFunctional .deleteBtn {
        background-color: #da4f49;
        border: 1px solid #bd362f;
        color: #FFF;
        display: inline-block;
        margin-left: 20px;
        padding: 0 6px;
        line-height: 30px;
        border-radius: 4px;
    }

    #commentItem .bottomFunctional .deleteBtn:hover {
        background-color: #bd362f;
        cursor: pointer;
    }

    #commentItem .commentItemTopMessage .tip {
        font-size: 14px;
        font-weight: 600;
    }

    #commentItem .commentItemTopMessage .commentTime {
        font-size: 14px;
        margin-left: 430px;
        color: #8590a6;
    }
</style>