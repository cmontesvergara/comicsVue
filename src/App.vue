<template>
  <div id="app" class="app">
    
   <Loading v-show="$store.getters.isCargando"/>
   
   <div class="app__content">
     <Card :titulo="titleComic" :imgSRC="imgComic" :fecha="fechaComic" :numero="numeroComic"/>
     <Review @infoEnviada="pullItem()" />
     <Send v-if="$store.getters.isSendAnimate" />
   </div>
   
  </div>
</template>

<script>
import Card from './components/Card.vue'
import Loading from './components/Loading.vue'
import Send from './components/Send.vue'
import Review from '@/components/Review.vue'
import api from './apis/apiComic.js'

export default {
  name: 'App',
  data:function(){
    return {
      titleComic:"...",
      imgComic:"...",
      fechaComic:"...",
      numeroComic:"...",
     
    }
  },
  components: {
    Card,
    Loading,
    Review,
    Send
  
  },
  methods:{
    async pullItem(){
      try {
        // obtenemos el numero del ultimo comic para el rango aleatorio
      const res = await api.getEndComic();
      // obtenemos un comic pasando el valor maximo posible
      const r = await api.getComic(res.data.num);
      //seteamos los valores del data a pasar al componente que los renderizara
      this.titleComic = r.data.safe_title;
      this.imgComic = r.data.img;
      this.fechaComic = `${r.data.day}/${r.data.month}/${r.data.year}`;
      this.numeroComic =  `${r.data.num}`
      
      //detenemos la animacion
      this.dontLoading();
      
      
      } catch (error) {
        console.error(error)
      }
    },
    
    dontLoading(){
      setTimeout(() => {
      this.$store.dispatch("setCargandoAction",{valor:false})
    }, 1000);
    }
  },
  
  mounted(){
    this.pullItem();
    document.body.scrollTop = 0;
  },
  
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
*{
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
}
.app {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  max-width: 100vw;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  overflow-x: hidden;
  overflow-y: auto;
  &__content{
    display: flex;
    flex-direction: column;
    justify-content: center;
  align-items: center;
  padding-bottom: auto;
  }
}

</style>
