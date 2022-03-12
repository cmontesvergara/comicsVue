<template>
  <div class="container-loading">
    <img
      class="container-loading__logo animar"
      :src="require('@/assets/logo.png')"
      alt="logo"
    />
  </div>
</template>

<script>

export default {
  name: "Loading",
  
};
</script>

<style lang="scss" scoped>
.container-loading {
  position: absolute;
  padding: 0px;
  margin: 0px;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  &__logo {
    display: flex;
    width: 15%;
  }
}
.animar{
    animation: 1s animat-in 0s  infinite;
    
}

@keyframes animat-in {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style> 