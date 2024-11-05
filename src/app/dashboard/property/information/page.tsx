"use client";
import { getInformationProperties } from " +/actions/informationProperty/actions_and_mutations";
import {
  Address,
  Exterior,
  Features,
  InformationProperty,
  Interior,
} from "@prisma/client";
import { useEffect, useState } from "react";

import CardAddress from "./fragments/CardAddress";
import CardFeatures from "./fragments/CardFeatures";
import CardInterior from "./fragments/CardInterior";
import CardExterior from "./fragments/CardExterior";
import { getAddress } from " +/actions/address/actions_and_mutations";
import { getInterior } from " +/actions/interior/actions_and_mutations";
import { getExterior } from " +/actions/exterior/actions_and_mutations";
import { getFeatures } from " +/actions/features/actions_and_mutations";

export default function Information() {
  const [informationProperties, setInformationProperties] = useState<
    InformationProperty[]
  >([]);
  const [address, setAddress] = useState<Address[]>([]);
  const [interior, setInterior] = useState<Interior[]>([]);
  const [exterior, setExterior] = useState<Exterior[]>([]);
  const [features, setFeatures] = useState<Features[]>([]);

  useEffect(() => {
    async function fetchInformationProperties() {
      const informationProperties = await getInformationProperties();
      setInformationProperties(informationProperties);
    }
    fetchInformationProperties();
  }, []);

  useEffect(() => {
    async function fetchAddress() {
      const address = await getAddress();
      setAddress(address);
    }
    fetchAddress();
  }, []);

  useEffect(() => {
    async function fetchInterior() {
      const inter = await getInterior();
      setInterior(inter);
    }
    fetchInterior();
  }, []);

  useEffect(() => {
    async function fetchExterior() {
      const exterior = await getExterior();
      setExterior(exterior);
    }
    fetchExterior();
  }, []);

  useEffect(() => {
    async function fetchFeatures() {
      const feature = await getFeatures();
      setFeatures(feature);
    }
    fetchFeatures();
  }, []);

  return (
    <>
      <div className="flex gap-[150px] min-h-screen justify-center items-center">
        <div className="flex flex-col gap-5 p-5 rounded-lg border max-w-[441px] h-fit">
          {informationProperties.map((property) => (
            <div key={property.id} className="border-b py-5">
              <h3 className="font-bold text-xl mb-3">Property Details</h3>
              {/* Address Card */}
              {address.map((address) => {
                return <CardAddress address={address} key={address.id} />;
              })}
              {/* Features Card */}
              {features.map((feature) => {
                return <CardFeatures features={feature} key={feature.id} />;
              })}

              {/* Interior Card */}
              {interior.map((interior) => {
                return <CardInterior interior={interior} key={interior.id} />;
              })}
              {/* Exterior Card */}
              {exterior.map((exterior) => {
                return <CardExterior exterior={exterior} />;
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
