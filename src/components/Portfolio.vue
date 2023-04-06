<template>
  <div class="portfolio">
    <h2>Portfolio</h2>
    <ul class="portfolio-list">
      <li v-for="project in projects" :key="project.id">
        <div class="project-thumbnail">
          <img :src="project.image" :alt="project.name" />
          <div class="overlay">
            <div class="overlay-content">
              <h3>{{ project.name }}</h3>
              <p>{{ project.description }}</p>
              <a :href="project.link" class="btn" target="_blank">View project</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'Project 1',
          image: 'https://via.placeholder.com/500x300',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          link: '#'
        },
        {
          id: 2,
          name: 'Project 2',
          image: 'https://via.placeholder.com/500x300',
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          link: '#'
        },
        {
          id: 3,
          name: 'Project 3',
          image: 'https://via.placeholder.com/500x300',
          description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style scoped>
.portfolio {
  margin-left: 5%;
  margin-bottom: 40px;
  height: 100vh;
}
h2 {
  font-size: 2em;
  margin-bottom: 20px;
}
.portfolio-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.portfolio-list li {
  width: calc(33.33% - 10px);
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
}
.project-thumbnail img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.overlay:hover {
  opacity: 1;
}
.overlay-content {
  text-align: center;
  color: #fff;
  padding: 20px;
}
.overlay-content h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
}
.overlay-content p {
  font-size: 1em;
  margin-bottom: 20px;
}
.btn {
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}
.btn:hover {
  background-color: #0062cc;
}
</style>
