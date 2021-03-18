export class PostsService{

  get() {

    const data = [
        {
          id: "3",
          name: "Jack",
          address: "Unit 007 Boundry Street, 30000 Queensland",
          phoneNumber: "+61 256 355 777",
          time: "10:50pm"
        },
        {

          id: "4",
          name: "Bean",
          address: "Unit 115 New Farm Street, 30000 Queensland",
          phoneNumber: "+61 993 445 002",
          time: "10:50pm"
        }
      ];

    return data
  }

}