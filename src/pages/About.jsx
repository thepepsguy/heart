import React, { useEffect, useRef } from 'react';
import CustomCursor from '../components/CustomCursor';
import './Learn.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const sections = gsap.utils.toArray('.learn-section');
        sections.forEach((section) => {
            gsap.from(section, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            });
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="learn-page-container">
            <CustomCursor />

            <div className="learn-hero-section">
                <h1 className="learn-hero-title">FLow</h1>
                <p className="learn-hero-subtitle">The honest story behind HEART Peptides.</p>
            </div>

            <div className="learn-content-section" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px 40px', display: 'flex', flexDirection: 'column', gap: '30px' }}>

                <section className="learn-section">
                    <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.8rem', color: '#1a1a1a', marginBottom: '15px' }}>Shuruwaat Kahan Se Hui?</h2>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.05rem', color: '#444', lineHeight: '1.7', marginBottom: '15px' }}>
                        Jo sabse pehla issue tha, main thoda explain kar deta hoon. Mujhe peptides ke baare mein social media se pata chala tha — specifically Instagram ke through. Us time main actively iske baare mein search kar raha tha. Jab bhi aap Google par "retatrutide" ya koi aur peptide search karte ho, to sabse pehle IndiaMART ki listings hi aati hain.
                    </p>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.05rem', color: '#444', lineHeight: '1.7' }}>
                        IndiaMART par multiple vendors hote hain. Maine unme se kaafi logon ko check kiya, unse baat bhi kari. Lekin honestly unka jo behaviour tha, WhatsApp pe baat karne ka tareeqa aur overall jo vibe thi, wo kaafi sketchy lag rahi thi. Yaqeen nahi ho raha tha unpar.
                    </p>
                </section>

                <section className="learn-section">
                    <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.8rem', color: '#1a1a1a', marginBottom: '15px' }}>Market Ka Sach Aur Influencers</h2>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.05rem', color: '#444', lineHeight: '1.7', marginBottom: '15px' }}>
                        Uske baad mujhe ek aur store mila jo supplements aur peptides sell kar raha tha, aur wahan bhi retatrutide wagairah mil raha tha. Phir maine notice kiya ki social media par jo fitness influencers hain — jo pehle khud ko natural bolte the — ab unke khud ke peptide stores bhi aa gaye hain.
                    </p>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.05rem', color: '#444', lineHeight: '1.7' }}>
                        Obviously main unse compete nahi kar sakta, kyunki wo bade log hain aur unke connections bhi strong hain.
                    </p>
                </section>

                <section className="learn-section">
                    <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.8rem', color: '#1a1a1a', marginBottom: '15px' }}>Reddit</h2>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.05rem', color: '#444', lineHeight: '1.7', marginBottom: '15px' }}>
                        Phir jab main Reddit par scroll kar raha tha, to mujhe kaafi discussions mile. Wahin ek bande ka naam aaya jo ab mera achha dost ban chuka hai. Sabse pehle maine usse retatrutide mangwaya aur use karke dekha. Experience kaafi achha tha.
                    </p>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.05rem', color: '#444', lineHeight: '1.7', marginBottom: '15px' }}>
                        Us bande ka main motive bas ye tha ki logon ko sahi aur affordable cheez mile, kyunki wo khud bhi apne use ke liye mangwata tha.
                    </p>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.05rem', color: '#444', lineHeight: '1.7' }}>
                        Phir humne socha ki jab already market mein itni delay aur fake cheezon ka issue hai, to kyun na direct Chinese vendors se bulk mein mangwaya jaye. Agar bulk mein mangayenge to cost bhi kam padegi, hamare khud ke use ke liye bhi sasta hoga aur thoda margin bhi nikal jayega. Isi wajah se humne ye store start kiya.
                    </p>
                </section>

                <section className="learn-section">
                    <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.8rem', color: '#1a1a1a', marginBottom: '15px' }}>Kaam Kaise Hota Hai?</h2>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.05rem', color: '#444', lineHeight: '1.7', marginBottom: '15px' }}>
                        And everything is simple. Our sources are Chinese labs. Hum unhe orders dete hain, wo lab seal karke ship karte hain, and then we store them strictly maintaining the cold chain. Jaise hi delivery aati hai, we process it and deliver it promptly to you.
                    </p>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.05rem', color: '#444', lineHeight: '1.7', marginBottom: '15px' }}>
                        Abhi hamare paas bahut zyada peptides nahi hain, lekin jo bhi listed hain wo confirm stock mein available hain. Agar koi out of stock ho jata hai to hum usko website pe update kar dete hain.
                    </p>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.05rem', color: '#444', lineHeight: '1.7' }}>
                        Payments ke liye, socha tha crypto use karenge, but reality mein logon ke liye crypto ka setup karna hard hota hai, aur conversions mein bhi margin lagta hai. Isliye user ease ke liye, we are currently using normal <strong>UPI</strong>. Baaki saari processes hum Discord pe discuss kar sakte hain.
                    </p>
                </section>

                <section className="learn-section">
                    <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.8rem', color: '#1a1a1a', marginBottom: '15px' }}>Trust Build Karna Tricky Hai</h2>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.05rem', color: '#444', lineHeight: '1.7', marginBottom: '15px' }}>
                        Ab sabse bada challenge hai logon tak reach karna aur trust build karna. Initially jo testing humne karwayi thi uske proofs bhi hamare paas hain. Lekin honestly speaking, internet par PDF proofs dena thoda tricky hota hai.
                    </p>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.05rem', color: '#444', lineHeight: '1.7', marginBottom: '15px' }}>
                        Kyunki medical reports bhi ho sakta hai purani ho, ya kisi aur batch ki ho. Aur jab product actual customer tak pahunchta hai to page par attached report se ye 100% guarantee nahi hoti ki exactly usi batch ki ho.
                    </p>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.05rem', color: '#444', lineHeight: '1.7' }}>
                        Isliye, new logon mein doubts rehna completely natural hai. Main bas itna kahunga ki aap khud research karo, sab options compare karo, aur jitni information mil sakti hai gather karo. Phir jo bhi source aapko trustworthy lage, wahan se apne hisaab se purchase karo.
                    </p>
                </section>

                <section className="learn-section" style={{ textAlign: 'center', marginTop: '20px', padding: '40px', backgroundColor: '#f9f5f6', borderRadius: '16px', border: '1px solid #fae1e8' }}>
                    <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2rem', color: '#1a1a1a', marginBottom: '15px' }}>Let's Chat!</h2>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.1rem', color: '#555', lineHeight: '1.7', marginBottom: '25px' }}>
                        Agar aap chahe to hamare Discord par bhi aa sakte ho, join karo, aaram se baat karo, aur apne saare doubts clear karo. Uske baad jo bhi aapko sahi lage, wahi decision lo.
                    </p>
                    <a
                        href="https://discord.gg/MAMWGg2rS"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            backgroundColor: '#1a1a1a',
                            color: '#fff',
                            textDecoration: 'none',
                            padding: '14px 28px',
                            borderRadius: '30px',
                            fontWeight: 600,
                            fontSize: '1.05rem',
                            fontFamily: 'Outfit, sans-serif',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                        }}
                    >
                        <img src="/msg.svg" alt="Discord" style={{ width: '22px', height: '22px', marginRight: '10px', filter: 'invert(1)' }} />
                        Join Our Discord
                    </a>
                </section>

            </div>
        </div>
    );
};

export default About;
