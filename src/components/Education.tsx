import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import college from "@/assets/college.webp";
import Image from "next/image";

const Education = () => {
  return (
    <section className="py-16">
      <div>
        <h2 className="mb-12 text-center text-3xl font-bold md:text-left md:text-4xl">
          Education
        </h2>

        <Card className="bg-card border-2 border-dotted">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-full">
                  <Image
                    alt="college"
                    width={48}
                    height={48}
                    src={college.src}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <CardTitle className="text-foreground text-lg">
                    Bachelors of Computer Application
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    Chandigarh University
                  </CardDescription>
                </div>
              </div>
              <span className="text-muted-foreground text-sm">
                Expected July 2026
              </span>
            </div>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};

export default Education;
