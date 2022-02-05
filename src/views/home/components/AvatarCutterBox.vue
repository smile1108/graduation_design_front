<template>
    <div id="avatarCutterBox" :class="{ showAvatar: !showAvatar }">
        <AvatarCutter :userInfo="userInfo"></AvatarCutter>
        <div class="closeBtn" @click="closeBox()">关闭</div>
    </div>
</template>

<script>
    import AvatarCutter from './AvatarCutter'

    export default {
        name: 'AvatarCutterBox',
        components: {
            AvatarCutter
        },
        props: {
            showAvatar: Boolean,
            userInfo: Object
        },
        data() {
            return {

            }
        },
        methods: {
            closeBox() {
                this.showAvatar = false
                this.$emit("changeShowAvatar", false)
            }
        }
    }
</script>

<style>
    #avatarCutterBox {
        border: 1px solid rgb(110, 102, 221);
        position: absolute;
        left: 520px;
        top: 120px;
        background-color: rgb(146, 140, 238);
        z-index: 12;
    }

    #avatarCutterBox .closeBtn {
        font-size: 14px;
        display: inline-block;
        height: 30px;
        padding: 4px 16px;
        line-height: 30px;
        border-radius: 6px;
        color: #fff;
        background-color: #0066FF;
        margin-left: 180px;
        margin-bottom: 15px;
    }

    #avatarCutterBox .closeBtn:hover {
        cursor: pointer;
        background-color: #005ce6;
    }

    .showAvatar {
        display: none;
    }
</style>