
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Link } from "react-router";



export function LoginForm() {
    const form = useForm()
  return (
    <Form {...form}>
      <form className="space-y-5">
  
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
                <Input placeholder="*******" {...field} />
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
