import { LightningElement, wire, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import FULLNAME from '@salesforce/schema/Portfolio__c.FullName__c';
import COMPANY_NAME from '@salesforce/schema/Portfolio__c.CompanyName__c';
import COMPANY_LOCATION from '@salesforce/schema/Portfolio__c.CompanyLocation__c';
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c';

export default class PortfolioBanner extends LightningElement {

    @api linkedinUrl// = 'https://www.linkedin.com/in/shubham-rawat-494a69207/';
    @api githubUrl// = 'https://github.com/raw-h';
    @api twitterUrl// = '';
    @api trailheadUrl// = 'https://www.salesforce.com/trailblazer/z9w4m7kdflwtrt6sns';
    @api hackerrankUrl// = 'https://www.hackerrank.com/profile/raw_H';
    @api recordId// = 'a01Qy00000o6wNvIAI';
    
    @wire(getRecord, { recordId: '$recordId', fields: [FULLNAME, COMPANY_LOCATION, COMPANY_NAME, DESIGNATION] })
    portfolioData;

    userPic = `${PortfolioAssets}/PortfolioAssets/userPic.jpeg`;
    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`;
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`;
    twitter = `${PortfolioAssets}/PortfolioAssets/Social/twitter.svg`;
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`;
    hackerrank = `${PortfolioAssets}/PortfolioAssets/Social/hackerrank.svg`;


    get fullName() {
        return getFieldValue(this.portfolioData.data, FULLNAME);
    }

    get companyLocation() {
        return getFieldValue(this.portfolioData.data, COMPANY_LOCATION);
    }

    get companyName() {
        return getFieldValue(this.portfolioData.data, COMPANY_NAME);
    }

    get designation(){
        return getFieldValue(this.portfolioData.data, DESIGNATION);
    }
}