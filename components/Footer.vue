<template>
  <footer class="footer navbar">
    <div class="container">
      <slot></slot>
    </div>
  </footer>
</template>

<style lang="sass">
  footer.footer
    position: fixed
    bottom: 0
    left: 0
    right: 0
    border-top: 1px solid #ddd
    z-index: 10
</style>
