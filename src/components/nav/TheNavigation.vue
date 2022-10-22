<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <router-link to="/">
        <img src="@/assets/cl.svg" class="img-fluid" alt="Code Loop">
      </router-link>
      <button class="navbar-toggler" type="button" @click="toggleNavbar" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div :class="{'collapse': true, 'navbar-collapse': true, 'show': toggledNavbar, 'justify-content-end': true}" id="navbarSupportedContent}">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <div @mouseover="hoveredNavbar = true" @mouseleave="hoveredNavbar = false">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Menü
              </a>
              <div :class="{'dropdown-menu': true, 'show': hoveredNavbar}" aria-labelledby="navbarDropdown">
                <router-link @click="hoveredNavbar = !hoveredNavbar" class="dropdown-item" to="/">Home</router-link>
                <router-link @click="hoveredNavbar = !hoveredNavbar" class="dropdown-item" to="/news">News</router-link>
                <router-link @click="hoveredNavbar = !hoveredNavbar" class="dropdown-item" to="/team">Team</router-link>
                <div class="dropdown-divider"></div>
                <router-link @click="hoveredNavbar = !hoveredNavbar" class="dropdown-item" to="/contact">Kontakt</router-link>
              </div>
            </div>
          </li>
          <li class="nav-item d-flex align-items-center">
            <a href="https://get.teamviewer.com" target="_blank">
              <font-awesome-icon title="Remote Support" class="fa d-none d-lg-block" icon="fa-solid fa-headset" size="2x" />
              <span class="d-lg-none menu-link">Remote Support</span>
            </a>
          </li>
          <li class="nav-item d-flex align-items-center">
            <a href="mailto:johannes.ehrhart@casablanca.at">
              <font-awesome-icon title="Email" class="fa d-none d-lg-block" icon="fa-solid fa-envelope" size="2x" />
              <span class="d-lg-none menu-link">Email</span>
            </a>
          </li>
          <li class="nav-item d-flex align-items-center">
            <a href="tel:+4354185622">
              <font-awesome-icon title="Telefonischer Kontakt" class="fa d-none d-lg-block" icon="fa-solid fa-phone" size="2x" />
              <span class="d-lg-none menu-link">Telefonischer Kontakt</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      toggledNavbar: false,
      hoveredNavbar: false
    }
  },
  methods: {
    toggleNavbar() {
      this.toggledNavbar = !this.toggledNavbar;
    }
  }
}
</script>

<style scoped>
  nav {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  #navbarDropdown {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .fa {
    padding: 0;
    margin-right: 2rem;
    color: grey;
  }

  .fa:hover {
    color:#990000
  }

  .fa-icon {
      color: black;
    }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: #990000;
  }

  .dropdown-item.active {
    background-color: #990000;
  }

  .menu-link {
    padding-left: 2rem;
    line-height: 2;
  }

  .dropdown-item:hover  {
    color: initial;
  }

  .dropdown-item:active  {
    background-color: #990000;
  }
</style>