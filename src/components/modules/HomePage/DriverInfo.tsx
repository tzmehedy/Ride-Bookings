import { Calendar, DollarSign, Shield, TrendingUp } from "lucide-react";

export default function DriverInfo() {
  return (
    <div className="flex flex-col lg:flex-row p-2 lg:p-0 my-20 space-y-5">
      <div className="lg:w-1/2 space-y-5">
        <p className="bg-primary/30 w-28 text-center px-3 py-1 rounded-lg text-primary font-bold">
          For Drivers
        </p>
        <h1 className="text-muted-foreground font-bold text-3xl">
          Drive with Us and{" "}
          <span className="text-primary">Earn on Your Terms</span>
        </h1>
        <p className="text-muted-foreground">
          Join thousands of drivers who have found financial freedom and
          flexibility with RideShare. Start earning today with our
          industry-leading driver benefits.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex gap-3">
            <div className="h-12 w-12 bg-primary/30 rounded-xl flex items-center justify-center">
              <DollarSign className="text-primary font-bold" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Earn More</h1>
              <p className="text-muted-foreground">
                Competitive rates and weekly bonuses for top performers
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="h-12 w-12 bg-primary/30 rounded-xl flex items-center justify-center">
              <Calendar className="text-primary font-bold" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Flexible Schedule</h1>
              <p className="text-muted-foreground">
                Drive when you want, as much as you want
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="h-12 w-12 bg-primary/30 rounded-xl flex items-center justify-center">
              <Shield className="text-primary font-bold" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Insurance Coverage</h1>
              <p className="text-muted-foreground">
                Comprehensive insurance while you're on the road
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="h-12 w-12 bg-primary/30 rounded-xl flex items-center justify-center">
              <TrendingUp className="text-primary font-bold" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Growth Opportunities</h1>
              <p className="text-muted-foreground">
                Access to training and advancement programs
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 bg-primary/30 p-10 rounded-lg">
        <div className="bg-white p-10 space-y-5 rounded-lg">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-muted-foreground">$1,250</h1>
            <p className="text-muted-foreground">Average Weekly Earnings</p>
          </div>

          <div className="text-muted-foreground font-bold">
            <div className="flex justify-between border-b border-muted-foreground py-2">
                <h1>Base Fare</h1>
                <p>$850</p>
            </div>
            <div className="flex justify-between border-b border-muted-foreground py-2">
                <h1>Tips</h1>
                <p>$200</p>
            </div>
            <div className="flex justify-between border-b border-muted-foreground py-2">
                <h1>Bonuses</h1>
                <p className="text-primary ">$200</p>
            </div>
          </div>

          <div className="text-center bg-primary/30 text-muted-foreground py-2 rounded-lg">
            <p>Based on 25-30 hours/week</p>
            <p>Earnings may vary by location and time</p>
          </div>
        </div>
      </div>
    </div>
  );
}
