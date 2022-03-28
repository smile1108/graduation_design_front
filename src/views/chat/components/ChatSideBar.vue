<template>
    <div id="chatSideBar">
        <div class="chatSearch">
            <input type="text" class="chatSearchInput" placeholder="搜索联系人">
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChatSideBar"
    }
</script>

<style>
    #chatSideBar {
        position: relative;
        width: 286px;
        height: 100%;
        left: 0;
        top: 0;
        border-right: 1px solid #ebebeb;
    }

    #chatSideBar .chatSearch {
        width: 90%;
        margin: 0 auto;
        padding: 20px 0;
        border-bottom: 1px solid #ebebeb;
    }

    #chatSideBar .chatSearch .chatSearchInput {
        box-sizing: border-box;
        padding: 9px;
        height: 36px;
        width: 100%;
        font-size: 14px;
        border-radius: 3px;
        border: 1px solid #e7eaf1;
        background-color: #f7f8fa;
    }
</style>