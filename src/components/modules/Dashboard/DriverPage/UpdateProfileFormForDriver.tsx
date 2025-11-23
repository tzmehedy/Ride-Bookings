import Loader from "@/components/layouts/Loader";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Password from "@/components/ui/Password";
import { driversApi, useGetDriverInfoQuery, useUpdateDriverInfoMutation } from "@/redux/features/drivers/driver.api";
import { useAppDispatch } from "@/redux/hook";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
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

  const { data, isLoading } = useGetDriverInfoQuery(undefined)
  const [updateDriverInfo] = useUpdateDriverInfoMutation()
  const dispatch = useAppDispatch()
  const driverInfo = data?.data

  

  const form = useForm<z.infer<typeof updateDriverFormSchema>>({
      resolver: zodResolver(updateDriverFormSchema),
      defaultValues: {
        name: "",
        email: "",
        phone: "",
        password: "",
        brand_name: "",
        model: "",
        vehicle_number:""
      }
  })

  


  useEffect(() => {
    if (driverInfo) {
      form.reset({
        name: driverInfo?.userId?.name ?? "",
        email: driverInfo?.userId?.email ?? "",
        phone: driverInfo?.userId?.phone ?? "",
        password: "",
        brand_name: driverInfo?.vehicle_info?.brand_name ?? "",
        model: driverInfo?.vehicle_info?.model ?? "",
        vehicle_number: driverInfo?.vehicle_info?.vehicle_number ?? ""
      });
    }
  }, [driverInfo, form]);

  if (isLoading) return <Loader />

  const onSubmit = async(value: z.infer<typeof updateDriverFormSchema>) => {
    const toastId = toast.loading("Updating....")
    const updatedInfo = {
      user_info: {
        phone: value.phone,
        password: value.password,
      },
      vehicle_info: {
        brand_name: value.brand_name,
        model: value.model,
        vehicle_number: value.vehicle_number
      }
    }

    try {
      const result = await updateDriverInfo(updatedInfo).unwrap()
      if(result.success){
        toast.success(result.message, { id: toastId })
        dispatch(driversApi.util.resetApiState())
      }
      
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message)
    }

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
                  <Input {...field}  disabled className="border border-primary"  />
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
                  <Input  {...field} disabled className="border border-primary"  />
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
                  <Input {...field}  className="border border-primary"/>
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
                    <Input {...field}   className="border border-primary"  />
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
                    <Input {...field}  className="border border-primary"   />
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
                    <Input {...field} className="border border-primary"   />
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

