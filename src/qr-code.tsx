import React from "react";

type Props = {};

const QrCode = (props: Props) => {
  return (
    <div className="flex m-auto max-w-[320px] flex-col text-center justify-center align-middle bg-white p-4 rounded-xl">
      <img className="rounded-xl" src="image-qr-code.png" alt="QR Code" />
      <br />
      <h1 className="text-xl font-bold pb-4 mx-5">
        Improve your front-end skills by building projects
      </h1>
      <p className="text-sm text-gray-500 mx-5 pb-4">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
};

export default QrCode;
