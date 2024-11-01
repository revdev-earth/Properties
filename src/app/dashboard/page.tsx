import { useEffect, useState } from "react";
import CardAdmin from "./fragments/CardAdmin";
import CardProperty from "./fragments/CardProperty";

import { getProperties } from " +/actions/property/actions_and_mutations";
import { Property } from "@prisma/client";

export default function Dashboard() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    async function fetchProperties() {
      const properties = await getProperties();
      setProperties(properties);
    }
    fetchProperties();
  }, []);

  return (
    <>
      <div className="flex gap-[150px] min-h-screen justify-center items-center">
        <div className="flex flex-col gap-5 p-5 rounded-lg border max-w-[441px] h-fit">
          {properties.map((property) => (
            <CardProperty key={property.id} />
          ))}
        </div>
        <div className="flex gap-[150px]">
          <div className="flex flex-col gap-5 p-5 rounded-lg border max-w-[441px] h-fit">
            {new Array(5).fill(null).map(() => (
              <CardAdmin key={Math.random()} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
