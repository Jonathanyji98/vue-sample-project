export class OwnerService {
    entryArray = [
        {
            id: "1",
            name: "Bob",
            address: "Unit 12 Yeronga Street, 30000 Queensland",
            phoneNumber: "+61 256 355 777",
            time: "8:50pm"
        },
        {
            id: "2",
            name: "Andy",
            address: "Unit 115 Yeronga Street, 30000 Queensland",
            phoneNumber: "+61 993 445 002",
            time: "9:50pm"
        }
    ];

    getOwnerData(){
        return this.entryArray;
    }
}