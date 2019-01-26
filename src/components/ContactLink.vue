<template>
  <div class="contact-link-wrapper">
    <router-link to="/contact">Get in Touch</router-link>
  </div>
</template>

<script>
export default {
  name: "ContactLink"
};
</script>

<style lang="scss" scoped>
.contact-link-wrapper {
  background-color: #080808;
  width: 100%;
  height: 400px;
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

