"use client";

import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { toast } from "sonner";

const Contact = () => {
  const email = "email";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email copied successfully!");
    } catch (err) {
      console.error("Failed to copy email:", err);
      toast.error("Failed to copy email.");
    }
  };

  return (
    <section id="contact" className="container my-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:basis-3/12">
          <p className="font-bold text-2xl">Contact</p>
        </div>
        <div className="md:basis-9/12">
          <div className="flex justify-center md:justify-start gap-5">
            <Link href="https://github.com" target="_blank">
              <FaGithub size={30} />
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank">
              <FaLinkedinIn size={30} />
            </Link>
            <button
              onClick={copyToClipboard}
              className="flex items-center justify-center"
              aria-label="Copy email"
            >
              <BiLogoGmail size={30} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
