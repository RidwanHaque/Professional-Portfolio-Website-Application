"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";


export default function Contact() {
  const { ref } = useSectionInView("Contact");


  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-20 w-[min(100%,38rem)] text-center "
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-[color:var(--muted)] -mt-6">
        Please contact me directly at {""}
        <a
          className="underline decoration-[color:var(--accent)]/60 underline-offset-4"
          href="mailto:ridwanhaque.0942@gmail.com"
        >
          ridwanhaque.0942@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="field-input h-14 px-4 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="field-input h-52 my-3 rounded-lg p-4 transition-all focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}