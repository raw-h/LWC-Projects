import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html';
import signupTemplate from './signupTemplate.html';
import renderTemplate from './renderMethod.html';

export default class RenderMethod extends LightningElement {
    selectedButton = '';

    render(){
        return this.selectedButton === 'SignIn' ? signinTemplate : this.selectedButton === 'SignUp' ? signupTemplate : renderTemplate;
    }
    handleClick(event){
        this.selectedButton = event.target.label;
    }
    submitHandler(event){
        console.log(`${event.target.label} Successful!`);
    }
}