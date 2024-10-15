import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="p-4 h-screen flex justify-center items-center">
      <UserButton afterSwitchSessionUrl="/" />
    </div>
  );
};
export default SetupPage;
