<template>
  <div id="question">
      <QuestionMessage></QuestionMessage>
  </div>
</template>

<script>

    import QuestionMessage from './components/QuestionMessage'

    export default {
        name: 'Question',
        components: {
            QuestionMessage
        },
        data() {
            return {
            }
        },
        methods: {
            
        },
        created() {
            
        }
    }
</script>

<style>
    #article {
        background-color: #f6f6f6;
    }
</style>