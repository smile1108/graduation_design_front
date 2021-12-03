<template>
    <div class="todo-footer" v-show="todoSum">
        <label>
        <input type="checkbox" :checked="isAll" @change="handleCheck">
        </label>
        <span>
        <span>已完成{{completed}}</span> / 全部{{todoSum}}
        </span>
        <button class="btn btn-danger" @click="clearDone">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name: "TodoListFooter",
        props: ["todoSum", "completed", "checkAllOrNone", "clearCompleted"],
        computed: {
            isAll() {
                return this.todoSum === this.completed && this.todoSum > 0
            }
        },
        methods: {
            handleCheck(e) {
                this.checkAllOrNone(e.target.checked)
            },
            // 清除已经完成的任务
            clearDone() {
                this.clearCompleted()
            }
        }
    }
</script>

<style scoped>
/* footer */
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>