<template>
  <div id="writeArticle">
      <mavon-editor v-model="value"></mavon-editor>
      <!-- <Markdown/> -->
  </div>
</template>

<script>

    export default {
        name: 'WriteArticle',
        components: {
        },
        data() {
            return {
                value: '# Header'
            }
        }
    }
</script>

<style>
</style>