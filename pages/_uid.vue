<template>
  <section>
    <h1>{{document.data.Title}}</h1>
    <PrismicRichText :field="document.data.title" />
    <PrismicRichText :field="document.data.introduction" />
    <article v-for="(chapter, index) in document.data.chapters" :key="index">
      <PrismicRichText :field="chapter['chapter-title']" />
      <Prismic-image v-if="chapter['img']" :field="chapter['img']" />
      <PrismicRichText :field="chapter['content-of-chapter']" />
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({$prismic, params, error}) {
    const document = await $prismic.api.getByUID('standaard', params.uid)

    if (document) {
      console.log(document.data.chapters[0])
      return {document}
    } else {
      error({statuscode: 404, message: 'Page Not Found'})
    }
  }
}
</script>

<style>
</style>