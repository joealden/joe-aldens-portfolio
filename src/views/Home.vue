<template>
  <div id="home-wrapper">
    <div id="header-wrapper">
      <h1>Joe Alden</h1>
      <h2>Software Developer</h2>
    </div>
    <div id="projects-wrapper">
      <project></project>
      <project></project>
      <project></project>
    </div>
    <div id="contact-link-wrapper">
      <a>Get in Touch</a>
    </div>
  </div>
</template>

<script>
import Project from "@/components/Project.vue";

export default {
  components: {
    Project
  }
};
</script>

<style scoped lang="scss">
#home-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#header-wrapper {
  width: 100%;
  max-width: 1600px;
  padding: 150px 0;

  background-color: grey;
}

#projects-wrapper {
  width: 100%;
  max-width: 1600px;
}

#contact-link-wrapper {
  background-color: lightgrey;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
