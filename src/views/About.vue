<template>
  <div class="about">
    <h1>Data list</h1>
    <Display></Display>
  </div>
</template>

<script lang="ts">
import Display from '../components/Display.vue'

export default {
  name: 'About',
  components: {
    Display
  }
}
</script>