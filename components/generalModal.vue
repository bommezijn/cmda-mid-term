<template>
  <div class="modal" :class="{ visible: isVisible }">
    <div class="content-wrapper" :class="{ visible: isVisible }">
      <button>X</button>
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
  mounted() {
    console.log(this.visible)
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
  display: none;
  opacity: 0;
  transition: 0.2s ease-out;

  background-color: rgba(0, 0, 0, 0.6);
}

.modal.visible {
  display: block;
  opacity: 1;
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
