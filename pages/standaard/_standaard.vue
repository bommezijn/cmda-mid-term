<template>
  <section>
    <PrismicRichText :field="document.data.title" />
    <slice-zone :components="components" :slices="document.data.slices" />
  </section>
</template>

<script>
import { components } from '~/slices'
export default {
  data() {
    return {
      components,
    }
  },
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID('standaard', 'standaard-1')

    if (document) {
      console.log(document.data.slices)
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style></style>
