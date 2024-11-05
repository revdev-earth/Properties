interface CardAddressProps {
  address: {
    streetNumber: string;
    neighborhood: string;
    cityState: string;
    postalCode: string;
    gpsCoordinates?: string;
  };
}

const CardAddress = ({ address }: CardAddressProps) => {
  return (
    <div className="border p-3 rounded-lg">
      <h4 className="font-semibold">Address</h4>
      <p>{address.streetNumber}</p>
      <p>{address.neighborhood}</p>
      <p>{address.cityState}</p>
      <p>{address.postalCode}</p>
      {address.gpsCoordinates && (
        <p>
          <strong>GPS:</strong> {address.gpsCoordinates}
        </p>
      )}
    </div>
  );
};

export default CardAddress;
