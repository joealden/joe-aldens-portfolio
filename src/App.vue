<template>
  <div>
    <div id="nav-wrapper">
      <div id="inner-nav-wrapper">
        <div id="nav-links">
          <router-link to="/">Work</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
        <div id="github-link">
          <a
            href="https://github.com/joealden"
            rel="noreferrer noopener"
            target="_blank"
            title="Link to my Github page"
          >
            <github-icon></github-icon>
          </a>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import GithubIcon from "@/components/GithubIcon.vue";

export default {
  components: {
    GithubIcon
  }
};
</script>


<style lang="scss">
/* -------------------------- CSS Reset -------------------------- */

* {
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
}

html {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
  color: black;
}

@media screen and (max-width: 2000px) {
  html {
    font-size: 18px;
  }
}

body {
  margin: 0;
  overflow-y: scroll;
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  margin: 0;
}

a {
  text-decoration: none;
  color: #9b9b9b;
  transition: color 0.3s ease;

  &:hover {
    color: black;
  }
}

/* --------------------- End of CSS Reset --------------------- */

#nav-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: "";
    width: 100%;
    height: 5px;
    background-color: black;
  }
}

#inner-nav-wrapper {
  display: flex;
  align-items: center;
  max-width: 1660px;
  width: 100%;
  justify-content: space-between;

  a {
    display: block;
    outline-color: black;
  }
}

#nav-links {
  display: flex;

  a {
    padding: 30px;
    font-size: 0.8rem;

    &.router-link-exact-active {
      color: black;
    }

    @media screen and (max-width: 600px) {
      &:first-child {
        padding: 30px 30px 30px 20px;
      }
    }

    @media screen and (max-width: 420px) {
      padding: 20px;

      &:first-child {
        padding: 20px;
      }
    }

    @media screen and (max-width: 350px) {
      padding: 15px;

      &:first-child {
        padding: 15px 15px 15px 20px;
      }
    }
  }
}

#github-link {
  display: block;

  a {
    padding: 20px 30px;

    @media screen and (max-width: 600px) {
      padding: 20px;
    }

    svg {
      display: block;
      stroke: #9b9b9b;
      transition: stroke 0.3s ease;
    }

    &:hover svg {
      stroke: black;
    }
  }
}
</style>
