<template>
  <div id="selector">
      <ul class="selectorList">
          <li>计算机类</li>
          <li>哲学类</li>
          <li>物理类</li>
          <li>文学类</li>
          <li>生物类</li>
          <li>外语类</li>
          <li>数学类</li>
          <li>心理类</li>
          <li>美术类</li>
          <li>音乐类</li>
          <li>体育类</li>
          <li>其他</li>
      </ul>
  </div>
</template>

<script>
    export default {
        name: 'MySelector'
    }
</script>

<style>
    #selector {
        float: left;
        height: 90%;
        width: 120px;
        margin: 30px 30px 0 50px;
        background-color: #fff;
        border-radius: 12px;
        padding: 10px;
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