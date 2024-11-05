interface CardInteriorProps {
  interior: {
    bedrooms: number;
    bathrooms: number;
    halfBathrooms?: number;
    kitchen: string;
    livingAndDining?: string;
    additionalRooms?: string;
  };
}

const CardInterior = ({ interior }: CardInteriorProps) => (
  <div className="border p-3 rounded-lg">
    <h4 className="font-semibold">Interior</h4>
    <p>
      <strong>Bedrooms:</strong> {interior.bedrooms}
    </p>
    <p>
      <strong>Bathrooms:</strong> {interior.bathrooms}
    </p>
    {interior.halfBathrooms && (
      <p>
        <strong>Half Bathrooms:</strong> {interior.halfBathrooms}
      </p>
    )}
    <p>
      <strong>Kitchen:</strong> {interior.kitchen}
    </p>
    {interior.livingAndDining && (
      <p>
        <strong>Living and Dining:</strong> {interior.livingAndDining}
      </p>
    )}
    {interior.additionalRooms && (
      <p>
        <strong>Additional Rooms:</strong> {interior.additionalRooms}
      </p>
    )}
  </div>
);

export default CardInterior;
