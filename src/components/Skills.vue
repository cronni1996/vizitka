<template>
  <div class="skills">
    <h2>Skills</h2>
    <ul>
      <li v-for="skill in skills" :key="skill.id">
        <span class="skill-name">{{ skill.name }}</span>
        <div class="progress-bar">
          <div class="progress" :style="{ '--progress-width': skill.level }">
            {{ skill.level }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: [
        { id: 1, name: 'HTML', level: '80%' },
        { id: 2, name: 'CSS', level: '90%' },
        { id: 3, name: 'JavaScript', level: '70%' },
        { id: 4, name: 'Vue.js', level: '60%' },
        { id: 5, name: 'Node.js', level: '50%' }
      ]
    }
  }
}
</script>

<style scoped>
.skills {

  margin-left: 98px;
  margin-bottom: 40px;
  height: 100vh;
}
h2 {
  font-size: 2em;
  margin-bottom: 20px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.skill-name {
  flex: 1;
  margin-right: 10px;
}
.progress-bar {
  width: 100%;
  height: 10px;
  background-color: #ddd;
  position: relative;
}
.progress {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: #007bff;
  animation: progress-bar 2s ease-in-out;
  animation-fill-mode: both;
  color: #fff;
  font-size: 0.8em;
  display: flex;
  justify-content: center;
  align-items: center;
}
@keyframes progress-bar {
  0% {
    width: 0;
  }
  100% {
    width: var(--progress-width, 0);
  }
}
</style>
