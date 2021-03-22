<script lang="ts">
import { defineComponent } from "vue";
import { OwnerService } from "@/services/OwnerService.ts";

export default defineComponent({
    name: "NewFormComponent",

    setup(){
        var name = "John";
        var address = "address";
        var phoneNumber = "0123";
        var time = "8:50pm";

    function onSubmit(){
        OwnerService.createData();
        console.log("This button will do a http post request");
    }

        return{
            name,
            address,
            phoneNumber,
            time,
            onSubmit
        }
    }


});


</script>

<template>
    <div>
        <label for="name">Name:</label><br>
        <input type="text" id="fname" name="fname" v-model="name"><br>

        <label for="address">Address:</label><br>
        <input type="text" id="lname" name="lname" v-model="address"><br><br>

        <label for="pnum">Phone Number:</label><br>
        <input type="text" id="lname" name="lname" v-model="phoneNumber"><br><br>

        <label for="time">Time:</label><br>
        <input type="text" id="lname" name="lname" v-model="time"><br><br>

        <button v-on:click="onSubmit()">Submit</button>

    </div>
</template>

<style>

</style>