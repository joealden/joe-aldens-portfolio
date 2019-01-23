<template>
  <div>
    <div id="nav-wrapper">
      <div id="inner-nav-wrapper">
        <router-link to="/">Work</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

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
}

a {
  text-decoration: none;
}

button {
  border: none;
  background: none;
  font-weight: normal;
  padding: 10px;
  cursor: pointer;
  font-size: inherit; /* Chrome needs explicit setting of this */
}

button:focus {
  outline: none;
}

/* Disables the focus outline that is only present on Firefox */
button::-moz-focus-inner {
  border: 0;
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
  max-width: 1660px;
  width: 100%;
  display: flex;

  a {
    display: block;
    color: black;
    transition: color 0.3s ease;
    color: #9b9b9b;
    outline: none;
    padding: 30px;
    font-size: 0.8rem;

    &:hover {
      color: black;
    }

    &.router-link-exact-active {
      color: black;
    }
  }
}
</style>
