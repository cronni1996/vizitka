<template>
  <div class="header-container  ">
      <div >
        <header class="header ">


        <div class="menu-container">
          <div class="menu">
            <div class="menu-item-container mb-2">
              <button class="menu-item btn btn-outline-light btn-sm">
                <img class="about-me" src="../img/lnr-user.svg" alt="About"/> About
              </button>
            </div>
            <div class="menu-item-container mb-2">
              <button class="menu-item btn btn-outline-light btn-sm">
                <img class="about-me" src="../img/lnr-graduation-hat.svg" alt="Home"/> Skills
              </button>
            </div>
            <div class="menu-item-container mb-2">
              <button class="menu-item btn btn-outline-light btn-sm" href="#AboutMe">
                <img class="about-me" src="../img/lnr-briefcase.svg"   alt="Portfolio"/> Portfolio
              </button>
            </div>
            <div class="menu-item-container mb-2">
              <button class="menu-item btn btn-outline-light btn-sm">
                <img class="about-me" src="../img/lnr-envelope.svg" alt="Contact"/> Contacts
              </button>
            </div>




          </div>
          <div class="sociates mt-auto">
            <div class="sociates1 d-flex justify-content-center justify-content-md-end">
              <div class="linked me-2">
                <button onclick="window.open('https://www.linkedin.com/in/pavel-malukow/', '_blank')"
                        class="linked-button btn btn-outline-light btn-sm">
                  <img class="linked-logo" src="../img/linkedin-logo.png" alt="Linked"/>
                </button>
              </div>
              <div class="Git">
                <button onclick="window.open('https://github.com/cronni1996', '_blank')"
                        class="git-button lnr lnr-apartment btn btn-outline-light btn-sm">
                  <img class="git-logo" src="../img/github.png" alt="GitHub"/>
                </button>
              </div>
            </div>
          </div>
        </div>

      </header>
      </div>

    </div>

</template>

<script>


</script>


<style scoped>
.header-container {
  width: 98px;
background-color: #adadad;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}





.menu-container {
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

}

.about-me {
  color: white;
  width: 35px;
  height: 35px;
}

.menu-item-container {
  padding-bottom: 52px;
  /*background-color: #ccc;*/
  border-radius: 5px;
  height: 40px;
  width: 67px;
}

.menu-item {
  padding-bottom: 0px;
  margin: 0px -6px 10px -7px;

}




.menu-item:hover {
  transform: scale(1.2);
}

.sociates {
  position: absolute;
  bottom: 10px;
  display: flex;
  flex-direction: row; /* added to align buttons horizontally */
}


.linked {
  border-radius: 5px;

}

.linked-logo {
  width: 20px;

}


.git-logo {
  width: 20px;
}
</style>
