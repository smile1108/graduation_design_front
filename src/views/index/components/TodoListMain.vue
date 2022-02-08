<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoListHeader :addTodo="addTodo"/>
        <TodoList :todoList="todoList" :deleteTodo="deleteTodo"/>
        <TodoListFooter 
          :todoSum="todoSum" 
          :completed="completed" 
          :checkAllOrNone="checkAllOrNone"
          :clearCompleted="clearCompleted"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import TodoListHeader from './TodoListHeader'
  import TodoListFooter from './TodoListFooter'
  import TodoList from './TodoList'

  export default {
    name: 'TodoListMain',
    components: {TodoListHeader, TodoListFooter, TodoList},
    props: {
      todoList: Array
    },
    data() {
      return {
          
      }
    },
    computed: {
      todoSum() {
        return this.todoList.length
      },
      completed() {
        var sum = 0
        for(let i = 0; i < this.todoList.length; i++) {
          if(this.todoList[i].done) sum++
        }
        return sum
      }
    },
    methods: {
      addTodo(todoObj) {
        this.todoList.unshift(todoObj)
      },
      // 删除todo
      deleteTodo(id) {
        this.todoList = this.todoList.filter(obj => obj.id !== id)
      },
      // 将所有的todo改为选择
      checkAllOrNone(done) {
        this.todoList.forEach(obj => obj.done = done)
      },
      // 清除已经完成的任务
      clearCompleted() {
        this.todoList = this.todoList.filter(obj => obj.done === false)
      }
    }
  }
</script>

<style>
  /* base */
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2) 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
