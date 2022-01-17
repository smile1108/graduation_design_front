<template>
    <div id="personalMsg">
        <div class="topDiv"></div>
        <div class="bottomDiv">
            <img :src="userInfo.img" alt="头像" class="personalAvatar">
            <div class="message">
                <span class="nickName">{{userInfo.nickName}}</span>
                <span class="school">{{userInfo.school}}</span>
            </div>
            <div class="functionalButton">
                <div class="checkAllMsg">查看所有信息</div>
                <div class="editMsg">编辑个人信息</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PersonalMessage',
        components: {
        },  
        data() {
            return {
                userInfo: {
                    img: "https://pic3.zhimg.com/v2-e1f2203a6aebdb8ef688bc7de67b0685.jpg?source=6a64a727",
                    nickName: '一只小菜鸡',
                    school: '山西大学'
                }
            }
        }
    }
</script>

<style>
    #personalMsg {
        height: 250px;
        width: 70%;
        margin: 10px auto 0;
    }

    #personalMsg .topDiv {
        width: 100%;
        height: 50%;
        background-color: royalblue;
    }

    #personalMsg .bottomDiv {
        width: 100%;
        height: 50%;
        background-color: #fff;
        position: relative;
    }

    #personalMsg .bottomDiv .personalAvatar {
        width: 120px;
        height: 120px;
        position: absolute;
        left: 40px;
        top: -40px;
        border-radius: 10px;
        border: 5px solid #fff;
    }

    #personalMsg .bottomDiv .message {
        width: 80%;
        height: 60%;
        margin-left: 180px;
    }

    #personalMsg .bottomDiv .functionalButton {
        width: 80%;
        height: 40%;
        margin-left: 180px;
    }

    #personalMsg .bottomDiv .message .nickName {
        font-size: 24px;
        font-weight: 700;
        display: inline-block;
        margin-top: 20px;
        margin-left: 10px;
    }

    #personalMsg .bottomDiv .message .school {
        font-size: 18px;
        font-weight: 500;
        display: inline-block;
        margin-top: 20px;
        margin-left: 20px;
    }

    #personalMsg .bottomDiv .functionalButton div {
        display: inline-block;
        height: 30px;
        padding: 4px 16px;
        line-height: 30px;
        border-radius: 6px;
        color: #fff;
        background-color: #0066FF;
    }

    #personalMsg .bottomDiv .functionalButton div:hover {
        cursor: pointer;
        background-color: #005ce6;
    }

    #personalMsg .bottomDiv .functionalButton .checkAllMsg {
        margin-left: 540px;
        margin-right: 50px;
    }
</style>