<template>
  <div id="content">
      <MySelector></MySelector>
  </div>
</template>

<script>
    import MySelector from './MySelector'

    export default {
        name: 'MyContent',
        components: {
            MySelector
        }
    }
</script>

<style>
    #content {
        width: 100%;
        height: calc(100vh - 52px);
        background-color: #f6f6f6;
    }
</style>