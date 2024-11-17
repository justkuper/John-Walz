import React, { useState } from 'react';
import './Footer.css';


const Footer = () => {
    // State to manage email input
    const [email, setEmail] = useState('');

    // Handler function for subscription
    // const handleSubscribe = () => {
    //     if (email) {
    //         alert(`Thank you for subscribing with the email: ${email}`);
    //         // Here you can also add logic to send the email to your server or API
    //         setEmail(''); // Clear the email input after subscribing
    //     } else {
    //         alert("Please enter a valid email address.");
    //     }
    // };

    // Handler functions to show alerts for terms and privacy policy
    const handleTermsClick = () => {
        alert(
            "Terms of Service:\n\n" +
            "1. Use of Service: By using our website, you agree to follow all applicable laws and not misuse the service.\n" +
            "2. Account: Keep your account secure. We aren't responsible for unauthorized access.\n" +
            "3. Content: All content is owned by us or our licensors. Do not use without permission.\n" +
            "4. Liability: We aren't liable for any damages from your use of our service.\n" +
            "5. Changes: Terms may change. Continued use means you accept the new terms.\n\n" +
            "For the full Terms, please visit our website."
        );
    };

    const handlePrivacyClick = () => {
        alert(
            "Privacy Policy:\n\n" +
            "1. Data Collection: We collect personal information like your name and email for account setup and service improvements.\n" +
            "2. Use of Data: Your data is used to enhance your experience, improve our services, and for communication purposes.\n" +
            "3. Data Sharing: We do not share your personal data with third parties, except for essential service providers or when required by law.\n" +
            "4. Cookies: We use cookies to track site performance and personalize your experience.\n" +
            "5. Security: We implement security measures to protect your data but cannot guarantee complete safety.\n\n" +
            "For more details, please visit our website."
        );
    };

    return (
        <div className='footer'>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2024 Kuper Bank. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <button className="footer-button" onClick={handleTermsClick}>
                        Term of Services
                    </button>
                    <button className="footer-button" onClick={handlePrivacyClick}>
                        Privacy Policy
                    </button>
                   
                </div>
            </div>
        </div>
    );
}

export default Footer;
