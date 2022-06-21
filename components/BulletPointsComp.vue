<template>
    <div class="bullet-points-container">
        <div class="bullet-point-list-left">
            <ul>
                <p>1</p>
                <li>Iedereen in onze community leert en leren staat centraal</li>
                <p>1</p>
                <li>De inhoud definieert onze aanpak en zorgt voor cohesie</li>
                <p>1</p>
                <li>We zijn praktijkgericht en gebruiken theorie om praktijk en reflectie te ondersteunen</li>
            </ul>
        </div>
        <div class="bullet-point-list-right">
            <ul>
                <p>1</p>
                <li>We zorgen voor een veilige en stimulerende learning community</li>
                <p>1</p>
                <li>Beoordelingen moeten holistisch zijn en gebaseerd op reflectie</li>
                <p>1</p>
                <li>Experimenten en onderzoek vormen de basis van de dialoog die ons vooruit brengt</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BulletPointsComp',
    layout: 'default',
    // data() { },
    // methods: {},
}
</script>

<style scoped>
.bullet-points-container {
    display: flex;
    margin: 0 auto;
    /* margin-left: 25em; */
    width: 60vw;
    position: relative;
}

.bullet-point-list-left {
    display: flex;
    flex-direction: column;
    margin-right: -5em;
}

.bullet-point-list-right {
    display: flex;
    flex-direction: column;
}

li {
    width: 65%;
    height: 40%;
    list-style: none;
    font-size: 2.2vh;
}

li:before {
    content: '';
    display: block;
    background-image: url('https://images.prismic.io/midtermacc/2e4fc24f-2b7c-461c-8be0-a4b38e5242d8_sticky-note.png?auto=compress,format');
    float: left;
    height: 8em;
    width: 6em;
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 1em;
}

p {
    position: absolute;
    z-index: 10;
    font-size: 2.5em;
    font-weight: 700;
    margin-left: 0.8em;
    margin-top: 0.1em;
}

@media only screen and (max-device-width: 820px) {
    .bullet-points-container {
        flex-wrap: wrap;
    }

    .bullet-point-list-right {
        margin-top: 5em;
    }
}

@media only screen and (max-device-width: 350px) {
    li {
        width: 100%;
    }
}
</style>