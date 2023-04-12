<template>

  <div class="app page col-lg-12 col-md-12 col-sm-12 col-xs-12" >
    <div id="nav">
    <Header class="header-container" />
      </div>
        <transition name="router-anim">
          <router-view/>
        </transition>
<!--    <AboutMe class="col-lg-12 col-md-11 col-sm-12 col-xs-12  " />-->
<!--    <Skills  class="col-lg-12 col-md-11 col-sm-11 col-xs-12 "/>-->
<!--    <Portfolio class="col-lg-12 col-md-11 col-sm-12 col-xs-12 " />-->
<!--        <Footer />-->
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import AboutMe from '../components/AboutMe.vue';
import Skills from '../components/Skills.vue';
import Portfolio from '../components/Portfolio.vue';

export default {
  components: {
    Header,
    Footer,
    AboutMe,
    Skills,
    Portfolio
  }
}
</script>

<style>
.app {
  font-family: Arial, sans-serif;
}
</style>
