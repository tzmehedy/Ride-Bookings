
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
import { Loader, OctagonX } from "lucide-react";


const loginFormSchema = z.object({
  email: z.email(),
  password: z.string()
});




export function LoginForm() {
  const [login, {isLoading}] = useLoginMutation()
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

    const handelDemoAdminLogin = () =>{
      form.setValue("email", "touhidur15-13673@diu.edu.bd")
      form.setValue("password", "Touhid@16")
    }
    const handelDemoDriverLogin = () =>{
      form.setValue("email", "mehedytouhidurzaman@gmail.com")
      form.setValue("password", "Mehedy@16")
    }
    const handelDemoRiderLogin = () =>{
      form.setValue("email", "rahim@gmail.com")
      form.setValue("password", "Rahim@16")
    }

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
                <Input className="border border-primary" placeholder="your email" {...field} />
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
        
        
        <Button disabled={isLoading} className="w-full cursor-pointer" type="submit">
          {
            isLoading ? <Loader className="animate-spin"/> : "Login"
          }
        </Button>
      </form>
      <div className="text-center">
        <p className="text-muted-foreground">
          Don&apos;t have an account? Please <Link to="/register" className="underline text-primary font-bold">Register</Link>
        </p>
      </div>

      <div className="border p-2 rounded-lg mt-5 space-y-3">
        <h1 className="text-muted-foreground text-lg">Demo Login</h1>
        <p className="flex gap-2 text-sm text-muted-foreground"><OctagonX className="text-destructive"/> Don't miss use it</p>

        <div className="space-y-3">
          <Button onClick={handelDemoAdminLogin} className="w-full bg-primary/40 cursor-pointer">Admin</Button>
          <Button onClick={handelDemoDriverLogin} className="w-full bg-primary/40 cursor-pointer">Driver</Button>
          <Button onClick={handelDemoRiderLogin} className="w-full bg-primary/40 cursor-pointer">Rider</Button>

        </div>
      </div>
    </Form>


  );
}
