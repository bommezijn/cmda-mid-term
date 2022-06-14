<template>
  <section>
    <div class="color-picker">
      <input type="color" id="colorWell" value="#e66465" />
      <label for="colorWell"
        ><img
          src="https://images.prismic.io/cmd-midterm/5aa4c117-b663-4f09-9144-1c33b6798026_colorpicker.png?auto=compress,format"
      /></label>
    </div>
    <div class="semi-collom-up">"</div>
    <div class="bubble">
      Feedback speelt vanaf de start van de opleiding een belangrijke rol:
      feedback van docenten, peer-feedback als werkvorm (al dan niet via DLO) en
      CMD student-assistenten die studenten ondersteunen en feedback geven. Het
      geven van effectieve feedback is niet eenvoudig. Dit is een belangrijke
      reden om te experimenteren met programmatisch toetsen. Door programmatisch
      toetsen wordt de rol van feedback – het formatief handelen – extra
      belangrijk. De studenten zullen nog steeds voornamelijk een product maken,
      maar ze zullen zich daarbij meer bewust moeten worden van hun eigen
      ontwerpproces en het bredere (maatschappelijke) belang ervan.
    </div>
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
    <p class="name-arrow-tag">Name</p>
    <div class="semi-collom-down">"</div>
    <div class="BackBubble">
      Feedback speelt vanaf de start van de opleiding een belangrijke rol:
      feedback van docenten, peer-feedback als werkvorm (al dan niet via DLO) en
      CMD student-assistenten die studenten ondersteunen en feedback geven. Het
      geven van effectieve feedback is niet eenvoudig. Dit is een belangrijke
      reden om te experimenteren met programmatisch toetsen. Door programmatisch
      toetsen wordt de rol van feedback – het formatief handelen – extra
      belangrijk. De studenten zullen nog steeds voornamelijk een product maken,
      maar ze zullen zich daarbij meer bewust moeten worden van hun eigen
      ontwerpproces en het bredere (maatschappelijke) belang ervan.
    </div>
  </section>
</template>

<script>
export default {
  name: 'CardSwitch',
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
      const p = document.querySelector('p')

      if (p) {
        p.style.color = event.target.value
      }
    },
    updateAll(event) {
      document.querySelectorAll('p').forEach(function (p) {
        p.style.color = event.target.value
      })
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap');

.bubble {
  position: relative;
  background: #f8f0d5;
  color: #000000;
  font-family: 'Open Sans';
  font-size: 1em;
  text-align: center;
  width: 28em;
  height: 18em;
  border-radius: 10px;
  padding: 5em;
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
  border-color: #f8f0d5 transparent;
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
  left: 0.3em;
}

.semi-collom-down {
  position: absolute;
  font-family: 'Open Sans';
  font-size: 9em;
  z-index: 12;
  top: 1.9em;
  left: 3.4em;
  transform: scaleY(-1);
}

svg {
  position: absolute;
  height: 7em;
  z-index: 13;
  left: 16em;
  top: 21em;
}

.name-arrow-tag {
}

.color-picker img {
  position: absolute;
  height: 6em;
  z-index: 13;
  left: 32em;
  top: 0.4em;
  transition: transform 0.2s;
}

.color-picker img:hover {
  transform: scale(1.2);
}

input {
  position: absolute;
  visibility: hidden;
  left: 32em;
  top: 5em;
}
</style>
