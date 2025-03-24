import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected = [];
    
    myQuestions = [
        {
            id: "Question1",
            question: "Which of these following is not a template loop?",
            answers:{
                a: "for:each",
                b: "iterator",
                c: "map loop"
            },
            correctAnswer: "c"
        },
        {
            id: "Question2",
            question: "Which of the files is invalid in LWC folder?",
            answers:{
                a: ".svg",
                b: ".apex",
                c: ".js"
            },
            correctAnswer: "b"
        },
        {
            id: "Question3",
            question:"Which of the following is not a directive?",
            answers:{
                a: "for:each",
                b: "if:true",
                c: "@track"
            },
            correctAnswer: "c"
        },
    ];

    changeHandler(){

    }
}