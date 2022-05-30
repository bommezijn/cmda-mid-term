<template>
  <div>
    <Tutorial />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID('Standaard', 'standaard-2')

    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
