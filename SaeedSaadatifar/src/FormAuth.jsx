import farawin from "farawin";
import RegForm from "./RegForm";
import LogForm from "./LogForm";
import { useState } from "react";

// 1- کاربر بتونه درست لاگین و رجیستر کنه
// ۲- کارکرد صحیح سناریو های گفته شده
export default function FormAuth() {
  const [isRegPage, setIsRegPage] = useState(false);
  return (
    <div
      className="h-full flex justify-center items-center"
      style={{
        background: `url(
          https://colorlib.com/etc/lf/Login_v4/images/bg-01.jpg
        )`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%  100%",
      }}
    >
      {/* TODO Insert Form Here*/}
      <div className="md:py-20 md:w-[546px] min-h-max md:px-[100px] w-fit py-10 px-[40px] bg-white rounded-lg">
        <div className="w-full flex flex-col items-center">
          {isRegPage && <RegForm></RegForm>}
          {!isRegPage && <LogForm></LogForm>}
          <span className="mt-10 text-[12px] opacity-60">
            {isRegPage ? "Or You Have Account" : "Or You Have Not Account"}
          </span>
          <span
            className="mt-1 cursor-pointer"
            onClick={() => {
              setIsRegPage((RegPage) => !RegPage);
            }}
          >
            {isRegPage ? "Login" : "Sign Up"}
          </span>
        </div>
      </div>
      {/* <button
        className="mx-2 w-10"
        onClick={() => {
          farawin.testLogin("09393013397", "12345678");
        }}
      >
        test login
      </button>

      <button
        className="mx-2 w-10"
        onClick={() => {
          farawin.testRegister("09393013397", "12345678", "Ali Farjad");
        }}
      >
        test register
      </button> */}
    </div>
  );
}
