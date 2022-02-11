<template>
  <div id="writeArticle">
      <mavon-editor ref=md v-model="value" @imgAdd="imgAdd"></mavon-editor>
      <!-- <Markdown/> -->
  </div>
</template>

<script>

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
                console.log("add img")
                console.log($file)
                this.$refs.md.$imglst2Url([[pos, "http://localhost/images/f1dk0t7z3c.jpg"]])
            }
        }
    }
</script>

<style>
</style>