"use client";

import React, { useEffect } from "react";
import LoginForm from "./component/form";
import { useTranslation } from "react-i18next";
import { useLocale } from "@/provider/LocalProvider";
import { SupportedLanguage } from "@/config/i18n";
const Login = () => {
  return (
    <section className="w-100 h-screen overflow-hidden flex items-center justify-between relative bg-[url('/img/login.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-white-100 opacity-75"></div>
      <div className="flex-1 z-10">
        <div className="clipBoard relative text-white px-[90px]">
          <div className="absolute">
            <h1 className="font-[700] text-[65px] leading-[1]">
              Padma Hospital, Attariya
              {/* {t("general:language:Language")} */}
            </h1>
            <p className="font-[400] pt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              sapiente praesentium iusto voluptatum aspernatur eaque sunt
              corrupti nemo eius facere, tenetur placeat pariatur fuga similique
              quaerat assumenda dignissimos adipisci odit. eius facere, tenetur
              placeat pariatur fuga similique quaerat assumenda dignissimos
              adipisci odit.
            </p>
          </div>
        </div>
      </div>
      <div className="px-8 flex-1 flex justify-center z-10">
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
