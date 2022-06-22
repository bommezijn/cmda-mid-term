<template>
  <div>
    <!-- <NavigationHeader /> -->
    <PrismicHeader />
    <Nuxt />
  </div>
</template>

<script>
import PrismicHeader from '~/components/PrismicHeader.vue'
export default {
  components: {
    PrismicHeader,
  },
  // Called before rendering the layout (even for error page)
  async middleware({ store, $prismic }) {
    await store.dispatch('fetchMenu', $prismic)
  },
  head() {
    return {
      title: 'CMD Mid-Term',
    }
  },
}
</script>