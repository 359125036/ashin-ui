<template>
  <div class="hello">
    <h2>Home Page</h2>
    <el-button type="primary" @click="getUser">获取用户信息</el-button>
  </div>
</template>

<script>
import axios from 'axios'
import mock from './../mock/mock'
export default {
  name: 'home',
  methods:{
    getUser(){
      axios.get('http://localhost:8080/user')
      .then(res=>{
        alert(JSON.stringify(res.data))
      }).catch(e=>{
        alert(e)
      })
    }
  }
}
</script>
