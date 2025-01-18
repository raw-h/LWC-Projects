public with sharing class weatherAppController {
    @AuraEnabled
    public static String getWeatherDetails(String input) {
        String url = 'https://api.openweathermap.org/data/2.5/weather?q=' + input + '&units=metric' + getKey();
        String response = getResponse(url);
        return response;
    }

    public static String getResponse(String strUrl){
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        HttpResponse res = new HttpResponse();
        req.setMethod('GET');
        req.setEndpoint(strUrl);
        req.setTimeout(120000);
        res = h.send(req);
        String responseBody = res.getBody();
        return responseBody;
    }

    public static String getKey(){
        String key = 'edeecc6cc306a2f13c860269e788cf15';
        String output = '&appid=' + key;
        return output;
    }
}