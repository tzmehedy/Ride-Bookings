import Loader from "@/components/layouts/Loader"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useGetUserInfoQuery } from "@/redux/features/auth/auth.api"
import { Link } from "react-router"


export default function Block() {
  const { data, isLoading } = useGetUserInfoQuery(undefined)
  const userInfo = data?.data
  if (isLoading) return <Loader />
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-muted-foreground/40 p-10 rounded-lg text-center space-y-5">
        <h1>
          Your Account Status is: {"      "}  
          <span className={cn("text-primary font-bold",{
            "text-destructive": userInfo?.isBlocked
          })}>{userInfo?.isBlocked ? "Blocked" : "Not Block"}</span>
        </h1>
        <p>Contact:+880 187000746</p>
        <Link to="/"><Button variant="outline" className="border border-primary cursor-pointer">Back To Home</Button></Link>
      </div>
    </div>
  )
}
