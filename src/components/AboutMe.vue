<template>
  <section  class="about-me">
    <a name="AboutMe" ></a>
    <h2>About Me</h2>
<span class="menu-icon lnr lnr-briefcase"></span>
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
 margin-left: 98px;

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


</style>
