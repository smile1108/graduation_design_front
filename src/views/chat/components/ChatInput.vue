<template>
    <div id="chatInput">
        <textarea class="chatInputTextArea" v-model="inputContent" placeholder="请输入消息内容"></textarea>
        <div class="sendTip">按Enter发送消息</div>
        <button class="sendBtn" :disabled="inputContent == ''" :class="{sendDisabled: inputContent == ''}" @click="sendMessage()">发送</button>
        <button class="uploadImage" @click="onPickFile()">发送图片</button>
        <input type="file" ref="fileInput" accept="image/*" @change="getFile" style="display: none"> 
    </div>
</template>

<script>
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
            webSocketObj: Object
        },
        methods: {
            sendMessage() {
                if(this.webSocketObj.readyState === 1) {
                    this.sendTextMessage(this.$route.params.toUser, this.inputContent)
                }
            },
            onPickFile() {
                this.$refs.fileInput.click()
            },
            getFile (event) {
                alert("getFile")
                const files = event.target.files
                let filename = files[0].name          //只有一个文件
                if ( filename.lastIndexOf('.') <= 0 ) {
                    return alert("Please add a valid image!")        //判断图片是否有效
                }
                const fileReader = new FileReader()                //内置方法new FileReader()   读取文件
                    fileReader.addEventListener('load',() => {
                    this.imageUrl = fileReader.result
                })
                fileReader.readAsDataURL(files[0])
                this.image = files[0]
            },
            sendTextMessage(to, content) {
                this.webSocketObj.send(JSON.stringify({
                    to: to,
                    content: content,
                    type: "text"
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