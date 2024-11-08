"use client";
import { getInformationPropertyById } from " +/actions/informationProperty/actions_and_mutations";
import { getPropertyById } from " +/actions/property/actions_and_mutations";
import { InformationProperty } from "@prisma/client";
import { useEffect, useState } from "react";

type Params = {
  id: string;
};

export default function Information({ params }: { params: Promise<Params> }) {
  const [id, setId] = useState<string | null>(null);
  const [info, setInformationProperty] = useState<InformationProperty | null>(
    null
  );

  // Resolver `params` y obtener el `id`
  useEffect(() => {
    async function resolveParams() {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    }
    resolveParams();
  }, [params]);

  // Obtener la información de la propiedad una vez que `id` esté disponible
  useEffect(() => {
    if (id) {
      async function fetchInformationProperty() {
        const { informationProperty } = ((await getPropertyById({
          id,
          options: {
            include: {
              informationProperty: true,
            },
          },
        })) as { informationProperty: InformationProperty } | null) || {
          informationProperty: null,
        };
        setInformationProperty(informationProperty);
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
