<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>登录入口</h2>
      <el-input size="medium"  v-model="username" placeholder="请输入账号"></el-input>
      <el-input size="medium" placeholder="请输入密码" v-model="passwd" show-password></el-input>
      <el-row>
      <el-button type="primary" v-on:click="login">登录</el-button>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '我的试题生成系统',
      username: '',
      passwd: ''
    }
  },
  methods: {
    login: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      console.log(this.username, this.passwd)
      if(this.username=='admin'&&this.passwd=='000000'){
          this.$router.push({path:'/QuestionList'})
      }else{
          const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '账密错误'),
            h('i', { style: 'color: red' })
          ])
        });
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
