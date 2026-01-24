import { PlusIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import Message from "@/assets/icons/FaqIcons/Message";
import { Link } from "react-router";

const items = [
  {
    id: "1",
    title: "Do you offer airport transportation services?",
    content: "Yes, we provide reliable airport pickup and drop-off services. You can book instantly or schedule your ride in advance to ensure timely arrivals and departures.",
  },
  {
    id: "2",
    title: "How can I estimate the fare for my ride?",
    content:
      "Simply enter your pickup and destination locations in the app. You’ll receive an estimated fare upfront before confirming your booking—no hidden charges.",
  },
  {
    id: "3",
    title: "Can I schedule a ride in advance?",
    content:
      "Absolutely. Our ride scheduling feature allows you to book rides ahead of time for important meetings, events, or travel plans.",
  },
  {
    id: "4",
    title: "What are the payment options available?",
    content:
      "We support multiple secure payment methods, including credit/debit cards and digital wallets. Choose what’s most convenient for you.",
  },
  {
    id: "5",
    title: "How can I estimate the fare for my ride?",
    content:
      "Yes. Once your ride is confirmed, you can track your driver live on the map and view real-time ETA updates until arrival.",
  },
  {
    id: "6",
    title: "Are your drivers licensed and experienced?",
    content:
      "All drivers are carefully verified, licensed, and trained to ensure safety, professionalism, and a comfortable ride experience.",
  },
];

export default function FaqQuestions() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 mt-20 p-5 lg:p-0">
      <div className="space-y-4 my-20 lg:w-1/2">
        <h2 className="text-3xl font-bold text-primary">Popular Questions</h2>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="1"
        >
          {items.map((item) => (
            <AccordionItem value={item.id} key={item.id} className="py-2 ">
              <AccordionPrimitive.Header className="flex ">
                <AccordionPrimitive.Trigger className="flex   flex-1 items-center justify-between cursor-pointer gap-4 rounded-md py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
                  {item.title}
                  <PlusIcon
                    size={16}
                    className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="pb-2 text-muted-foreground">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="lg:w-1/2 p-5 flex justify-center items-center ">
        <div className="space-y-5 border-2 border-primary p-10 rounded-2xl">
          <div className="bg-accent h-10 w-10 rounded-full flex justify-center items-center">
            <Message />
          </div>
          <h1 className="text-muted-foreground font-bold text-4xl">
            You have different question?
          </h1>
          <Link type="button" className="bg-primary px-2 py-2 rounded-sm text-gray-200 font-bold" to="/contact">Contact To Us</Link>
        </div>
      </div>
    </div>
  );
}
