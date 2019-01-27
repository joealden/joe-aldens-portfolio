<template>
  <div class="project">
    <div>
      <div class="project-image">
        <a
          :href="link"
          rel="noreferrer noopener"
          target="_blank"
          title="Visit the live site"
        >
          <img :src="image" :alt="`Screenshot of ${name}`">
        </a>
      </div>
      <div class="project-details-and-tags">
        <div class="project-details">
          <a
            :href="link"
            rel="noreferrer noopener"
            target="_blank"
            class="project-name-and-description"
          >
            <h3>{{ name }}</h3>
            <h4>{{ description }}</h4>
          </a>
          <div class="project-github-link">
            <a
              v-if="githubLink !== undefined"
              :href="githubLink"
              rel="noreferrer noopener"
              target="_blank"
              :title="`${name}'s github page`"
            >
              <github-icon></github-icon>
            </a>
          </div>
        </div>
        <div class="project-tags">
          <h5>Technologies Used:</h5>
          <div>
            <span
              v-for="tag of tags"
              :key="tag.name"
              class="project-tag-and-punctuation"
            >
              <span>
                <a
                  :href="tag.link"
                  rel="noreferrer noopener"
                  target="_blank"
                  :title="
                    /* Ensure correct pluralisation of tags */
                    tag.name.slice(-1) === 's' 
                    ? `${tag.name}' website`
                    : `${tag.name}'s website`
                  "
                >{{ tag.name }}</a>
              </span>
              <span>{{ tag === tags[tags.length - 1] ? "." : ",&nbsp;" }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import githubIcon from "@/components/GithubIcon.vue";

export default {
  name: "Project",
  components: {
    githubIcon
  },
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    githubLink: {
      type: String,
      required: true
    },
    tags: {
      /**
       *
       * Array<{
       *   name: string;
       *   link: string;
       * }>
       *
       */
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.project {
  &:not(:last-child):after {
    content: "";
    display: block;
    margin: 80px 0;
    height: 1px;
    background-color: lightgrey;

    @media screen and (max-width: 1660px) {
      margin: 4.82vw 0;
    }

    @media screen and (max-width: 1150px) {
      margin: 10vw 0;
    }
  }

  &:last-child {
    margin-bottom: 160px;

    @media screen and (max-width: 1660px) {
      margin-bottom: 9.64vw;
    }

    @media screen and (max-width: 1150px) {
      margin-bottom: 20vw;
    }
  }

  > div {
    display: flex;

    @media screen and (max-width: 1150px) {
      flex-direction: column;
    }
  }
}

.project-image {
  flex: 1;
  margin-right: 60px;

  @media screen and (max-width: 1660px) {
    margin-right: 3.61vw;
  }

  @media screen and (max-width: 1150px) {
    margin-right: 0;
  }

  a {
    display: block;
    position: relative;

    @media screen and (min-width: 1151px) {
      &:hover {
        &:after {
          opacity: 1;
          visibility: visible;
        }
      }

      &:after {
        content: "Visit";
        display: flex;
        color: white;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        background-color: rgba(0, 0, 0, 0.7);
      }
    }

    img {
      display: block;
      width: 100%;
    }
  }
}

.project-details-and-tags {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 75px 0;
  margin-left: 60px;

  @media screen and (max-width: 1660px) {
    padding: 4.52vw 0;
    margin-left: 3.61vw;
  }

  @media screen and (max-width: 1150px) {
    margin-left: 0;
    padding: 10vw 0 0 0;
    justify-content: flex-start;
  }
}

.project-details {
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1150px) {
    margin-bottom: 5vw;
  }
}

.project-name-and-description {
  h3,
  h4 {
    font-size: 1.1rem;
  }

  h3 {
    color: black;
  }

  h4 {
    margin-top: 4px;
    color: #9b9b9b;

    @media screen and (max-width: 600px) {
      font-size: 1rem;
      margin-right: 50px;
    }
  }
}

.project-github-link {
  margin-right: 60px;

  @media screen and (max-width: 1660px) {
    margin-right: 3.61vw;
  }

  @media screen and (max-width: 1150px) {
    margin-right: 0;
  }

  a {
    display: block;

    &:hover {
      svg {
        stroke: black;
      }
    }

    svg {
      display: block;
      width: 40px;
      height: 40px;
      stroke: #9b9b9b;
      transition: stroke 0.3s ease;

      @media screen and (max-width: 1150px) {
        width: 5vw;
        height: 5vw;
        min-width: 40px;
        min-height: 40px;
      }
    }
  }
}

.project-tags {
  h5 {
    margin-bottom: 12px;

    @media screen and (max-width: 1660px) {
      margin-bottom: 0.7229vw;
    }

    @media screen and (max-width: 1150px) {
      margin-bottom: 1vw;
    }

    @media screen and (max-width: 500px) {
      margin-bottom: 1.75vw;
    }
  }

  > div {
    color: #9b9b9b;
    max-width: 80%;

    @media screen and (max-width: 750px) {
      font-size: 0.9rem;
    }

    a {
      display: inline-block;
    }
  }
}

.project-tag-and-punctuation {
  display: inline-block;
}
</style>
