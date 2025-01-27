import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';

export default class PortfolioPersonalProjects extends LightningElement {
    BMICalculator = `${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`;
    AlarmClock = `${PortfolioAssets}/PortfolioAssets/Projects/AlarmClock.png`;
    CurrencyCalcultor = `${PortfolioAssets}/PortfolioAssets/Projects/CurrencyCalculator.png`;
    WeatherApp = `${PortfolioAssets}/PortfolioAssets/Projects/WeatherApp.png`;
    SurveyApp = `${PortfolioAssets}/PortfolioAssets/Projects/Survey.png`;
    NoteApp = `${PortfolioAssets}/PortfolioAssets/Projects/NoteTakingApp.png`;

    projects = [
        {
            "name" : "BMI Claculator App",
            "img" : this.BMICalculator,
            "link" : "https://psagtechnologies60-dev-ed.develop.my.site.com/bmi-calculator"
        },
        {
            "name" : "Alarm Clock App",
            "img" : this.AlarmClock,
            "link" : "https://psagtechnologies60-dev-ed.develop.my.site.com/alarm-clock"
        },
        {
            "name" : "Currency Converter App",
            "img" : this.CurrencyCalcultor,
            "link" : "https://psagtechnologies60-dev-ed.develop.my.site.com/currency-converter-app"
        },
        {
            "name" : "Weather App",
            "img" : this.WeatherApp,
            "link" : "https://psagtechnologies60-dev-ed.develop.my.site.com/weather-app"
        },
        {
            "name" : "Survey App",
            "img" : this.SurveyApp,
            "link" : "https://psagtechnologies60-dev-ed.develop.my.site.com/survey/survey/runtimeApp.app?invitationId=0KiQy0000003J1J&surveyName=employee_survey&UUID=5ba13e81-fda8-4b90-beaa-809212ea056a"
        },
        {
            "name" : "Note Taking App",
            "img" : this.NoteApp,
            "link" : "https://psagtechnologies60-dev-ed.develop.my.site.com/note-taking-app"
        },
    ]
}