import React, { useState } from "react";

const useBoolean = () => {
  const [state, setState] = useState();

  const setToggle = () => setState(!state);
  const setTrue = () => setState(true);
  const setFalse = () => setState(false);

  return [state, { setToggle: setToggle, setTrue: setTrue, setFalse:setFalse }];
};

export default useBoolean;
