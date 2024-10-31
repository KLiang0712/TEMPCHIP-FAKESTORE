import React, {useState, createContext} from 'react';

export const NavContext = createContext();

const NavProvider = ({children}) => {
  // scroll bar state 
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {setIsOpen(false)};

  return ( 
    <NavContext.Provider value={[isOpen, setIsOpen, handleClose]}>{children}</NavContext.Provider>
  );
};

export default NavProvider;