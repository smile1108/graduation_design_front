<template>
    <div id="chatInput">
        <textarea class="chatInputTextArea" v-model="inputContent" placeholder="请输入消息内容"></textarea>
        <button class="sendBtn" :disabled="inputContent == ''" :class="{sendDisabled: inputContent == ''}" @click="sendMessage()">发送</button>
        <button class="uploadImage" @click="onPickFile()">发送图片</button>
        <input type="file" ref="fileInput" accept="image/*" @change="getFile" style="display: none"> 
    </div>
</template>

<script>

    import axios from 'axios'
    import {API} from '../../api'

    export default {
        name: "ChatInput",
        data() {
            return {
                inputContent: '',
                imageUrl: '',
                image: null
            }
        },
        props: {
            webSocketObj: Object,
            userInfo: Object
        },
        methods: {
            sendMessage() {
                if(this.webSocketObj.readyState === 1) {
                    this.sendTextMessage(this.userInfo.username, this.$route.params.toUser, this.inputContent)
                    this.inputContent = ''
                }
            },
            onPickFile() {
                this.$refs.fileInput.click()
            },
            getFile (event) {
                // 然后调用后端的接口上传图片
                let formData = new FormData()
                formData.append('file', event.target.files[0])
                let config = {
                    headers:{'Content-Type':'multipart/form-data'}
                };
                let uploadChatImageUrl = API.BASE_URL + API.uploadChatImage
                axios.post(uploadChatImageUrl, formData, config).then(res => {
                    if(res.data.code === 200) {
                        // 如果成功请求 返回的数据就是前端访问该图片的url 这时将这条消息发送给对方
                        this.sendImageMessage(this.userInfo.username, this.$route.params.toUser, res.data.data)
                    }
                })

            },
            sendTextMessage(from, to, content) {
                this.webSocketObj.send(JSON.stringify({
                    from: from,
                    to: to,
                    content: content,
                    type: "text"
                }))
            },
            sendImageMessage(from, to, content) {
                this.webSocketObj.send(JSON.stringify({
                    from: from,
                    to: to,
                    content: content,
                    type: "image"
                }))
            }
        }
    }
</script>

<style>

    .sendDisabled {
        background-color: gray!important; 
    }

    .sendDisabled:hover {
        cursor: no-drop!important;
    }

    #chatInput {
        width: 95%;
        margin: 0 auto;
        height: 150px;
        padding: 6px 10px;
        box-sizing: border-box;
        position: relative;
    }

    #chatInput .chatInputTextArea {
        flex: 1 1;
        padding: 0;
        overflow: auto;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        background: transparent;
        border: none;
        resize: none;
        width: 98%;
        height: 100px;
        line-height: 25px;
    }

    #chatInput .sendTip {
        font-size: 14px;
        color: #bfbfbf;
        text-align: right;
        width: 72%;
        line-height: 30px;
    }

    #chatInput .sendBtn {
        margin-left: 20px;
        width: 64px;
        height: 30px;
        line-height: 30px;
        border-radius: 2px;
        background-color: #0066FF;
        border: 1px solid #0066FF;
        color: #fff;
        position: absolute;
        left: 470px;
        top: 110px;
    }

    #chatInput .sendBtn:hover {
        cursor: pointer;
        background-color: #005ce6;
    }

    #chatInput .uploadImage {
        margin-left: 20px;
        width: 70px;
        height: 30px;
        line-height: 30px;
        border-radius: 2px;
        background-color: #0066FF;
        border: 1px solid #0066FF;
        color: #fff;
        position: absolute;
        left: 540px;
        top: 110px;
    }

    #chatInput .uploadImage:hover {
        cursor: pointer;
        background-color: #005ce6;
    }
</style>