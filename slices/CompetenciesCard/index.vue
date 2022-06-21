<template>
  <section class="CardSwitch">
    <PrismicRichText :field="slice.primary.title" />
    <div class="CardCon" :class="[isChecked ? 'bgBlack' : 'bgYellow']">
      <div>
        <PrismicRichText :field="slice.primary.compTitle" />
        <PrismicRichText :field="slice.primary.compDescription" />
        <!-- <h3>Principes</h3> -->
        <h4 v-if="isChecked">Nieuw</h4>
        <h4 v-else>Oud</h4>
        <ul v-if="isChecked">
          <li v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
            {{ item.compOld }}
          </li>
        </ul>
        <ul v-else>
          <li v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
            {{ item.compNew }}
          </li>
        </ul>
        <label class="switch">
          <input type="checkbox" @click="CardConColor" />
          <span
            class="slider"
            :class="[isChecked ? 'CBlack' : 'Cwhite']"
          ></span>
        </label>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  name: 'CompetenciesCard',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  data() {
    return {
      isChecked: false,
    }
  },
  methods: {
    CardConColor() {
      this.isChecked = !this.isChecked
    },
  },
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap'); */

.CardCon {
  /* font-family: 'Open Sans'; */
  font-weight: 500;
  height: 35em;
  width: 30em;
  margin-left: 2em;
  margin-top: 3em;

  /* border image */
  border-image: url('~/static/img/corner.svg');
  border-image-slice: 10;
  border-width: 10px;
  border-image-repeat: round;
}

.CardSwitch h2 {
  margin-left: 1em;
  /* font-family: 'Open Sans'; */
  font-weight: 700;
  font-size: 1.7em;
}

.cardBorder {
  height: 36em;
  width: 31.5em;
  margin-left: -0.6em;
  margin-top: -33.2em;
}

.bgYellow {
  background-color: #fff021;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

.bgBlack {
  background-color: #000000;
  color: #ffffff;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

.CBlack {
  color: #000000;
}

.CardCon div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 1em;
  padding: 1em;
}

.CardCon h4 {
  font-weight: 700;
  font-size: 2rem;
  margin: 0.2em 0 0.2em 0;
}

.Cardcon div h5 {
  font-size: 1rem;
  font-weight: 700;
  font-size: 1em;
}

.CardCon h3 {
  font-weight: 400;
  margin: 0;
  margin-top: 0.5em;
  font-size: 1em;
}

.CardCon ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1.8em;
}

.CardCon ul li {
  margin-bottom: 1em;
}

.CardCon ul li:before {
  content: '';
  float: left;
  width: 0;
  height: 0;
  display: inline-block;
  border: 9px solid transparent;
  border-left-color: black;
}

.CBlack ~ .CardCon ul li:before {
  border-left-color: #fff021;
}

.switch {
  position: relative;
  display: inline-block;
  width: 5.5em;
  height: 2em;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 3px;
}

.slider:before {
  position: absolute;
  content: 'Nieuw';
  font-size: 0.8em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 60%;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 2.5px;
}

input:checked + .slider {
  background-color: #ffffff;
}

input:checked + .slider:before {
  background-color: #fff021;
}

input:checked + .CardCon {
  background-color: #000000;
}

input:checked + .slider:before {
  content: 'Oud';
  -webkit-transform: translateX(68%);
  -ms-transform: translateX(68%);
  transform: translateX(68%);
}
</style>
