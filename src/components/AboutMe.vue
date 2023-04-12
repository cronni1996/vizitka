<template>
<Header/>
  <transition name="fade">
  <section   class="about-me page col-lg-12 col-md-11 col-sm-12 col-xs-12 ">

    <div class="container ">
      <div class="image col-lg-3"><img class="photo" src="../img/photo.png"></div>
      <div class="text">
        <h1>Малюков Павел</h1>
    <h2>Frontend developper VueJS </h2>

<span class="menu-icon lnr lnr-briefcase"></span>
    <p>{{ about }}</p>
    </div>
    </div>
  </section>
  </transition>
</template>

<script>
// import BackgroundScript from '../components/script'
import Header from "@/components/Header.vue";

export default {
  components: {Header},
  data() {
    return {
      about: "Я начинающий Frontend developper. Ищу команду в которой мы будем как одна большая семья. Сейчас у меня мало опыта но я очень быстро учусь!)"
    }
  }
}
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


.about-me {
  margin-left: 98px;
  color: #fff;
  padding: 50px;
  height: 100vh;
}
.container{
  margin-top: 12vh;
display: flex;


}


.image{
 ;
  width: 330px;
}

.photo{
  width: 320px
}

.text{
  text-align: center;
}



.about-me h2 {
  font-size: 2em;
  margin-bottom: 20px;
}

.about-me p {
  font-size: 1.2em;
}

/* Адаптивные стили */


</style>
