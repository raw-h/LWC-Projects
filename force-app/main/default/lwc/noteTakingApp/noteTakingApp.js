import { LightningElement, wire } from 'lwc';
import createNoteRecord from '@salesforce/apex/NoteTakingHandler.createNoteRecord';
import getNotes from '@salesforce/apex/NoteTakingHandler.getNotes';
import updateNoteRecord from '@salesforce/apex/NoteTakingHandler.updateNoteRecord';

const DEFAULT_NOTE_FORM = {
    Name: "",
    Note_Description__c: ""
}

export default class NoteTakingApp extends LightningElement {
    showModal = false;
    noteRecord = DEFAULT_NOTE_FORM;
    selectedRecordId = '';
    noteList = [];
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

    get isFormInvalid() {
        return !(this.noteRecord && this.noteRecord.Note_Description__c && this.noteRecord.Name);
    }

    get ModalName() {
        return this.selectedRecordId ? "Update Note" : "Add Note";
    }

    createNoteHandler() {
        this.showModal = true;
        this.noteRecord = DEFAULT_NOTE_FORM;
    }

    closeModalHandler() {
        this.showModal = false;
        this.noteRecord = DEFAULT_NOTE_FORM;
        this.selectedRecordId = null;
    }

    changeHandler(event) {
        const { name, value } = event.target;
        this.noteRecord = { ...this.noteRecord, [name]: value };
    }

    formSubmitHandler(event) {
        event.preventDefault();

        
        if(this.selectedRecordId){
            this.updateNote(this.selectedRecordId);
        }else{
            this.createNote();
        }
    }

    createNote() {
        createNoteRecord({ title: this.noteRecord.Name, description: this.noteRecord.Note_Description__c }).then(() => {
            this.showModal = false;
            this.showToastMsg("Note Created Successfully!!", "success");
        }).catch(error => {
            this.showToastMsg(error.message.body, "error");
        });
    }

    showToastMsg(message, variant) {
        const elem = this.template.querySelector('c-notifiction');
        if (elem) {
            elem.showToast(message, variant);
        }
    }

    @wire(getNotes)
    noteListInfo({ data, error }) {
        if (data) {
            this.noteList = data.map(item => {
                let formattedDate = new Date(item.LastModifiedDate).toDateString();
                return { ...item, formattedDate };
            })
        }
        if (error) {
            this.showToastMsg(error.message.body, 'error');
        }
    }

    editNoteHandler(event) {
        const { recordid } = event.target.dataset;
        const noteRecord = this.noteList.find(item => item.Id === recordId);
        this.noteRecord = {
            Name: noteRecord.Name,
            Note_Description__c: noteRecord.Note_Description__c
        }
        this.selectedRecordId = recordid;
        this.showModal = true;
    }

    updateNote(noteId) {
        const [Name, Note_Description__c] = this.noteRecord;
        updateNoteRecord({ noteId, title: Name, description: Note_Description__c }).then(() => {
            this.showModal = false;
            this.showToastMsg("Note Updated Successfully!!", 'success');
        }).catch(error => {
            console.error("Error in Updating", error);
            this.showToastMsg(error.message.body, 'error');
        })
    }
}