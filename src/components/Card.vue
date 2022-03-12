<template>
  <section class="card">
    <h1 class="card__title">{{titulo}}</h1>
    <img :src="imgSRC" alt="image_comic">
    <div class="card__info">
      <div>
      <span>#</span>
      <span>{{numero}}</span>
    </div>
      <div>
      <Span>Date:</Span>
      <Span>{{fecha}}</Span>
    </div>
    
    </div>
    
    <Review style="display:none;"/>
  </section>
</template>

<script>
import Review from "@/components/Review.vue"
export default {
  name: 'HelloWorld',
  props: {
    titulo: String,
    imgSRC:String,
    fecha:String,
    numero:String
  },
  components:{
    Review
  }
 
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
*{
  
  font-family: 'Rubik', sans-serif;
  box-sizing: border-box;
}

.card{
  padding: 1rem;
  margin: 1rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //box-shadow: 0px 0px 7px rgba(128, 128, 128, 0.363);
  border-radius: 5px;
  img{
    display: flex;width: 100%;
  }
  &__title{
    font-display: "Helvetica";
  }
  &__info{
    margin: 0.2rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
}
</style>
