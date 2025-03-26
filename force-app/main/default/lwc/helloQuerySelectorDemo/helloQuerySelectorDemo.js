import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    userNames = ["John", "Smith", "Mike", "Jane", "Mark", "David", "Michelle", "David", "Mark", "Mikey", "Jaane", "Smiyth"];
    fetchDetailHandler(){
        const elem = this.template.querySelector('h1');
        elem.style.border = "1px solid red";
        
        const userElement = this.template.querySelectorAll('.name');
        Array.from(userElement).forEach(item => {
            item.setAttribute("title", item.innerText);
        })

        const childElement = this.template.querySelector('.child');
        childElement.innerHTML = '<p> Hey, this is child element. <p>';
    }
}