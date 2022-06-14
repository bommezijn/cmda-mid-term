<template>
  <nav class="navbar">
    <nuxt-link to="/" class="logo">
      <span>CMD Mid-Term</span>
    </nuxt-link>
    <ul class="navLinks">
      <li v-for="(link, index) in links" :key="index" class="navItem">
        <nuxt-link :to="link.url">
          {{ link.text }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: 'Beoogde leerresultaten', url: '/SomethingX' },
        { text: 'Onderwijsleeromgeving', url: '/somethingu' },
        { text: 'Toetsing', url: '/somethingh' },
        { text: 'Gerealiseerde toetsresultaten', url: '/somethingh' },
      ],
    }
  },
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  padding: 1.5em 2em;

  background-color: #fff021;
  background-color: var(--geel);
}
.logo {
  font-weight: bold;
  text-decoration: none;
  color: var(--black);
}
.navLinks {
  display: flex;
  justify-content: space-between;
  margin: 0;
  list-style-type: none;
}

.navLinks > li {
  padding: 0 1em;
}

.navItem {
  border: 1px solid transparent;
}
.navItem a {
  color: inherit;
  text-decoration: none;
}

.navItem:hover,
.navItem:active {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 0.1em;
}

.nuxt-link-active {
  /* text-shadow: 0 0.015em #101010, 0 -0.015em #101010, 0.01em 0 #101010,
    -0.01em 0 #101010; */
  font-weight: bold;
}
</style>

<!-- 
  accessibility, waar laat ik de verschillende modi zien?
  en tekst aanpassing
  wanneer het scherm kleiner is, dan wil ik een icoon voor linkjes ipv tekst. en dan openen

 -->