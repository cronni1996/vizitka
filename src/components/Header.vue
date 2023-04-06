<template xmlns="http://www.w3.org/1999/html">
  <div class="header-container">
    <header class="header">


      <div class="menu-container">
        <div class="menu">

          <div class="menu-item-container">
            <button class="menu-item">
              <img class="about-me" src="../img/user.png" alt="About" />   About
            </button>
          </div>
          <div class="menu-item-container">
                        <button class="menu-item">
                          <img class="about-me" src="../img/pencil.png" alt="Home" />  Skills
                        </button>
                      </div>
          <div class="menu-item-container">
            <button class="menu-item">
              <img class="about-me" src="../img/portfolio.png" alt="Portfolio" /> Portfolio
            </button>
          </div>
          <div class="menu-item-container">
            <button class="menu-item">
              <img class="about-me" src="../img/information.png" alt="Contact" /> Contacts
            </button>
          </div>
        </div>
      </div>

<div class="sociates">

        <div class="linked">
          <button onclick="window.open('https://www.linkedin.com/in/pavel-malukow/', '_blank')"
              class="linked-button">
            <img class="linked-logo" src="../img/linkedin-logo.png"  />
          </button>
        </div>


      <div class="Git">
        <button onclick="window.open('https://github.com/cronni1996', '_blank')"
            class="git-button">
          <img class="git-logo" src="../img/github.png" alt="Linked" />
        </button>
      </div>
      </div>


    </header>
  </div>

</template>

<style scoped>
.header-container {
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}

.header {
  background-color: #000;
  color: #fff;
  height: 100%;
  padding: 0 10px;
  z-index: 9999;
}

.menu-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}

.about-me {
  width: 35px;
  height: 35px;
}

.menu {
  display: block;
}

.menu-item-container {
  display: block;
  margin-bottom: 10px;
  background-color: #ccc;
  border-radius: 5px;
  padding: 5px;
  height: 40px;
  width: 67px;
}

.menu-item {
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s ease;
}

.menu-item img {
  max-height: 20px;
}

.menu-item:hover {
  transform: scale(1.2);
}

.sociates {
  position: absolute;
  bottom: 10px;
  display: flex;
}

.linked {
  border-radius: 5px;
  padding-right: 3px;
}

.linked-logo {
  width: 20px;
}

.git-logo {
  width: 20px;
}

@media (max-width: 768px) {
  .header {
    padding: 0;
  }
  .menu-container {
    padding-top: 0;
  }
  .menu-item-container {
    margin-right: 10px;
    margin-bottom: 0;
    width: auto;
  }
  .menu-item img {
    max-height: 15px;
  }
  .sociates {
    position: static;
    display: block;
    text-align: center;
    margin-top: 10px;
  }
  .sociates button {
    margin-right: 10px;
  }
}
</style>
