<template>
  <div id="question">
      <QuestionHeader :question="question" :userInfo="userInfo"></QuestionHeader>
      <QuestionMessage :question="question" :userInfo="userInfo" :articleNumber="articleNumber"
      :likeNumber="likeNumber" :followerNumber="followerNumber" :answerList="answerList"
      :answerTotal="answerTotal" :answerCount="answerCount" @showMoreAnswer="showMoreAnswer"></QuestionMessage>
  </div>
</template>

<script>

    import QuestionHeader from './components/QuestionHeader'
    import QuestionMessage from './components/QuestionMessage'
    import axios from 'axios'

    export default {
        name: 'Question',
        components: {
            QuestionMessage, QuestionHeader
        },
        data() {
            return {
                question: {},
                userInfo: {},
                articleNumber: 0,
                likeNumber: 0,
                followerNumber: 0,
                answerList: [],
                answerTotal: 0,
                answerCount: 5
            }
        },
        methods: {
            showMoreAnswer() {
                this.answerCount += 5
                this.getQuestionAnswerList()
            },
            getQuestionAnswerList() {
                let getQuestionAnswerListUrl = "http://localhost:9527/comment/answer/getAnswerListByQuestion?questionId=" + this.question.id + "&number=" + this.answerCount
                axios.get(getQuestionAnswerListUrl).then(res => {
                    if(res.data.code === 200) {
                        this.answerList = JSON.parse(JSON.stringify(res.data.data.lists))
                        this.answerTotal = res.data.data.count
                    } else {
                        alert(res.data.msg)
                    }
                })
            },
            statistics() {
                // 当页面渲染完成之后调用统计作者相关数量的接口
                let countArticle = "http://localhost:9527/article/countArticleByUser?username=" + this.question.userVo.username
                let countLike = "http://localhost:9527/article/countLikeByUser?username=" + this.question.userVo.username
                let countFollower = "http://localhost:9527/user/countFollowed?followUsername=" + this.question.userVo.username
                axios.get(countArticle).then(res => {
                    if(res.data.code === 200) {
                        this.articleNumber = res.data.data
                    } else {
                        alert(res.data.msg)
                    }
                })
                axios.get(countLike).then(res => {
                    if(res.data.code === 200) {
                        this.likeNumber = res.data.data
                    } else {
                        alert(res.data.msg)
                    }
                })
                axios.get(countFollower).then(res => {
                    if(res.data.code === 200) {
                        this.followerNumber = res.data.data
                    } else {
                        alert(res.data.msg)
                    }
                })
            }
        },
        created() {
            this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
            // 当页面渲染完成之后调用获取问题详细信息的接口
            let getQuestionMessageUrl = "http://localhost:9527/article/question/getQuestionMessageById?questionId=" + this.$route.params.questionId
            axios.get(getQuestionMessageUrl).then(res => {
                if(res.data.code === 200) {
                    this.question = JSON.parse(JSON.stringify(res.data.data))
                    document.title = this.question.title
                    this.getQuestionAnswerList()
                    this.statistics()
                } else {
                    alert(res.data.msg)
                }
            })
        }
    }
</script>

<style>
    #question {
        background-color: #f6f6f6;
    }
</style>