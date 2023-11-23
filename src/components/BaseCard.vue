<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
};
</script>

<style scoped lang="scss">
.base-card {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.635);
  max-width: 400px;
  width: 100%;
  text-align: center;
  color: #333;
  font-size: 18px;
}
</style>
