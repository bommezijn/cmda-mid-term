<template>
  <section class="popup">
    <div v-if="slice.primary.componentIndex" class="content">
      <h3>{{ slice.primary.componentIndex }}</h3>
      <PrismicRichText :field="slice.primary.title" class="title" />
      <PrismicRichText :field="slice.primary.description" />
    </div>
    <div class="popup-items">
      <button
        v-for="(item, index) in slice.items"
        :key="`slice-item-${index}`"
        class="popup-item"
        @click="toggleModal($event, index, item)"
      >
        <PrismicRichText :field="item.popupTitle" />
      </button>
    </div>
    <generalModal :isVisible="visible" @clicked="closeModal" :title="title">
      <p>{{ content }}</p>
    </generalModal>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  name: 'PopupComponent',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  data() {
    return {
      visible: false,
      content: '',
      title: '',
    }
  },
  mounted() {
    // console.log(this.slice.data)
  },
  methods: {
    toggleModal(e, index, item) {
      this.visible = !this.visible
      this.content = item.popupContent[0].text
      this.title = item.popupTitle[0].text
    },
    closeModal() {
      this.visible = false
    },
  },
}
</script>

<style scoped>
.content {
  margin-bottom: 3rem;
}

.content >>> h3 {
  border: 3px solid black;
  background-color: var(--geel);
  display: inline-block;
  padding: 0.5rem;
}

.content >>> h1 {
  border: 3px solid black;
  padding: 0.5rem;
  width: max-content;
}
.popup {
  padding: 2rem;

  gap: 4rem;
  width: 100%;
  max-width: 1400px;
}

.popup-items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  justify-content: center;
}
.popup-item {
  background: var(--lavendel);
  border: 3px solid black;
  padding: 0.75rem 1rem;
  min-width: min-content;
  width: 80%;
  font-size: 1rem;
  text-align: left;

  position: relative;

  cursor: pointer;
}

.popup-item::after {
  content: 'i';
  display: block;
  position: absolute;
  width: 15px;
  height: 15px;
  text-align: center;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--lavendel);
  background: var(--lavendel-dark);
  padding: 0.5rem;
  border-radius: 50%;
}

.card {
  border: 3px solid black;
  border-radius: 1rem;
  top: 0;
  left: 0;
  width: 350px;
  position: absolute;
}
</style>
