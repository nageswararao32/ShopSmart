import React, { useEffect, useState } from 'react';
import '../Styles/MobStyles.css';
import { Link } from 'react-router-dom';
import Img from '../Images/Img.jpg';
import '../Styles/FooterStyles.css';
import ames from '../Images/ames.png';
import pay from '../Images/pay.png';
import insta from '../Images/insta.png';
import linkdin from '../Images/linkdin.png';
import usa from '../Images/usa.png';
import star from '../Images/star.png';
import axios from 'axios';


const options = [
    { name: 'RECOMMENDED', code: 'RECOMMENDED' },
    { name: 'NEWEST FIRST', code: 'NEWEST FIRST' },
    { name: 'POPULAR', code: 'POPULAR' },
    { name: 'PRICE : HIGH TO LOW', code: 'PRICE : HIGH TO LOW' },
    { name: 'PRICE : LOW TO HIGH', code: 'PRICE : LOW TO HIGH' }
];

function MobileView() {
    const [selectedOption, setSelectedOption] = useState("RECOMMENDED");
    const [isOpen, setIsOpen] = useState(false);
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setIsOpen(false);
    };
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                console.log(response.data);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isSecondSvgVisible, setIsSecondSvgVisible] = useState(false);

    const toggleVisibleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
        setIsSecondSvgVisible(!isDropdownVisible);
    };

    const closeDropdown = () => {
        setIsDropdownVisible(false);
        setIsSecondSvgVisible(false);
    };
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownOptions = ["About Us", "Stories", "Artisans", "Boutiques", "Contact Us", "EU Compliances Docs"];
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
    const quickLinksOptions = ["Orders & Shipping", "Join/Login as a Seller", "Payment & Pricing", "Return & Refunds", "FAQs", "Privacy Policy", "Terms & Conditions"];

    const toggleQuickLinks = () => {
        setIsQuickLinksOpen(!isQuickLinksOpen);
    };
    const [isFollowUsOpen, setIsFollowUsOpen] = useState(false);
    const followUsOptions = [
        { name: "Instagram", image: insta },
        { name: "LinkedIn", image: linkdin }
    ];

    const toggleFollowUs = () => {
        setIsFollowUsOpen(!isFollowUsOpen);
    };
    return (
        <div>
            <div className='mb'>
                <div className="container2" style={{backgroundColor:"white"}}>
                {!isDropdownVisible && (
                <Link onClick={toggleVisibleDropdown}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: "20px", height: "20px" }}>
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                </Link>
            )}
                    {isDropdownVisible && (
                        <div style={{
                            position: 'absolute',
                            backgroundColor: "white",
                            borderRadius: "5px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            top: '15%',
                            left: '17%',
                            transform: 'translateX(-50%)'
                        }}>
                            <Link to="/" className='link'><h3>SHOP</h3></Link>
                            <Link to="/" className='link'><h3>SKILLS</h3></Link>
                            <Link to="/" className='link'><h3>STORIES</h3></Link>
                            <Link to="/" className='link'><h3>ABOUT</h3></Link>
                            <Link to="/" className='link'><h3>CONTACT US</h3></Link>
                        </div>
                    )}
                    {isSecondSvgVisible && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{ width: "20px", height: "20px", marginTop: "5px" }} onClick={closeDropdown}>
                            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                        </svg>
                    )}
                    <img src={Img} alt='img' style={{ width: "70px", height: "70px" }} />
                    <h1 style={{ textAlign: "center", fontFamily: "sans-serif" }} className='logo'>LOGO</h1>
                    <div className='mdiv1'>
                        <Link className="icon1"><i className="fa fa-search"></i></Link>
                        <Link className="icon1"><i className="far fa-heart"></i></Link>
                        <Link className="icon1"><i className="fa fa-shopping-bag"></i></Link>
                    </div>
                </div>
            </div>
            <div>
                <h2><span style={{ color: "gray" }}>HOME</span> <span color='white'> | </span><span color='black'>SHOP</span></h2>
            </div>
            <div>
                <div class="dk">
                    <h2 className='hk'>DISCOVER OUR PRODUCTS</h2>
                    <p className='desck'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
                </div>
            </div>
            <hr style={{ margin: "10px" }} />
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                <h2 style={{ fontFamily: "sans-serif", color: "black", fontWeight: "bold", fontSize: "20px", textAlign: "center", cursor: "pointer" }}>FILTER</h2>
                <span style={{ border: "2px solid black", margin: "10px", height: "50px" }}></span>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <div
                        style={{
                            borderRadius: "4px",
                            padding: "5px",
                            cursor: "pointer",
                            textAlign: "right",
                        }}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <h3 style={{ fontWeight: "bold", fontFamily: "sans-serif", display: "inline-block" }}>{selectedOption}<svg style={{ width: "20px", height: "20px", margin: "0px 10px 0px 10px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg></h3>
                    </div>
                    {isOpen && (
                        <div style={{ backgroundColor: '#f9f9f9f9', position: 'absolute', width: '58%' }}>
                            {options.map((op) => (
                                <div
                                    key={op.code}
                                    onClick={() => handleOptionChange({ target: { value: op.code } })}
                                    style={{
                                        padding: "15px",
                                        margin: "20px",
                                        textAlign: "right",
                                        cursor: "pointer",
                                        color: op.code === selectedOption ? "black" : "",
                                        fontFamily: "sans-serif",
                                        fontSize: op.code === selectedOption ? "20px" : "16px",
                                        fontWeight: op.code === selectedOption ? "bold" : "normal",
                                    }}
                                >
                                    <span style={{ display: "inline-flex", margin: "0px 20px 0px 20px", height: "20px", width: "20px" }}>{op.code === selectedOption && "✓"}</span>
                                    {op.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <hr style={{ margin: "10px" }} />
            <div>
                <div className='productsList1'>
                    {products.map((product, index) => {
                        return (
                            <div key={product.id} className='plist1'>
                                <div className='img1'>
                                    <img src={product.image} alt='products' style={{ width: "100px", height: "150px" }} />
                                </div>
                                <div className='name1'>
                                    <h3 key={product.id} className='productName1'>{product.title}</h3>
                                    <span style={{ color: "grey", fontFamily: "sans-serif", fontSize: "12px", margin: "0px 10px 0px 10px" }}><Link style={{ color: "grey", fontFamily: "sans-serif" }}>Sign in</Link> or <Link style={{ color: "grey", fontFamily: "sans-serif", textDecoration: "none" }}>Create an account</Link> to see pricing<Link style={{ margin: "0px 5px 0px 5px" }}></Link></span><span><Link>{index === 2 ? <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="red" style={{ fontSize: "10px" }}><path d="M12 21.35l-1.45-1.32C5.4 16.11 2 13.36 2 9.5 2 7.02 3.78 5 6.01 5c1.34 0 2.63.99 3.99 2.01C10.37 5.99 11.66 5 13 5c2.23 0 4.01 2.02 4.01 4.5 0 3.86-3.4 6.61-8.55 10.54L12 21.35z" /></svg> : <i className="far fa-heart" style={{ fontSize: "20px" }}></i>}</Link></span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div style={{ backgroundColor: "black" }}>
                <div className='footer1'>
                    <div>
                        <h3 style={{ fontFamily: "sans-serif", fontWeight: "bold", color: "white", fontSize: "18px" }}>BE THE FIRST TO KNOW</h3>
                        <p style={{ fontFamily: "sans-serif", color: "white", fontSize: "13px" }}>Lorem Ipsum is a dummy text of printing and the type setting industry. this simply some dummy text.</p>
                        <input type='email' placeholder='Enter your e-mail.....' style={{ border: "none", height: "40px", width: "150px" }} required />
                        <input type='button' style={{ backgroundColor: "black", cursor: "pointer", outline: "none", border: "2px solid grey", color: "gray", height: "50px", margin: "10px", textDecoration: "none", width: "100px", borderRadius: "10px" }} value={'SUBSCRIBE'} className='btn' />SUBSCRIBE
                    </div>
                </div>
                <hr style={{ border: "1px solid white", margin: "0px 10px 20px 10px" }}></hr>
                <h3 style={{ fontFamily: "sans-serif", fontWeight: "bold", color: "white", fontSize: "18px", textAlign: "left", margin: "0px 30px 0px 30px" }}>CALL US</h3>
                <div style={{ display: "flex", textAlign: "center", justifyContent: "space-evenly", alignItems: "center", margin: "5px" }}>
                    <p style={{ fontFamily: "sans-serif", color: "white", fontSize: "14px" }}>+44 221 133 5360</p>
                    <p style={{ fontFamily: "sans-serif", color: "white", fontSize: "14px" }}><img src={star} alt='img' style={{ height: "10px", width: "10px", margin: "0px 10px 0px 10px" }} />customercare@mettamuse.com</p>
                </div>
                <hr style={{ border: "1px solid white", margin: "0px 10px 0px 10px" }}></hr>
                <div style={{ margin: "0px 30px 0px 30px" }}>
                    <h3 style={{ fontFamily: "sans-serif", fontWeight: "bold", color: "white", fontSize: "18px" }}>CURRENCY</h3>
                    <h3 style={{ fontFamily: "sans-serif", fontWeight: "bold", color: "white", fontSize: "18px", marginTop: "20px" }}><img src={usa} alt='usa' style={{ height: "50px", widows: "50px", borderRadius: "80%" }} /><img src={star} alt='usa' style={{ height: "10px", widows: "10px", borderRadius: "60%", margin: "0px 10px 20px 10px" }} className='us' /><span style={{ top: "-15px", position: "relative" }}>USD</span></h3>
                </div>
                <hr style={{ margin: "0px 10px 0px 10px", color: "white", border: "1px solid white" }}></hr>

                <div>
                    <div
                        style={{ cursor: "pointer", fontFamily: "sans-serif", fontWeight: "bold", color: "white", fontSize: "18px", display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "20px" }}
                        onClick={toggleDropdown} >
                        <span style={{ margin: "0px 10px 0px 10px", color: "white" }}>mettā muse</span>{isDropdownOpen ? <i className='fas fa-chevron-up' style={{ fontSize: "28px", color: "white" }}></i> : <i className='fas fa-chevron-down' style={{ fontSize: "28px", color: "white" }}></i>}
                    </div>
                    {isDropdownOpen && (
                        <div style={{ fontFamily: "sans-serif", color: "white", fontSize: "16px", margin: "0px 40px 0px 40px" }}>
                            {dropdownOptions.map((option, index) => (
                                <p key={index} style={{ cursor: "pointer" }}>{option}</p>
                            ))}
                        </div>
                    )}
                </div>
                <hr style={{ margin: "10px 10px 10px 10px", border: "1px solid white" }} />
                <div>
                    <div
                        style={{ cursor: "pointer", fontFamily: "sans-serif", fontWeight: "bold", color: "white", fontSize: "18px", display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "20px" }}
                        onClick={toggleQuickLinks} >
                        <span style={{ margin: "0px 10px 0px 10px", color: "white", fontSize: "20PX" }}>QUICK LINKS</span>{isQuickLinksOpen ? <i className='fas fa-chevron-up' style={{ fontSize: "28px", color: "white" }}></i> : <i className='fas fa-chevron-down' style={{ fontSize: "28px", color: "white" }}></i>}
                    </div>
                    {isQuickLinksOpen && (
                        <div style={{ fontFamily: "sans-serif", color: "white", fontSize: "16px", margin: "0px 40px 0px 40px" }}>
                            {quickLinksOptions.map((option, index) => (
                                <p key={index} style={{ cursor: "pointer" }}>{option}</p>
                            ))}
                        </div>
                    )}
                </div>
                <hr style={{ margin: "10px 10px 10px 10px", border: "1px solid white" }} />
                <div>
                    <div>
                        <div
                            style={{ cursor: "pointer", fontFamily: "sans-serif", fontWeight: "bold", color: "white", fontSize: "18px", display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "20px" }}
                            onClick={toggleFollowUs} >
                            <span style={{ margin: "0px 10px 0px 10px", color: "white", fontSize: "20PX" }}>FOLLOW US</span>{isFollowUsOpen ? <i className='fas fa-chevron-up' style={{ fontSize: "28px", color: "white" }}></i> : <i className='fas fa-chevron-down' style={{ fontSize: "28px", color: "white" }}></i>}
                        </div>
                        {isFollowUsOpen && (
                            <div style={{ fontFamily: "sans-serif", color: "white", fontSize: "16px", margin: "0px 40px 0px 40px" }}>
                                {followUsOptions.map((option, index) => (
                                    <img
                                        key={index}
                                        src={option.image}
                                        alt={option.name}
                                        style={{ height: "70px", width: "70px", borderRadius: "50%", margin: "20px 0px", cursor: "pointer" }}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                    <hr style={{ margin: "10px 10px 10px 10px", border: "1px solid white" }} />
                    <div className='payments1'>
                        <h3 style={{ cursor: "pointer", fontFamily: "sans-serif", fontWeight: "bold", color: "white", fontSize: "18px", margin: "10px 20px 10px 20px" }}>mettā muse <span>ACCEPTS</span></h3>
                    </div>
                    <img src='https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/wallets/google-pay.svg?sanitize=true' alt='gpay' className='pay1' />
                    <img src='https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/cards/mastercard.svg?sanitize=true' alt='gpay' className='pay1' />
                    <img src='https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/apm/paypal.svg?sanitize=true' alt='gpay' className='pay1' />
                    <img src={ames} alt='gpay' className='pay1' />
                    <img src='https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/wallets/apple-pay.svg?sanitize=true' alt='gpay' className='pay1' />
                    <img src={pay} alt='gpay' style={{ height: "33px", width: "60px", cursor: "pointer", borderRadius: "5px", margin: "0px 10px 10px 20px" }} />
                </div>
                <p className="copyright1">Copyright ©2023 mettamuse. All rights reserved.</p>
            </div>
        </div>
    )
}

export default MobileView;
