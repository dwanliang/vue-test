<template>
  <div class="home">
    <button @click="Login">登录</button>
    <button @click="about">关于我</button>
    <vuex-1></vuex-1>
    <vuex-2></vuex-2>
    <button @click="num_plus()">加1</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import vuex1 from '@/components/vuex1.vue'
import vuex2 from '@/components/vuex2.vue'
export default Vue.extend({
  name: 'Home',
  components:{
    vuex1,
    vuex2
  },
  data(){
    return {

    }
  },
  // mounted() {
		
	// },
  methods:{
    num_plus(){
      this.$store.commit('increase',100);
    },
    Login(){
      this.$router.push('Login');
    },
    about(){
      this.$router.push('about');
    }
  }
});
</script>
