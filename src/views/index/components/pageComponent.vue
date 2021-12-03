<template>
	<div class="page">
        <span class="page-block center">{{'«'}}</span>
        <span v-if="pageList[2]-2>1"
            class="page-block center">...</span>
        <span v-for="pageNum in pageList"
            :key="pageNum"
            class="page-block center"
            :class="{curPage: pageNum === page}">{{pageNum}}</span>
        <span v-if="pageMax-pageList[2]>2"
            class="page-block center">...</span>
        <span class="page-block center">{{'»'}}</span>
  </div>
</template>

<script>
    export default {
        name: 'Pager',
        data () {
            return {
                pageList: [1,2,3,4,5], // 页码列表
                page: 1, // 当前页码
                pageMax: 7 // 最大页数
            };
        }
    }
</script>

<style scoped>

    .curPage {
        background-color: #0066FF;
        color: #fff;
    }

    .page {
        margin-top: 20px;
        padding-left: 300px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #fff;
    }

    .page .center {
        text-align: center;
    }

    .page .page-block {
        display: inline-block;
        width: 30px;
        height: 30px;
        padding: 4px 8px;
        font-size: 0.8em;
        line-height: 20px;
        border: 1px solid #ddd;
        border-right: none;
        box-sizing: border-box;
    }

    .page .page-block:hover {
        cursor: pointer;
        background-color: #0066FF;
        color: #fff;
    }

    .page .page-block:first-child {
        width: 34px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    .page .page-block:last-child {
        width: 34px;
        border-right: 1px solid #ddd;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
</style>