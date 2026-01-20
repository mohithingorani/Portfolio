"use client";

import { useState } from "react";
import { sendMail } from "../actions";
import { ToastContainer, toast } from "react-toastify";
import { CustomToast } from "./CustomToast";

export default function ContactForm() {
  const [email, setEmail] = useState<string >("");
  const [message, setMessage] = useState<string >("");

    const notify = () => {
    toast(CustomToast, {
      autoClose: 4000,
      closeButton: false,
      hideProgressBar: true,
    });
  };

  async function onsubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !message) return;
    const mail = await sendMail({ email, message });
    if (mail) {
      notify();
      setMessage("");
      setEmail("");
    }
  }
  return (
    <div>
      <ToastContainer toastClassName={"bg-transparent shadow-none p-0"} closeButton={false}/>
      <div className="text-white/60 text-sm">
        Contact me directly at mohithingorani2003@gmail.com or through this
        form.
      </div>
      <form onSubmit={onsubmit} className="flex flex-col mt-6 gap-4 max-w-xl">
        <input
        value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="bg-[#2b2b2c] text-sm outline-none border border-white/10 px-4 py-2 rounded-lg"
          placeholder="Your Email"
          required
        />
        <textarea
        value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          maxLength={5000}
          className="bg-[#2b2b2c] text-sm resize-none outline-none border border-white/10 px-4 py-2 rounded-lg"
          placeholder="Your Message"
          required
        />

        <button
          type="submit"
          className="
            cursor-pointer
    group relative overflow-hidden
    hover:border-yellow-400/20
    rounded-xl
    bg-[#1e1e1f]
    border border-white/10
    px-6 py-3
    text-sm font-medium
    text-white/80
    transition-all duration-300
    hover:text-yellow-400
  "
        >
          <span className="relative z-10 ">Submit</span>

          <span
            className="
      pointer-events-none
      absolute inset-0
      opacity-0
      group-hover:opacity-100
      transition-opacity duration-300
    "
          />
        </button>
      </form>
    </div>
  );
}
