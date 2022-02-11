<template>
  <div id="selector">
      <ul class="selectorList">
          <li v-for="classify in articleClassify" :key="classify.articleClassify">{{classify.name}}</li>
      </ul>
  </div>
</template>

<script>
    export default {
        name: 'MySelector',
        components: {

        },
        props: {
            articleClassify: Array
        }
    }
</script>

<style>
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
        width: 70px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        margin: 10px auto 0;
        box-sizing: border-box;
        border-radius: 16px;
    }

    #selector .selectorList li:hover {
        cursor: pointer;
        background-color: #0066FF;
        color: #fff;
    }
</style>