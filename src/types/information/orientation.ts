export enum CardinalOrientation {
  North = "North",
  South = "South",
  East = "East",
  West = "West",
}

export enum IntercardinalOrientation {
  Northeast = "Northeast",
  Northwest = "Northwest",
  Southeast = "Southeast",
  Southwest = "Southwest",
}

export enum SecondaryOrientation {
  NorthNortheast = "North-Northeast",
  NorthNorthwest = "North-Northwest",
  SouthSoutheast = "South-Southeast",
  SouthSouthwest = "South-Southwest",
  EastNortheast = "East-Northeast",
  EastSoutheast = "East-Southeast",
  WestNorthwest = "West-Northwest",
  WestSouthwest = "West-Southwest",
}

export enum SpecialOrientation {
  FacingSunrise = "FacingSunrise",
  FacingSunset = "FacingSunset",
  OceanView = "OceanView",
  MountainView = "MountainView",
  CityView = "CityView",
  ForestView = "ForestView",
}

export enum OrientationGroup {
  Cardinal = "Cardinal",
  Intercardinal = "Intercardinal",
  Secondary = "Secondary",
  Special = "Special",
}

export const OrientationMap = {
  [OrientationGroup.Cardinal]: CardinalOrientation,
  [OrientationGroup.Intercardinal]: IntercardinalOrientation,
  [OrientationGroup.Secondary]: SecondaryOrientation,
  [OrientationGroup.Special]: SpecialOrientation,
};
