public with sharing class NoteTakingHandler {
    @AuraEnabled
    public static Boolean createNoteRecord(String title, String description){
        try{
            if(!String.isEmpty(title)){
                My_Note__c noteRec = new My_Note__c(Name = title, Note_Description__c = description);
                insert noteRec;
                return true;
            }
            return false;
        }catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }

    // Here along with AuraEnabled we have also used cacheable true, because we want to use this method withn wire in our JS file.
    @AuraEnabled(cacheable = true)
    public static List<My_Note__c> getNotes(){
        return [SELECT Id, Name, Note_Description__c, LastModifiedDate from My_Note__c order by LastModifiedDate];
    }
}