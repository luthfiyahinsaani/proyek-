import React from "react";
import Layout from "../components/layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactPage = () => {
    const whatsappNumber = "6289526448697"; 

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center text-slate-900 text-base mt-8">
                <h1 className="font-bold text-2xl mb-4">Hubungi Kami Segera. 
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </h1>
                <p>Untuk informasi mengenai Harga Pasir & Harga Batu terbaru. Silahkan Hubungi Kami Dengan Klik Icon WhatsaPP diatas.</p>
            </div>
        </Layout>
    );
}

export default ContactPage;
