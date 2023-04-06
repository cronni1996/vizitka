<template>
  <div class="app">
    <Header />
    <AboutMe />
    <Skills />
    <Portfolio />
<!--    <router-view />-->
    <Footer />
  </div>
</template>

<script>
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
