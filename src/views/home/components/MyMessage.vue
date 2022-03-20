<template>
    <div id="myMessage">
        <div id="nickname">
            <span class="msgTitle">昵称</span>
            <input class="nicknameMsg" type="text" v-model="nickname" placeholder="请输入用户昵称" :disabled="!canEdit" ref="nickname">
            <span class="errorMsg" ref="nicknameError">{{nicknameErrorMsg}}</span>
        </div>
        <div id="school">
            <span class="msgTitle">学校</span>
            <input class="schoolMsg" type="text" v-model="school" placeholder="请输入用户学校" :disabled="!canEdit" ref="school">
            <span class="errorMsg" ref="schoolError">{{schoolErrorMsg}}</span>
        </div>
        <div id="college">
            <span class="msgTitle">学院</span>
            <input class="collegeMsg" type="text" v-model="college" placeholder="请输入用户所在学院" :disabled="!canEdit" ref="college">
            <span class="errorMsg" ref="collegeError">{{collegeErrorMsg}}</span>
        </div>
        <div id="specialty">
            <span class="msgTitle">专业</span>
            <input class="specialtyMsg" type="text" v-model="specialty" placeholder="请输入用户专业" :disabled="!canEdit" ref="specialty">
            <span class="errorMsg" ref="specialtyError">{{specialtyErrorMsg}}</span>
        </div>
        <div id="gender">
            <span class="msgTitle">性别</span>
            <label><input class="gender" name="gender" type="radio" value="male" :checked="isMale" :disabled="!canEdit" v-model="gender"/><span class="maleRadio">男</span></label>
            <label><input class="gender" name="gender" type="radio" value="female" :checked="isFemale" :disabled="!canEdit" v-model="gender"/><span class="femaleRadio">女</span></label>
        </div>
        <div id="individualResume">
            <span class="msgTitle">简介</span>
            <textarea class="individualText" placeholder="请输入简短的自我介绍" :disabled="!canEdit" v-model="resume" ref="resume"></textarea>
            <span class="errorMsg" ref="resumeError">{{resumeErrorMsg}}</span>
        </div>
        <div id="editBtn" @click="editMsg()">{{editBtnValue}}</div>
        <button id="saveBtn" :class="{'saveDisabled': !canEdit}" @click="saveMsg()" :disabled="!canEdit">保存</button>
    </div>
</template>

<script>

    import axios from 'axios'
    import {API} from '../../api'

    export default {
        name: 'MyMessage',
        components: {

        },
        props: {
            userInfo: Object
        },
        created() {
            this.nickname = this.userInfo.nickname
            this.school = this.userInfo.school
            this.college = this.userInfo.college
            this.specialty = this.userInfo.specialty
            this.resume = this.userInfo.resume
            this.gender = this.userInfo.gender
        },
        data() {
            return {
                canEdit: false,
                nickname: '',
                school: '',
                college: '',
                specialty: '',
                gender: '',
                resume: '',
                nicknameErrorMsg: '',
                schoolErrorMsg: '',
                collegeErrorMsg: '',
                specialtyErrorMsg: '',
                resumeErrorMsg: ''
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
                let nicknameDom = this.$refs.nickname
                let schoolDom = this.$refs.school
                let collegeDom = this.$refs.college
                let specialtyDom = this.$refs.specialty
                let resumeDom = this.$refs.resume
                let nicknameErrorDom = this.$refs.nicknameError
                let schoolErrorDom = this.$refs.schoolError
                let collegeErrorDom = this.$refs.collegeError
                let specialtyErrorDom = this.$refs.specialtyError
                let resumeErrorDom = this.$refs.resumeError
                if(this.nickname.length > 20) {
                    this.nickname = ''
                    this.nicknameErrorMsg = '昵称长度不能超过20个字符'
                    nicknameDom.style.setProperty('border', '1px solid red')
                    nicknameErrorDom.style.setProperty('visibility', 'visible')
                    return
                }
                if(this.school.length > 20) {
                    this.school = ''
                    this.schoolErrorMsg = '学校长度不能超过20个字符'
                    schoolDom.style.setProperty('border', '1px solid red')
                    schoolErrorDom.style.setProperty('visibility', 'visible')
                    return
                }
                if(this.college.length > 20) {
                    this.college = ''
                    this.collegeErrorMsg = '学院长度不能超过20个字符'
                    collegeDom.style.setProperty('border', '1px solid red')
                    collegeErrorDom.style.setProperty('visibility', 'visible')
                    return
                }
                if(this.specialty.length > 20) {
                    this.specialty = ''
                    this.specialtyErrorMsg = '专业长度不能超过20个字符'
                    specialtyDom.style.setProperty('border', '1px solid red')
                    specialtyErrorDom.style.setProperty('visibility', 'visible')
                    return
                }
                if(this.resume.length > 50) {
                    this.resume = ''
                    this.resumeErrorMsg = '简介长度不能超过50个字符'
                    resumeDom.style.setProperty('border', '1px solid red')
                    resumeErrorDom.style.setProperty('visibility', 'visible')
                    return
                }
                let formData = new FormData();
                formData.append('username', this.userInfo.username)
                formData.append('nickname', this.nickname)
                formData.append('school', this.school)
                formData.append('college', this.college)
                formData.append('specialty', this.specialty)
                formData.append('gender', this.gender)
                formData.append('resume', this.resume)
                axios.post(API.BASE_URL + API.modifyMessage, formData).then((response) => {
                    if(response.data.code == 200) {
                        sessionStorage.setItem('userInfo', JSON.stringify(response.data.data))
                        this.userInfo = JSON.stringify(response.data.data)
                        this.$router.go(0)
                    } else {
                        window.alert(response.data.msg)
                    }
                })
            }
        }
    }
</script>

<style>

    .errorMsg {
        margin-left: 20px;
        color: red;
        font-size: 14px;
        visibility: hidden;
    }

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