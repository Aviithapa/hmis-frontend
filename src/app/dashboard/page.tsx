import StatsCards from "@/components/card/StatsCard";
import TranslationText from "@/components/translation/TranslationText";
const Dashboard = () => {
  return (
    <div className="w-full h-full pl-[2%] pr-[2%]">
      <div className="rounded-md">
        <h1 className="text-center text-3xl font-bold">
          <TranslationText namespace="general" text="appTitle" />
        </h1>
        <h2 className="text-center text-2xl font-bold">
          <TranslationText namespace="general" text="stat" />
        </h2>
        <div className="mt-5">
          <StatsCards />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
