<template>
  <section id="speech">
    <div id="content">
      <span class="componentIndex">{{ slice.primary.componentIndex }}</span>
      <PrismicRichText :field="slice.primary.title" />
    </div>
    <div class="speech-bubble">
      <div class="bubble">
        <div class="color-picker">
          <input type="color" id="colorWell" value="#e66465" />
          <label for="colorWell"
            ><img
              src="https://images.prismic.io/cmd-midterm/5aa4c117-b663-4f09-9144-1c33b6798026_colorpicker.png?auto=compress,format"
          /></label>
        </div>
        <div class="semi-collom-up">"</div>
        <PrismicRichText :field="slice.primary.quote" />
        <svg
          width="36"
          height="30"
          viewBox="0 0 81 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.03553 4.5L55.96 53.4244L58.0526 23.6819L75.0547 4.5L7.03553 4.5ZM80 0.5H2L0.939339 4.06066L56.0937 59.215L59.6143 58.4788L61.9474 25.3181L80.9967 3.82661L80 0.5Z"
            fill="black"
          />
        </svg>
        <p class="name-arrow-tag">{{ slice.primary.quoteName }}</p>
        <div class="semi-collom-down">"</div>
      </div>
      <div class="BackBubble"></div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  name: 'QuoteComponent',
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  data() {
    return {}
  },
  mounted() {
    this.startup()
  },
  methods: {
    onwindow() {
      window.addEventListener('load', this.startup, false)
    },
    startup() {
      // let colorWell;
      const defaultColor = '#0000ff'
      const colorWell = document.querySelector('#colorWell')
      colorWell.value = defaultColor
      colorWell.addEventListener('input', this.updateFirst, false)
      colorWell.addEventListener('change', this.updateAll, false)
      colorWell.select()
    },
    updateFirst(event) {
      const bubble = document.querySelector('.bubble')

      if (bubble) {
        bubble.style.backgroundColor = event.target.value
        bubble.style.setProperty('--border-color', event.target.value)
      }
    },
    updateAll(event) {
      document.querySelectorAll('.bubble').forEach(function (bubble) {
        bubble.style.backgroundColor = event.target.value
        bubble.style.setProperty('--border-color', event.target.value)
      })
    },
  },
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap'); */
#speech {
  display: flex;
}
#content {
  display: flex;
  flex-direction: column;
  width: 40em;
}
h2 {
  margin-top: 5em;
  margin-left: 1em;
  /* font-family: 'Open Sans'; */
  font-weight: 700;
  font-size: 1.7em;
}
.main-text {
  margin-left: 1.8em;
  margin-top: 3em;
  font-family: 'Open Sans';
  font-size: 1em;
}
.speech-bubble {
  margin: 0 auto;
  margin-top: 16em;
  margin-bottom: -10em;
}
.bubble {
  --border-color: #f8f0d5;
  position: relative;
  background: #f8f0d5;
  color: #000000;
  /* font-family: 'Open Sans'; */
  font-size: 1em;
  text-align: center;
  /* width: 28em; */
  /* height: 18em; */
  border-radius: 10px;
  padding: 6em;
  border: #000000 solid 2px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bubble:after {
  content: '';
  position: absolute;
  display: block;
  width: 0;
  z-index: 1;
  border-style: solid;
  border-color: var(--border-color) transparent;
  border-width: 66px 16px 0;
  bottom: -61px;
  left: 19%;
  margin-left: -16px;
}
.bubble:before {
  content: '';
  position: absolute;
  width: 0;
  z-index: 0;
  border-style: solid;
  border-color: #000000 transparent;
  border-width: 64px 18px 0;
  bottom: -64px;
  left: 19%;
  margin-left: -18px;
  display: block;
}
.BackBubble {
  position: relative;
  background: #000000;
  font-family: Arial;
  font-size: 1em;
  text-align: center;
  width: 20em;
  height: 16em;
  border-radius: 10px;
  padding: 5em;
  top: -25em;
  left: 11em;
  transform: scaleX(-1);
}
.BackBubble:after {
  content: '';
  position: absolute;
  display: block;
  width: 0;
  z-index: 1;
  border-style: solid;
  border-color: #000000 transparent;
  border-width: 61px 16px 0;
  bottom: -61px;
  left: 19%;
  margin-left: -16px;
}
.semi-collom-up {
  position: absolute;
  font-family: 'Open Sans';
  font-size: 9em;
  z-index: 12;
  top: 0em;
  left: 0.5em;
}
.semi-collom-down {
  position: absolute;
  font-family: 'Open Sans';
  font-size: 9em;
  z-index: 12;
  right: 0.5em;
  bottom: 0em;
  transform: scaleY(-1);
}
svg {
  position: absolute;
  height: 7em;
  z-index: 13;
  right: 22em;
  bottom: 0.6em;
}
.name-arrow-tag {
  font-family: 'Open Sans';
  position: absolute;
  font-size: 1.2em;
  padding: 0.3em;
  border: solid #000000 2px;
  position: absolute;
  z-index: 13;
  right: 14em;
  bottom: 2.3em;
}
.color-picker img {
  position: absolute;
  top: 0em;
  right: 1em;
  height: 6em;
  z-index: 13;
  transition: transform 0.2s;
}
.color-picker img:hover {
  transform: scale(1.2);
}
input {
  position: absolute;
  visibility: hidden;
  right: 10em;
  top: 3em;
}
@media only screen and (max-device-width: 1200px) {
  #speech {
    display: flex;
    flex-direction: column;
  }
  .speech-bubble {
    margin-top: 3em;
    margin: 3em 2em;
  }
  #content {
    display: flex;
    flex-direction: column;
  }
}
</style>