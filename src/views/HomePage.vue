<template>
  <div class="app col-lg-12 col-md-12 col-sm-12 col-xs-12" >
    <Header class="header-container" />
    <AboutMe class="col-lg-12 col-md-11 col-sm-12 col-xs-12  " />
    <Skills  class="col-lg-12 col-md-11 col-sm-11 col-xs-12 "/>
    <Portfolio class="col-lg-12 col-md-11 col-sm-12 col-xs-12 " />

<!--    <router-view />-->
    <Footer />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import AboutMe from '../components/AboutMe.vue';
import Skills from '../components/Skills.vue';
import Portfolio from '../components/Portfolio.vue';
import Line from "@/components/Line.vue";

export default {
  components: {
    Line,
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
