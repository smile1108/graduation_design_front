<template>
    <div id="myAnswerItem">
        <div class="answerItemTopMessage">
            <span class="tip">回答了问题</span>
            <span class="answerTime">{{formatDate}}</span>
        </div>
        <div class="articleMessage">
            <span class="articleTitle">{{answerObj.questionVo.title}}</span>
        </div>
        <div class="answerMessage">
            <span class="answerContent">{{answerObj.textContent}}</span>
        </div>
        <div class="bottomFunctional">
            <div class="detailBtn" @click="checkDetail()">查看详情</div>
            <div v-if="this.userInfo.username == this.loginUser.username" class="deleteBtn" @click="deleteAnswer()">删除回答</div>
        </div>
    </div>
</template>

<script>

    import axios from 'axios'
    import {API} from '../../api'

    export default {
        name: "MyAnswerItem",
        props: {
            answerObj: Object,
            userInfo: Object
        },
        computed: {
            formatDate() { 
                const arr = this.answerObj.publishDate.split('T');
                const d = arr[0];

                const t = arr[1];
                const tarr = t.split('.000');
                const marr = tarr[0].split(':');

                const dd = d + ' ' + marr[0] + ':' + marr[1] + ':' + marr[2].split('.')[0]

                return dd;
            }
        },
        methods: {
            deleteAnswer() {
                if(confirm("您确定要删除回答吗?")) {
                    let deleteAnswerUrl = API.BASE_URL + API.deleteAnswer + "?id=" + this.answerObj.id + "&username=" + this.userInfo.username
                    axios.get(deleteAnswerUrl).then(res => {
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
                let href = "question.html#/" + this.answerObj.questionVo.id
                window.open(href, "_blank")
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
    #myAnswerItem {
        width: 70%;
        padding: 4px;
        padding-bottom: 6px;
        box-sizing: border-box;
        border-bottom: 1px solid rgb(240, 242, 247);
    }

    #myAnswerItem .answerItemTopMessage {
        height: 30px;
        line-height: 30px;
        padding: 0 4px;
    }

    #myAnswerItem .articleMessage {
        font-size: 20px;
        padding: 0 30px;
        margin-top: 4px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    #myAnswerItem .answerMessage {
        padding: 4px;
        box-sizing: border-box;
        width: 90%;
        margin: 0 auto;
        margin-top: 8px;
        white-space: nowrap;
        overflow: hidden;
        font-size: 14px;
        text-overflow: ellipsis;
        background-color: rgb(176, 178, 185);
    }

    #myAnswerItem .bottomFunctional {
        margin-top: 4px;
    }

    #myAnswerItem .bottomFunctional .detailBtn {
        display: inline-block;
        margin-left: 400px;
        background-color: #0066FF;
        border: 1px solid #0066FF;
        padding: 0 6px;
        border-radius: 4px;
        line-height: 30px;
        color: #FFF;
    }

    #myAnswerItem .bottomFunctional .detailBtn:hover {
        background-color: #1d61c7;
        cursor: pointer;
    }

    #myAnswerItem .bottomFunctional .deleteBtn {
        background-color: #da4f49;
        border: 1px solid #bd362f;
        color: #FFF;
        display: inline-block;
        margin-left: 20px;
        padding: 0 6px;
        line-height: 30px;
        border-radius: 4px;
    }

    #myAnswerItem .bottomFunctional .deleteBtn:hover {
        background-color: #bd362f;
        cursor: pointer;
    }

    #myAnswerItem .answerItemTopMessage .tip {
        font-size: 14px;
    }

    #myAnswerItem .answerItemTopMessage .answerTime {
        font-size: 14px;
        margin-left: 40px;
        color: #8590a6;
    }
</style>