import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    closeHandler(){
        const closeEvent = new CustomEvent('close', {
            bubbles: true,
            detail : "Modal closed successfully"
        });
        this.dispatchEvent(closeEvent);
    }

    footerHandler(){
        console.log("Footer Handler called");
    }
}