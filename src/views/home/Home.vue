<template>
  <div id="home">
      <PersonalMessage></PersonalMessage>
  </div>
</template>

<script>
    import PersonalMessage from './components/PersonalMessage'

    export default {
        name: 'Home',
        components: {
            PersonalMessage
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