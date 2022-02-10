<template>
    <ul class="todo-main">
        <TodoListItem v-for="todoObj in todoList" :key="todoObj.id" :todo="todoObj" :deleteTodo="deleteTodo"
          :undone="undone" :done="done"/>
    </ul>
</template>

<script>
    import TodoListItem from './TodoListItem'

    export default {
        name: "TodoList",
        components: {TodoListItem},
        props: ["todoList", "deleteTodo", "undone", "done"]
    }
</script>

<style scoped>
    /* main */
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>