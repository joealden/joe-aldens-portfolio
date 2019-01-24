<template>
  <div id="contact-wrapper">
    <div id="contact-wrapper-inner">
      <div id="header">
        <h1>Contact</h1>
      </div>
      <div id="paragraphs-wrapper">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.
        </p>
        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        </p>
      </div>
      <div id="contact-links">
        <div id="contact-links-inner">
          <div class="contact-item">
            <a
              href="https://github.com/joealden"
              rel="noreferrer noopener"
              target="_blank"
            >
              <github-icon></github-icon>
            </a>
          </div>
          <div class="contact-item">
            <a
              href="https://twitter.com/joealden_"
              rel="noreferrer noopener"
              target="_blank"
            >
              <twitter-icon></twitter-icon>
            </a>
          </div>
          <div class="contact-item">
            <a
              href="mailto:me@joealden.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              <email-icon></email-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GithubIcon from "@/components/GithubIcon.vue";
import TwitterIcon from "@/components/TwitterIcon.vue";
import EmailIcon from "@/components/EmailIcon.vue";

export default {
  components: {
    GithubIcon,
    TwitterIcon,
    EmailIcon
  }
};
</script>


<style lang="scss" scoped>
#contact-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#contact-wrapper-inner {
  width: 100%;
  max-width: 1660px;
  padding: 0 30px;
}

#header {
  padding: 175px 0 125px 0;

  @media screen and (max-width: 750px) {
    padding: 112px 0 90px 0;
  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
  }
}

#paragraphs-wrapper {
  color: #9b9b9b;
  max-width: 720px;

  p {
    margin: 0;
  }

  p:not(:last-child) {
    margin-bottom: 30px;
  }
}
</style>