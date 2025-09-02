// 👨‍👩‍👧‍👦 ParentsSection - Sección de información de padres

"use client";
import React, { useRef } from "react";
import { weddingData } from "../../data/weddingData";
import { useInView } from "framer-motion";

export default function ParentsSection() {
  const { dataParents } = weddingData;
  const { parents, grandparents, godparents } = dataParents;
  const myref = useRef<HTMLDivElement>(null);
  const isInView = useInView(myref, { once: true, amount: 0.3 });

  const completeClass = "font-script text-3xl text-secondary mb-4";

  return (
    <section
      style={{
        //backgroundImage: `url('/images/logoXV.png')`,
        //filter: "brightness(0.7)",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
        
      }}
      className="py-16 px-4 bg-opacity-20"
    >
      <div
        ref={myref}
        style={{
          backgroundColor: "#C8BFE780",
        }}
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 p-8 rounded-xl ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto leading-relaxed mb-6">
          {dataParents.message}
        </p>

        <div className="space-y-8">
          <div>
            <h3 className={completeClass}>Mis papás</h3>
            <div className="space-y-2">
              <p className="text-xl font-medium">{parents.mother}</p>
              <p className="text-xl font-medium">{parents.father}</p>
            </div>
          </div>
          <div>
            <h3 className="font-script text-3xl text-secondary mb-4">
              Mis Abuelos
            </h3>
            <div className="space-y-2">
              <p className="text-xl font-medium">{grandparents.grandmother1}</p>
              <p className="text-xl font-medium">{grandparents.grandfather1}</p>
              <p className="text-xl font-medium">{grandparents.grandmother2}</p>
              <p className="text-xl font-medium">{grandparents.grandfather2}</p>
            </div>
          </div>
          <div>
            <h3 className="font-script text-3xl text-secondary mb-4">
              Mis Padrinos
            </h3>
            <div className="space-y-2">
              <p className="text-xl font-medium">{godparents.godmother}</p>
              <p className="text-xl font-medium">{godparents.godfather}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
