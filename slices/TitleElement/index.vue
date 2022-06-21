<template>
  <section class="content">
    <h3>{{ slice.primary.componentIndex }}</h3>
    <PrismicRichText :field="slice.primary.title" class="title" />
    <PrismicRichText :field="slice.primary.description" />
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  name: 'TitleElement',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
}
</script>

<style scoped>
.content {
  margin-bottom: 3rem;
}
.content >>> h3 {
  border: 3px solid black;
  border-bottom: 0;
  background-color: var(--geel);
  display: inline-block;
  padding: 0.5rem;
}

.content >>> h1 {
  border: 3px solid black;
  padding: 0.5rem;
  width: max-content;
}

/* .section {
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
.title {
  margin-bottom: 2em;
} */
</style>
