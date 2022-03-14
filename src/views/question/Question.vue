<template>
  <div id="writeArea">
      <QuestionHeader :userInfo="userInfo"></QuestionHeader>
      <WriteQuestion :userInfo="userInfo" @modifyQuestionContent="modifyQuestionContent"></WriteQuestion>
      <div class="publishDiv">
          <input type="text" class="questionTitleInput" placeholder="请输入问题标题" v-model="questionTitle"/>
          <div class="publishBtn" @click="publishQuestion()">发布</div>
      </div>
  </div>
</template>

<script>

    import QuestionHeader from './components/QuestionHeader'
    import WriteQuestion from './components/WriteQuestion'
    import axios from 'axios'

    export default {
        name: 'Question',
        components: {
            WriteQuestion, QuestionHeader
        },
        data() {
            return {
                userInfo: {
                    
                },
                questionContent: '',
                questionTitle: ''
            }
        },
        methods: {
            modifyQuestionContent(content) {
                this.questionContent = content
            },
            publishQuestion() {
                let url = "http://localhost:9527/article/question/addQuestion"
                let formData = new FormData()
                formData.append('title', this.questionTitle)
                formData.append('content', this.questionContent)
                formData.append('username', this.userInfo.username)
                axios.post(url, formData).then(res => {
                    if(res.data.code === 200) {
                        alert("发布成功")
                    } else {
                        alert(res.data.msg)
                    }
                })
            }
        },
        mounted() {
            // 当页面渲染完成之后自动从sessionStorage中获取userInfo
            this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
        }
    }
</script>

<style>

    #writeArea .publishDiv {
        width: 50%;
        margin: 0 auto;
        margin-top: 20px;
    }

    #writeArea .publishDiv .questionTitleInput {
        display: block;
        width: 70%;
        height: 30px;
        margin: 40px auto 5px;
        border-top: none;
        border-left: none;
        border-right: none;
        text-indent: 14px;
        font-size: 18px;
        border-bottom: 1px solid #6d6c6c;
    }

    #writeArea .publishDiv .publishBtn {
        height: 36px;
        width: 80px;
        margin: 0 auto;
        margin-top: 14px;
        font-size: 18px;
        line-height: 36px;
        text-align: center;
        border-radius: 6px;
        background-color: #0066FF;
        border: 1px solid #0066FF;
        color: #fff;
    }

    #writeArea .publishDiv .publishBtn:hover {
        cursor: pointer;
        background-color: #005ce6;
    }
</style>