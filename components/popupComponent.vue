<template>
  <section class="popup">
    <div class="content">
      <h3>2.4</h3>
      <h2>Onderwijs & praktijk</h2>
      <p>
        De relatie met de praktijk is essentieel voor CMD Amsterdam.
        Ontwikkelingen in ons vakgebied gaan snel en het is daarom noodzakelijk
        regelmatig te toetsen of wij nog studenten afleveren met relevante
        kennis en vaardigheden. Samenwerken met het beroepenveld doen wij op
        verschillende manieren:
      </p>
    </div>
    <div class="popup-items">
      <button
        v-for="(subject, index) in subjects"
        :key="index"
        class="popup-item"
        @click="toggleModal"
      >
        {{ subject }}
      </button>
    </div>
    <generalModal :isVisible="visible" @clicked="closeModal">
      <p>{{ content }}</p>
    </generalModal>
  </section>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      subjects: [
        'Projecten',
        'Stages',
        'Opleidingsadviesraad',
        'CMD Agency',
        'PiE',
        'Gastcolleges',
      ],
      content: '',
      contents:
        'Vanaf het tweede jaar wordt bij projecten vaak samengewerkt met externe projectpartners. In de meeste gevallen komen projectpartners uit het netwerk van de bij het vak betrokken docenten, maar het komt ook voor dat ze worden aangedragen door lectoraten, kenniscentra, bedrijven, en de coördinator externe samenwerking. Studenten komen naast projectopdrachten ook door twee stageperiodes in aanraking met het werkveld. Er is een korte oriënterende stage van 10 weken aan het eind van het fundament waarin de studenten de in het fundament verworven competenties in de praktijk toetsen. Studenten werken in principe aan alle competenties, maar de nadruk ligt op vier competenties. Eén competentie, multidisciplinair samenwerken, is verplicht, de andere drie kiest de student zelf. Voor de vier competenties formuleren studenten zelf de leerdoelen. Tijdens de lange stage werken studenten aan de beroepsidentiteit en het (door)ontwikkelen van CMD-competenties. Bij de lange stage zijn de competenties multidisciplinair samenwerken en één van de vakgebied competenties verplicht. In totaal werken studenten aan tenminste vijf competenties.',
    }
  },
  mounted() {},
  methods: {
    toggleModal() {
      this.visible = !this.visible
      this.content = this.contents
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

.content h3 {
  border: 3px solid black;
  background-color: var(--geel);
  display: inline-block;
  padding: 0.5rem;
}

.content h2 {
  border: 3px solid black;
  padding: 0.5rem;
  width: max-content;
}
.popup {
  padding: 2rem;

  gap: 4rem;
  width: 100%;
  max-width: 1400px;

  min-height: 100vh;
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
