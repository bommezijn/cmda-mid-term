<template>
  <div
    @click.self="hideModal"
    ref="modal"
    class="modal"
    :class="{ visible: isVisible }"
  >
    <div class="content-wrapper" :class="{ visible: isVisible }">
      <div class="heading">
        <h2>{{ title }}</h2>
        <button @click.self="hideModal">Sluiten</button>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: Boolean,
    title: String,
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this.isVisible)
    window.addEventListener('keyup', (e) => {
      if (e.code === 'Escape') {
        this.hideModal()
      }
    })
  },
  methods: {
    hideModal(e) {
      console.log(e)
      this.$emit('clicked')
    },
  },
}
</script>

<style scoped>
.modal {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  transition: 0.2s ease-out;
  pointer-events: none;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.6);
}

.modal.visible {
  opacity: 1;
  pointer-events: all;
}

.heading {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

button {
  all: unset;
  position: relative;
  cursor: pointer;
}

button::before,
button::after {
  content: '';
  display: block;
  width: 20px;
  height: 3px;
  background-color: black;

  position: absolute;
}

button::before {
  top: 45%;
  left: -50%;
  transform: rotate(45deg);
}

button::after {
  top: 45%;
  left: -50%;
  transform: rotate(-45deg);
}
.content-wrapper {
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 2rem;
}
.content {
  width: 80vw;
}

.content-wrapper.visible {
  animation: slide 0.6s ease-out forwards;
}

@keyframes slide {
  from {
    top: 40%;
    opacity: 0;
  }
  to {
    top: 50%;
    opacity: 1;
  }
}
</style>
