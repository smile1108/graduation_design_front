<template>
    <div id="myQuestionItem">
        <div class="titleMessage">{{questionObj.title}}</div>
        <div class="statisticsMessage">
            <span class="publishDate">发布于{{this.formatDate}}</span>
            <span class="answerCount">10人回答</span>
            <div v-if="this.showPersonalMessage" class="deleteQuestionBtn" @click="deleteQuestion()">删除</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyQuestionItem",
        props: {
            questionObj: Object,
            showPersonalMessage: Boolean
        },
        methods: {
            deleteQuestion() {
                this.$emit('deleteQuestion', this.questionObj)
            }
        },
        computed: {
            formatDate() { 
                const arr = this.questionObj.publishDate.split('T');
                const d = arr[0];

                const t = arr[1];
                const tarr = t.split('.000');
                const marr = tarr[0].split(':');

                const dd = d + ' ' + marr[0] + ':' + marr[1] + ':' + marr[2].split('.')[0]

                return dd;
            }
        }
    }
</script>

<style>
    #myQuestionItem {
        width: 70%;
        padding: 15px;
        box-sizing: border-box;
        border-bottom: 1px solid rgb(240, 242, 247);
    }

    #myQuestionItem .titleMessage {
        font-size: 18px;
        font-weight: 600;
    }

    #myQuestionItem .statisticsMessage {
        margin-top: 10px;
        font-size: 14px;
        color: #8590a6;
    }

    #myQuestionItem .statisticsMessage .answerCount {
        margin-left: 10px;
    }

    #myQuestionItem .statisticsMessage .deleteQuestionBtn {
        display: inline;
        background-color: #da4f49;
        border: 1px solid #bd362f;
        padding: 4px;
        margin-left: 80px;
        border-radius: 4px;
        color: #fff;
    }

    #myQuestionItem .statisticsMessage .deleteQuestionBtn:hover {
        cursor: pointer;
        background-color: #bd362f;
    }
</style>