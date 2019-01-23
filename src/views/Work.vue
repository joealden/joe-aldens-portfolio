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
            },
            {
              name: "TypeScript",
              link: "https://www.typescriptlang.org/"
            },
            {
              name: "Gatsby",
              link: "https://www.gatsbyjs.org/"
            },
            {
              name: "Styled Components",
              link: "https://www.styled-components.com/"
            },
            {
              name: "Jest",
              link: "https://jestjs.io/"
            },
            {
              name: "Contentful",
              link: "https://www.contentful.com/"
            },
            {
              name: "Netlify",
              link: "https://www.netlify.com/"
            }
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
            },
            {
              name: "TypeScript",
              link: "https://www.typescriptlang.org/"
            },
            {
              name: "Next",
              link: "https://nextjs.org/"
            },
            {
              name: "Apollo Client",
              link: "https://www.apollographql.com/docs/react/"
            },
            {
              name: "Styled Components",
              link: "https://www.styled-components.com/"
            },
            {
              name: "Ramda",
              link: "https://ramdajs.com/"
            },
            {
              name: "Node",
              link: "https://nodejs.org/en/"
            },
            {
              name: "Express",
              link: "https://expressjs.com/"
            },
            {
              name: "Prisma",
              link: "https://www.prisma.io/"
            },
            {
              name: "JWTs",
              link: "https://jwt.io/"
            },
            {
              name: "GraphQL Subscriptions",
              link: "https://www.howtographql.com/react-apollo/8-subscriptions/"
            },
            {
              name: "Zeit Now",
              link: "https://zeit.co/now"
            }
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
            },
            {
              name: "Nuxt",
              link: "https://nuxtjs.org/"
            },
            {
              name: "Apollo Client",
              link: "https://vue-apollo.netlify.com/"
            },
            {
              name: "Stylus",
              link: "http://stylus-lang.com/"
            },
            {
              name: "Graphcool Framework",
              link: "https://www.graph.cool/"
            },
            {
              name: "ESLint",
              link: "https://eslint.org/"
            },
            {
              name: "Zeit Now",
              link: "https://zeit.co/now"
            }
          ]
        }
        /* TODO: Add px-to-vw */
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
  flex-direction: column;
  justify-content: center;
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
  background-color: #080808;
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
    color: white;
    transition: color 0.3s ease;

    &:hover {
      color: #19f2be;
    }
  }
}
</style>
