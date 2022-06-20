<template>
  <nav class="navbar" aria-label="main">
    <nuxt-link to="/" class="logo">
      <span>CMD Mid-Term</span>
    </nuxt-link>
    <ul class="navLinks">
      <li v-for="(link, index) in links" :key="index" class="navItem">
        <nuxt-link :to="link.url" aria-expanded="false">
          {{ link.text }}
        </nuxt-link>
        <!-- <ul>
          <li
            v-for="(sublink, subindex) in link.subheading"
            :key="subindex"
            class="hasSubmenu"
          >
            <a :href="sublink.url">{{ sublink.text }}</a>
          </li>
        </ul> -->
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          text: 'Beoogde leerresultaten',
          url: '/SomethingX',
          // subheading: [
          //   { text: '1.1', url: '/SomethingX#1.1' },
          //   { text: '1.2', url: '/SomethingX#1.2' },
          //   { text: '1.3', url: '/SomethingX#1.3' },
          // ],
        },
        {
          text: 'Onderwijsleeromgeving',
          url: '/somethingu',
          // subheading: [
          //   { text: '1.1', url: '#1.1' },
          //   { text: '1.2', url: '#1.2' },
          //   { text: '1.3', url: '#1.3' },
          // ],
        },
        {
          text: 'Toetsing',
          url: '/somethingh',
          // subheading: [
          //   { text: '1.1', url: '#1.1' },
          //   { text: '1.2', url: '#1.2' },
          //   { text: '1.3', url: '#1.3' },
          // ],
        },
        {
          text: 'Gerealiseerde toetsresultaten',
          url: '/somethingh',
          // subheading: [
          //   { text: '1.1', url: '#1.1' },
          //   { text: '1.2', url: '#1.2' },
          //   { text: '1.3', url: '#1.3' },
          // ],
        },
      ],
    }
  },
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  padding: 1.5em 2em;

  background-color: #fff021;
  background-color: var(--geel);
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
}
.logo {
  font-weight: bold;
  text-decoration: none;
  color: #000000;
  color: var(--black);
}
.navLinks {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
}

.navLinks > li {
  padding: 0 1em;
}
.navItem a {
  color: inherit;
  text-decoration: none;
}

li {
  display: block;
  float: left;
  padding: 0.8rem;
  position: relative;
  text-decoration: none;
  transition-duration: 200ms;
}

li a {
  color: var(--white);
}

li:hover {
  background: var(--black);
  color: var(--white);
  cursor: pointer;
}

/* Submenu */
/* ul li ul {
  background: var(--black);
  visibility: hidden;
  opacity: 0;
  min-width: 100%;
  position: absolute;
  left: 0;
  display: none;
}

ul li:hover > ul,
ul li ul:hover {
  visibility: visible;
  opacity: 1;
  display: block;
}

ul li ul li {
  clear: both;
  width: 100%;
}

.hasSubmenu a {
  display: inline-block;
  width: 100%;
}
.hasSubmenu:hover {
  background-color: var(--geel);
  color: var(--black);
} */
/* end submenu */

.nuxt-link-active {
  font-weight: bold;
}

@media screen and (max-width: 820px) {
  a {
    font-size: 1em;
  }
}
@media screen and (max-width: 1100px) {
  .navbar > * {
    font-size: 0.8em;
  }
}
</style>
