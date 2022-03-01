<template>
  <div id="selector">
      <ul class="selectorList">
          <div v-for="classify in articleClassify" :key="classify.articleClassify" class="listDiv">
                <li @click="clickLi(classify.articleClassify)" :ref="classify.articleClassify">{{classify.name}}</li>
                <span class="iconfont closeBtn" @click="deleteLi(classify.articleClassify)" :ref="classify.articleClassify">&#xe8dc;</span>
          </div>
      </ul>
  </div>
</template>

<script>
    export default {
        name: 'MySelector',
        components: {

        },
        props: {
            articleClassify: Array,
            classifyFilter: Set
        },
        data() {
            return {
            }
        },
        methods: {
            clickLi(classify) {
                let dom = this.$refs[classify]
                // dom[0] 代表 li   dom[1] 代表 对应的closeBtn
                // 先设置 li的样式
                dom[0].style.setProperty('background-color', '#0066FF')
                dom[0].style.setProperty('color', '#FFF')
                // 然后设置显示对应的关闭按钮
                dom[1].style.setProperty('display', 'block')
                // Set中添加对应元素
                this.$emit('addClassify', classify)
            },
            deleteLi(classify) {
                let dom = this.$refs[classify]
                // dom[0] 代表 li   dom[1] 代表 对应的closeBtn
                // 先设置 li的样式
                dom[0].style.setProperty('background-color', '#FFF')
                dom[0].style.setProperty('color', '#000')
                // 然后设置显示对应的关闭按钮
                dom[1].style.setProperty('display', 'none')
                // 然后删除Set中的数据
                this.$emit('deleteClassify', classify)
            }
        }
    }
</script>

<style>

    @font-face {
    font-family: 'iconfont';
    src: url('../icon/iconfont.woff2?t=1646097794394') format('woff2'),
        url('../icon/iconfont.woff?t=1646097794394') format('woff'),
        url('../icon/iconfont.ttf?t=1646097794394') format('truetype');
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .listDiv {
        position: relative;
    }

    .closeBtn {
        position: absolute;
        left: 88px;
        top: 0px;
        font-size: 18px;
        display: none;
        color: red;
    }

    .closeBtn:hover {
        cursor: pointer;
    }

    #selector {
        float: left;
        height: 95%;
        width: 120px;
        margin: 15px 50px 0 100px;
        background-color: #fff;
        border-radius: 12px;
        padding: 5px;
        box-sizing: border-box;
    }

    #selector .selectorList {
        height: 100%;
    }

    #selector .selectorList li {
        font-size: 14px;
        width: 100px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        margin: 10px auto 0;
        box-sizing: border-box;
        border-radius: 4px;
        padding: 0 10px;
    }

    #selector .selectorList li:hover {
        cursor: pointer;
        background-color: #0066FF !important;
        color: #fff !important;
    }
</style>