<script lang="ts">
  import {defineComponent} from "vue";
  //import { OwnerService } from "../services/ownerService.ts";
  import PostsService from "../services/PostsService.js"



  export default defineComponent({
    name: 'Display',

    // setup(){
    //   console.log("THE DISPLAY PAGE WORKS");
    //   this.fetchPosts();
    // },
    created() {
			// this.fetchPosts()
		},

    data: function() {
      
      return {
        // dataArray: [
        //       {
        //         id: "1",
        //         name: "Bob",
        //         address: "Unit 12 Yeronga Street, 30000 Queensland",
        //         phoneNumber: "+61 256 355 777",
        //         time: "8:50pm"
        //       },
        //       {
        //         id: "2",
        //         name: "Andy",
        //         address: "Unit 115 Yeronga Street, 30000 Queensland",
        //         phoneNumber: "+61 993 445 002",
        //         time: "9:50pm"
        //       }
        //     ]

        dataArray: [],
        num: PostsService.getnumber()
      }
    },

  

    // methods:{
    //   fetchPosts() {
    //     return PostsService.get()
    //     .then(result =>{
    //       this.dataArray = result.data
    //     })
    //   }
    // }
      
    




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
</template>

<style>
.display{
  text-align: left;
  margin-left: 30%;
}
</style>