<template>
  <div id="writeArticle">
      <!-- <mavon-editor v-model="value"></mavon-editor> -->
      <Markdown/>
  </div>
</template>

<script>
    import Markdown from 'vue-meditor'

    export default {
        name: 'WriteArticle',
        components: {
            Markdown
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