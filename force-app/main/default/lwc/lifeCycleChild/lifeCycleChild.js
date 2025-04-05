import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super();
        console.log("Child constructor called.");
    }
    connectedCallback(){
        console.log("Child connectedCallback Called.");
        throw new Error('Loading of child component failed.');
    }
    renderedCallback(){
        console.log("Child rendered Callback called.");
    }
    disconnectedCallback(){
        alert("Child disconnected callback called !!");
    }
}