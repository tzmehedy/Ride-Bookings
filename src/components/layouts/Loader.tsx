import { LoaderCircleIcon } from "lucide-react";


export default function Loader() {
    return (
        <div className="h-100vh flex justify-center items-center">
            <LoaderCircleIcon className="text-primary" />
        </div>
    )
}
