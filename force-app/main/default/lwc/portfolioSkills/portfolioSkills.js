import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import Tech_Skills_Field from '@salesforce/schema/Portfolio__c.TechnicalSkills__c';
import Software_Field from '@salesforce/schema/Portfolio__c.SoftwareTools__c';
import Methodologies_Field from '@salesforce/schema/Portfolio__c.SoftwareDevelopmentMethodologies__c';
import Soft_Skills_Field from '@salesforce/schema/Portfolio__c.SoftSkills__c';

export default class PortfolioSkills extends LightningElement {
    @api recordId;
    @wire(getRecord, {
        recordId: '$recordId',
        fields: [Tech_Skills_Field, Soft_Skills_Field, Software_Field, Methodologies_Field]
    })skillHandler({data, error}){
        if(data){

        }
        if(error){
            
        }
    }
}