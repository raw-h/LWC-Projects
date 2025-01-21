import { LightningElement } from 'lwc';
import createNoteRecord from '@salesforce/apex/NoteTakingHandler.createNoteRecord';
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
        this.createNote();
    }

    createNote(){
        createNoteRecord({title: this.noteRecord.Name, description: this.noteRecord.Note_Description__c}).then(()=>{
            this.showModal = false;
            this.showToastMsg("Note Created Successfully!!", "success");
        }).catch(error=> {
            this.showToastMsg(error.message.body, "error");
        });
    }

    showToastMsg(message, variant){
        const elem = this.template.querySelector('c-notifiction');
        if(elem){
            elem.showToast(message, variant);
        }
    }
}