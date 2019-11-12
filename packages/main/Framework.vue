<template>
  <section>
    <headerNav />
    p {{ loading }}22
    <div v-if="loading">loading</div>
    <div class="appContainer" v-html="content">content</div>
  </section>
</template>

<script>
import headerNav from './vue/header.vue'
export default {
  name: 'framework',
  components: { headerNav },
  props: {
    loading: Boolean,
    content: String,
  }
};
</script>

