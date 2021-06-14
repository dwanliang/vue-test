<template>
  <div class="home">
    <button @click="Login">登录</button>
    <button @click="about">关于我</button>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  mounted(){

  },
  methods:{
    Login(){
      this.$router.push('Login');
    },
    about(){
      this.$router.push('about');
    }
  }
});
</script>
