<template>
  <div id="rightFunction">
      <RightTodoList :userInfo="userInfo"></RightTodoList>
      <RightNavigator :userInfo="userInfo"></RightNavigator>
  </div>
</template>

<script>
    import RightTodoList from './RightTodoList'
    import RightNavigator from './RightNavigator'

    export default {
        name: 'RightFunction',
        components: {
            RightTodoList, RightNavigator
        },
        props: {
            userInfo: Object
        }
    }
</script>

<style>
    #rightFunction {
        float: left;
        height: 95%;
        width: 200px;
        margin: 15px 30px 0 50px;
        box-sizing: border-box;
    }
</style>