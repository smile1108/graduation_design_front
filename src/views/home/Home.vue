<template>
  <div id="home">
      <PersonalMessage :userInfo="userInfo"></PersonalMessage>
      <PersonalContent></PersonalContent>
      <router-view :userInfo="userInfo"></router-view>
  </div>
</template>

<script>
    import PersonalMessage from './components/PersonalMessage'
    import PersonalContent from './components/PersonalContent'

    export default {
        name: 'Home',
        components: {
            PersonalMessage, PersonalContent
        },
        created() {
            // 该页面created之后通过sessionStorage获取用户信息
            this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
            console.log(this.userInfo)
        },
        data() {
            return {
                userInfo: {}
            }
        },
        methods: {
            
        }
    }
</script>

<style>
    #home {
        background-color: #f6f6f6;
    }
</style>