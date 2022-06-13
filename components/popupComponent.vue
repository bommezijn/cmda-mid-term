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
      >
        {{ subject }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      subjects: [
        'Projecten',
        'Stages',
        'Opleidingsadviesraad',
        'CMD Agency',
        'PiE',
        'Gastcolleges',
      ],
    }
  },
  mounted() {},
  methods: {},
}
</script>

<style scoped>
.content {
  margin-bottom: 3rem;
}
.popup {
  padding: 2rem;
  background: #f0ebf0;

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
  min-width: 150px;
  max-width: 80%;
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
