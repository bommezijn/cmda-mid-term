<template>
    <section>
        <div class="header-content">
            <h1>2.0 Onderwijsleeromgeving</h1>
            <p id="header-block-h1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id sapiente
                recusandae. Nobis facere ratione earum sunt pariatur, quisquam unde velit corporis fuga, qui suscipit
                ipsam quae necessitatibus voluptate fugiat?</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'headerPaginaComp',
    layout: 'default',
    // data() { },
    // methods: {},
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap'); */

section {
    top: -7em;
}

@media only screen and (max-device-width: 820px) {
    section {
        top: 0;
    }
}

section {
    height: 25vw;
    background-image: url('https://images.prismic.io/midtermacc/630fba58-4e9f-4156-acd9-a9b81ad90a74_cmd_daantjebons_0032-960x640.jpg?auto=compress,format');
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    background-color: #ffcc00;
    width: 100%;
    position: absolute;
    top: 1em;
    left: 0;
}

.header-content {
    margin-left: 5em;
}

h1 {
    position: absolute;
    /* font-family: 'Open Sans'; */
    font-size: 3.5vw;
    color: #fff021;
    width: 100%;
    margin-top: 2em;
}

#header-block-h1 {
    position: absolute;
    font-family: 'Open Sans';
    font-size: 1.1vw;
    font-style: italic;
    color: white;
    width: 40%;
    margin-top: 14em;
    width: 50%;
}
</style>