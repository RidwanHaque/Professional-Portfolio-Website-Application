"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { activitiesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Activities() {
  const { ref } = useSectionInView("Activities", 0.15);

  return (
    <section
      ref={ref}
      id="activities"
      className="scroll-mt-28 mb-28 w-full max-w-[70rem]"
    >
      <SectionHeading>Recent Activities</SectionHeading>

      <div className="grid gap-6">
        {activitiesData.map((activity, index) => (
          <motion.article
            key={activity.title}
            className="chip-panel rounded-2xl p-5 sm:p-6 grid gap-5 md:grid-cols-[0.6fr_1fr] items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Image
                src={activity.imageUrl}
                alt={activity.title}
                sizes="(max-width: 768px) 100vw, 40vw"
                className="w-full h-auto rounded-xl border border-[color:var(--line)] glow-ring object-cover"
              />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl">
                {activity.title}
              </h3>
              <p className="text-sm text-[color:var(--muted)] mt-1">
                {activity.organization} | {activity.date}
              </p>
              <p className="mt-3 text-[color:var(--muted)]">
                {activity.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {activity.tags.map((tag) => (
                  <span key={tag} className="chip-pill rounded-full px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
