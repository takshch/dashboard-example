import SquareRoundedPlusIcon from '../../../assets/square-rounded-plus.svg';

const DEALS = [
  'Fruit2Go',
  "Marshall's MKT",
  'CCNT',
  'Joana Mini-market',
  'Little Brazil Vegan',
  'Target',
  'Organic Place',
  "Morello's",
];

const Deal = ({ text }: { text: string }) => (
  <div
    className="flex items-center gap-2 py-3 pl-3 pr-4 rounded-2xl"
    style={{ backgroundColor: '#FFF7E8' }}
  >
    <div style={{ color: '#FFA500' }}>
      <SquareRoundedPlusIcon />
    </div>
    <div className="text-sm" style={{ color: '#734A00' }}>
      {text}
    </div>
  </div>
);

function NewDeals() {
  return (
    <div className="basis-full grow flex flex-col gap-4 p-5 bg-white rounded-2xl min-w-80">
      <div className="flex flex-col gap-2 mb-4 text-xl font-semibold">
        New deals
      </div>
      <div className="flex gap-2 flex-wrap">
        {DEALS.map((text, index) => (
          <Deal key={index} text={text} />
        ))}
      </div>
    </div>
  );
}

export default NewDeals;
