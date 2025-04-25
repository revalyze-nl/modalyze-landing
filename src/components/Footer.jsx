import React, {useState} from "react";
import Modal from "./Modal";
import PrivacyPolicy from "./PrivacyPolicy";

const Footer = () => {
    const [showModal, setShowModal] = useState(false);


    return (
        <footer className="bg-white border-t mt-20">
            <div className="max-w-7xl mx-auto px-6 md:px-16 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                <p className="mb-4 md:mb-0">&copy; 2025 Modalyze. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-blue-600 transition">About</a>
                    <a href="#" onClick={(e) => {
                        e.preventDefault();
                        setShowModal(true);
                    }}
                        className="hover:text-blue-600 transition">Privacy Policy</a>
                    <a href="#" className="hover:text-blue-600 transition">Contact us</a>
                </div>
            </div>

    <Modal show={showModal} onClose={() => setShowModal(false)}>
        <PrivacyPolicy />
    </Modal>
        </footer>
    );
};



export default Footer;
