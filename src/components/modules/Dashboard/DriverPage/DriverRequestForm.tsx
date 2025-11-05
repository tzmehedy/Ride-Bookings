import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRequestDriveMutation } from "@/redux/features/drivers/driver.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import z from "zod";

const driverRequestFormSchema = z.object({
    brand_name: z.string().min(1, "You should must fill up the brand name of your vehicle."),
    model: z.string().min(1, "You should must fill up the model of your vehicle."),
    vehicle_number: z.string().min(1, "You should must fill up the vehicle number of your vehicle.")

})


export default function DriverRequestForm() {

    const [requestDrive, { isLoading}] = useRequestDriveMutation()
    const navigate = useNavigate()



    const form = useForm<z.infer<typeof driverRequestFormSchema>>({
        resolver: zodResolver(driverRequestFormSchema),
        defaultValues: {
            brand_name: "",
            model: "",
            vehicle_number: ""

        }
    })

    const onSubmit = async(value: z.infer<typeof driverRequestFormSchema>) =>{

        const vehicle_info = {
            brand_name: value.brand_name,
            model: value.model,
            vehicle_number: value.vehicle_number
        }

        const toastId = toast.loading("Processing...! Please wait")

        try {
           const result = await requestDrive({vehicle_info}).unwrap()
            
            if(result.success){
                toast.success("You are successfully requested for drive. Please wait until the admin will not approve you.", { id: toastId })
                navigate("/driver/application-status")
                form.reset()

            }
            
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.log(error)
            toast.error(error.data?.message, { id: toastId })
            
        }
    }



    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)}  className="space-y-5">
                <FormField
                    control={form.control}
                    name="brand_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Brand name</FormLabel>
                            <FormControl>
                                <Input  placeholder="Brand Name" {...field} />
                            </FormControl>
                            <FormDescription />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="model"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Model</FormLabel>
                            <FormControl>
                                <Input  placeholder="Model" {...field} />
                            </FormControl>
                            <FormDescription />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="vehicle_number"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Vehicle Number</FormLabel>
                            <FormControl>
                                <Input placeholder="Vehicle Number" {...field}  />
                            </FormControl>
                            <FormDescription />
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex justify-end">
                    <Button disabled={isLoading}>Request To Drive</Button>
                </div>
            </form>
        </Form>
    )
}
