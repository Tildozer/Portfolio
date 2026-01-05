import axios from "axios";
import {
  useState,
  FormEvent,
  Dispatch,
  SetStateAction,
  ChangeEvent,
} from "react";
import { toast } from "react-toastify";
import { SuccessToast, ErrorToast } from "./";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (ev: FormEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    if (!name || !email || !subject || !message) {
      toast.error(<ErrorToast err={"Please fill out all fields!"} />);
      return;
    }

    const conformation: { status: number } = await axios.post("api/mail", {
      email,
      subject,
      message,
      name,
    });

    if (conformation) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      toast(<SuccessToast />);
    } else {
      toast.error(<ErrorToast err={"Email failed to send!"} />);
    }
  };

  const handleChange = (
    ev: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    set: Dispatch<SetStateAction<string>>,
  ) => set(ev.target.value);

  return (
    <form className="animate-fadeInOnce flex w-full flex-col items-center gap-6 rounded-md p-6 text-black placeholder:text-slate-600 md:w-1/2 md:max-w-lg">
      <div className="ml-1 flex w-3/4 flex-col justify-center sm:ml-0 sm:flex-row sm:justify-between md:w-fit">
        <input
          className="mb-6 min-w-48 rounded-md border-2 border-black pr-2 pl-2 focus:border-orange-600 focus:outline-hidden sm:mr-2 md:w-1/2 dark:border-slate-500 dark:focus:border-yellow-500"
          placeholder="Name..."
          value={name}
          onChange={(ev) => handleChange(ev, setName)}
        />
        <input
          className="mb-6 min-w-48 rounded-md border-2 border-black pr-2 pl-2 focus:border-orange-600 focus:outline-hidden sm:ml-2 md:w-1/2 dark:border-slate-500 dark:focus:border-yellow-500"
          type="email"
          placeholder="Email..."
          value={email}
          onChange={(ev) => handleChange(ev, setEmail)}
        />
      </div>
      <input
        className="w-full min-w-48 rounded-md border-2 border-black pr-2 pl-2 focus:border-orange-600 focus:outline-hidden dark:border-slate-500 dark:focus:border-yellow-500"
        type="text"
        name="subject"
        placeholder="Subject..."
        value={subject}
        onChange={(ev) => handleChange(ev, setSubject)}
      />
      <textarea
        className="h-32 w-full min-w-48 rounded-md border-2 border-black p-2 pb-0 focus:border-orange-600 focus:outline-hidden dark:border-slate-500 dark:focus:border-yellow-500"
        name="message"
        placeholder="Message..."
        value={message}
        onChange={(ev) => handleChange(ev, setMessage)}
      />
      <button
        onClick={(ev) => handleSubmit(ev)}
        className="min-w-48 rounded-md border-2 border-black bg-slate-500 pr-2 pl-2 shadow-xs shadow-black transition-all duration-200 focus:outline-hidden active:translate-y-1 active:bg-orange-600 active:shadow-none dark:border-slate-500 dark:bg-slate-200 dark:active:bg-yellow-500"
        type="submit"
      >
        submit
      </button>
    </form>
  );
};

export default EmailForm;
