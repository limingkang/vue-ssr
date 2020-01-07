<template>
  <div @click="show"> bar
    {{$store.state.name}}
  </div>
</template>

<script>
export default {
  // 异步数据，这个方法只在服务端执行，客户端不会执行
  // 它会在组件(仅限于页面组件)每次加载之前调用，只在服务端或路由更新之前调用。
  asyncData({ store }) {
    // 不能用this.$store,因为这个方法是在服务端执行，this不是vue实例
    // return this.$store.dispatch('setName');
    // 应该使用传过来的store对象
    return store.dispatch('setName');
  },
  mounted() {
    this.$store.dispatch('setName');
  },
  methods: {
    show() {
      alert('bar');
    }
  }
}
</script>
