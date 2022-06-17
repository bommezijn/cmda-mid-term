<template>
    <section>
        <div class="main-time-line">
            <div class="main-time-line-block">
                <p>Week -3</p>
            </div>
            <div class="main-time-line-block">
                <p>Week -2</p>
            </div>
            <div class="main-time-line-block">
                <p>Week -1</p>
            </div>
            <div class="main-time-line-block">
                <p>Week 0</p>
            </div>
            <div class="main-time-line-block">
                <p>Week 1</p>
            </div>
            <div class="main-time-line-block">
                <p>Week 2</p>
            </div>
            <div class="main-time-line-block">
                <p>Week 3</p>
            </div>
        </div>
        <div class="popup-items">
            <button v-for="(subject, index) in subjects" :key="index" class="popup-item"
                @click="toggleModal($event, index)">
                {{ subject }}
            </button>
        </div>
        <generalModal :isVisible="visible" @clicked="closeModal" :title="title">
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
                'Afstuurdeervaardigheden',
                'Projectvoorstel',
                'Speeddaten',
                'Kick Off',
                'Design Briefing',
            ],
            content: '',
            title: '',
            contents:
                'Leuke text :)',
        }
    },
    mounted() { },
    methods: {
        toggleModal(e, index) {
            console.log(e, index)
            this.visible = !this.visible
            this.content = this.contents
            this.title = this.subjects[index]
        },
        closeModal() {
            this.visible = false
        },
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap');

@media only screen and (max-device-width: 820px) {
    section {
        overflow-x: scroll;
    }
}

.main-time-line {
    display: flex;
    justify-content: center
}

.main-time-line-block {
    font-size: 1em;
    font-family: 'Open Sans';
    padding: 1em;
    background-color: #FFF021;
    border: solid black 3px;
    width: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* To overlap lines  */
.main-time-line-block:not(:first-child) {
    margin-left: -0.1em;
}

.popup {
    padding: 2rem;
    gap: 4rem;
    width: 100%;
    max-width: 1400px;
}

.popup-items {
    display: flex;
}

.popup-item {
    background: black;
    color: white;
    padding: 0.75rem 1rem;
    min-width: min-content;
    width: 18%;
    font-size: 1rem;
    text-align: left;
    position: relative;
    cursor: pointer;
}

/* .popup-item:nth-of-type(2n-1) {
    
} */

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
    color: black;
    background: white;
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