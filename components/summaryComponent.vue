<template>
    <section>
        <div class="bubble">1.5</div>
        <div class="backBubble">Ambities en dilemma&#39;s</div>
    </section>
</template>

<script>
export default {}
</script>

<style>
body{
    margin: 0;
}

section{
    height: 100vh;
    margin: 0;
    padding: 2rem 12.5rem;

    background-color: var(--lavendel);
}

.bubble {
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    z-index: 10;

    width: fit-content;
    padding: .5rem 2rem;

    font-family: 'Open Sans';
    font-size: 30pt;
    font-weight: 600;
    text-align: center;

    background: var(--geel);
    color: var(--black);
    border: var(--black) solid .3rem;
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

    font-family: 'Open Sans';
    font-size: 30pt;
    font-weight: 600;
    text-align: center;

    background: var(--black);
    color: var(--white);
    border-radius: 5px;
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

</style>
