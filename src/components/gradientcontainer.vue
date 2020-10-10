<template>
  <div class="gradient-container">
      <slot />
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
	.gradient-container {
		background-image: -webkit-linear-gradient(0deg, #766dff 0%, #88f3ff 100%);
	}
</style>