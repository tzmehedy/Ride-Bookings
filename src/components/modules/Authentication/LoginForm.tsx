
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";
import Password from "@/components/ui/Password";


const loginFormSchema = z.object({
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
});




export function LoginForm() {
  const [login] = useLoginMutation()
  const navigate = useNavigate()

    const form = useForm<z.infer<typeof loginFormSchema>>(
      {
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
          email: "",
          password: ""
        }
      }
    )

    const onSubmit = async(values: z.infer<typeof loginFormSchema>) => {
      const userInfo = {
        email: values.email,
        password: values.password
      }

      try {
        const result = await login(userInfo).unwrap()

        if(result.success){
          toast.success(result.message)
          navigate("/")
        }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        
        toast.error(error.data.message)
        
      }
    };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
                <Password placeholder="*******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        
        <Button className="w-full" type="submit">
          Login
        </Button>
      </form>
      <div className="text-center">
        <p className="text-muted-foreground">
          Don&apos;t have an account? Please <Link to="/register" className="underline text-primary font-bold">Register</Link>
        </p>
      </div>
    </Form>
  );
}
