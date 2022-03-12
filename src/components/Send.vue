<template>
  <div class="container-send">
  
    <span class=" animar">
      <font-awesome-icon icon="fa-solid fa-paper-plane" />
    </span>
  </div>
</template>

<script>

export default {
  name: "Send",
  mounted(){
    //creacion y reproduccion del audio
    let audio = new Audio(require('@/assets/audio-send.mp3'));
    audio.play();
  },
};
</script>

<style lang="scss" scoped>
.container-send {
  position: fixed;
  top: 0;
  padding: 0px;
  margin: 0px;
  display: flex;
  width: 100vw;
  height: 100%;
  min-height: 120vh;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  &__logo {
    display: flex;
    width: 15%;
  }
}
.animar{
    animation: 10s animat-in 0s  1;
    
}

@keyframes animat-in {
  0% {
    transform: scale(10);
  }
  10% {
    transform: scale(9) translate(50px,-50px);
  }
  20% {
    transform: scale(8) translate(100px,-100px);
    
  }
  30% {
    transform: scale(7) translate(150px,-150px);
    
  }
  40% {
    transform: scale(6) translate(200px,-200px);
    
    
  }
  50% {
    transform: scale(5) translate(250px,-250px);
    
  }
  60% {
    transform: scale(4) translate(300px,-300px);
    
  }
  70% {
    transform: scale(3)translate(350px,-350px);
    
  }
  80% {
    transform: scale(2) translate(400px,-400px);
    
  }
  90% {
    transform: scale(1) translate(450px,-450px);
    
  }
  100% {
    transform: scale(0.5) translate(500px,-500px);
  }
}
</style> 