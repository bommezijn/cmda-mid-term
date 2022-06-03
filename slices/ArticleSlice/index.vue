<template>
  <section>
    <div>
      <PrismicRichText :field="slice.primary.title" class="title" />
      <PrismicRichText :field="slice.primary.description" />
    </div>
    <PrismicImage :field="slice.primary.image" class="image"/>  
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "ArticleSlice",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style scoped>
section {
  background: #f7f7f7;
  color: #111;
  display: flex;
}
.title {
  margin-bottom: 2em;
  text-align: left;
}

.image{
  width: 30rem;
  height: auto;
}
</style>
