import cardFront from "../assets/images/bg-card-front.png";
import cardBack from "../assets/images/bg-card-back.png";
import cardLogo from "../assets/images/card-logo.svg";
import leftBg from "../assets/images/bg-main-desktop.png";
import { useState } from "react";

const InteractiveCard = () => {
  const [name, setName] = useState("Jane Appleseed");
  const [card, setCard] = useState("0000 0000 0000 0000");
  const [expMM, setExpMM] = useState("00");
  const [expYY, setExpYY] = useState("00");
  const [cvv, setCvv] = useState("123");
  return (
    <div className="min-h-screen md:flex font-SpaceGrotesk">
      <div className="md:w-1/3">
        <img
          src={leftBg}
          alt="background image left"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-[20%] left-[25%] transform -translate-x-1/2">
          <img src={cardFront} alt="bg front" className="" />
          <img src={cardLogo} alt="" className="absolute top-10 left-10" />
          <h1 className="absolute top-36 left-10 text-2xl text-white text-center w-[80%]">
            {card}
          </h1>
          <div className="absolute top-[12.5rem] left-10 flex justify-between items-center w-[80%] text-white">
            <h1 className=" text-xl ">{name}</h1>
            <h1>
              {expMM}/{expYY}
            </h1>
          </div>
        </div>
        <div className="absolute bottom-[20%] left-[30%] transform -translate-x-1/2">
          <img src={cardBack} alt="bg front" className="" />
          <h1 className="absolute top-[6.5rem] left-[21.5rem] text-xl text-white">
            {cvv}
          </h1>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <form action="" className="flex flex-col w-[30%] space-y-2">
          <h1>Cardholder Name</h1>
          <input
            type="text"
            className="border p-2 rounded-md"
            placeholder="e.g. Jane Appleseed"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              console.log(name);
            }}
          />
          <h1>Card Number</h1>
          <input
            type="text"
            className="border p-2 rounded-md"
            placeholder=" e.g. 1234 5678 9123 0000"
            value={card}
            onChange={(e) => setCard(e.target.value)}
          />
          <div className="flex mb-8">
            <div className="w-[50%] space-y-2">
              <h1>Exp. Date (MM/YY)</h1>
              <input
                type="text"
                className="border p-2 rounded-md w-[40%] me-2"
                placeholder=" e.g. 1234 5678 9123 0000"
                value={expMM}
                onChange={(e) => setExpMM(e.target.value)}
              />
              <input
                type="text"
                className="border p-2 rounded-md w-[40%]"
                placeholder=" e.g. 1234 5678 9123 0000"
                value={expYY}
                onChange={(e) => setExpYY(e.target.value)}
              />
            </div>
            <div className="w-[50%] space-y-2">
              <h1>CVV</h1>
              <input
                type="text"
                className="border p-2 rounded-md w-[100%]"
                placeholder=" e.g. 989"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-5 bg-purple-950 w-[100%] text-center border py-3 rounded-lg text-white">
            Confirm
          </div>
        </form>
      </div>
    </div>
  );
};

export default InteractiveCard;
