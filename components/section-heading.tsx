import React from 'react'
type SectionHeadingProps = {
    children: React.ReactNode;
    };

export default function SectionHeading({children}: SectionHeadingProps) {
  return (
    <h2 className="section-title text-2xl sm:text-3xl font-semibold mb-8 w-full justify-center">
      {children}
    </h2>
  );
}
