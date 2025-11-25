
import { Barchart } from "@/components/modules/Dashboard/DriverPage/Barchart";
import HeaderSection from "@/components/modules/Dashboard/DriverPage/HeaderSection";
import { Piechart } from "@/components/modules/Dashboard/DriverPage/Piechart";


export default function EarningHistory() {
  return (
    <div className="space-y-10">
      <div>
        <HeaderSection />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="">
          <Barchart />
        </div>
        <div>
          <Piechart/>
        </div>
      </div>
    </div>
  )
}
