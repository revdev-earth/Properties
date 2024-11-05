interface CardFeaturesProps {
  propertyType: string;
  totalLandArea?: number;
  builtArea: number;
  floors: number;
  orientation: string;
  age: number;
}

const CardFeatures = ({ features }: CardFeaturesProps) => (
  <div className="border p-3 rounded-lg">
    <h4 className="font-semibold">Features</h4>
    <p>
      <strong>Type:</strong> {features.propertyType}
    </p>
    {features.totalLandArea && (
      <p>
        <strong>Total Land Area:</strong> {features.totalLandArea} m²
      </p>
    )}
    <p>
      <strong>Built Area:</strong> {features.builtArea} m²
    </p>
    <p>
      <strong>Floors:</strong> {features.floors}
    </p>
    <p>
      <strong>Orientation:</strong> {features.orientation}
    </p>
    <p>
      <strong>Age:</strong> {features.age} years
    </p>
  </div>
);

export default CardFeatures;
