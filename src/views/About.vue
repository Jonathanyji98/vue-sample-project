<template>
  <div class="about">
    <h1>This is an about page</h1>
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