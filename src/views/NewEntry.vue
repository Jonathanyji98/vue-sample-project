<template>
  <div class="new-entry">
    <h1>New Entry</h1>
    <NewFormComponent></NewFormComponent>
  </div>
</template>

<script lang="ts">

import NewFormComponent from "../components/NewForm.vue";

export default {
  name: 'NewEntry',
  components: {
    NewFormComponent
  }
}
</script>