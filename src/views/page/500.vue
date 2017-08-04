<template>
  <div id="app-404" :style="{backgroundImage: 'url(' + img_bg + ')' }">
    <div class="error-box">
      <div class="error-pic"><img :src="img_500" width="434px" height="179px"></div>
      <div class="error-text">服务器错误！
        <span><a href="javascript:void(0)" @click="gotoLogin">返回登录页面</a></span></div>
    </div>
  </div>
</template>

<script>
  import img_500 from '@/static/img/500.png';
  import img_bg from '@/static/img/error-bg.png';

  export default {
    name: 'p500',
    data() {
        return {
          img_500: img_500,
          img_bg: img_bg
        };
    },
    methods: {
      gotoLogin: function() {
        this.$router.push({path: '/login'});
      }
    }
  }
</script>


<style scoped>
  #app-404 {
    height: 100%;
    min-height: 600px;
    overflow: hidden;
    position: absolute;
    width: 100%;
    background: #131313 repeat-x left bottom;
  }

  .error-box {
    width: 434px;
    height: 200px;
    margin: 0px auto;
    text-align: center;
    position: absolute;
    margin-top: -200px;
    margin-left: -217px;
    top: 50%;
    left: 50%;
  }

  .error-text {
    margin-top: 30px;
    color: #979797;
  }

  .error-text span a {
    color: #406cb0;;
  }
</style>
