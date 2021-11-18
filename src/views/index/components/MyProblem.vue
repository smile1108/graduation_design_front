<template>
  <div id="problem">
      <RightFunction></RightFunction>
  </div>
</template>

<script>
    import RightFunction from './RightFunction'

    export default {
        name: 'MyProblem',
        components: {
            RightFunction
        }
    }
</script>

<style>
    #problem {
        width: 100%;
        height: calc(100vh - 52px);
        background-color: #f6f6f6;
    }
</style>