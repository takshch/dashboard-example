import Avatar from '../Avatar';
import { mockCustomers } from './customersData';

const MaggieUser = mockCustomers[1];

function YearlyStats() {
  return (
    <div className="grow flex gap-4">
      <div className="grow flex flex-col justify-between gap-4 p-4 bg-white rounded-2xl">
        <div className="font-semibold text-base" style={{ color: '#7D7D7D' }}>
          Top Month
        </div>
        <div className="flex flex-col">
          <div className="font-semibold text-2xl" style={{ color: '#734A00' }}>
            November
          </div>
          <div className="font-medium text-base" style={{ color: '#FFA500' }}>
            2019
          </div>
        </div>
      </div>

      <div className="grow flex flex-col justify-between gap-4 p-4 bg-white rounded-2xl">
        <div className="font-semibold text-base" style={{ color: '#7D7D7D' }}>
          Top year
        </div>
        <div className="flex flex-col">
          <div className="font-semibold text-2xl" style={{ color: '#734A00' }}>
            2023
          </div>
          <div className="text-sm" style={{ color: '#454545' }}>
            96K sold so far
          </div>
        </div>
      </div>

      <div className="grow flex flex-col justify-between gap-4 p-4 bg-white rounded-2xl">
        <div className="font-semibold text-base" style={{ color: '#7D7D7D' }}>
          Top year
        </div>
        <div className="flex flex-col gap-2">
          <Avatar src={MaggieUser.src} text={MaggieUser.text} />
          <div className="flex flex-col gap-1">
            <div className="text-xs font-medium" style={{ color: '#131313' }}>
              {MaggieUser.text}
            </div>
            <div
              className="font-medium"
              style={{ color: '#454545', fontSize: '0.625rem' }}
            >
              {MaggieUser.company}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YearlyStats;
