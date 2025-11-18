import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function Fail() {
  return (
    <div className="h-screen flex justify-center items-center">
        <div className="space-y-2">
            <h1 className="text-xl text-destructive font-bold">Your payment process is failed.</h1>
            <p className="text-amber-400 font-bold">Don't worry. You can go back your ride-history page and <br /> try again for payment</p>
              <Link to="/"><Button variant="outline" className="text-primary">Go Back</Button></Link>
        </div>

    </div>
  )
}
