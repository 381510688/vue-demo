<template>
  <div class="header-container clearfix">
    <!-- logo -->
    <div class="logo">
      <img :src="logo" alt="logo" width="152px" height="54px">
    </div>
    <!-- 导航菜单 -->
    <ul class="clearfix nav">
      <li v-for="(item, index) in arr"
          @click="selected(item.routerPath)"
          :class="{active: item.routerPath === active,'app-hide':item.hideMenu}">
        <a href="javascript:void(0)" :data-index="index">{{item.name}}</a>
      </li>
    </ul>
    <!--&lt;!&ndash; 用户中心 &ndash;&gt;-->
    <!--<div class="user clearfix">-->
      <!--<div class="user-info">-->
        <!--<div class="user-info-btn" @click.stop="show">-->
          <!--<i class="iconfont icon-yonghu"></i>-->
          <!--<i class="iconfont icon-left arrow"></i>-->
        <!--</div>-->
        <!--<div class="user-info-dropmenu app-font-small" v-show="isCurrent.status">-->
          <!--<ul>-->
            <!--<li><a href="javascript:void(0)" @click="showUserInfo">用户信息</a></li>-->
            <!--<li><a href="javascript:void(0)" @click="updatePwd">修改密码</a></li>-->
          <!--</ul>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="user-line"></div>-->
      <!--<div class="user-logout">-->
        <!--<a href="javascript:void(0)" @click="logout">-->
          <!--<i class="iconfont icon-tuichu"></i>-->
        <!--</a>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  import logo from '@/static/img/logo.png';
  import menu from '@/components/menu/menu.js'

  export default {
    name: 'app-header',
    data () {
      return {
        logo: logo,
        isCurrent: {
          status: false
        },
        normal: menu.normal,
        arr: menu.arr,
        form: {                     // 用户信息显示
          userName:''               // 用户账号
        }
      }
    },
    methods: {
      show() {
        this.isCurrent.status = !this.isCurrent.status;
        this.$store.commit('isSelectShow', this.isCurrent);
      },
      selected(routerPath) {
        let path = this.normal[routerPath].routerPath;
        path && this.$router.push({path: path});
      },
      updatePwd() {
        this.$router.push({path: '/updatePwd'});
      },
      // 退出按钮点击处理
      logout() {
        // 触发父页面logout事件
        this.$emit('logout');
      },

      // 登录用户信息显示
      showUserInfo() {
        app.req("POST", "/api/sysManager/findUser", null, {
        }).then((data) => {
          this.form = data;
        },
        (data) => {
          // 失败时输出提示信息
          this.$message({
            type: 'error',
            message: data.map(obj => obj.message).join(" ")
          });
        });
      }
    },
    computed: {
      active () {
        return this.$store.state.navRouterPath
      }
    }
  }
</script>

<style scoped>
  .header-container {
    display:flex;
    height: 100%;
    width: 100%;
    background: #1A1A1A;
    box-sizing: border-box;
    border-bottom: 1px solid #252525;
    justify-content: space-between;
  }

  .logo {
    margin-left: 10px;
    margin-right: 60px;
    min-width:152px;
    width:0;
  }

  /* nav */
  .nav {
    flex:1;
    overflow: auto;
    box-sizing: border-box;
    height: 3.375rem;
    width:0;
  }

  .nav li {
    float: left;
    font-size: 15px;
    vertical-align: middle;
    box-sizing: border-box;
    cursor: pointer;
    transition: all .1s;
    padding: 0 20px;
    line-height: 3.375rem;
    box-sizing: border-box;
  }

  .nav li a {
    text-decoration: none;
    color: #AFB4B8;
  }

  .nav li:hover {
    border-bottom: 5px solid #20a0ff;
    height: 3.375rem;
  }

  .nav li:hover a {
    color: #fff;
  }

  .nav li.active a {
    color: #20a0ff;
  }

  /* 用户信息 */
  .user {
    min-width: 110px;
    color: #afb4b8;
    width:0;
  }

  .user-info {
    position: relative;
  }

  .user-info-btn {
    line-height: 54px;
    cursor: pointer;
  }

  .user-info-btn:hover {
    color: #fff;
  }

  /* 用户中心图标 */
  .user-info-btn i:first-child {
    font-size: 21px;
  }

  /* 用户中心的下拉箭头 */
  .user-info-btn .icon-left.arrow {
    font-size: 12px;
    padding-left: 5px;
  }

  .user-info {
    float: left;
  }

  /* 用户信息下拉菜单 */
  .user-info-dropmenu span {
    position: absolute;
    right: 0;
    top: 40px;
  }

  .user-info-dropmenu span i {
    color: #fff;
  }

  .user-info-dropmenu ul {
    top: 52px;
    right: -20px;
    width: 100px;
    position: absolute;
    background: #fff;
    border-radius: 5px;
    padding: 5px 0;
    box-sizing: border-box;
    z-index: 100;
  }

  .user-info-dropmenu ul li {
    line-height: 25px;
    text-indent: 1rem;
  }

  .user-info-dropmenu ul li a {
    color: #a3a3a3;
  }

  .user-info-dropmenu ul li a:hover {
    color: #4e93d5;
  }

  /*　分隔线 */
  .user-line {
    height: 18px;
    width: 1px;
    background: #f3f3f3;
    opacity: 0.1;
    float: left;
    /* box-shadow: 0 0 1px #afb4b8; */
    margin: 21px 15px 0 15px;
  }

  /* 注销 */
  .user-logout {
    line-height: 54px;
  }

  .user-logout a {
    color: #AFB4B8;
  }

  /* 注销图标 */
  .user-logout i {
    font-size: 20px;
    margin-top: 5px;
    cursor: pointer;
  }

  .user-logout i:hover {
    color: #fff;
  }

  /*用户信息弹出设置*/
  .userInfo-box{
    display: flex;
    flex-wrap: wrap;
    padding:20px;
  }
  .info-con{
    width:295px;
    height:40px;
    color: #666;
  }
  .info-con label{
    width:100px;
    display: inline-block;
    text-align: right;
    margin-right:10px;
    color: #333;
  }
</style>

