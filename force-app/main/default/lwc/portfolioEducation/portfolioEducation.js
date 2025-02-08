import { LightningElement, wire, api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
const COLUMNS = [
    {label: 'Education', fieldName: 'Education'},
    {label: 'Institution Name', fieldName: 'InstitutionName'},
    {label: 'Passing Year', fieldName: 'PassingYear'}
]

export default class PortfolioEducation extends LightningElement {
    tableData = [];
    columns = COLUMNS;

    @api recordId;
    @wire(getRelatedListRecords, {
        parentRecordId: "$recordId",
        relatedListId: "Educations__r",
        fields: ['Education__c.InstituionName__c', 'Education__c.Title__c', 'Education__c.PassingYear__c'],
        sortBy: ['Education__c.PassingYear__c']
    })EducationHandler({data, error}){
        if(data){
            this.formatData(data);
        }
        if(error){
            console.error(error);
        }
    }

    formatData(data){
        this.tableData = data.records.map(item=>{
            let Id = item.id;
            const {InstituionName__c, PassingYear__c, Title__c} = item.fields;
            let Education = Title__c.value;
            let InstitutionName = InstituionName__c.value;
            let PassingYear = PassingYear__c.value;
            return {
                Id, Education, InstitutionName, PassingYear
            }
        })
    }
}