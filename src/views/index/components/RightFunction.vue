<template>
  <div id="rightFunction">
      <RightTodoList></RightTodoList>
  </div>
</template>

<script>
    import RightTodoList from './RightTodoList'

    export default {
        name: 'RightFunction',
        components: {
            RightTodoList
        }
    }
</script>

<style>
    #rightFunction {
        float: left;
        height: 95%;
        width: 200px;
        margin: 15px 30px 0 50px;
        background-color: #fff;
        padding: 5px;
        box-sizing: border-box;
    }
</style>