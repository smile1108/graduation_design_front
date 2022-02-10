<template>
    <li>
        <label>
            <input type="checkbox" v-model="todo.done" :checked="todo.done" @click="changeStatus()"/>
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
    export default {
        name: "TodoListItem",
        props: ["todo", "deleteTodo", "undone", "done"],
        methods: {
            // 删除对应的todo
            handleDelete(id) {
                if(confirm("你确定删除吗?")) {
                    this.deleteTodo(id)
                }
            },
            // 改变待办事项完成与否的方法
            changeStatus() {
              // 根据不同的状态 调用完成 还是撤销完成的api
              if(this.todo.done) {
                // true 表示 点击之前 为true 所以这时候应该调用撤销完成的api
                this.undone(this.todo.id)
              } else {
                this.done(this.todo.id)
              }
            }
        }
    }
</script>

<style scoped>
  /* item */
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover {
      background-color: #ddd;
  }

  li:hover button {
      display: block;
  }
</style>