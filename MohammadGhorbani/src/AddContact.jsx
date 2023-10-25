import ImageClose from "./Assets/close-48.png";
import farawin from "farawin";
import { useState } from "react";

export default function AddContact({ onClose }) {
  const [numberPhone, setNumberPhone] = useState("");
  const [name, setName] = useState("");

  const handleNumberPhone = (event) => {
    setNumberPhone(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const addContacts = async () => {
    const numberPhoneToEn = farawin.toEnDigit(numberPhone);
    const res = await farawin.testAddContact(numberPhoneToEn, name);
    alert(res.message);
  };

  const deleteContact = async () => {
    const numberPhoneToEn = farawin.toEnDigit(numberPhone);
    const res = await farawin.testDeleteContact(numberPhoneToEn);
    alert(res.message);
  };

  return (
    <div className="flex flex-col w-1/3 h-full  max-lg:absolute max-lg:left-0 max-lg:top-0 max-lg:w-full max-lg:h-full max-lg:bg-[#202329] max-lg:z-0 max-lg:rounded-3xl  text-right">
      <form className="w-full flex flex-col items-center gap-1  hover:bg-[#2E333D] rounded-2xl max-lg:pt-10">
        <p className="text-3xl pb-8 max-lg:hidden "> افزودن مخاطب</p>
        <label htmlFor="numberPhone">شماره موبایل</label>
        <input
          onChange={handleNumberPhone}
          type="text"
          id="numberPhone"
          className="h-10 rounded-xl focus:outline-none text-black p-3"
        />
        <label htmlFor="name">نام</label>
        <input
          onChange={handleName}
          type="text"
          id="name"
          className="h-10 rounded-xl focus:outline-none text-black p-3"
        />
        <button
          onClick={addContacts}
          type="button"
          className="m-auto my-3 bg-[#202329] hover:bg-green-500 w-64 h-12 rounded-2xl"
        >
          افزودن به مخاطبین
        </button>
      </form>

      <form className="w-full flex flex-col items-center gap-1 pt-9 hover:bg-[#2E333D] rounded-2xl">
        <p className="text-3xl pb-8"> حذف مخاطب</p>
        <label htmlFor="numberPhone">شماره موبایل</label>
        <input
          onChange={handleNumberPhone}
          type="text"
          id="numberPhone"
          className="h-10 rounded-xl focus:outline-none text-black p-3"
        />
        <button
          onClick={deleteContact}
          type="button"
          className="m-auto my-3 bg-[#202329] hover:bg-red-500 w-64 h-12 rounded-2xl"
        >
          حذف از مخاطبین
        </button>
      </form>
      <button
        onClick={onClose}
        type="button"
        className="m-auto bg-white rounded-full p-1 hover:bg-red-500 w-12  "
      >
        <img src={ImageClose} alt="Close" />
      </button>
    </div>
  );
}
