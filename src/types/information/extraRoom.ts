export enum FunctionalRoom {
  Office = "Office",
  LaundryRoom = "LaundryRoom",
  Storage = "Storage",
  Pantry = "Pantry",
  Workshop = "Workshop",
  UtilityRoom = "UtilityRoom",
}

export enum RecreationalRoom {
  GameRoom = "GameRoom",
  HomeTheater = "HomeTheater",
  Gym = "Gym",
  MusicRoom = "MusicRoom",
  Library = "Library",
  Bar = "Bar",
}

export enum GuestRoom {
  GuestBedroom = "GuestBedroom",
  GuestBathroom = "GuestBathroom",
  InLawSuite = "InLawSuite",
}

export enum ExteriorRoom {
  Sunroom = "Sunroom",
  Porch = "Porch",
  Greenhouse = "Greenhouse",
  PoolHouse = "PoolHouse",
  Garage = "Garage",
  Shed = "Shed",
}

export enum RoomGroup {
  Functional = "Functional",
  Recreational = "Recreational",
  Guest = "Guest",
  Exterior = "Exterior",
}

export const RoomMap = {
  [RoomGroup.Functional]: FunctionalRoom,
  [RoomGroup.Recreational]: RecreationalRoom,
  [RoomGroup.Guest]: GuestRoom,
  [RoomGroup.Exterior]: ExteriorRoom,
};
