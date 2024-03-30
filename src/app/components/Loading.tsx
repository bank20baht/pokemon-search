import React from "react";
import ReactLoading from "react-loading";

type Props = {};

const Loading = ({}: Props) => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <ReactLoading
        type={"balls"}
        color={"red"}
        height={667}
        width={375}
        delay={0}
      />
    </div>
  );
};

export default Loading;
