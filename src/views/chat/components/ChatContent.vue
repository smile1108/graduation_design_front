<template>
    <div id="chatContent">
        <div class="checkMoreMessage showMoreBtn" @click="showMoreMessage()" v-if="chatMessageList.length != messageTotalNumber">查看更多历史消息</div>
        <div class="checkMoreMessage" v-else>没有更多消息了</div>
        <div class="chatMessageDiv" v-for="chatMessageObj in chatMessageList" :key="chatMessageObj.id">
            <div class="messagePublishDate">{{formatDate(chatMessageObj.publishDate)}}</div>
            <div class="messageContent clearfix">
                <img :src="chatMessageObj.fromUserVo.profile" class="profile" :class="[{floatLeft: chatMessageObj.fromUserVo.username != userInfo.username}, 
                {floatRight: chatMessageObj.fromUserVo.username == userInfo.username}]">
                <div class="message" :class="[{floatLeftMessage: chatMessageObj.fromUserVo.username != userInfo.username},
                {floatRightMessage: chatMessageObj.fromUserVo.username == userInfo.username}]">
                    <div class="messageText" v-if="chatMessageObj.type == 'text'">{{chatMessageObj.content}}</div>
                    <div class="imageDiv" v-else>
                        <img :src="chatMessageObj.content" alt="消息图片" class="messageImage" @click="enlargeImage(chatMessageObj.content)">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChatContent",
        props: {
            chatMessageList: Array,
            messageTotalNumber: Number,
            userInfo: Object,
            isShowMore: Boolean,
            showImageSrc: String
        },
        data() {
            return {
                preHeight: null
            }
        },
        watch: {
            'chatMessageList.length': {
                handler(newValue, oldValue) {
                    if (newValue !== oldValue) {
                        // 操作
                        this.scrollToBottom()
                    }
                }
            }
        },
        computed: {
            formatDate() {  
                return function(publishDate) {
                    if(typeof publishDate == 'string') {
                        const arr = publishDate.split('T');
                        const d = arr[0];

                        const t = arr[1];
                        const tarr = t.split('.000');
                        const marr = tarr[0].split(':');

                        const dd = d + ' ' + marr[0] + ':' + marr[1] + ':' + marr[2].split('.')[0]

                        return dd;
                    } else {
                        var date = new Date(publishDate)
                        const Y = date.getFullYear() + '-';
                        const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                        const D = date.getDate() + ' ';
                        const h = date.getHours() + ':';
                        const m = date.getMinutes() + ':';
                        const s = date.getSeconds();
                        return Y + M + D + h + m + s
                    }
                }
            }
        },
        methods: {
            //是否为NULL
            isNull(value) {
                if (value == null || typeof (value) == 'undefined' || value === undefined) {
                    return true;
                }
                return false;
            },
            scrollToBottom () {
                this.$nextTick(() => {
                    let ele = document.getElementById('chatContent');
                    if(!this.isNull(ele)){
                        console.log(ele.scrollHeight)
                        console.log(ele.scrollTop)
                        if(!this.isShowMore) {
                            ele.scrollTop = ele.scrollHeight;
                        } else {
                            ele.scrollTop = ele.scrollHeight - this.preHeight
                        }
                    }
                })
            },
            showMoreMessage() {
                let ele = document.getElementById('chatContent');
                this.preHeight = ele.scrollHeight
                this.$emit('changeIsShowMore', true)
                this.$emit('showMoreMessage')
            },
            enlargeImage(imageSrc) {
                this.$emit('changeEnlargeImage', true)
                this.$emit('changeImageSrc', imageSrc)
            }
        },
        mounted() {
            this.scrollToBottom()
        }
    }
</script>

<style>

    

    .floatLeft {
        float: left;
    }

    .floatLeftMessage {
        float: left;
        margin-left: 10px;
    }

    .floatRight {
        float: right;
    }

    .floatRightMessage {
        float: right;
        margin-right: 10px;
    }

    .clearfix:before,
    .clearfix:after {
        content: '';
        display: table;
        clear: both;
    }

    #chatContent {
        padding: 0 10px;
        height: 400px;
        width: 95%;
        margin: 0 auto;
        border-bottom: 1px solid #ebebeb;
        box-sizing: border-box;
        overflow: auto;
    }

    #chatContent .checkMoreMessage {
        width: 170px;
        line-height: 20px;
        font-size: 13px;
        text-align: center;
        margin: 0 auto;
        margin-bottom: 10px;
    }

    #chatContent .showMoreBtn {
        color: rgb(41, 129, 212);
    }

    #chatContent .showMoreBtn:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    #chatContent .chatMessageDiv .messagePublishDate {
        width: 170px;
        margin: 0 auto;
        font-size: 12px;
        text-align: center;
        color: #999;
    }

    #chatContent .chatMessageDiv .messageContent {
        margin-top: 6px;
        padding: 6px;
    }

    #chatContent .chatMessageDiv .messageContent .profile {
        width: 46px;
        height: 46px;
        border-radius: 50%;
    }

    #chatContent .chatMessageDiv .messageContent .message {
        width: 300px;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 6px;
        background-color: #f6f6f6;
        color: #444;
    }

    #chatContent .chatMessageDiv .messageContent .message .imageDiv {
        min-height: 200px;
    }

    #chatContent .chatMessageDiv .messageContent .message .messageImage {
        max-width: 280px;
        border-radius: 6px;
    }

    #chatContent .chatMessageDiv .messageContent .message .messageImage:hover {
        cursor: pointer;
    }
</style>