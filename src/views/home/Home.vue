<template>
  <div id="home">
      <PersonalMessage></PersonalMessage>
      <PersonalContent></PersonalContent>
      <router-view></router-view>
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
        data() {
            return {
                userInfo: {
                    img: "https://pic3.zhimg.com/v2-e1f2203a6aebdb8ef688bc7de67b0685.jpg?source=6a64a727"
                }
                // userInfo: null
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