"use client";
import { useLanguage } from "./BilingualProvider/LangProvider";
import { sendEmail } from "@/app/utils/send-email";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ContactModal from "./ContactModal";
import { getResponseText } from "@/app/utils/get-response-text";
import loadIcon from "/public/loading.gif";
import Image from "next/image";

import "./buttonStyle.css";
export type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const { language } = useLanguage();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<number>(0);
  const [messageStatusText, setModalMessageStatustext] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const modalOpen = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const resstatus: number = await sendEmail(data);
      setIsSent(resstatus);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setModalMessageStatustext(getResponseText(isSent, language));
  }, [isSent, language]);

  return (
    <div className="md:pb-10 relative flex flex-grow-0">
      <div className="flex-col bg-contactbg h-[85vh] lg:w-[85%] bg-cover  bg-fixed mr-32 ml-10 md:ml-20">
        {/* -------------------H1 + BUTTON + MESSAGE--------------------------- */}
        <div className="backdrop-blur-[1.5px] bg-[#292525]/20  w-full h-full">
          <h1 className="md:text-8xl md:mb-20 text-[3.5rem] text-textcolour font-semibold leading-tight tracking-widest pt-10 md:pt-32 md:pl-52 relative">
            CONTACT
          </h1>

          <div className="flex justify-end mr-64 mt-36 h-20">
            {isSent !== 200 && (
              <button
                className="button-89 hidden md:flex flex-col justify-center"
                type="button"
                onClick={modalOpen}
              >
                {language === "FR" ? (
                  <p className="text-2xl">écris-moi ici.</p>
                ) : (
                  <p className="text-2xl">send me a message.</p>
                )}
              </button>
            )}
            <div className="flex justify-end md:mr-0 -mr-64 md:text-3xl text-xl ">
              {isSent !== 0 && <p>{messageStatusText}</p>}
            </div>
          </div>
        </div>
        {/* ------------------------------- MODAL --------------------------------------- */}
        <div className="">
          <ContactModal
            openModal={openModal}
            closeModal={closeModal}
            setIsSent={setIsSent}
          />
        </div>
        <div className="flex justify-center absolute top-36 inset-x-0  ">
          {/* ----------------- form -------------------------*/}
          <div className="  p-3 rounded-lg  pb-8 md:hidden">
            {isSent === 0 && (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col ">
                  <label htmlFor="name" className="py-2">
                    {language === "FR" ? <p>nom</p> : <p>name</p>}
                  </label>
                  <input
                    placeholder="name"
                    type="text"
                    {...register("name", {
                      required: "champ obligatoire",
                      minLength: {
                        value: 2,
                        message: "doit contenir au moins 2 caractères",
                      },
                    })}
                    className="mb-3 rounded-sm p-2  text-black"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="py-2">
                    email
                  </label>
                  <input
                    placeholder="email"
                    type="email"
                    {...register("email", {
                      required: "champ obligatoire",
                      minLength: {
                        value: 2,
                        message: "doit contenir au moins 2 caractères",
                      },
                    })}
                    className="mb-3 rounded-sm p-2  text-black"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="py-2">
                    message
                  </label>
                  <textarea
                    placeholder="message"
                    rows={4}
                    {...register("message", {
                      required: "champ obligatoire",
                      minLength: {
                        value: 5,
                        message: "doit contenir au moins 5 caractères",
                      },
                    })}
                    className="mb-3 rounded-sm p-2  text-black"
                  />
                  {loading ? (
                    <button className=" border-double border-spacing-5 border-2 border-black flex mx-auto py-3 px-6 mt-5">
                      <Image src={loadIcon} alt="loading" width={25} />
                    </button>
                  ) : (
                    <button className="border border-white flex mx-auto py-2 px-4 mt-5 focus:border-black focus:text-black transition-colors duration-100">
                      {language === "FR" ? "Envoyer" : "Send"}
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
