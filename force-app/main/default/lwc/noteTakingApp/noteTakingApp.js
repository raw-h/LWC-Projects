import Description from '@salesforce/schema/Account.Description';
import { LightningElement } from 'lwc';

const DEFAULT_NOTE_FORM = {
    Name: "",
    Note_Description__c: ""
}

export default class NoteTakingApp extends LightningElement {
    showModal = false;
    noteRecord = DEFAULT_NOTE_FORM;
    formats = [
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'list',
        'indent',
        'align',
        'link',
        'clean',
        'table',
        'header',
        'color',
    ];

    get isFormInvalid(){
        return !(this.noteRecord && this.noteRecord.Note_Description__c && this.noteRecord.Name);
    }

    createNoteHandler(){
        this.showModal = true;
        this.noteRecord = DEFAULT_NOTE_FORM;
    }

    closeModalHandler(){
        this.showModal = false;
    }

    changeHandler(event){
        const {name, value} = event.target;
        this.noteRecord = {...this.noteRecord, [name]: value};
    }

    formSubmitHandler(event){
        event.preventDefault();
    }
}