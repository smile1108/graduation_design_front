<template>
    <div id="myMessage">
        <div id="nickname">
            <span class="msgTitle">昵称</span>
            <input class="nicknameMsg" type="text" :value="userInfo.nickname" placeholder="请输入用户昵称" :disabled="!canEdit">
        </div>
        <div id="school">
            <span class="msgTitle">学校</span>
            <input class="schoolMsg" type="text" :value="userInfo.school" placeholder="请输入用户学校" :disabled="!canEdit">
        </div>
        <div id="college">
            <span class="msgTitle">学院</span>
            <input class="collegeMsg" type="text" :value="userInfo.college" placeholder="请输入用户所在学院" :disabled="!canEdit">
        </div>
        <div id="specialty">
            <span class="msgTitle">专业</span>
            <input class="specialtyMsg" type="text" :value="userInfo.specialty" placeholder="请输入用户专业" :disabled="!canEdit">
        </div>
        <div id="gender">
            <span class="msgTitle">性别</span>
            <label><input class="gender" name="gender" type="radio" value="male" :checked="isMale" :disabled="!canEdit"/><span class="maleRadio">男</span></label>
            <label><input class="gender" name="gender" type="radio" value="female" :checked="isFemale" :disabled="!canEdit"/><span class="femaleRadio">女</span></label>
        </div>
        <div id="individualResume">
            <span class="msgTitle">简介</span>
            <textarea class="individualText" placeholder="请输入简短的自我介绍" :disabled="!canEdit" v-model="userInfo.individualResume"></textarea>
        </div>
        <div id="editBtn" @click="editMsg()">{{editBtnValue}}</div>
        <button id="saveBtn" :class="{'saveDisabled': !canEdit}" @click="saveMsg()" :disabled="!canEdit">保存</button>
    </div>
</template>

<script>
    export default {
        name: 'MyMessage',
        components: {

        },
        props: {
            userInfo: Object
        },
        data() {
            return {
                canEdit: false,
            }
        },
        computed: {
            // 是否为男性
            isMale: function() {
                return this.userInfo.gender === 'male'
            },
            isFemale: function() {
                return this.userInfo.gender === 'female'
            },
            editBtnValue: function() {
                if(this.canEdit) {
                    return '取消编辑';
                }
                return '编辑'
            }
        },
        methods: {
            editMsg() {
                this.canEdit = !this.canEdit;
            },
            saveMsg() {
                console.log("######")
            }
        }
    }
</script>

<style>

    .saveDisabled {
        background-color: gray!important; 
    }

    .saveDisabled:hover {
        cursor: no-drop!important;
    }

    #myMessage {
        width: 70%;
        margin: 10px auto 0;
        background-color: #fff;
        margin-top: 0;
        padding: 40px 120px;
        box-sizing: border-box;
    }

    #myMessage .msgTitle {
        font-size: 18px;
        margin-right: 30px;
    }

    #myMessage #gender input.gender {
        margin-right: 5px;
        width: 10px;
    }

    #myMessage #gender span.maleRadio {
        margin-right: 20px;
    }

    #myMessage #individualResume .individualText {
        width: 300px;
        height: 100px;
        font-size: 18px;
        padding: 7px 7px;
        resize: none;
    }

    #myMessage #individualResume .individualText:focus {
        border-color: #66afe9;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    }

    #myMessage #editBtn {
        display: inline-block;
        height: 30px;
        padding: 4px 16px;
        line-height: 30px;
        border-radius: 6px;
        color: #fff;
        background-color: #0066FF;
        margin-top: 10px;
        margin-left: 50px;
    }

    #myMessage #editBtn:hover {
        cursor: pointer;
        background-color: #005ce6;
    }

    #myMessage #saveBtn {
        display: inline-block;
        height: 40px;
        padding: 4px 16px;
        font-size: 16px;
        line-height: 30px;
        border-radius: 6px;
        color: #fff;
        background-color: #0066FF;
        margin-top: 10px;
        margin-left: 100px;
    }

    #myMessage #saveBtn:hover {
        cursor: pointer;
        background-color: #005ce6;
    }

    #myMessage div:not(:last-child) {
        margin-bottom: 20px;
    }

    #myMessage input {
        outline-style: none;
        border: 1px solid #ccc;
        border-radius: 3px;
        padding: 7px 7px;
        width: 300px;
        font-size: 18px;
        text-indent: 10px;
    }

    #myMessage input:focus {
        border-color: #66afe9;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
    }
</style>