import CardAdmin from "./fragments/CardAdminn";
import CardProperty from "./fragments/CardPropertyy";

export default function Dashboard() {
  return (
    <>
      <div className="flex gap-[150px]">
        <div className="flex flex-col gap-5 p-5 rounded-lg border max-w-[441px]">
          {new Array(5).fill(null).map(() => (
            <CardProperty key={Math.random() + 10} />
          ))}
        </div>
        <div className="flex gap-[150px]">
          <div className="flex flex-col gap-5 p-5 rounded-lg border max-w-[441px]">
            {new Array(5).fill(null).map(() => (
              <CardAdmin key={Math.random() + 10} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
