import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName = "Shubham Singh Rawat";
    title = "Associate - Trainee";

    changeHandler(event){
        this.title = event.target.value;
    }

    @track address = {
        city: "Roorkee",
        state: "Uttarakhand",
        country: "INDIA",
        pincode: "247667"
    }

    userList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
    trackHandler(event){
        this.address.city = event.target.value;
        this.userList[0] = event.target.value;
    }
}