<template>
  <div id="question">
      <QuestionHeader :question="question" :userInfo="userInfo"></QuestionHeader>
      <QuestionMessage></QuestionMessage>
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
            }
        },
        methods: {
            
        },
        created() {
            this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
            // 当页面渲染完成之后调用获取问题详细信息的接口
            let getQuestionMessageUrl = "http://localhost:9527/article/question/getQuestionMessageById?questionId=" + this.$route.params.questionId
            axios.get(getQuestionMessageUrl).then(res => {
                if(res.data.code === 200) {
                    this.question = JSON.parse(JSON.stringify(res.data.data))
                    document.title = this.question.title
                } else {
                    alert(res.data.msg)
                }
            })
        }
    }
</script>

<style>
    #article {
        background-color: #f6f6f6;
    }
</style>