import founderImg from "../../../assets/images/Founder.jpg"
import ctoImg from "../../../assets/images/CTO.jpg"
import headOfMarketing from "../../../assets/images/HeadOfMerkating.jpg"
import { Card, CardContent } from "@/components/ui/card"

export default function OurTeam() {
  return (
    <div className="mt-20 p-5 lg:p-0">
      <h1 className="text-center text-5xl font-bold text-primary">Our Team</h1>

      <div className="flex justify-center mt-10">
        <Card className="md:w-1/3 ">
          <CardContent className="space-y-2">
            <img className="rounded-xl" src={founderImg} alt="" />
            <p className="text-foreground font-bold">Mr John</p>
            <h1 className="text-muted-foreground">Founder, CEO</h1>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-10 mt-10">
        <Card className="md:w-1/3 ">
          <CardContent className="space-y-2">
            <img className="rounded-xl" src={ctoImg} alt="" />
            <p className="text-foreground font-bold">Mr Rahim</p>
            <h1 className="text-muted-foreground">
              Chief Technical Officer, CTO
            </h1>
          </CardContent>
        </Card>
        <Card className="md:w-1/3 ">
          <CardContent className="space-y-2">
            <img className="rounded-xl" src={headOfMarketing} alt="" />
            <p className="text-foreground font-bold">Mr Mehedy</p>
            <h1 className="text-muted-foreground">Head Of Marketing</h1>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
