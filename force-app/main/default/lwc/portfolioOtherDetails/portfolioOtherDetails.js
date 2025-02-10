import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SUPERBADGE_FIELD from '@salesforce/schema/Portfolio__c.Superbadges__c';
import AWARD_FILED from '@salesforce/schema/Portfolio__c.Awards__c';
import LANGUAGES_FIELD from '@salesforce/schema/Portfolio__c.Languages__c';

export default class PortfolioOtherDetails extends LightningElement {
    @api recordId;
    @wire(getRecord, {
        recordId: '$recordId',
        fields: [SUPERBADGE_FIELD, AWARD_FILED, LANGUAGES_FIELD]
    })otherFieldHandler({data, error}){
        if(data){

        }
        if(error){
            
        }
    }
}