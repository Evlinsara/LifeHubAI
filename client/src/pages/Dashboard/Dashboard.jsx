import DashboardLayout from "../../components/layout/DashboardLayout";
import WelcomeCard from "../../components/dashboard/WelcomeCard";
import StatCard from "../../components/dashboard/StatCard";
import QuickActions from "../../components/dashboard/QuickActions";
import AIWidget from "../../components/dashboard/AIWidget";
import RecentActivity from "../../components/dashboard/RecentActivity";
import ProgressCard from "../../components/dashboard/ProgressCard";

import {
  FaPaw,
  FaAppleAlt,
  FaBriefcase,
  FaBrain,
} from "react-icons/fa";

function Dashboard() {
  return (
    <DashboardLayout>

      <WelcomeCard />

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

  <StatCard
    title="Pets"
    value="3"
    icon={<FaPaw />}
    color="text-blue-600"
  />

  <StatCard
    title="Nutrition"
    value="Today's Plan"
    icon={<FaAppleAlt />}
    color="text-green-600"
  />

  <StatCard
    title="Workspace"
    value="5 Tasks"
    icon={<FaBriefcase />}
    color="text-orange-500"
  />

  <StatCard
    title="Assessment"
    value="Ready"
    icon={<FaBrain />}
    color="text-purple-600"
  />

</div>

<div className="grid lg:grid-cols-2 gap-6">

  <QuickActions />

  <AIWidget />

</div>
<div className="grid lg:grid-cols-2 gap-6 mt-8">

  <RecentActivity />

  <ProgressCard />

</div>
    </DashboardLayout>
  );
}

export default Dashboard;