import Customers from './Dashboard/Customers';
import TopStats from './Dashboard/TopStats';

function Dashboard() {
  return (
    <div className="dashboard h-full pl-4">
      <div className="flex flex-col gap-4">
        <TopStats />
        <Customers />
        {/* <div className=""></div> */}
      </div>
    </div>
  );
}

export default Dashboard;
