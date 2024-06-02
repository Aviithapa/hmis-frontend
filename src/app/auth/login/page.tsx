import { Button } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FormEvent } from "react";
import LoginForm from "./component/form";
const Login = () => {
  return (
    <section className="w-100 h-screen overflow-hidden flex items-center justify-between bg-black">
      <div className="hidden md:block flex-1 ">
        <div className="clipBoard relative text-white  px-[90px]">
          <div className="absolute top-10">
            <h1 className="font-[700] text-[65px] leading-[1]">
              Padma Hospital, Attariya
            </h1>
            <p className=" font-[400] pt-4">
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

      <div className=" px-8 flex-1 flex justify-center">
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
