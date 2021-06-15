<template>
  <div>
    <div>vuex2页面的值1：{{ num }}</div>
    <div>vuex2页面的值2：{{ $store.getters.GetNum }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {
    num() {
      return this.$store.state.num;
    },
  },

  methods: {},
};
</script>
<style lang='css' scoped>
</style>