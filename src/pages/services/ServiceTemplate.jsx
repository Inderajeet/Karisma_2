import React from 'react';
import Banner from '../../components/Banner';
import '../../custom_css/serviceTemplate.css';

const ServiceTemplate = () => {
    const data = {
        imageUrl: "https://damasmc.com/uploads/services/service_image7634dd58c2d48657bad993881722a915f8dbe576.jpg",
        imageAlt: "Facials",
        imageWclassNameth: 689,
        imageHeight: 586,
        title: "Facials",
        description1: "Discover the Power of Facials and HydraFacial at Damas Medical Center",
        description2: "At Damas Medical Center, we believe beautiful skin begins with a personalized approach. Our comprehensive range of facial treatments caters to your unique needs, revealing a radiant and rejuvenated complexion.",
        description3: "Beyond the Basics: Unveiling the Power of Our Facials",
        benefits: [
            "Deep Cleansing: Remove impurities and excess oil, leaving your skin feeling refreshed and prepared for further treatments.",
            "Exfoliation: Gently buff away dead skin cells, revealing a smoother, more radiant texture.",
            "Extractions: Address clogged pores and blemishes for a clearer, more refined appearance.",
            "Hydration: Deeply nourish your skin with customized serums and masks, promoting a healthy glow.",
            "Serum Application: Target specific concerns with potent serums for anti-aging, hydration, or brightening benefits."
        ]
    };
    return (
        <>
            <Banner></Banner>
            <section className="cosmeticSec">

                <div className="container">

                    <div className="contentWrap">

                        <div className="imgBx">

                            <img src="https://damasmc.com/uploads/services/service_image7634dd58c2d48657bad993881722a915f8dbe576.jpg" loading="lazy" 
                            // witdth="689" height="586" 
                            style={{width:'689', height:'586'}}
                            alt="Facials  "/>

                        </div>

                        <div className="cont">

                            <div className="tle">Facials  </div>

                            <p><strong>Discover the Power of Facials and HydraFacial at Damas Medical Center</strong></p>



                            <p><br/>

                                At Damas Medical Center, we believe beautiful skin begins with a personalized approach. Our comprehensive range of facial treatments caters to your unique needs, revealing a radiant and rejuvenated complexion.</p>



                            <p><strong>Beyond the Basics: Unveiling the Power of Our Facials</strong></p>



                            <p>Our signature facials go far beyond a simple cleanse. Experienced beauty therapists utilize advanced techniques and high-quality products to deliver a transformative experience:</p>



                            <ul>

                                <li><strong>Deep Cleansing:</strong>&nbsp;Remove impurities and excess oil, leaving your skin feeling refreshed and prepared for further treatments.</li>

                                <li><strong>Exfoliation:</strong>&nbsp;Gently buff away dead skin cells, revealing a smoother, more radiant texture.</li>

                                <li><strong>Extractions:</strong>&nbsp;Address clogged pores and blemishes for a clearer, more refined appearance.</li>

                                <li><strong>Hydration:</strong>&nbsp;Deeply nourish your skin with customized serums and masks, promoting a healthy glow.</li>

                                <li><strong>Serum Application:</strong>&nbsp;Target specific concerns with potent serums for anti-aging, hydration, or brightening benefits.</li>

                            </ul>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
};

export default ServiceTemplate;