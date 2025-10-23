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
    content: "Yes we offer airport transportation services.",
  },
  {
    id: "2",
    title: "How can I estimate the fare for my ride?",
    content:
      "Use our CSS variables for global styling, or className and style props for component-specific changes. We support CSS modules, Tailwind, and dark mode out of the box.",
  },
  {
    id: "3",
    title: "Can I schedule a ride in advance?",
    content:
      "Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.",
  },
  {
    id: "4",
    title: "What are the payment options available?",
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
  },
  {
    id: "5",
    title: "How can I estimate the fare for my ride?",
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
  },
  {
    id: "6",
    title: "Are your drivers licensed and experienced?",
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
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
