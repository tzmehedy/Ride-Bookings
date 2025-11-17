import { Button } from "@/components/ui/button"
import { Link, useSearchParams } from "react-router"



export default function Success() {
    const [searchParams] = useSearchParams()
    const transitionId = searchParams.get("transitionId")
    const paymentStatus = searchParams.get("paymentStatus")
    const price = searchParams.get("price")
   
    
    
  return (
    <div className='h-screen flex flex-col justify-center items-center  space-y-3 '>
          <div className="bg-muted-foreground/40 shadow-2xl rounded-xl p-10">
              <p>Transaction Id: {transitionId}</p>
              <p>Payment Status: {paymentStatus}</p>
              <p>Amount: {price}</p>
        </div>
        <div>
              <Button><Link to="/rider">Back To your dashboard</Link></Button>
        </div>
    </div>
  )
}
