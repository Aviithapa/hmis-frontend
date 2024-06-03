const ForgetPassword = () => {
  return (
    <section className="backgroundImage w-100 h-screen overflow-hidden flex items-center justify-between">
      <div className="hidden md:block flex-1 ">
        <div className="clipBoard relative text-white  px-[90px]">
          <div className="absolute top-10">
            <h1 className="font-[700] text-[60px] leading-[1]">
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
        <form
          action=""
          className="bg-[rgb(255,255,255)] px-5 py-5 max-w-[400px] shadow-2xl rounded-md"
        >
          <div className="mb-3">
            <h1 className="font-[700] text-[35px]">Forget Password?</h1>
            <p className="text-[15px] font-[400]">
              Please enter your email address below to reset your password.
            </p>
          </div>

          <div className="font-[500] text-[15px] mb-3">
            <div className="password relative">
              <label className="text-[#1976D2]">Email:</label>
              <input
                className="w-full py-2 px-[39px] rounded-md bg-[#EEF1F6] focus:outline-[#9CA3AF]"
                type="email"
                placeholder="Enter your email"
              />
              <span className="absolute iconc">
                <i className="fa-solid fa-envelope"></i>
              </span>
            </div>
          </div>

          <div className="button-section font-[400] text-[11px]">
            <div className="text-center">
              <button className="bg-[#1976D2] w-full py-2 rounded-md text-[13px] text-white">
                NEXT
              </button>
            </div>
            <div className=" pt-3 text-center text-[15px] font-[400]">
              <p>- or -</p>
              <p>
                Return to{" "}
                <a className="text-[#1976D2]" href="login.html">
                  Login
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgetPassword;
