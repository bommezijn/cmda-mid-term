<template>
    <section>
        <div class="bubble">1,5</div>
        <div class="BackBubble">Ambities en dilemma&#39;s</div>
        <h1> Hoi</h1>
    </section>
</template>

<script>
export default {}
</script>

<style>
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

</style>
