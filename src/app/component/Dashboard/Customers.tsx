// 'use client';

import ChevronDownIcon from '../../../assets/chevron-down.svg';
import ArrowRightIcon from '../../../assets/arrow-narrow-right.svg';

import { mockCustomers } from './customersData';
import { Customer } from './Customer';

function Customers() {
  return (
    <div className="flex flex-col py-6 bg-white rounded-2xl">
      <div className="flex justify-between items-center mx-6 gap-4">
        <div className="font-semibold text-xl">Customers</div>
        <div
          className="flex justify-center items-center gap-1 cursor-pointer"
          style={{ color: '#454545' }}
        >
          <div>
            Sort by <span className="font-medium">Newest</span>
          </div>
          <div className="flex justify-center items-center">
            <ChevronDownIcon />
          </div>
        </div>
      </div>

      <div className="flex flex-col px-2">
        {mockCustomers.map((customer, index) => (
          <Customer key={index} {...customer} />
        ))}
      </div>

      <div
        className="flex gap-1 cursor-pointer px-6"
        style={{ color: '#734A00' }}
      >
        <div className="font-sm">All deals</div>
        <div className="flex justify-center items-center">
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
}

export default Customers;
