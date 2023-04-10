<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h3>About Me</h3>
          <p>Some information about me and my work.</p>
        </div>
        <div class="col-md-6">
          <h3>Contact Me</h3>
          <ul>
            <li><a href="mailto:example@gmail.com">example@gmail.com</a></li>
            <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
            <li><a href="#">My Location</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  // логика компонента
}
</script>

<style scoped>
.footer {
  margin-left: 98px;
  background-color: #252525;
  color: #fff;
  padding: 40px 20px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.row {
  display: flex;
  justify-content: space-between;
}
.col-md-6 {
  width: 48%;
}
h3 {
  font-size: 1.5em;
  margin-bottom: 20px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  margin-bottom: 10px;
}
a {
  color: #fff;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
