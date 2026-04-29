"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
    const { ref} = useSectionInView("Experience", 0.15);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="var(--line)">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "var(--surface)",
                boxShadow: "var(--panel-shadow)",
                border: "1px solid var(--line)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                borderRadius: "0.75rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid var(--line)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "var(--surface-2)",
                color: "var(--accent)",
                border: "1px solid var(--line)",
                boxShadow: "0 0 18px var(--glow)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="italic text-sm text-[color:var(--muted)]">{item.company}

              </p>

              <p className="font-normal !mt-0 text-[color:var(--muted)]">{item.location}</p>
              <p className="!mt-1 !font-normal text-[color:var(--muted)]">{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
