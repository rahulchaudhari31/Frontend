import { Routes, Route } from 'react-router-dom';
import './components/Home.css';
import Home from './pages/Home';
import Employer from './pages/Employer';
import Employee from './pages/Employee';
import Blogs from './pages/Blogs';
import BlogArticle from './pages/BlogArticle';
import BecomePartner from './pages/BecomePartner';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import WorkforceSolution from './pages/WorkforceSolution';
import { ModalProvider } from './context/ModalContext';
import GetInTouchModal from './components/GetInTouchModal';
import { useModal } from './context/ModalContext';
import { ContactTypeProvider, useContactType } from './context/ContactTypeContext';

function AppContent() {
  const { activeModal, closeModal, buttonPosition } = useModal();
  const { scrollToContact } = useContactType();

  const handleWhoAreYouSelect = (option) => {
    closeModal();
    scrollToContact(option);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            <Home />
          </div>
        } />
        <Route path="/about-us" element={
          <div className="min-h-screen bg-white">
            
            <About />
          
          </div>
        } />
        <Route path="/workforce-solutions" element={
          <div className="min-h-screen bg-white">
            <WorkforceSolution />
          </div>
        } />
        <Route path="/employer" element={
          <div className="min-h-screen bg-white">
            <Employer />
          </div>
        } />
        <Route path="/employee" element={<Employee />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogArticle />} />
        <Route path="/become-a-partner" element={<BecomePartner />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <GetInTouchModal
        activeModal={activeModal}
        onClose={closeModal}
        onSelect={handleWhoAreYouSelect}
        buttonPosition={buttonPosition}
      />
    </>
  );
}

export default function App() {
  return (
    <ModalProvider>
      <ContactTypeProvider>
        <AppContent />
      </ContactTypeProvider>
    </ModalProvider>
  );
}
