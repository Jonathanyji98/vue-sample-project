<script lang="ts">
  import {defineComponent} from "vue";
  import { OwnerService } from "../services/OwnerService.ts";
  //import { PostsService } from "../services/PostsService"; //Javascript file format works as well

  export default defineComponent({
    name: 'Display',
    
    setup(){
      //const data = new PostsService(); //Javascript file format works as well
      const data = new OwnerService();
      const dataArray = data.get();

      function test(){
        let i = 2
        return i
      }

      const newNumber = 1 + test();
      
      return {
        dataArray,
        newNumber
      }

    }

});
    
</script>

<template>
    <div class="display" v-for="entry in dataArray" :key="entry.id">
      <p><b>id:</b> {{entry.id}}</p>
      <p><b>Name:</b> {{entry.name}}</p>
      <p><b>Address:</b> {{entry.address}}</p>
      <p><b>Phone number:</b> {{entry.phoneNumber}}</p>
      <p><b>Time:</b> {{entry.time}}</p>
      <br>
    </div>
    <p>{{newNumber}}</p>
</template>

<style>
.display{
  text-align: left;
  margin-left: 30%;
}
</style>