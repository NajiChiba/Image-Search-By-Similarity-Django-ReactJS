import { useEffect } from "react";

const useActive = (handleNav, val) => {
  useEffect(() => {
    handleNav(val);
  });
};

export default useActive;
