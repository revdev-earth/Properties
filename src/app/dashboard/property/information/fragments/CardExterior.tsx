interface CardExteriorProps {
  exterior: {
    yardOrGarden?: string;
    parking: number;
    parkingLocation?: string;
    balconiesAndTerraces?: string;
    recreationalAreas?: string;
  };
}

const CardExterior = ({ exterior }: CardExteriorProps) => (
  <div className="border p-3 rounded-lg">
    <h4 className="font-semibold">Exterior</h4>
    {exterior.yardOrGarden && (
      <p>
        <strong>Yard/Garden:</strong> {exterior.yardOrGarden}
      </p>
    )}
    <p>
      <strong>Parking:</strong> {exterior.parking} spots
    </p>
    {exterior.parkingLocation && (
      <p>
        <strong>Parking Location:</strong> {exterior.parkingLocation}
      </p>
    )}
    {exterior.balconiesAndTerraces && (
      <p>
        <strong>Balconies/Terraces:</strong> {exterior.balconiesAndTerraces}
      </p>
    )}
    {exterior.recreationalAreas && (
      <p>
        <strong>Recreational Areas:</strong> {exterior.recreationalAreas}
      </p>
    )}
  </div>
);

export default CardExterior;
