<template>
  <div class="header">
    <div>
      <img src="../assets/img/logo.png" height="40px" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.header {
  height: 59px;
  background-color: red;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
}
@media (min-width: 768px) {
  .header {
    background-color: yellow;
  }
}
</style>
