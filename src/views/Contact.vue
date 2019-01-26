<template>
  <div id="contact-wrapper">
    <div id="contact-wrapper-inner">
      <div id="header">
        <h1>Contact</h1>
      </div>
      <div id="paragraphs-wrapper">
        <p>
          If you are in need of a developer and like my work, please feel free
          to get touch!
          The best ways of contacting me are by email or via Twitter DMs. Both of
          these are linked below.
        </p>
      </div>
    </div>
    <div id="contact-links">
      <div id="contact-links-inner">
        <div class="contact-item">
          <a
            href="mailto:me@joealden.com"
            rel="noreferrer noopener"
            target="_blank"
          >
            <email-icon></email-icon>
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
      </div>
    </div>
  </div>
</template>

<script>
import EmailIcon from "@/components/EmailIcon.vue";
import TwitterIcon from "@/components/TwitterIcon.vue";

export default {
  components: {
    EmailIcon,
    TwitterIcon
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
    font-size: 1.5rem;
  }
}

#paragraphs-wrapper {
  color: #9b9b9b;
  max-width: 650px;

  p {
    margin: 0;
  }

  p:not(:last-child) {
    margin-bottom: 30px;
  }
}

#contact-links {
  margin: 90px 0;
  width: 100%;
  max-width: 1660px;
}

#contact-links-inner {
  display: flex;
}

.contact-item {
  a {
    display: block;
    padding: 30px;

    svg {
      display: block;
      stroke: black;
      fill: white;
    }
  }
}
</style> 