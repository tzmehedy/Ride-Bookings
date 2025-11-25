import Loader from "@/components/layouts/Loader"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Password from "@/components/ui/Password"
import { authApi, useGetUserInfoQuery, useUpdateUserInfoMutation } from "@/redux/features/auth/auth.api"
import { useAppDispatch } from "@/redux/hook"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import z from "zod"


const updateFormSchema = z.object({
    name: z.string().optional(),
    email: z.email().optional(),
    phone: z.string().optional(),
    password: z.string().optional()
})

export default function UpdateProfileFormForAdmin() {
    const { data, isLoading } = useGetUserInfoQuery(undefined)
    const [updateUserInfo] = useUpdateUserInfoMutation()
    const dispatch = useAppDispatch()
    const userInfo = data?.data

    

    const form = useForm<z.infer<typeof updateFormSchema>>({
        resolver: zodResolver(updateFormSchema),
        defaultValues: {
            name: userInfo?.name ,
            email: userInfo?.email,
            phone: userInfo?.phone,
            password: ""
         }
    })

    const onSubmit = async(value: z.infer<typeof updateFormSchema>) => {
        console.log(value)
        const toastId = toast.loading("Processing...")
        try {
            const result = await updateUserInfo(value).unwrap()
            if(result.success){
                toast.success("Successfully Updated Your Profile", { id: toastId })
                dispatch(authApi.util.resetApiState())
                form.reset()
            }
            
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error.message)
            
        }
    }

    if (isLoading) return <Loader />

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 border border-primary mx-auto p-5 rounded-xl shadow-xl">
                <div className="flex flex-col md:flex-row gap-5">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input className="border border-primary" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input disabled className="border border-primary" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="">
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input className="border border-primary" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="">
                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
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
                <Button type="submit">Update</Button>
            </form>
        </Form>
    )
}
