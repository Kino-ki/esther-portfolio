"use client";
import Modal from "react-modal";
import { useLanguage } from "./BilingualProvider/LangProvider";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/app/utils/send-email";
import { FormData } from "./ContactSection";
import { useEffect, useState } from "react";
import loadIcon from "/public/loading.gif";
import Image from "next/image";
import { getButtonText } from "@/app/utils/get-response-text";

type ContactModalProps = {
  closeModal: () => void;
  openModal: boolean;
  setIsSent: React.Dispatch<React.SetStateAction<number>>;
};

export default function ContactModal({
  closeModal,
  openModal,
  setIsSent,
}: ContactModalProps) {
  const { language } = useLanguage();
  const [ModalSent, setModalSent] = useState<number>(0);
  const [buttonText, setButtonText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const resstatus: number = await sendEmail(data);
      setIsSent(resstatus);
      setModalSent(resstatus);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonText(getButtonText(language, ModalSent));
  }, [language, ModalSent]);

  useEffect(() => {
    setTimeout(() => {
      reset();
      if (ModalSent !== 500) {
        closeModal();
      }
    }, 2000);
  }, [ModalSent]);

  return (
    <div className="">
      <Modal
        ariaHideApp={false}
        isOpen={openModal}
        onRequestClose={closeModal}
        overlayClassName="fixed inset-0 bg-bgcolour/80 flex justify-center "
        className="flex flex-col justify-center max-h-screen w-full mx-[25%]"
      >
        <div className=" bg-contactbg scale-110 bg-cover  rounded-lg">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="backdrop-blur-[2px] w-full h-full p-16"
          >
            <div className="flex flex-col ">
              <label htmlFor="name" className="py-2 text-black ">
                {language === "FR" ? <p>nom:</p> : <p>name:</p>}
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
              <label htmlFor="email" className="py-2 text-black">
                email:
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
                className="mb-3 rounded-sm p-2 border  text-black invalid:border-red-500
                focus:invalid:border-red-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="py-2 text-black">
                message:
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
                  <Image src={loadIcon} alt="loading" width={30}/>
                </button>
              ) : (
                <button className=" border-double border-spacing-5 border-2 hover:border-black hover:text-black transition-colors duration-100 flex mx-auto py-3 px-6 mt-5">
                  {buttonText}
                </button>
              )}
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
