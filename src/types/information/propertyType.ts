export enum ResidentialPropertyType {
  House = "House",
  Apartment = "Apartment",
  Condo = "Condo",
  Townhouse = "Townhouse",
  Villa = "Villa",
  Duplex = "Duplex",
  Cottage = "Cottage",
  Studio = "Studio",
  Bungalow = "Bungalow",
  MobileHome = "MobileHome",
}

export enum CommercialPropertyType {
  OfficeSpace = "OfficeSpace",
  RetailSpace = "RetailSpace",
  Warehouse = "Warehouse",
  IndustrialBuilding = "IndustrialBuilding",
  ShoppingMall = "ShoppingMall",
  RestaurantBar = "RestaurantBar",
  Hotel = "Hotel",
  CoworkingSpace = "CoworkingSpace",
}

export enum LandPropertyType {
  ResidentialLot = "ResidentialLot",
  CommercialLot = "CommercialLot",
  AgriculturalLand = "AgriculturalLand",
  IndustrialLand = "IndustrialLand",
  DevelopmentLand = "DevelopmentLand",
}

export enum SpecialPurposePropertyType {
  VacationRental = "VacationRental",
  FarmRanch = "FarmRanch",
  EducationalFacility = "EducationalFacility",
  HealthcareFacility = "HealthcareFacility",
  ReligiousBuilding = "ReligiousBuilding",
  EventVenue = "EventVenue",
  RecreationalFacility = "RecreationalFacility",
}

export enum MixedUsePropertyType {
  ResidentialCommercial = "ResidentialCommercial",
  OfficeResidential = "OfficeResidential",
  RetailIndustrial = "RetailIndustrial",
}

export enum OtherPropertyType {
  ParkingSpace = "ParkingSpace",
  BoatDock = "BoatDock",
  StorageUnit = "StorageUnit",
  TinyHome = "TinyHome",
  FloatingHome = "FloatingHome",
}

export enum PropertyTypeGroup {
  Residential = "Residential",
  Commercial = "Commercial",
  Land = "Land",
  SpecialPurpose = "SpecialPurpose",
  MixedUse = "MixedUse",
  Other = "Other",
}

export const PropertyTypeMap = {
  [PropertyTypeGroup.Residential]: ResidentialPropertyType,
  [PropertyTypeGroup.Commercial]: CommercialPropertyType,
  [PropertyTypeGroup.Land]: LandPropertyType,
  [PropertyTypeGroup.SpecialPurpose]: SpecialPurposePropertyType,
  [PropertyTypeGroup.MixedUse]: MixedUsePropertyType,
  [PropertyTypeGroup.Other]: OtherPropertyType,
};
