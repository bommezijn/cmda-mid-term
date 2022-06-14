<template>
  <div
    @click.self="hideModal"
    ref="modal"
    class="modal"
    :class="{ visible: isVisible }"
  >
    <div class="content-wrapper" :class="{ visible: isVisible }">
      <div class="heading">
        <button @click.self="hideModal">X</button>
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
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this.isVisible)
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

  background-color: rgba(0, 0, 0, 0.6);
}

.modal.visible {
  opacity: 1;
  pointer-events: all;
}

.content-wrapper {
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

button {
  margin: 2rem;
  margin-bottom: 1rem;
}
.content {
  padding: 2rem;
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
