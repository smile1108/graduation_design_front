<template>
  <div id="home">
      <PersonalMessage :userInfo="userInfo" :showPersonalMessage="showPersonalMessage"></PersonalMessage>
      <PersonalContent :showPersonalMessage="showPersonalMessage" :person="person"></PersonalContent>
      <router-view :userInfo="userInfo" :showPersonalMessage="showPersonalMessage"></router-view>
  </div>
</template>

<script>
    import PersonalMessage from './components/PersonalMessage'
    import PersonalContent from './components/PersonalContent'
    import axios from 'axios'

    export default {
        name: 'Home',
        components: {
            PersonalMessage, PersonalContent
        },
        mounted() {
            // 使用动态路由的参数之后 就不需要通过sessionStorage中是否存在visitUser来判断了 
            // 这时候动态参数传递进来的就是访问的用户的username
            // 然后通过这个动态参数 请求后端的接口 获取对应的用户信息
            let url = "http://localhost:9527/user/getUserByUsername?username=" + this.$route.params.username
            axios.get(url).then(res => {
                if(res.data.code === 200) {
                    // 如果请求成功 就设置userInfo为获取到的用户信息
                    this.userInfo = JSON.parse(JSON.stringify(res.data.data))
                    // 然后判断用户是不是访问的自己的主页 
                    if(this.$route.params.username != JSON.parse(sessionStorage.getItem('userInfo')).username) {
                        // 如果不相等 表示访问的别人的主页 这时候需要设置显示个人信息为false
                        this.showPersonalMessage = false
                        // 然后根据访问的用户的信息判断人称
                        if(this.userInfo.gender === null || this.userInfo.gender == 'male') {
                            this.person = '他'
                        } else {
                            this.person = '她'
                    }
            }
                } else if(res.data.code === 519) {
                    alert("用户登录认证信息已过期, 请重新登录")
                    window.location.href = "login.html#/login"
                }
            })
        },
        data() {
            return {
                userInfo: {},
                person: '我',  // 默认访问自己的主页 人称为我
                showPersonalMessage: true,  // 默认访问自己的主页 要显示个人信息 如果访问别人主页 则不显示
            }
        }
    }
</script>

<style>
    #home {
        background-color: #f6f6f6;
    }
</style>