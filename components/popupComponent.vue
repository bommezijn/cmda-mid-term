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
    <div class="popup-cards">
      <div class="card">
        <h4>Projecten</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa hic
          iusto exercitationem qui alias, ad nisi aliquid nulla debitis
          consequuntur tempore perspiciatis velit rerum enim ex illo obcaecati
          animi unde.
        </p>
      </div>
      <div class="card">
        <h4>Gastcolleges</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa hic
          iusto exercitationem qui alias, ad nisi aliquid nulla debitis
          consequuntur tempore perspiciatis velit rerum enim ex illo obcaecati
          animi unde.
        </p>
      </div>
      <div class="card">
        <h4>Opleidingsadviesraad</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa hic
          iusto exercitationem qui alias, ad nisi aliquid nulla debitis
          consequuntur tempore perspiciatis velit rerum enim ex illo obcaecati
          animi unde.
        </p>
      </div>
      <div class="card">
        <h4>Stages</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa hic
          iusto exercitationem qui alias, ad nisi aliquid nulla debitis
          consequuntur tempore perspiciatis velit rerum enim ex illo obcaecati
          animi unde. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Culpa hic iusto exercitationem qui alias, ad nisi aliquid nulla
          debitis consequuntur tempore perspiciatis velit rerum enim ex illo
          obcaecati animi unde. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Culpa hic iusto exercitationem qui alias, ad nisi
          aliquid nulla debitis consequuntur tempore perspiciatis velit rerum
          enim ex illo obcaecati animi unde.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.popup {
  padding: 2rem;
  background: #f0ebf0;

  display: flex;
  gap: 4rem;
}

.popup-cards {
  max-width: 50%;
  position: relative;
}

.card {
  border: 3px solid black;
  border-radius: 1rem 1rem 0 0;
}

.card h4,
.card p {
  padding: 1rem;
  margin: 0;
  border-radius: 1rem 1rem 0 0;
}
.card h4 {
  background-color: #fff021;
}
</style>
