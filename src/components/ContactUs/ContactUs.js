import React from 'react';
import styles from './contactus.css';
import InnerConatiner from 'components/InnerContainer/InnerConatiner';

function ContactUs(props) {
    const contactUsContent =
        <div className="contactUs">
            <h2>Contact Us</h2>
            <div className="contactUsBlock">
                <div className="contactAbout">
                    <div className="info">
                        <div className="address">
                            <h4>Location:</h4>
                            <p>27-7, Jongam-ro 14-gil, Seongbuk-gu, Seoul, 02800</p>
                        </div>

                        <div className="email">
                            <h4>Email:</h4>
                            <p>redking011444@gmail.com</p>
                        </div>

                        <div className="phone">
                            <h4>Call:</h4>
                            <p>+82 4765 4888</p>
                        </div>
                    </div>
                    <div className="socialLinks">
                        <a className="facebook">
                            <div className="icon"/>
                        </a>
                        <a className="twitter">
                            <div className="icon"/>
                        </a>
                        <a className="instagram">
                            <div className="icon"/>
                        </a>
                    </div>
                </div>
                <div className="contactMap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.81148227841!2d-74.006113!3d40.71002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cbc9c50c74931%3A0xe1d1ca4e0be4d296!2z7ISc7Jq47Yq567OE7IucIOyEseu2geq1rCDsooXslZTrj5kgMTAtNQ!5e0!3m2!1sko!2skr!4v1627149693445!5m2!1sko!2skr"
                        loading="lazy"/>
                </div>
            </div>
        </div>
    return <>
        <InnerConatiner content={contactUsContent}/>
    </>;
}

export default ContactUs;
