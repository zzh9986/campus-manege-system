<template>
  <div>



        1. 搭建项目环境 : vue vue-cli es-lint
        2. 编写首页结构: 运用element ui编写页面结构
        3. 编写函数 : 通过绑定点击事件，去更改数据，修改页面展示



  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      input: ''
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
