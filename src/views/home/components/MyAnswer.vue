<template>
    <div id="myAnswer">
        answer
    </div>
</template>

<script>

    import axios from 'axios'

    export default {
        name: "MyAnswer",
        data() {
            return {
                myAnswerList: [],
                pageMax: undefined
            }
        },
        mounted() {
            // 当页面渲染完成之后 调用获取自己问题列表的接口
            let getUserAnswerListUrl = "http://localhost:9527/comment/answer/getUserAnswerList?username=" + this.$route.params.username
            axios.get(getUserAnswerListUrl).then(res => {
                if(res.data.code === 200) {
                    this.myAnswerList = res.data.data.lists
                    this.pageMax = res.data.data.sumPage
                } else if(res.data.code === 519) {
                    alert(res.data.msg)
                    window.location.href = "login.html"
                } else {
                    alert(res.data.msg)
                }
            })
        }
    }
</script>

<style>
    #myAnswer {
        width: 70%;
        margin: 10px auto 0;
        background-color: #fff;
        margin-top: 0;
        padding: 30px;
        box-sizing: border-box;
    }
</style>