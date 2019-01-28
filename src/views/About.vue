<template>
  <div>
    <div id="about-wrapper">
      <div id="about-wrapper-inner">
        <div id="header">
          <h1>About Me</h1>
        </div>
        <div id="paragraphs-wrapper">
          <p>
            I'm a software developer currently working on all things Web.
            This means that I focus most of my time developing things in JavaScript
            and other languages that have Web compile targets (TypeScript, Reason
            and Rust). I also have plenty of experience with other Web technologies
            such as HTML and CSS.
          </p>
          <p>
            When building new sites, I really enjoy using modern front-end
            frameworks like React and Vue to both get the job done efficently,
            and to keep me from going mad. They make it a breeze to build fast,
            maintainable, and reliable sites, all while making the DX (Developer
            Experience) top-notch! After building many sites in these declarative
            frameworks, I never want to go back to the old imperative ways of
            jQuery and manual DOM manipulation!
          </p>
          <p>
            Outside of work, when I'm not learning more about the tech I use in
            my work, I like to engage in other computing related things. I'm
            extremely passionate about everything FOSS (Free and Open Source
            Software). This means that when I can, I actively use and contribute
            my time to the projects I care about the most. This is usually in the
            form of code contributions and documentation fixes, as well as helping
            people when they get stuck.
          </p>
          <p>
            Below you will find the languages, libraries, tools and techniques
            that I have experience using, as well as those that I want to get more
            experienced with.
          </p>
        </div>
        <div id="technology-lists">
          <div class="technology-lists-column">
            <div class="technology-list">
              <h2>Technologies I Have Experience With:</h2>
              <ul>
                <li
                  v-for="item of techIHaveExperienceWith"
                  :key="item.name ? item.name : item[0].name"
                >
                  <template v-if="item.name !== undefined">
                    <a
                      v-if="item.link !== undefined"
                      :href="item.link"
                      rel="noreferrer noopener"
                      target="_blank"
                    >{{ item.name }}</a>
                    <span v-else>{{ item.name }}</span>
                  </template>
                  <template v-else>
                    <a
                      v-if="item[0].link !== undefined"
                      :href="item[0].link"
                      rel="noreferrer noopener"
                      target="_blank"
                    >{{ item[0].name }}</a>
                    <span v-else>{{ item[0].name }}</span>
                    <ul>
                      <li
                        v-for="singleItem in item.slice(1, item.length)"
                        :key="singleItem.name"
                      >
                        <a
                          v-if="singleItem.link !== undefined"
                          :href="singleItem.link"
                          rel="noreferrer noopener"
                          target="_blank"
                        >{{ singleItem.name }}</a>
                        <span v-else>{{ item[0].name }}</span>
                      </li>
                    </ul>
                  </template>
                </li>
              </ul>
            </div>
          </div>
          <div class="technology-lists-column">
            <div class="technology-list">
              <h2>Technologies I Want More Experience With:</h2>
              <ul>
                <li
                  v-for="item of techIWantMoreExperienceWith"
                  :key="item.name"
                >
                  <a
                    v-if="item.link !== undefined"
                    :href="item.link"
                    rel="noreferrer noopener"
                    target="_blank"
                  >{{ item.name }}</a>
                  <span v-else>{{ item.name }}</span>
                </li>
              </ul>
            </div>
            <div class="technology-list">
              <h2>Technologies I Want To Learn:</h2>
              <ul>
                <li v-for="item of techIWantToLearn" :key="item.name">
                  <a
                    v-if="item.link !== undefined"
                    :href="item.link"
                    rel="noreferrer noopener"
                    target="_blank"
                  >{{ item.name }}</a>
                  <span v-else>{{ item.name }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <contact-link></contact-link>
  </div>
</template>

<style lang="scss" scoped>
#about-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#about-wrapper-inner {
  width: 100%;
  max-width: 1660px;
  padding: 0 30px;

  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }
}

#header {
  padding: 175px 0 125px 0;

  @media screen and (max-width: 750px) {
    padding: 112px 0 90px 0;
  }

  h1 {
    font-size: 1.5rem;
  }
}

#paragraphs-wrapper {
  color: #9b9b9b;
  max-width: 1000px;

  p {
    margin: 0;
  }

  p:not(:last-child) {
    margin-bottom: 30px;
  }
}

#technology-lists {
  display: flex;
  margin: 180px 0;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    margin: 100px 0;

    .technology-lists-column:not(:last-child) {
      margin-bottom: 100px;
    }
  }
}

.technology-lists-column {
  flex: 1;

  > :nth-child(2) {
    margin-top: 150px;

    @media screen and (max-width: 900px) {
      margin-top: 100px;
    }
  }
}

.technology-list {
  h2 {
    font-size: 1.1rem;
    margin-bottom: 50px;

    @media screen and (max-width: 900px) {
      margin-bottom: 35px;
    }
  }

  ul {
    margin: 0;
    list-style: square;
  }

  li {
    margin: 5px 0;
  }

  span {
    color: #9b9b9b;
  }
}
</style>

<script>
import ContactLink from "@/components/ContactLink.vue";

export default {
  components: {
    ContactLink
  },
  data() {
    return {
      techIHaveExperienceWith: [
        {
          name: "Git",
          link: "https://git-scm.com/"
        },
        {
          name: "HTML (HTML5)",
          link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/"
        },
        {
          name: "Modern JavaScript (ES2015+)",
          link: "https://node.green/"
        },
        {
          name: "Modern CSS (Flexbox, Grid etc.)",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/"
        },
        {
          name: "CSS Preprocessors (SCSS, Stylus)",
          link:
            "https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor/"
        },
        {
          name: "Functional Programming"
        },
        {
          name: "Linux Based Operating Systems"
        },
        {
          name: "Uniting Testing (Jest)",
          link: "https://jestjs.io/"
        },
        {
          name: "TypeScript",
          link: "https://www.typescriptlang.org/"
        },
        {
          name: "Node",
          link: "https://nodejs.org/en/about/"
        },
        [
          {
            name: "React",
            link: "https://reactjs.org/"
          },
          {
            name: "Gatsby",
            link: "https://www.gatsbyjs.org/"
          },
          {
            name: "Next",
            link: "https://nextjs.org/"
          },
          {
            name: "Styled Components",
            link: "https://www.styled-components.com/"
          }
        ],
        [
          {
            name: "Vue",
            link: "https://vuejs.org/"
          },
          {
            name: "Nuxt",
            link: "https://nuxtjs.org/"
          },
          {
            name: "Vue Router",
            link: "https://router.vuejs.org/"
          },
          {
            name: "Vuex",
            link: "https://vuex.vuejs.org/"
          },
          {
            name: "Vue CLI 3",
            link: "https://cli.vuejs.org/"
          }
        ],
        [
          {
            name: "GraphQL",
            link: "https://graphql.org/"
          },
          {
            name: "Prisma",
            link: "https://www.prisma.io/"
          },
          {
            name: "Apollo Client",
            link: "https://www.apollographql.com/docs/react/"
          },
          {
            name: "GraphQL Yoga",
            link: "https://github.com/prisma/graphql-yoga/"
          }
        ],
        {
          name: "Webpack",
          link: "https://webpack.js.org/"
        },
        {
          name: "Babel",
          link: "https://babeljs.io/"
        },
        {
          name: "Lodash",
          link: "https://lodash.com/"
        },
        {
          name: "Ramda",
          link: "https://ramdajs.com/"
        },
        {
          name: "Contentful",
          link: "https://www.contentful.com/"
        },
        {
          name: "Netlify",
          link: "https://www.netlify.com/"
        },
        {
          name: "Zeit Now",
          link: "https://zeit.co/now"
        }
      ],
      techIWantMoreExperienceWith: [
        {
          name: "Rust",
          link: "https://www.rust-lang.org/"
        },
        {
          name: "Reason (OCaml)",
          link: "https://reasonml.github.io/"
        },
        {
          name: "Docker",
          link: "https://www.docker.com/"
        },
        {
          name: "Systems Programming"
        }
      ],
      techIWantToLearn: [
        {
          name: "Go",
          link: "https://golang.org/"
        },
        {
          name: "Haskell",
          link: "https://www.haskell.org/"
        },
        {
          name: "C/C++"
        },
        {
          name: "Graphics Programming"
        }
      ]
    };
  }
};
</script>