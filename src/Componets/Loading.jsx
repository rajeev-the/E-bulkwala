import React from 'react'
import { FaSpinner } from "react-icons/fa";

const Loading = ({ size = 32, color = "#2563EB", fullScreen = false }) => {

     const spinner = (
    <FaSpinner
      className="animate-spin"
      size={size}
      color={color}
    />
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-60 z-50">
        {spinner}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      {spinner}
    </div>
  )
}

export default Loading