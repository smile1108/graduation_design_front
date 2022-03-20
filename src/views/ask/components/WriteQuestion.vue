<template>
    <div id="writeQuestion">
        <mavon-editor ref=md v-model="content" @imgAdd="imgAdd" @imgDel="imgDel"></mavon-editor>
    </div>
</template>

<script>

    import axios from 'axios'
    import {API} from '../../api'

    export default {
        name: "WriteQuestion",
        watch: {
            articleContent: function(newVal) {
                this.content = newVal
            },
            content: function(newVal) {
                this.$emit('modifyQuestionContent', newVal)
            }
        },
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
                axios.post(API.BASE_URL + API.uploadImage, formData).then(res => {
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
                axios.post(API.BASE_URL + API.deleteImage, formData).then(res => {
                    if(res.data.code === 200) {
                        alert("删除成功")
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

</style>