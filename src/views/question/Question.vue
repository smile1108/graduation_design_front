<template>
  <div id="writeArea">
      <WriteQuestion></WriteQuestion>
  </div>
</template>

<script>

    import WriteQuestion from './components/WriteQuestion'

    export default {
        name: 'Question',
        components: {
            WriteQuestion
        },
        data() {
            return {
                userInfo: {
                    
                },
                articleContent: '# Header',
                showPublishBox: false
            }
        },
        methods: {
            
        },
        mounted() {
            // 当页面渲染完成之后自动从sessionStorage中获取userInfo
            this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
        }
    }
</script>

<style>
</style>