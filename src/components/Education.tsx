import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import college from "@/assets/college.webp";
import Image from "next/image";

const education = [
  {
    title: "Masters of Computer Applications",
    period: "July 2028",
    dateTime: "2028-07",
    expected: true,
  },
  {
    title: "Bachelor of Computer Applications",
    period: "2023–2026",
    expected: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16">
      <div>
        <h2 className="mb-12 text-center text-3xl font-bold md:text-left md:text-4xl">
          Education
        </h2>

        <Card className="bg-card gap-0 border-2 border-dotted py-0">
          {education.map((entry) => (
            <CardHeader
              key={entry.title}
              className="border-border border-dotted px-2 py-4 not-first:border-t min-[360px]:px-3 sm:px-6 sm:py-6"
            >
              <div className="flex items-start justify-between gap-2 sm:gap-4">
                <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                  <div className="bg-muted flex h-8 w-8 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12">
                    <Image
                      alt="Chandigarh University"
                      width={48}
                      height={48}
                      src={college.src}
                      className="h-8 w-8 rounded-full sm:h-12 sm:w-12"
                    />
                  </div>
                  <div className="min-w-0">
                    <CardTitle className="text-foreground text-xs leading-snug min-[360px]:text-[13px] sm:text-lg">
                      {entry.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-1 text-[10px] min-[360px]:text-[11px] sm:text-sm">
                      Chandigarh University
                    </CardDescription>
                  </div>
                </div>
                <div className="text-muted-foreground flex shrink-0 flex-col gap-1 text-right text-[10px] sm:text-sm">
                  {entry.expected && <span>Expected</span>}
                  {entry.dateTime ? (
                    <time dateTime={entry.dateTime}>{entry.period}</time>
                  ) : (
                    <span>{entry.period}</span>
                  )}
                </div>
              </div>
            </CardHeader>
          ))}
        </Card>
      </div>
    </section>
  );
};

export default Education;
