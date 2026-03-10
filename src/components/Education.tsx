import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import college from "@/assets/college.webp";
import Image from "next/image";

const Education = () => {
  return (
    <section className="py-16">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-12">
          Education
        </h2>

        <Card className="bg-card border-2 border-dotted">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
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
              <span className="text-sm text-muted-foreground">
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
