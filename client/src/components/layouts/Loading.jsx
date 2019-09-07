import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="vw-100 vh-100">
      <div className="d-flex justify-content-center mt-6">
        <ReactLoading
          type="spinningBubbles"
          color="#1E2258"
          height={150}
          width={150}
        />
      </div>
      <h2 className="text-primary col-12 text-center h-25 my-5">Loading</h2>
    </div>
  );
};

export default Loading;
