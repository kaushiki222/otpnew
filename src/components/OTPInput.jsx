import React, { useContext, useEffect, useState } from "react";
import { RecoveryContext } from "../App";
export default function OTPinput() {
  const { email, otp } = useContext(RecoveryContext);
  // const [timeout, setTimeout] = useState();
  const [OTPinput, SetOTPinput] = useState([0, 0, 0, 0]);
  // const [disable, setDisable] = useState(true);

  function ResendOTP() {}
  // if (disable) return;
  //   fetch data

  // useEffect(() => {
  //   let intervel = setInterval(() => {
  //     setTimer((lastTimerCount) => {
  //       lastTimerCount <= 1 && clearInterval(interval);
  //       if (lastTimerCount <= 1) setDisable(false);
  //       if (lastTimerCount <= 0) return lastTimerCount;
  //       return lastTimerCount - 1;
  //     });
  //   }, 1000); //each count last for a sec
  //   return () => clearInterval(interval);
  // }, [disable]);

  function verifyOTP() {}
  // if (parseInt(OTPinput.join("")) === otp) {
  //   setPage("reset");
  //   return;
  // }
  // console.log(parseInt(OTPinput.join("")),otp ,OTPinput);
  //   alert("The code you have entered is not correct");

  // }
  return (
    <>
      <div>
        <p>Email Verification</p>
      </div>
      <div>
        <p>we have sent a code o your email {email}</p>
      </div>
      <input
        type="text"
        onChange={(e) =>
          SetOTPinput([e.target.value, OTPinput[1], OTPinput[2], OTPinput[3]])
        }
      ></input>
      <input
        type="text"
        onChange={(e) =>
          SetOTPinput([OTPinput[0], e.target.value, OTPinput[2], OTPinput[3]])
        }
      ></input>
      <input
        type="text"
        onChange={(e) =>
          SetOTPinput([OTPinput[0], OTPinput[1], e.target.value, OTPinput[3]])
        }
      ></input>
      <input
        type="text"
        onChange={(e) =>
          SetOTPinput([OTPinput[0], OTPinput[1], OTPinput[2], e.target.value])
        }
      ></input>

      <div>
        <a onClick={() => verifyOTP()}>verify account</a>
      </div>
      <div>
        <p>Didn't recieve code?</p>
        {""}
        <a onClick={() => ResendOTP()}>
          {" "}
          {/* {disable ? `Resend OTP in ${timercount}` : `Resend OTP`} */}
        </a>
      </div>
    </>
  );
}
