import { createContext, useContext, useState } from 'react';

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [activeModal, setActiveModal] = useState("none");
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0, width: 0 });

  const openWhoAreYou = () => setActiveModal("whoAreYou");
  const closeModal = () => setActiveModal("none");
  const selectOption = (option) => setActiveModal(option);

  const openWhoAreYouAtPosition = (rect) => {
    setButtonPosition({
      top: rect.bottom,
      left: rect.left + rect.width / 2,
      width: rect.width,
    });
    setActiveModal("whoAreYou");
  };

  const openEmployeeModal = () => setActiveModal("employee");

  return (
    <ModalContext.Provider value={{ activeModal, openWhoAreYou, closeModal, selectOption, buttonPosition, openWhoAreYouAtPosition, openEmployeeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}
