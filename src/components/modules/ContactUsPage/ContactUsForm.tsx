import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

export default function ContactUsForm() {
  const form = useForm();
  return (
    <Form {...form}>
      <form className="p-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Your Name"
                  className="border border-primary"
                  {...field}
                ></Input>
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-3">
          <div className="lg:w-1/2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Add Email"
                      className="border border-primary"
                      {...field}
                    ></Input>
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="lg:w-1/2">
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Add Email"
                      className="border border-primary"
                      {...field}
                    ></Input>
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Comments"
                  className="border border-primary h-24"
                  {...field}
                ></Textarea>
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Send Message</Button>
      </form>
    </Form>
  );
}
