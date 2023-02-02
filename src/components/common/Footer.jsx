import React from "react";

function Footer() {
  return (
    <div className="bg-gray-800 relative">
      {/* <div className="mt-7">
        <h3 className="text-center primary-color">Collaborativeness</h3>
        <h3 className="text-center text-white">Over Competitiveness</h3>
      </div> */}
      <div className="max-w-[1120px] mx-auto py-3 px-[2em] md:px-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <div className="my-2">
          <p className="p4-regular-12 text-white">
            Copyright © 2023. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
