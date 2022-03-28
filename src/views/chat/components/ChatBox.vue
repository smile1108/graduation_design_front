<template>
    <div id="chatBox">
        <ChatTitle></ChatTitle>
        <ChatContent></ChatContent>
        <ChatInput></ChatInput>
    </div>
</template>

<script>

    import ChatTitle from './ChatTitle'
    import ChatContent from './ChatContent'
    import ChatInput from './ChatInput'

    export default {
        name: "ChatBox",
        components: {
            ChatTitle, ChatContent, ChatInput
        }
    }
</script>

<style>
    #chatBox {
        border: 1px solid black;
        position: absolute;
        left: 288px;
        top: 1px;
        min-height: 600px;
        min-width: 710px;
        box-sizing: border-box;
    }
</style>