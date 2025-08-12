import { FunctionComponent } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

export type ReserveSeatType = {
  className?: string;
  seatsLeft?: string;
  onClick?: () => void;
};

const ReserveSeat: FunctionComponent<ReserveSeatType> = ({
  className = "",
  seatsLeft,
  onClick
}) => {
  return (
    <div className={`w-[18.825rem] flex flex-col items-center gap-2 ${className}`}>
      <Button onClick={onClick}>Reserve Your Seat Now</Button>
      {seatsLeft && (
        <div className="text-xl text-royalblue-200 [text-shadow:0rem_0.25rem_0.25rem_rgba(10,_109,_240,_0.25)]">
          {seatsLeft}
        </div>
      )}
    </div>
  );
};

export default ReserveSeat;
