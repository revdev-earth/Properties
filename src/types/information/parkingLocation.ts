export enum CoveredParking {
  Covered = "Covered",
  OpenAir = "OpenAir",
  Underground = "Underground",
  MultiStory = "MultiStory",
}

export enum AccessParking {
  Private = "Private",
  Shared = "Shared",
  Public = "Public",
  Valet = "Valet",
}

export enum ProximityParking {
  AttachedGarage = "AttachedGarage",
  DetachedGarage = "DetachedGarage",
  OnStreet = "OnStreet",
  OffStreet = "OffStreet",
  ReservedSpot = "ReservedSpot",
}

export enum SpecializedParking {
  EVCharging = "EVCharging",
  HandicapAccessible = "HandicapAccessible",
  BikeRack = "BikeRack",
  BoatParking = "BoatParking",
  RVParking = "RVParking",
}

export enum ParkingLocationGroup {
  Covered = "Covered",
  Access = "Access",
  Proximity = "Proximity",
  Specialized = "Specialized",
}

export const ParkingLocationMap = {
  [ParkingLocationGroup.Covered]: CoveredParking,
  [ParkingLocationGroup.Access]: AccessParking,
  [ParkingLocationGroup.Proximity]: ProximityParking,
  [ParkingLocationGroup.Specialized]: SpecializedParking,
};
