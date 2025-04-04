import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    constructor(){
        super();
        console.log("Parent constructor called.");
    }
    connectedCallback(){
        console.log("Parent connectedCallback Called.");
    }
}