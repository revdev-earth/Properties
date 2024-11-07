"use client";
import { getInformationProperties } from " +/actions/informationProperty/actions_and_mutations";
import { InformationProperty } from "@prisma/client";
import { useEffect, useState } from "react";

export default function Information() {
  const [informationProperties, setInformationProperties] = useState<
    InformationProperty[]
  >([]);

  useEffect(() => {
    async function fetchInformationProperties() {
      const informationProperties = await getInformationProperties();
      setInformationProperties(informationProperties);
    }
    fetchInformationProperties();
  }, []);

  return (
    <>
      <div className="flex gap-[150px] min-h-screen justify-center items-center">
        <div className="flex flex-col gap-5 p-5 rounded-lg border max-w-[441px] h-fit">
          {informationProperties.map((property) => {
            {
            }
            return (
              <div key={property.id} className="border-b py-5">
                <h3 className="font-bold text-xl mb-3">Property Information</h3>

                <p>Address number: {property.streetAndNumber}</p>
                <p>Neighborhood: {property.neighborhood}</p>
                <p>City and State: {property.cityAndState}</p>
                <p>Postal code: {property.postalCode}</p>
                <p>GPS Coordinates: {property.gpsCoordinates}</p>

                <p>Property type: {property.propertyType}</p>
                <p>Total land area: {property.totalLandArea} m²</p>
                <p>Built area: {property.builtArea} m²</p>
                <p>Floors: {property.floors}</p>
                <p>Orientation: {property.orientation}</p>
                <p>Age: {property.age} years</p>

                <p>Bedrooms: {property.bedrooms}</p>
                <p>Bathrooms: {property.bathrooms}</p>
                <p>Half bathrooms: {property.halfBathrooms}</p>
                <p>Kitchen description: {property.kitchen}</p>
                <p>Living and dining description: {property.livingAndDining}</p>
                <p>Additional rooms: {property.additionalRooms}</p>

                <p>Yard or garden: {property.yardOrGarden}</p>
                <p>Parking spots: {property.parking}</p>
                <p>Parking location: {property.parkingLocation}</p>
                <p>Balconies and terraces: {property.balconiesAndTerraces}</p>
                <p>Recreational areas: {property.recreationalAreas}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
