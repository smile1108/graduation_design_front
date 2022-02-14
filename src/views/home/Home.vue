<template>
  <div id="home">
      <PersonalMessage :userInfo="userInfo" :showPersonalMessage="showPersonalMessage"></PersonalMessage>
      <PersonalContent :showPersonalMessage="showPersonalMessage" :person="person"></PersonalContent>
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
            // 先看看是否存在 key 为visitUser的值
            let visitUser = JSON.parse(sessionStorage.getItem('visitUser'))
            if(visitUser == null) {
                // 如果访问的visitUser为null  表示当前访问的是自己的主页
                // 然后就将自己的信息 赋值给data中的userInfo
                this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
            } else {
                let userInfoString = sessionStorage.getItem('userInfo')
                if(JSON.stringify(visitUser) == userInfoString) {
                    // 如果 visitUser 和 userInfo中的字符串相等 表示是访问的自己的主页
                    // 这时就赋值给data中的userInfo
                    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
                    // 然后设置相应的data区分访问的是自己的主页还是别人的主页
                    console.log("相等")
                } else {
                    console.log("不相等")
                    // 两者信息不同 表示访问的是别人的主页
                    // 这时候要将data中的userInfo设置为别人的信息
                    this.userInfo = visitUser
                    // 然后设置是否展示个人信息 
                    this.showPersonalMessage = false
                    // 然后根据别人的性别 设置人称
                    if(visitUser.gender == null || visitUser.gender === "" || visitUser.gender === 'male') {
                        // 如果性别未填写 默认为男他
                        this.person = '他'
                    } else if(visitUser.gender === 'female') {
                        this.person = '她'
                    }
                }
            }
        },
        data() {
            return {
                userInfo: {},
                person: '我',  // 默认访问自己的主页 人称为我
                showPersonalMessage: true,  // 默认访问自己的主页 要显示个人信息 如果访问别人主页 则不显示
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