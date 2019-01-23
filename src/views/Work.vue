<template>
  <div id="home">
    <div id="header-and-projects">
      <div id="header">
        <h1>Joe Alden</h1>
        <h2>Software Developer</h2>
      </div>
      <div id="projects">
        <project
          v-for="project of projects"
          :key="project.name"
          :name="project.name"
          :description="project.description"
          :image="project.image"
          :link="project.link"
          :githubLink="project.githubLink"
          :tags="project.tags"
        ></project>
      </div>
    </div>
    <div id="contact-link-wrapper">
      <router-link to="/contact">Get in Touch</router-link>
    </div>
  </div>
</template>

<script>
import Project from "@/components/Project.vue";

import listedImage from "@/assets/listed-showcase.png";
import talqImage from "@/assets/talq-showcase.png";
import corumImage from "@/assets/corum-showcase.png";

export default {
  components: {
    Project
  },
  data() {
    return {
      projects: [
        {
          name: "Listed",
          description: "A Design Resource Site",
          image: listedImage,
          link: "https://listed.joealden.com",
          githubLink: "https://github.com/joealden/listed",
          tags: [
            {
              name: "React",
              link: "https://reactjs.org/"
            }
            /* TODO */
          ]
        },
        {
          name: "Talq",
          description: "A Real Time Communication Platform",
          image: talqImage,
          link: "https://talq.joealden.com",
          githubLink: "https://github.com/joealden/talq-client-web",
          tags: [
            {
              name: "React",
              link: "https://reactjs.org/"
            }
            /* TODO */
          ]
        },
        {
          name: "Corum",
          description: "A Community Moderated Forum",
          image: corumImage,
          link: "https://corum.joealden.com",
          githubLink: "https://github.com/joealden/corum-client",
          tags: [
            {
              name: "Vue",
              link: "https://vuejs.org/"
            }
            /* TODO */
          ]
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
#home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#header-and-projects {
  width: 100%;
  max-width: 1660px;
  padding: 0 30px;
}

#header {
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 200px;
  padding: 175px 0;

  @media screen and (max-width: 1660px) {
    padding: 10.54vw 0;
  }

  h1,
  h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  h1 {
    margin-right: 10px;
  }

  h2 {
    color: #9b9b9b;
  }
}

#projects {
  width: 100%;
}

#contact-link-wrapper {
  background-color: lightgrey;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: black;
  }
}
</style>
