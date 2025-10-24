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
import { Link } from "react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registrationFormSchema = z.object({
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
});

function onSubmit(values: z.infer<typeof registrationFormSchema>) {
  console.log(values);
}

export function RegisterForm() {
  const form = useForm<z.infer<typeof registrationFormSchema>>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
                <Input placeholder="*******" {...field} />
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
                <Input placeholder="*******" {...field} />
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
