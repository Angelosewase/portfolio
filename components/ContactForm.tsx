"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";


function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    location: "",
    subject: "",
    message: "",
  });

  return (
    <div>
      <p className="text-gray-500 text-sm mt-1 leading-4">
        I’m excited to hear from you! Fill out the form below and let’s start a
        conversation.
      </p>
      <form action="" className="mt-8 flex flex-col gap-4">
        <Input
          field="name"
          setdatastate={setFormState}
          formState={formState}
          value={formState.name}
          placeholder="Name*"
        />
        <Input
          field="email"
          setdatastate={setFormState}
          formState={formState}
          value={formState.email}
          placeholder="Email*"
          type="email"
        />
        <Input
          field="location"
          setdatastate={setFormState}
          formState={formState}
          value={formState.location}
          placeholder="Location*"
        />
        <Input
          field="subject"
          setdatastate={setFormState}
          formState={formState}
          value={formState.subject}
          placeholder="Subject*"
        />
        <Input
          field="message"
          setdatastate={setFormState}
          formState={formState}
          value={formState.message}
          placeholder="Message*"
        />
      </form>
      <button className="flex gap-2 items-center py-1 px-3 rounded bg-purple-500 text-white md:mt-10 mt-20 hover:scale-110 transition">
        Submit 
        <PaperAirplaneIcon height={22} width={22}/>
      </button>
    </div>
  );
}

export default ContactForm;

const Input: React.FC<{
  setdatastate: React.Dispatch<React.SetStateAction<FormState>>;
  field: keyof FormState;
  formState: FormState;
  value: string;
  placeholder: string;
  type?: string;
}> = ({ setdatastate, field, formState, value, placeholder, type = "text" }) => {
  const [state, setState] = useState<boolean>(false);

  function handleInput(value: string) {
    setdatastate({ ...formState, [field]: value });
  }

  return (
    <motion.div
      initial={false}
      animate={{
        borderBottomColor: state ? "#a855f7" : "#e5e7eb",
        color: state ? "#a855f7" : "#000000",
      }}
      transition={{ duration: 0.3 }}
      className="outline-none w-full border-b-2 bg-white"
    >
      <motion.input
        type={type}
        name={field}
        id={field}
        placeholder={placeholder}
        className={`w-full bg-white outline-none placeholder:font-light ${
          state && "placeholder:text-purple-500"
        }`}
        onFocus={() => setState(true)}
        onBlur={() => setState(false)}
        onChange={(e) => handleInput(e.target.value)}
        value={value}
        required
      />
    </motion.div>
  );
};

interface FormState {
  name: string;
  email: string;
  location: string;
  subject: string;
  message: string;
}