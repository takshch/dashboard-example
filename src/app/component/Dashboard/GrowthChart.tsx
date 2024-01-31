import ChevronDownIcon from '../../../assets/chevron-down.svg';

function GrowthChart() {
  return (
    <div className="flex flex-col p-6 bg-white rounded-2xl min-w-80 min-h-52">
      <div className="flex justify-between items-center gap-4">
        <div className="font-semibold text-xl">Growth</div>
        <div
          className="flex justify-center items-center gap-1 cursor-pointer"
          style={{ color: '#454545' }}
        >
          <div>Yearly</div>
          <div className="flex justify-center items-center">
            <ChevronDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrowthChart;
