import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";
import Password from "@/components/ui/Password";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";




const registrationFormSchema = z
  .object({
    name: z.string().min(3, { message: "Name must be at least 3 character" }),
    email: z.email(),
    password: z
      .string()
      .regex(/^(?=.*[A-Z])/, {
        message: "The password must have one upper case letter",
      })
      .regex(/^(?=.*\d)/, { message: "The password must have one number" })
      .regex(/^(?=.*[!@#$%^&*,.?":{}|<>_\-+=~`[\]\\;/'])/, {
        message: "The password must have a special character",
      }),
    confirmPassword: z
      .string()
      .regex(/^(?=.*[A-Z])/, {
        message: "The password must have one upper case letter",
      })
      .regex(/^(?=.*\d)/, { message: "The password must have one number" })
      .regex(/^(?=.*[!@#$%^&*,.?":{}|<>_\-+=~`[\]\\;/'])/, {
        message: "The password must have a special character",
      }),
    phone: z.string().regex(/^(?:\+?88)?01[3-9]\d{8}$/, {
      message:
        "Phone number must be Bangladeshi format..., for example:- +8801700000000",
    }),
    role: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "The password does not match",
    path: ["confirmPassword"]
  });


export function RegisterForm() {

  const [register] = useRegisterMutation()
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof registrationFormSchema>>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      role: ""
    },
  });


  const onSubmit = async(values: z.infer<typeof registrationFormSchema>)=> {

    const userInfo = {
      name: values.name,
      email: values.email,
      password: values.password,
      phone: values.phone,
      role: values.role
    }



    try {
      const result = await register(userInfo).unwrap()
      navigate("/login")

      if(result.success){
        toast.success("User Created Successfully.")
      }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      error.data.errorSources.map((err: any) =>
        toast.error(err.message)
      );
      console.log(error.data.errorSources)
      
      
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem className="flex">
              <FormLabel>Sign Up as a</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="RIDER">Rider</SelectItem>
                    <SelectItem value="DRIVER">Driver</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Your Name</FormLabel>
              <FormControl>
                <Input placeholder="your name" {...field} />
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
              <FormLabel>Enter Your Email</FormLabel>
              <FormControl>
                <Input placeholder="your email" {...field} />
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
              <FormLabel>Enter Your Password</FormLabel>
              <FormControl>
                <Password {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmed Password</FormLabel>
              <FormControl>
                <Password {...field} />
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
              <FormLabel>Your Phone No.</FormLabel>
              <FormControl>
                <Input placeholder="01700000000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Register
        </Button>
      </form>
      <div className="text-center">
        <p className="text-muted-foreground">
          Already have an account? Please{" "}
          <Link to="/login" className="underline text-primary font-bold">
            Login
          </Link>
        </p>
      </div>
    </Form>
  );
}
