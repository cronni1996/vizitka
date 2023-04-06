<template>
  <section class="about-me">
    <h2>About Me</h2>
    <p>{{ about }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt purus nec bibendum pretium. Donec sit amet interdum sapien, vel molestie velit. Nulla in metus lectus. Nam ac ex est."
    }
  }
}
</script>

<style scoped>
.about-me {
  /*max-width: 100%;*/
  /*margin: 50px 5% 0 5%;*/
  margin-left: 95px;
  background-color: #252525;
  color: #fff;
  padding: 50px;
  height: 100vh;
}

.about-me h2 {
  font-size: 2em;
  margin-bottom: 20px;
}

.about-me p {
  font-size: 1.2em;
}

/* Адаптивные стили */

@media only screen and (max-width: 768px) {
  .about-me {
    margin: 50px 5%;
    padding: 30px;
  }

  .about-me h2 {
    font-size: 1.5em;
  }

  .about-me p {
    font-size: 1em;
  }
}

@media only screen and (max-width: 480px) {
  .about-me {
    margin: 30px 5%;
    padding: 20px;
  }

  .about-me h2 {
    font-size: 1.2em;
  }

  .about-me p {
    font-size: 0.9em;
  }
}
</style>
