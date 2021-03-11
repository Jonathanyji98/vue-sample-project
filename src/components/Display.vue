<script lang="ts">
  import {defineComponent} from "vue";

  export default defineComponent({
    name: 'Display',
    
    setup(){
      console.log("THE DISPLAY PAGE WORKS");
    },

    data: function() {
    return {
      id: "1",
      name: "Bob",
      address: "Unit 12 Yeronga Street, 30000 Queensland",
      phoneNumber: "+61 256 355 777",
      time: "8:50pm"
     };
    },

    // getData: function(){
    //   this.id = "1"
    //   this.name = "Bob"
    //   this.address = "Unit 12 Yeronga Street, 30000 Queensland"
    //   this.phoneNumber = "+61 256 355 777"
    //   this.time = "8:50pm"
    // }

    });
    
</script>

<template>
    <div class="display">
      <h4>id: {{id}}</h4> <br>
      <h4>Name: {{name}}</h4> <br>
      <h4>Address: {{address}}</h4> <br>
      <h4>Phone number: {{phoneNumber}}</h4> <br>
      <h4>Time: {{time}}</h4> <br>
    </div>
</template>

<style>
.display{
  text-align: left;
  margin-left: 30%;
}
</style>