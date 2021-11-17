<template>
  <div>
    <MyHeader></MyHeader>
    <MyContent></MyContent>
  </div>
</template>

<script>
  import MyHeader from './components/MyHeader'
  import MyContent from './components/MyContent'

  export default {
    name: 'App',
    components: {
      MyHeader, MyContent
    }
  }
</script>

<style>
</style>
