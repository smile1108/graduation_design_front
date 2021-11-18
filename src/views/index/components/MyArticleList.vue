<template>
  <div id="articleList">
      <div class="articleDiv">
          <h2 class="articleTitle">文章题目</h2>
          <div class="articleContent">拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件</div>
          <div class="authorMsg">
              <img src="https://pic3.zhimg.com/v2-e1f2203a6aebdb8ef688bc7de67b0685.jpg?source=6a64a727" alt="头像">
              <div class="authorName">作者姓名</div>
              <div class="userOperator">
                  <span class="iconfont like">&#xe86f; 喜欢</span>
              </div>
          </div>
      </div>
      <div class="articleDiv">
          <h2 class="articleTitle">文章题目</h2>
          <div class="articleContent">拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件</div>
          <div class="authorMsg">
              <img src="https://pic3.zhimg.com/v2-e1f2203a6aebdb8ef688bc7de67b0685.jpg?source=6a64a727" alt="头像">
              <div class="authorName">作者姓名</div>
              <div class="userOperator">
                  <span class="iconfont like">&#xe86f; 喜欢</span>
              </div>
          </div>
      </div>
      <div class="articleDiv">
          <h2 class="articleTitle">文章题目</h2>
          <div class="articleContent">拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件</div>
          <div class="authorMsg">
              <img src="https://pic3.zhimg.com/v2-e1f2203a6aebdb8ef688bc7de67b0685.jpg?source=6a64a727" alt="头像">
              <div class="authorName">作者姓名</div>
              <div class="userOperator">
                  <span class="iconfont like">&#xe86f; 喜欢</span>
              </div>
          </div>
      </div>
      <div class="articleDiv">
          <h2 class="articleTitle">文章题目</h2>
          <div class="articleContent">拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件</div>
          <div class="authorMsg">
              <img src="https://pic3.zhimg.com/v2-e1f2203a6aebdb8ef688bc7de67b0685.jpg?source=6a64a727" alt="头像">
              <div class="authorName">作者姓名</div>
              <div class="userOperator">
                  <span class="iconfont like">&#xe86f; 喜欢</span>
              </div>
          </div>
      </div>
      <div class="articleDiv">
          <h2 class="articleTitle">文章题目</h2>
          <div class="articleContent">拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件拉克斯基的分类就爱上了的附件</div>
          <div class="authorMsg">
              <img src="https://pic3.zhimg.com/v2-e1f2203a6aebdb8ef688bc7de67b0685.jpg?source=6a64a727" alt="头像">
              <div class="authorName">作者姓名</div>
              <div class="userOperator">
                  <span class="iconfont like">&#xe86f; 喜欢</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: 'MyArticleList'
    }
</script>

<style>

    @font-face {
    font-family: 'iconfont';
    src: url('../icon/iconfont.woff2?t=1636981770201') format('woff2'),
        url('../icon/iconfont.woff?t=1636981770201') format('woff'),
        url('../icon/iconfont.ttf?t=1636981770201') format('truetype');
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #articleList {
        float: left;
        margin-top: 15px;
        padding: 10px 0;
        box-sizing: border-box;
        width: 700px;
        height: 95%;
        border-radius: 3px;
        background-color: #fff;
    }

    #articleList .articleDiv {
        width: 100%;
        height: 110px;
        padding: 10px;
        box-sizing: border-box;
        border-bottom: 1px solid rgb(240, 242, 247);
        border-left: none;
        border-right: none;
    }

    #articleList .articleDiv .articleTitle {
        font-weight: 600;
    }

    #articleList .articleDiv .articleTitle:hover {
        color: #175199;
        cursor: pointer;
    }

    #articleList .articleDiv .articleContent {
        margin-top: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    #articleList .articleDiv .articleContent:hover {
        cursor: pointer;
        color: #175199;
    }

    #articleList .articleDiv .authorMsg {
        width: 100%;
        height: 34px;
        margin-top: 5px;
        box-sizing: border-box;
    }

    #articleList .articleDiv .authorMsg img {
        float: left;
        width: 30px;
        height: 30px;
        margin: 3px 8px 0 5px;
        line-height: 30px;
        border-radius: 50%;
    }

    #articleList .articleDiv .authorMsg img:hover {
        cursor: pointer;
    }

    #articleList .articleDiv .authorMsg .authorName {
        float: left;
        margin: 12px 10px 0 0;
        color: #8590a6;
        font-weight: 700;
    }

    #articleList .articleDiv .authorMsg .authorName:hover {
        cursor: pointer;
        color: #175199;
    }

    #articleList .articleDiv .authorMsg .userOperator {
        float: left;
        margin-left: 30px;
    }

    #articleList .articleDiv .authorMsg .userOperator .iconfont {
        font-size: 14px;
        font-weight: 600;
        color: #8590a6;
        float: left;
        display: block;
        margin-top: 14px;
    }

    #articleList .articleDiv .authorMsg .userOperator .iconfont:hover {
        cursor: pointer;
        color: #175199;
    }
</style>