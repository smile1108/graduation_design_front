<template>
    <div id="questionAnswer">
        <mavon-editor ref=md v-model="content" @imgAdd="imgAdd" @imgDel="imgDel"></mavon-editor>
        <div class="publishAnswerBtn" @click="publishAnswer()">发布回答</div>
    </div>
</template>

<script>

    import axios from 'axios'

    export default {
        name: "QuestionAnswer",
        data() {
            return {
                content: ''
            }
        },
        methods: {
            imgAdd(pos, $file) {
                // 然后调用后端的接口 上传这个图片
                var formData = new FormData()
                formData.append('file', $file)
                axios.post('http://localhost:9527/article/uploadImage', formData).then(res => {
                    if(res.data.code === 200) {
                        // 表示成功 这时候返回的String 就是图片的url
                        this.$refs.md.$imglst2Url([[pos, res.data.data]])
                    }
                })
            },
            imgDel(filename) {
                // 调用后端的删除图片的接口 删除在服务器中存储的图片 防止浪费空间
                var formData = new FormData()
                formData.append('filename', filename)
                axios.post('http://localhost:9527/article/deleteImage', formData).then(res => {
                    if(res.data.code === 200) {
                        alert("删除图片成功")
                    } else if(res.data.code === 520) {
                        // 表示文件不存在 
                        alert("文件不存在")
                    }
                })
            }
        }
    }
</script>

<style>
    #questionAnswer {
        float: left;
        margin-top: 20px;
        width: 760px;
        padding: 20px;
        box-sizing: border-box;
    }

    #questionAnswer .publishAnswerBtn {
        line-height: 30px;
        text-align: center;
        width: 100px;
        border-radius: 4px;
        margin-top: 8px;
        margin-left: 560px;
        color: #FFF;
        background-color: #3a74ca;
        border: 1px solid #3a74ca;
    }

    #questionAnswer .publishAnswerBtn:hover {
        cursor: pointer;
        background-color: #143f80;
    }
</style>