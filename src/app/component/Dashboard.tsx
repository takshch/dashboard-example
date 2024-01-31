import Chats from './Dashboard/Chats';
import Customers from './Dashboard/Customers';
import GrowthChart from './Dashboard/GrowthChart';
import NewDeals from './Dashboard/NewDeals';
import States from './Dashboard/States';
import TopStats from './Dashboard/TopStats';
import YearlyStats from './Dashboard/YearlyStats';

function Dashboard() {
  return (
    <div className="dashboard h-full pl-4">
      <div className="flex flex-col gap-4">
        <TopStats />
        <div className="flex gap-4">
          <Customers />
          <div className="grow flex flex-col gap-4">
            <GrowthChart />
            <YearlyStats />
          </div>
        </div>
        <div className="flex gap-4">
          <Chats />
          <States />
          <NewDeals />
        </div>
        {/* <div className=""></div> */}
      </div>
    </div>
  );
}

export default Dashboard;
