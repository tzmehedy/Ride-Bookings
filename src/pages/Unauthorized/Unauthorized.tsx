import { Link } from "react-router";


export default function Unauthorized() {
  return (
    <div className="h-screen flex justify-center items-center">
        <div className="text-center">
            <h1 className="text-9xl text-muted-foreground font-bold">401</h1>
            <p className="text-destructive">You don&apos; have permission for this page.</p>

            <Link to="/" className="text-primary font-bold underline text-xl">Back To Home</Link>
        </div>
    </div>
  )
}
