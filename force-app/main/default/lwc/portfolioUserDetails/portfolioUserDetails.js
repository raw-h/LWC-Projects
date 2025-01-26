import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetails extends LightningElement {
    @api recordId;
    @api objectApiName;
    @api resumeUrl
    downloadResume(){
        window.open(this.resumeUrl, "_blank");
    }
    // "https://github.com/raw-h/RawH-Portfolio-Salesforce/raw/refs/heads/main/Shubham%20Singh%20Rawat.pdf"
}