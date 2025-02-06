import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
export default class PortfolioSkills extends LightningElement { 
    @api recordId;
}