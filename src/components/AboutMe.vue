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
  margin-left: 5%;
  background-color: #252525;
  color: #fff;
  padding: 50px;
}
.about-me h2 {
  font-size: 2em;
  margin-bottom: 20px;
}
.about-me p {
  font-size: 1.2em;
}
</style>
