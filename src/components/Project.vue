<template>
  <div class="project">
    <div>
      <div class="project-image">
        <a :href="link" rel="noreferrer noopener" target="_blank">
          <img :src="image">
        </a>
      </div>
      <div class="project-details">
        <div class="project-name-and-description">
          <h3>{{ name }}</h3>
          <h4>{{ description }}</h4>
        </div>
        <div class="project-tags">
          <span v-for="tag of tags" :key="tag.name">{{ tag.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
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
  }

  &:last-child {
    margin-bottom: 160px;

    @media screen and (max-width: 1660px) {
      margin-bottom: 9.64vw;
    }
  }

  > div {
    display: flex;

    .project-image {
      flex: 1;

      a {
        display: block;
        position: relative;
        outline: none;

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

        img {
          display: block;
          width: 100%;
        }
      }
    }

    .project-details {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 75px 0;

      @media screen and (max-width: 1660px) {
        padding: 4.52vw 0;
      }

      .project-name-and-description {
        h3,
        h4 {
          margin: 0;
          font-size: 1.1rem;
        }

        h4 {
          margin-top: 3px;
          color: #9b9b9b;
        }
      }
    }
  }

  &:nth-child(2n - 1) > div {
    .project-image {
      margin-right: 60px;
    }
    .project-details {
      margin-left: 60px;
    }

    @media screen and (max-width: 1660px) {
      .project-image {
        margin-right: 3.61vw;
      }
      .project-details {
        margin-left: 3.61vw;
      }
    }
  }

  &:nth-child(2n) > div {
    flex-direction: row-reverse;

    .project-image {
      margin-left: 60px;
    }
    .project-details {
      margin-right: 60px;
    }

    @media screen and (max-width: 1660px) {
      .project-image {
        margin-left: 3.61vw;
      }
      .project-details {
        margin-right: 3.61vw;
      }
    }
  }
}
</style>
