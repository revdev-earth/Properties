"use client";

import { useEffect, useState } from "react";
import { PropertyInformation } from "@prisma/client";

import { PropsJustParams } from "../types";
import { getPropertyInformationByPropertyId } from " +/actions/property/actions_and_mutations";

export default function Information({ params }: PropsJustParams) {
  const [id, setId] = useState<string | null>(null);
  const [info, setInformationProperty] = useState<PropertyInformation | null>(
    null
  );

  useEffect(() => {
    async function resolveParams() {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    }
    resolveParams();
  }, [params]);

  useEffect(() => {
    if (id) {
      async function fetchInformationProperty() {
        if (id !== null) {
          const { propertyInformation } =
            (await getPropertyInformationByPropertyId({ id })) || {
              propertyInformation: null,
            };
          setInformationProperty(propertyInformation);
        }
      }
      fetchInformationProperty();
    }
  }, [id]);

  if (!info) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="">
        <div className="flex gap-5 h-fit">
          <div className="flex flex-col gap-1 border-b rounded-lg p-5 bg-slate-100">
            <h3 className="font-bold text-xl mb-3">
              Property {info.id} Information
            </h3>

            <div className="p-5 rounded-lg border">
              <p>Address number: {info.streetAndNumber}</p>
              <p>Neighborhood: {info.neighborhood}</p>
              <p>City and State: {info.cityAndState}</p>
              <p>Postal code: {info.postalCode}</p>
              <p>GPS Coordinates: {info.gpsCoordinates}</p>
            </div>

            <div className="p-5 rounded-lg border">
              <p>Property type: {info.propertyType}</p>
              <p>Total land area: {info.totalLandArea} m²</p>
              <p>Built area: {info.builtArea} m²</p>
              <p>Floors: {info.floors}</p>
              <p>Orientation: {info.orientation}</p>
              <p>Age: {info.age} years</p>
            </div>

            <div className="p-5 rounded-lg border">
              <p>Bedrooms: {info.bedrooms}</p>
              <p>Bathrooms: {info.bathrooms}</p>
              <p>Half bathrooms: {info.halfBathrooms}</p>
              <p>Kitchen description: {info.kitchen}</p>
              <p>Living and dining description: {info.livingAndDining}</p>
              <p>Additional rooms: {info.additionalRooms}</p>
            </div>

            <div className="p-5 rounded-lg border">
              <p>Yard or garden: {info.yardOrGarden}</p>
              <p>Parking spots: {info.parking}</p>
              <p>Parking location: {info.parkingLocation}</p>
              <p>Balconies and terraces: {info.balconiesAndTerraces}</p>
              <p>Recreational areas: {info.recreationalAreas}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
