<template>
<div>
  <header>
    <nav>
      <li>
        <a @click="goto('react app', '/react')">react</a>
      </li>
      <li>
        <a @click="goto('vue app', '/vue')">vue</a>
      </li>
    </nav>
  </header>
<div>
</template>

<script>
export default {
  name: 'headerNav',
  methods: {
    goto (title, href) {
      window.history.pushState({}, title, href);
    }
  },
}
</script>

<style lang="less" scoped>
</style>