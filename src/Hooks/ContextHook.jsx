import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const ContextHook = () => {
  const authInfo = use(AuthContext);
  return authInfo;
};

export default ContextHook;
