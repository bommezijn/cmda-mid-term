<template>
  <section class="section">
    <div class="bubble">{{ slice.primary.componentIndex }}</div>
    <PrismicRichText :field="slice.primary.title" class="backBubble" />
    <ul>
      <li v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
        <span class="number">{{ item.number }}</span>
        <PrismicRichText :field="item.summary" />
      </li>
    </ul>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  name: 'SummaryComponent',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
}
</script>

<style scoped>
body {
  margin: 0;
}

.section {
  background-color: var(--lavendel);
  padding: 3em;
}

.summary-container {
  display: flex;
  margin-top: 3em;
}

.summary-list-left {
  display: flex;
  flex-direction: column;
}

ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(450px, 1fr));
  gap: 2em;
}

li {
  width: 23em;
  margin-bottom: 3em;
}

p {
  overflow: hidden;
}

.number {
  position: absolute;
  z-index: 10;
  font-size: 1.4em;
  font-weight: 700;
  margin-left: -2em;
  margin-top: 0.1em;
}

li:before {
  content: '';
  display: block;
  background-image: url('https://images.prismic.io/midtermacc/2e4fc24f-2b7c-461c-8be0-a4b38e5242d8_sticky-note.png?auto=compress,format');
  float: left;
  height: 3em;
  width: 3em;
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 1em;
}

.summary-list-right {
  display: flex;
  flex-direction: column;
  margin-left: 3em;
}

img {
  /* Height en width veranderen als de goede afbeelding  */
  width: 100%;
  margin-bottom: 7em;
}

section ul li p {
  margin: 0;
}

section ul li img {
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
}

.bubble {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  width: fit-content;
  padding: 0.5rem 2rem;
  font-family: 'Open Sans';
  font-size: 3vw;
  font-weight: 600;
  text-align: center;
  background: var(--geel);
  color: var(--black);
  border: var(--black) solid 0.3rem;
  border-radius: 5px;
}

/* Pijltje van textbubble */
.bubble:after {
  content: '';
  display: block;
  position: absolute;
  bottom: -30px;
  left: 25%;
  z-index: 1;
  width: 0;
  margin-left: -16px;
  border-style: solid;
  border-color: var(--geel) transparent;
  border-width: 31px 16px 0;
  transform: skewX(-25deg);
}

/* Border om pijltje */
.bubble:before {
  content: '';
  display: block;
  position: absolute;
  bottom: -38px;
  left: 24.5%;
  z-index: 0;
  width: 0;
  margin-left: -19px;
  border-style: solid;
  border-color: #000000 transparent;
  border-width: 33px 18px 0;
  transform: skewX(-25deg);
}

.backBubble {
  position: relative;
  top: -1.7rem;
  left: 4rem;
  width: fit-content;
  padding: 1rem 2rem;
  /* font-family: 'Open Sans'; */
  font-size: 3vw;
  font-weight: 600;
  text-align: center;
  background: var(--black);
  color: var(--white);
  border-radius: 5px;
  margin-bottom: 0.8em;
}

.backBubble:after {
  content: '';
  display: block;
  position: absolute;
  bottom: -30px;
  left: 90%;
  z-index: 1;
  width: 0;
  margin-left: -16px;
  border-style: solid;
  border-color: var(--black) transparent;
  border-width: 31px 16px 0;
  transform: skewX(25deg);
}

@media only screen and (max-device-width: 820px) {
  .summary-container {
    flex-wrap: wrap;
  }

  .summary-list-right {
    margin-top: 5em;
  }

  .section {
    padding: 0rem 0rem;
  }

  li {
    width: 80vw;
  }
}
</style>
