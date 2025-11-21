import Loader from "@/components/layouts/Loader";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Password from "@/components/ui/Password";
import { useGetDriverInfoQuery } from "@/redux/features/drivers/driver.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const updateDriverFormSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  password: z.string().optional(),
  brand_name: z.string().optional(),
  model: z.string().optional(),
  vehicle_number: z.string().optional()
})



export default function UpdateProfileFormForDriver() {
  const { data, isLoading } = useGetDriverInfoQuery(null)
  const driverInfo = data?.data
  
  if (isLoading) <Loader />

  const form = useForm<z.infer<typeof updateDriverFormSchema>>(
    {
      resolver: zodResolver(updateDriverFormSchema),
      defaultValues: {
        name: driverInfo?.userId.name,
        email: driverInfo?.userId.email,
        phone: driverInfo?.userId.phone,
        password: "",
        brand_name: driverInfo?.vehicle_info.brand_name,
        model: driverInfo?.vehicle_info.model,
        vehicle_number: driverInfo?.vehicle_info.vehicle_number
        
      }
    }
  )
  const onSubmit = (value: z.infer<typeof updateDriverFormSchema>) => {
    console.log(value)

  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="border border-primary mx-auto p-5 rounded-xl shadow-xl space-y-3">
        <div className="space-y-3">
          <h1 className="text-primary font-bold">Profile Info</h1>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input disabled defaultValue={driverInfo?.userId?.name} className="border border-primary" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />



          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input defaultValue={driverInfo?.userId?.email} disabled className="border border-primary"  {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input defaultValue={driverInfo?.userId?.phone} className="border border-primary"  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Change Password</FormLabel>
                <FormControl>
                  <Password {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="border border-primary/40">
        </div>

        <div className="space-y-3">
          <h1 className="text-primary font-bold">Vehicle Info</h1>

          <div className="flex flex-col md:flex-row gap-5">
            <FormField
              control={form.control}
              name="brand_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand Name</FormLabel>
                  <FormControl>
                    <Input defaultValue={driverInfo?.vehicle_info.brand_name} className="border border-primary" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Model</FormLabel>
                  <FormControl>
                    <Input defaultValue={driverInfo?.vehicle_info.model} className="border border-primary"  {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="">
            <FormField
              control={form.control}
              name="vehicle_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vehicle Number</FormLabel>
                  <FormControl>
                    <Input defaultValue={driverInfo?.vehicle_info.vehicle_number} className="border border-primary"  {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>



        </div>
        <Button type="submit">Update</Button>
      </form>
    </Form>
  )
}

