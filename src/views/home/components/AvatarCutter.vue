<template>
<div style="height: 460px;">
  <el-tabs v-model="activeName" @tab-click="handleClick" class="tabs">
      <div class="avatar_select">
        <!-- 这里这样做是因为
        原来的 <input type="file">标签太丑了，可以自己去尝试一下，看看有多丑
        所以使用button来控制触发input来进行选择文件
        -->
        <input type="file"  ref="uploads" id="uploads" accept="image/png, image/jpeg, image/gif, image/jpg" hidden @change="setImage($event)">
        <el-button class="select" type="primary" @click="selectAvatar">选择图片</el-button>

        <el-button type="success" style="margin-left:100px;" @click="uploadImg('blob')">上传图片</el-button>
      </div>

      <div class="cropper_box">
      <div class="avatar_cropper">
        <vue-cropper
          ref="cropper"
          :img="option.img"
          :outputSize="option.outputSize"
          :outputType="option.outputType"
          :info="option.info"
          :canScale="option.canScale"
          :autoCrop="option.autoCrop"
          :autoCropWidth="option.autoCropWidth"
          :autoCropHeight="option.autoCropHeight"
          :fixed="option.fixed"
          :fixedNumber="option.fixedNumber"
          :full="option.full"
          :fixedBox="option.fixedBox"
          :canMove="option.canMove"
          :canMoveBox="option.canMoveBox"
          :original="option.original"
          :centerBox="option.centerBox"
          :height="option.height"
          :infoTrue="option.infoTrue"
          :maxImgSize="option.maxImgSize"
          :enlarge="option.enlarge"
          :mode="option.mode"
          @realTime="realTime"
          @imgLoad="imgLoad">
        </vue-cropper>
      </div>

      <div class="show_preview" :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden',
        'margin': '5px'}">
        <div :style="previews.div">
          <img :src="option.img" :style="previews.img">
        </div>
      </div>
      </div>
  </el-tabs>
</div>
</template>

<script>
import { VueCropper }  from 'vue-cropper'
import axios from 'axios'
import {API} from '../../api'

export default {
  props: {
    userInfo: Object
  },
  data() {
    return {
      activeName:'second',
      previews:{},
      option:{
        img:'',                //裁剪图片的地址,
        outputSize:1,          //裁剪生成的图片质量可选(0,1,-1)
        outputType:'jpeg',     //裁剪生成图片的格式
        info:true,             //图片大小信息
        canScale:true,         //是否允许滚轮缩放
        autoCrop:true,         //是否默认生成截图框
        autoCropWidth:240,
        autoCropHeight:240,    //默认生成截图框大小
        fixed:true,            //是否开启截图框宽高固定比例
        fixedNumber:[1,1],     //截图框的宽高比,
        full:false,            //按原比例裁剪图片，不失真
        fixedBox:true,         //固定截图框大小，不允许改变
        canMove:false,         //上传图片是否可以移动,
        canMoveBox:true,       //截图框是否可以拖动
        original:false,        //上传图片按照原始比例渲染
        centerBox:false,       //截图框是否被限制在图片里面
        height:true,           //是否按照设备的dpr，输出等比例图片
        infoTrue:false,        //true为展示真实输出图片宽高，false展示看到的截图框宽高，
        maxImgSize:3000,       //限制图片最大宽度和高度
        enlarge:1,             //图片根据截图框输出比例倍数
        mode:'400px 300px'     //图片渲染方式 
      }
    }
  },
  methods: {
    // 标签页切换调用方法，不重要！删掉了一些不必要的代码
    handleClick(){
    },

    // 选择图片调用方法
    selectAvatar(){
      this.$refs.uploads.click();
    },
    // 真正的选择图片方法，姑且先这么命名吧
    setImage(e){
      let file = e.target.files[0];
      if (!/\.(jpg|jpeg|png|JPG|PNG)$/.test(e.target.value)) {
        // this.$message.info("图片类型不正确");
        console.log("图片类型不正确");
        return false;
      }
      //转化为blob,使用blob是为了在页面中展示上传的那张图片
      let reader = new FileReader();
      // 文件读取成功后触发onload方法
      reader.onload = (e) => {
        let data;
        // 要在页面中展示，转化为url形式
        if(typeof e.target.result === 'object'){
          data = window.URL.createObjectURL(new Blob([e.target.result]))
        }else{
          data = e.target.result
        }
        this.option.img = data
        //转化为base64
      }
      reader.readAsDataURL(file)
    },

    realTime(data){
      this.previews = data;
    },
    //初始化函数 
    imgLoad(msg){
      console.log("工具初始化函数====="+msg);
    },

    // 头像上传调用方法
    uploadImg(type){
      let _this = this;
      if(type === 'blob'){
        //获取截图的blob数据类型
        this.$refs.cropper.getCropBlob(async (data) => {
          let formData = new FormData();
          // 发数据传递到后端,注意这里请根据自己的后端逻辑进行处理，我是将用户名保存在Vuex中，可以直接进行命名
          formData.append('username', this.userInfo.username);
          formData.append('file',data);
          axios.post(API.BASE_URL + API.uploadAvatar,formData).then(function(response){
            if(response.data.code == 200){
              // 重新存储新的用户信息
              sessionStorage.setItem('userInfo', JSON.stringify(response.data.data))
              _this.userInfo = JSON.stringify(response.data.data)
              _this.$router.go(0);                                   //刷新网页            
            } else {
              window.alert(response.data.msg)   // 弹出提示
            }
          })
        })
      }

    }
  },

  components:{VueCropper}
};

</script>

<style scoped>
.tab-create{
position: absolute;
right: 80px;
top: 115px;
margin-top: 5px;
z-index: 999;
}

.avatar_select{
text-align: left;
}

.avatar_select .select {
  margin-left: 60px;
}

.cropper_box{
text-align: left;
position: relative;
}
.avatar_cropper{
margin-top: 40px;
height: 350px;
width: 450px;
display: inline-block;
}

.show_preview{
display: inline-block;
position: absolute;
top:30px;
left: 500px;
}


</style>