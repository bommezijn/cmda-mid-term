<template>
  <section v-if="pos == 'single' && content.length == 1">
    <p>
      {{ content }}
    </p>
  </section>
  <section v-else-if="pos == 'imgLeft'">
    <p>
      {{ content }}
    </p>
    <nuxt-img :src="img" sizes="sm100vw md:50vw lg:400px" class="img" />
  </section>
  <section v-else-if="pos == 'imgRight'" class="alt">
    <nuxt-img :src="img" sizes="sm100vw md:50vw lg:400px" class="img" />
    <p>
      {{ content }}
    </p>
  </section>
  <section v-else class="multipleArticles">
    <p v-for="(elem, index) in content" :key="index">
      {{ elem }}
    </p>
  </section>
</template>


<script>
export default {
  props: {
    pos: { type: String, default: 'single' },
    img: { type: String, default: '/TestImage.jpeg' },
    content: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style scoped>
p {
  margin: 1em 0;
}
section {
  display: grid;
  gap: 0 60px;
  margin: 2em;
  padding: 1em;
}
.img {
  width: clamp(100%, 20em, 25em);
  object-fit: cover;
  object-position: bottom;
}

.alt > * {
  justify-self: start;
}

@media screen and (min-width: 821px) {
  section {
    grid-template-columns: repeat(2, 1fr);
  }

  .alt > * {
    justify-self: end;
  }
}
</style>