import React, { useEffect, useState } from "react";

import Button from "../../FormStuff/Button";

function ErrorBoundaries({
  hasError = false,
  handleError,
  message = "Something Went Wrong !!",
  children,
}) {
  const [error, setError] = useState(hasError);

  useEffect(() => {
    setError(hasError);
  }, [hasError]);

  if (error) {
    return (
      <div className="flex justify-center w-full">
        <div className=" flex justify-center items-center my-8 text-center text-red-900 p-4 w-3/4 bg-red-300 shadow-lg border-solid border-2 border-opacity-30 border-orange-600 rounded-lg">
          <p className=" font-bold ml-4">{message}</p>
          <Button
            className={"bg-black text-white text-sm rounded-md px-3 py-2 ml-4"}
            children="Try Again"
            onClick={handleError}
          />
        </div>
      </div>
    );
  }

  return children;
}

export default ErrorBoundaries;
