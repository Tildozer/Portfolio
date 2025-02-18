"use client";

import axios from "axios";
import React, {
  useState,
  FormEvent,
  Dispatch,
  SetStateAction,
  ChangeEvent,
} from "react";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (ev: FormEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    console.log({ email, subject, message });

    const conformation = await axios.post("http://localhost:3001/mail", {
      email,
      subject,
      message,
    });

    if (conformation) {
      console.log(conformation);
    }
  };

  const handleChange = (
    ev: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    set: Dispatch<SetStateAction<string>>,
  ) => set(ev.target.value);

  return (
    <form className="flex w-1/2 max-w-[32rem] flex-col items-center gap-6 text-black placeholder:text-slate-600">
      <input
        className="w-full"
        type="email"
        placeholder="Email..."
        value={email}
        onChange={(ev) => handleChange(ev, setEmail)}
      />
      <input
        className="w-full"
        type="text"
        name="subject"
        placeholder="Subject..."
        value={subject}
        onChange={(ev) => handleChange(ev, setSubject)}
      />
      <textarea
        className="h-32 w-full"
        name="message"
        placeholder="Message..."
        value={message}
        onChange={(ev) => handleChange(ev, setMessage)}
      />
      <button
        onClick={(ev) => handleSubmit(ev)}
        className="bg-slate-500 dark:bg-slate-200"
        type="submit"
      >
        submit
      </button>
    </form>
  );
};

export default EmailForm;
