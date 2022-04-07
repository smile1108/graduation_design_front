<template>
    <div id="answerList">
        <AnswerItem v-for="answerObj in answerList" :key="answerObj.id" :answerObj="answerObj"
        :showImageSrc="showImageSrc" @changeEnlargeImageSrc="changeEnlargeImageSrc"
        @changeShowEnlargeImage="changeShowEnlargeImage"></AnswerItem>
        <div @click="showMoreAnswer()" :class="[{showMoreBtn: (answerList.length != 0 && answerTotal > answerCount)},
        {noMore: (answerList.length == 0 || answerTotal <= answerCount)}]">{{(answerList.lenght == 0 || answerTotal &lt;= answerCount) ? "已经没有更多回答了" : "查看更多回答..."}}</div>
    </div>
</template>

<script>

    import AnswerItem from './AnswerItem'

    export default {
        name: "AnswerList",
        components: {
            AnswerItem
        },
        props: {
            answerList: Array,
            answerTotal: Number,
            answerCount: Number,
            showImageSrc: String
        },
        methods: {
            changeShowEnlargeImage(show) {
                this.$emit('changeShowEnlargeImage', show)
            },
            changeEnlargeImageSrc(src) {
                this.$emit('changeEnlargeImageSrc', src)
            },
            showMoreAnswer() {
                if(this.answerList.length != 0 && this.answerTotal > this.answerCount) {
                    this.$emit('showMoreAnswer')
                }
            }
        }
    }
</script>

<style>
    #answerList {
        border-top: 2px solid #ebebeb;
        margin-top: 10px;
        padding: 10px 20px;
        box-sizing: border-box;
    }

    #answerList .showMoreBtn {
        height: 30px;
        width: 140px;
        line-height: 30px;
        text-align: center;
        margin: 0 auto;
        font-size: 14px;
        color: rgb(41, 129, 212);
        margin-top: 6px;
    }

    #answerList .noMore {
        height: 30px;
        width: 140px;
        line-height: 30px;
        text-align: center;
        margin: 0 auto;
        font-size: 14px;
        margin-top: 6px;
    }

    #answerList .showMoreBtn:hover {
        cursor: pointer;
        text-decoration: underline;
    }
</style>