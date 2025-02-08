import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import Tech_Skills_Field from '@salesforce/schema/Portfolio__c.TechnicalSkills__c';
import Software_Field from '@salesforce/schema/Portfolio__c.SoftwareTools__c';
import Methodologies_Field from '@salesforce/schema/Portfolio__c.SoftwareDevelopmentMethodologies__c';
import Soft_Skills_Field from '@salesforce/schema/Portfolio__c.SoftSkills__c';

export default class PortfolioSkills extends LightningElement {
    techSkills = [];
    softSkills = [];
    methodologies = [];
    toolsSkills = [];

    @api recordId;
    @wire(getRecord, {
        recordId: '$recordId',
        fields: [Tech_Skills_Field, Soft_Skills_Field, Software_Field, Methodologies_Field]
    }) skillHandler({ data, error }) {
        if (data) {
            this.formatSkills(data);
        }
        if (error) {

        }
    }

    formatSkills(data) {
        const { SoftSkills__c, SoftwareDevelopmentMethodologies__c, SoftwareTools__c, TechnicalSkills__c } = data.fields;
        this.techSkills = TechnicalSkills__c ? TechnicalSkills__c.value.split(',') : [];
        this.softSkills = SoftSkills__c ? SoftSkills__c.value.split(',') : [];
        this.methodologies = SoftwareDevelopmentMethodologies__c ? SoftwareDevelopmentMethodologies__c.value.split(',') : [];
        this.toolsSkills = SoftwareTools__c ? SoftwareTools__c.value.split(',') : [];
    }
}