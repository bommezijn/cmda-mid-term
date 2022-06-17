<template>
  <div>
    <CardSwitch />
    <QuoteComp />
    <TimeLineComp></TimeLineComp>
  </div>
</template>

<script>
import QuoteComp from '~/components/QuoteComp.vue';
export default {
  name: "IndexPage",
  components: { QuoteComp }
}
</script>
