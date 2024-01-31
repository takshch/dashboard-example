import Avatar from '../Avatar';
import { mockCustomers } from './customersData';

function Chats() {
  return (
    <div className="basis-full grow flex flex-col gap-2 p-5 bg-white rounded-2xl min-w-80">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold" style={{ color: '#131313' }}>
          Chats
        </div>
        <div className="text-sm" style={{ color: '#454545' }}>
          2 unread messages
        </div>
      </div>
      <div className="flex gap-2">
        {mockCustomers.map((customer, index) => (
          <div className="p-3" key={index}>
            <Avatar {...customer} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chats;
