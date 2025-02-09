import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
import SF_CERTS from '@salesforce/schema/Portfolio__c.SalesforceCertification__c';
import OTHER_CERTS from '@salesforce/schema/Portfolio__c.OtherCertifications__c';

export default class PortfolioCertifications extends LightningElement {
    certLogo = `${PortfolioAssets}/PortfolioAssets/cert_logo.png`;
    sfCertsList = [];
    otherCertsList = [];
    otherCerts = false;

    @api recordId;
    @wire(getRecord, {
        recordId: '$recordId',
        fields: [SF_CERTS, OTHER_CERTS]
    })certsHandler({data, error}){
        if(data){
            this.formatData(data);
        }
        if(error){

        }
    }

    formatData(data){
        const {SalesforceCertification__c, OtherCertifications__c} = data.fields;
        this.sfCertsList = SalesforceCertification__c ? SalesforceCertification__c.value.split(';').map(item=>{
            return `Salesforce Certified ${item}`;
        }):[];
        if(OtherCertifications__c.value != null){
            this.otherCerts = true;
            this.otherCertsList = OtherCertifications__c ? OtherCertifications__c.value.split(','):[];
        }
    }
}