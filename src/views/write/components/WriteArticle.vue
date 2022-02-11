<template>
  <div id="writeArticle">
      <mavon-editor ref=md v-model="value" @imgAdd="imgAdd" @imgDel="imgDel"></mavon-editor>
      <!-- <Markdown/> -->
  </div>
</template>

<script>

    import axios from 'axios'

    export default {
        name: 'WriteArticle',
        components: {
        },
        props: {
            userInfo: Object
        },
        data() {
            return {
                value: '# Header'
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
                        console.log(res.data.data)
                        this.$refs.md.$imglst2Url([[pos, res.data.data]])
                    }
                })
            },
            imgDel(fileName) {
                console.log("del img")
                alert(fileName)
            }
        }
    }
</script>

<style>
</style>