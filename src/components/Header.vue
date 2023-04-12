<template>

  <div class="header-container  ">
      <div >
        <header class="header ">


        <div class="menu-container">
          <div class="menu">
            <div class="menu-item-container mb-2">
              <router-link to="/aboutMe" class="menu-item bi  bi-person btn btn-outline-light btn-sm" >About
              </router-link>
            </div>
            <div class="menu-item-container mb-2">
              <router-link to="/skills" class="menu-item bi bi-mortarboard btn btn-outline-light btn-sm">Skills</router-link>
            </div>
            <div class="menu-item-container mb-2">
              <router-link to="/portfolio" class="menu-item bi bi-briefcase btn btn-outline-light btn-sm">
                 Portfolio
              </router-link>
            </div>
            <div class="menu-item-container mb-2">
              <router-link to="contacts" class="menu-item bi bi-envelope btn btn-outline-light btn-sm">
                 Contacts<router-link to="/aboutMe"/>
              </router-link>
            </div>






          </div>
          <div class="sociates mt-auto">
            <div class="sociates1 d-flex justify-content-center justify-content-md-end">
              <div class="linked me-2">
                <button onclick="window.open('https://www.linkedin.com/in/pavel-malukow/', '_blank')"
                        class="linked-button bi bi-linkedin btn btn-outline-light btn-sm">
                </button>
              </div>
              <div class="Git">
                <button onclick="window.open('https://github.com/cronni1996', '_blank')"
                        class="git-button bi bi-github btn btn-outline-light btn-sm">

                </button>
              </div>
            </div>
          </div>
        </div>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
      </header>
      </div>

    </div>

</template>

<script>


</script>


<style scoped>
.header-container {

  width: 98px;

  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}


.menu{
  box-sizing: revert;
}


.menu-container {
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

}

.bi {
  color: #c2c2c2;
  font-size: 19px;

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
  display: grid;
  padding-bottom: 0px;
  margin: 0px -6px 10px -7px;
  height: 50px;
  width: 130%;
  justify-content: center;

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


</style>
