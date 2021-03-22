 import axios from "axios";

 export class OwnerService {
  get() {
    var data = [
        {
          id: "5",
          name: "kel",
          address: "Unit 007 Boundry Street, 30000 Queensland",
          phoneNumber: "+61 256 355 777",
          time: "10:50pm"
        },
        {

          id: "6",
          name: "peanut",
          address: "Unit 115 New Farm Street, 30000 Queensland",
          phoneNumber: "+61 993 445 002",
          time: "10:50pm"
        }
      ];

    return data;
  }

  static createData(){
    let data = {
      name: "Chen",
      address: "Unit 666 Boundry Street, 30000 Queensland",
      phoneNumber: "+61 256 355 777",
      time: "8:50pm"
    }

    axios.post("http://localhost:3000/create", data)
    .then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  static getTest(){
    axios.get("http://localhost:3000/")
    .then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }

}