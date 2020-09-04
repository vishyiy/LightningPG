public with sharing class BoatSearchResults {
  @AuraEnabled
  public static List<BoatType__c> getBoatTypes() {
    return [SELECT Id, Name FROM BoatType__c ORDER BY Name ASC];
  }

  @AuraEnabled
  public static list<Boat__c> getBoats(String boatTypeId) {
    if (boatTypeId == null || boatTypeId == '') {
      return [
        SELECT Id, Name, BoatType__c, Contact__r.Name, Picture__c,Geolocation__Latitude__s,Geolocation__Longitude__s
        FROM Boat__c
      ];
    } else {
      return [
        SELECT Id, Name, BoatType__c, Contact__r.Name, Picture__c,Geolocation__Latitude__s,Geolocation__Longitude__s
        FROM Boat__c
        WHERE BoatType__c = :boatTypeId
      ];
    }
  }
}