<template>
  <!-- <section class="section">
    <PrismicRichText :field="slice.primary.title" class="title" />
    <PrismicRichText :field="slice.primary.description" />
  </section> -->
  <section
    :style="{ backgroundImage: `url(${slice.primary.backgroundImage})` }"
  >
    <div class="header-content">
      <!-- <h1>2.0 Onderwijsleeromgeving</h1> -->
      <PrismicRichText :field="slice.primary.title" class="title" />
      <!-- <p id="header-block-h1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id
        sapiente recusandae. Nobis facere ratione earum sunt pariatur, quisquam
        unde velit corporis fuga, qui suscipit ipsam quae necessitatibus
        voluptate fugiat?
      </p> -->
      <PrismicRichText
        :field="slice.primary.description"
        id="header-block-h1"
      />
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  name: 'HeroComponent',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
}
</script>

<style scoped>
section {
  top: -7em;
}

@media only screen and (max-device-width: 820px) {
  section {
    top: 0;
  }
}

section {
  height: 25vw;
  background-image: url('https://images.prismic.io/midtermacc/630fba58-4e9f-4156-acd9-a9b81ad90a74_cmd_daantjebons_0032-960x640.jpg?auto=compress,format');
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-color: #ffcc00;
  width: 100%;
  position: absolute;
  top: 1em;
  left: 0;
}

.header-content {
  margin-left: 5em;
}

.title {
  position: absolute;
  font-size: 3.5vw;
  color: #fff021;
  width: 100%;
  margin-top: 2em;
}

#header-block-h1 {
  position: absolute;
  font-size: 1.1vw;
  font-style: italic;
  color: white;
  width: 40%;
  margin-top: 14em;
  width: 50%;
}
</style>
