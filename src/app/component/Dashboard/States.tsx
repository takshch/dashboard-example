type StateType = { code: string; value: string; percentage: number };

const STATES: StateType[] = [
  {
    code: 'NY',
    value: '120K',
    percentage: 100,
  },
  {
    code: 'MA',
    value: '80K',
    percentage: 80,
  },
  {
    code: 'NH',
    value: '70K',
    percentage: 70,
  },
  {
    code: 'OR',
    value: '50K',
    percentage: 50,
  },
];

const Strip = ({ code, value, percentage = 100 }: StateType) => (
  <div
    className="flex justify-between items-center px-2 py-1.5 rounded"
    style={{
      color: '#131313',
      background:
        'linear-gradient(90deg, #FFCD71 -2.57%, rgba(255, 205, 113, 0.00) 112.5%)',
      width: `${percentage}%`,
    }}
  >
    <div className="font-sm font-semibold">{code}</div>
    <div className="font-medium" style={{ fontSize: '0.625rem' }}>
      {value}
    </div>
  </div>
);

function States() {
  return (
    <div className="basis-full grow flex flex-col gap-4 p-5 bg-white rounded-2xl min-w-80">
      <div className="flex flex-col gap-2 mb-4 text-xl font-semibold">
        Top States
      </div>
      <div className="flex flex-col gap-2">
        {STATES.map((state, index) => (
          <Strip key={index} {...state} />
        ))}
      </div>
    </div>
  );
}

export default States;
