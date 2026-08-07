import { createContext, useContext, useState, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ContactTypeContext = createContext(null);

export function ContactTypeProvider({ children }) {
  const [contactType, setContactType] = useState('employer');
  const contactRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = useCallback((type) => {
    setContactType(type);

    const tryScroll = () => {
      const el = contactRef.current || document.getElementById('contact-form-card');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return true;
      }
      return false;
    };

    if (location.pathname !== '/') {
      navigate('/', { replace: false });
    }

    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (tryScroll() || attempts > 60) {
        clearInterval(interval);
      }
    }, 100);
  }, [navigate, location.pathname]);

  return (
    <ContactTypeContext.Provider value={{ contactType, setContactType, contactRef, scrollToContact }}>
      {children}
    </ContactTypeContext.Provider>
  );
}

export function useContactType() {
  const ctx = useContext(ContactTypeContext);
  if (!ctx) throw new Error('useContactType must be used within ContactTypeProvider');
  return ctx;
}
