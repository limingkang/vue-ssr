<template>
  <div>
    <router-link to="/">bar</router-link>
    <router-link to="/foo">foo</router-link>
    <router-view/>
  </div>
</template>

<script>
import Bar from './components/Bar.vue';
import Foo from './components/Foo.vue';
export default {
  components: {
    Bar,
    Foo
  }
}
</script>