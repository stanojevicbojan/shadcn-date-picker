"use client";
import ShadcnDatePicker from "@/components/shadcn-date-picker";
import { useState } from "react";

export default function ShadcnDatePickerPage() {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <main className="flex min-h-screen relative flex-col items-center justify-between p-4 sm:p-16">
      <div className="flex flex-col gap-8 container max-w-3xl relative mx-auto flex-1 p-4 border border-border backdrop-blur-[2px] rounded-lg">
        <div className="grid gap-4 text-start max-w-2xl mt-12">
          <h1 className="text-3xl font-extrabold">Shadcn Date Picker</h1>
          <p className="font-extralight">
            A <code>{`<ShadcnDatePicker />`}</code> component built with React
            and Shadcn UI.
          </p>
        </div>
        <div className="flex-1 min-h-full flex flex-col">
          <div className="grid grid-cols-1 pb-4">
            <div className="grid pb-4 md:pb-0 md:pr-4">
              <div className="flex flex-col gap-3 pb-4 border-b border-border">
                <h3 className="text-xl font-bold">Demo</h3>
                <ShadcnDatePicker
                  startYear={1930}
                  endYear={2030}
                  selected={date}
                  onSelect={setDate}
                />
                <div className="flex">
                  <h3 className="text-xl font-bold">Date: </h3>
                  <span className="text-lg font-light ml-2">
                    {date.toDateString()}
                  </span>
                </div>
                <h3 className="text-xl font-bold">How to use</h3>
                <ul className="list-decimal list-outside ml-5 marker:text-muted-foreground space-y-2 text-sm">
                  <li>
                    Install{" "}
                    <a
                      href="http://ui.shadcn.com/"
                      className="underline hover:no-underline"
                      target="_blank"
                    >
                      shadcn/ui
                    </a>{" "}
                    incl. the{" "}
                    <a
                      href="https://ui.shadcn.com/docs/components/select"
                      className="font-mono underline hover:no-underline"
                      target="_blank"
                    >
                      Select
                    </a>{" "}
                    component and{" "}
                    <a
                      href="https://ui.shadcn.com/docs/components/scroll-area"
                      className="font-mono underline hover:no-underline"
                      target="_blank"
                    >
                      Scroll Area
                    </a>{" "}
                    component
                  </li>
                  <li>
                    Copy & paste{" "}
                    <a
                      href="#shadcn-date-picker.tsx"
                      className="font-mono underline hover:no-underline"
                    >
                      shadcn-date-picker.tsx
                    </a>
                  </li>
                  <li>
                    Define your <code>ShadcnDatePicker</code> component (e.g.{" "}
                    <a
                      href="#shadcn-date-picker-demo.tsx"
                      className="font-mono underline hover:no-underline"
                    >
                      sample page
                    </a>
                    )
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
