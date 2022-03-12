<template>
  <div class="container-icons">
    <h2>Qualification</h2>
    <div class="container-icons__content">
      <span class="container-icons__content__box-icon">
        <font-awesome-icon
          size="2x"
         
          :icon="classIcon1"
          @mouseenter="hoverStar(1)"
          @mouseleave="hoverStar(0)"
          @click="calif(1)"
        />
      </span>

      <span class="container-icons__content__box-icon"
        ><font-awesome-icon
          size="2x"
          
          :icon="classIcon2"
          @mouseenter="hoverStar(2)"
          @mouseleave="hoverStar(0)"
          @click="calif(2)"
      /></span>
      <span class="container-icons__content__box-icon"
        ><font-awesome-icon
          size="2x"
          
          :icon="classIcon3"
          @mouseenter="hoverStar(3)"
          @mouseleave="hoverStar(0)"
          @click="calif(3)"
      /></span>
      <span class="container-icons__content__box-icon"
        ><font-awesome-icon
          size="2x"
          
          :icon="classIcon4"
          @mouseenter="hoverStar(4)"
          @mouseleave="hoverStar(0)"
          @click="calif(4)"
      /></span>
      <span class="container-icons__content__box-icon"
        ><font-awesome-icon
          size="2x"
          
          :icon="classIcon5"
          @mouseenter="hoverStar(5)"
          @mouseleave="hoverStar(0)"
          @click="calif(5)"
      /></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Review",
  data: function () {
    return {
      // clases css para cada icono de estrella 
      classIcon1: "fa-regular fa-star",
      classIcon2: "fa-regular fa-star",
      classIcon3: "fa-regular fa-star",
      classIcon4: "fa-regular fa-star",
      classIcon5: "fa-regular fa-star",
      // valor de la calificacion
      calificated: 0,
     
      };
  },
  methods: {
    // metodo que marca pinta las estrellas al hoveriar con el mouse
    hoverStar(value) {
    
      
      switch (value) {
        // hover sobre la estrella #1
        case 1:
          this.classIcon1 = "fa-solid fa-star";//estrella de color solido
          this.classIcon2 = "fa-regular fa-star";//estrella vacia
          this.classIcon3 = "fa-regular fa-star";
          this.classIcon4 = "fa-regular fa-star";
          this.classIcon5 = "fa-regular fa-star";

          break;
       // hover sobre la estrella #2
       case 2:
          this.classIcon1 = "fa-solid fa-star";
          this.classIcon2 = "fa-solid fa-star";
          this.classIcon3 = "fa-regular fa-star";
          this.classIcon4 = "fa-regular fa-star";
          this.classIcon5 = "fa-regular fa-star";

          break;
         // hover sobre la estrella #3
        case 3:
          
          this.classIcon1 = "fa-solid fa-star";
          this.classIcon2 = "fa-solid fa-star";
          this.classIcon3 = "fa-solid fa-star";
          this.classIcon4 = "fa-regular fa-star";
          this.classIcon5 = "fa-regular fa-star";

          break;
           // hover sobre la estrella #4
        case 4:
          this.classIcon1 = "fa-solid fa-star";
          this.classIcon2 = "fa-solid fa-star";
          this.classIcon3 = "fa-solid fa-star";
          this.classIcon4 = "fa-solid fa-star";
          this.classIcon5 = "fa-regular fa-star";

          break;
           // hover sobre la estrella #5
        case 5:
          this.classIcon1 = "fa-solid fa-star";
          this.classIcon2 = "fa-solid fa-star";
          this.classIcon3 = "fa-solid fa-star";
          this.classIcon4 = "fa-solid fa-star";
          this.classIcon5 = "fa-solid fa-star";

          break;
        default:
          //si la calificacion es 0 (no califico = no dio click) las pinta todas vacias
          if (this.calificated==0) {
            this.classIcon1 = "fa-regular fa-star";
            this.classIcon2 = "fa-regular fa-star";
            this.classIcon3 = "fa-regular fa-star";
            this.classIcon4 = "fa-regular fa-star";
            this.classIcon5 = "fa-regular fa-star";
          } else {
            // las pinta hasta el valor guardado
            this.calif(this.calificated);
          }

          break;
      }
    },
    // 
    calif(value) {
      // se pinta el numero de estrellas calificadas
      this.hoverStar(value);
      //se alamcena el valor
      this.calificated = value;
      //se espera medio segundo para apresiar el cambio en la interfaz antes de limpiarla
      setTimeout(() => {
         this.hoverStar(0);
      }, 1000);

      // aqui se llama una funcion para hacer algo con el valor almacenado
      this.nextComic()
      
    },
    nextComic(){
      //reseteo de la calificacion
      this.calificated='0'
      //se activa la animaacion de enviado por medio del estado en vuex
      this.$store.dispatch("setSendAnimateAction",{valor:true})
      //se espera 1 segundo para quitar la animacion
      setTimeout(() => {
        this.$store.dispatch("setSendAnimateAction",{valor:false})
      }, 1000);
      //se emite el evento que dispara la actualizacion de comic
      this.$emit("infoEnviada")
      
     
    }
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
* {
  font-family: "Rubik", sans-serif;
}
.container-icons {
  margin-top: 1rem;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  // box-shadow: 0px 5px  10px rgba(128, 128, 128, 0.548) ;
  border-radius: 5px;
  &__content {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    &__box-icon:hover {
      cursor: pointer;
    }
  }
}
</style>