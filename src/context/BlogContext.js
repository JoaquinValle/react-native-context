import React from "react";

const Context = React.createContext();

const Component = ({ children }) => {
  return (
  	<Context.Provider>
      {children}
    </Context.Provider>
  )
};
