import { LightningElement } from 'lwc';
import { countryCodeList } from 'c/countryCodeList';
import currencyConverterAssets from '@salesforce/resourceUrl/currencyConverterAssets';
export default class CurrencyConverterApp extends LightningElement {
    currencyImage = currencyConverterAssets + '/currencyConverterAssets/currency.svg';
    countryFrom = "USD";
    countryTo = "AUD";
    countryList = countryCodeList;
    amount = '';
    result
    error

    handleChange(event) {
        const { name, value } = event.target;
        this[name] = value;
        this.result = '';
        this.error = '';
    }

    submitHandler(event) {
        event.preventDefault();
        /* Since the sumbit handler is called from a form once we hit the submit button, by default forms work in a way,
        where clicking the submit button refreshes the page, hence the data is lost, to prevent that the above function is used.
        */
        this.convert();
    }

    async convert() {
        const API_KEY = '2f78a38cdac447cf0ea54c80'
        const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${this.countryFrom}/${this.countryTo}`
        try {
            const data = await fetch(API_URL);
            const jsonData = await data.json();
            /*
            The fetch() method returns data in form of a binary stream, to convert that data into json format we have used
            json() method on the data.
            */
           this.result = (Number(this.amount) * jsonData.conversion_rate).toFixed(2);
        } catch (error) {
            console.log(error);
            this.error = "An error occurred. Please try again..."
        }
    }
}