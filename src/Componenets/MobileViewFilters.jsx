import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Img from '../Images/Img.jpg';
import Products from './Products';

function MobileViewFilters() {
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
    const idealOpt = ["Men", "Women", "Baby & Kids"];
    const occationOpt = ["New Year", "Diwali", "BirthDay's Special"];
    const workOpt = ["Mens Formal", "Womens", "Baby & Kids"];
    const fabricOpt = ["Mens Fabric", "Women Fabric", "Baby & Kids"];
    const segmentopt = ["Men Segment", "Women Segment", "Baby & Kids"];
    const suitableOpitons = ["Men", "Women", "Baby & Kids"];
    const rawOptions = ["Clothes", "Saries", "Toys"];
    const patternOpt = ["HomeDecorators", "Shoes", "Shirts"];

    //Ideal for  
    const [selectedIdealOptions, setSelectedIdealOptions] = useState([]);

    const handleSelectAll = () => {
        setSelectedIdealOptions(idealOpt);
    };

    const handleUnselectAll = () => {
        setSelectedIdealOptions([]);
    };

    const handleOptionChange = (idealOpt) => {
        if (selectedIdealOptions.includes(idealOpt)) {
            setSelectedIdealOptions(selectedIdealOptions.filter((item) => item !== idealOpt));
        } else {
            setSelectedIdealOptions([...selectedIdealOptions, idealOpt]);
        }
    };

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }


    //occation

    const [selectedOccOptions, setSelectedOccOptions] = useState([]);

    const handleSelectOccAll = () => {
        setSelectedOccOptions(occationOpt);
    };

    const handleUnselectOccAll = () => {
        setSelectedOccOptions([]);
    };

    const handleOptionChangeOcc = (occationOpt) => {
        if (selectedOccOptions.includes(occationOpt)) {
            setSelectedOccOptions(selectedOccOptions.filter((item) => item !== occationOpt));
        } else {
            setSelectedOccOptions([...selectedOccOptions, occationOpt]);
        }
    };

    const [occdropdownOpen, setoccDropdownOpen] = useState(false);

    const occtoggleDropdown = () => {
        setoccDropdownOpen(!occdropdownOpen);
    }


    //work

    const [selectedWorkOptions, setSelectedWorkOptions] = useState([]);

    const handleSelectWorkAll = () => {
        setSelectedWorkOptions(workOpt);
    };

    const handleUnselectWorkAll = () => {
        setSelectedWorkOptions([]);
    };

    const handleOptionChangeWork = (workOpt) => {
        if (selectedWorkOptions.includes(workOpt)) {
            setSelectedWorkOptions(selectedWorkOptions.filter((item) => item !== workOpt));
        } else {
            setSelectedWorkOptions([...selectedWorkOptions, workOpt]);
        }
    };

    const [workdropdownOpen, setworkDropdownOpen] = useState(false);

    const worktoggleDropdown = () => {
        setworkDropdownOpen(!workdropdownOpen);
    }


    //fabric

    const [selectedFabOptions, setSelectedFabOptions] = useState([]);

    const handleSelectAllFab = () => {
        setSelectedFabOptions(fabricOpt);
    };

    const handleUnselectAllFab = () => {
        setSelectedFabOptions([]);
    };

    const handleOptionChangeFab = (fabricOpt) => {
        if (selectedFabOptions.includes(fabricOpt)) {
            setSelectedFabOptions(selectedFabOptions.filter((item) => item !== fabricOpt));
        } else {
            setSelectedFabOptions([...selectedFabOptions, fabricOpt]);
        }
    };

    const [fdropdownOpen, setfDropdownOpen] = useState(false);

    const ftoggleDropdown = () => {
        setfDropdownOpen(!fdropdownOpen);
    }

    //Segment

    const [selectedSegOptions, setSelectedSegOptions] = useState([]);

    const handleSelectAllSeg = () => {
        setSelectedSegOptions(segmentopt);
    };

    const handleUnselectAllSeg = () => {
        setSelectedSegOptions([]);
    };

    const handleOptionChangeSeg = (segmentopt) => {
        if (selectedSegOptions.includes(segmentopt)) {
            setSelectedSegOptions(selectedSegOptions.filter((item) => item !== segmentopt));
        } else {
            setSelectedSegOptions([...selectedSegOptions, segmentopt]);
        }
    };

    const [segdropdownOpen, setsegDropdownOpen] = useState(false);

    const segtoggleDropdown = () => {
        setsegDropdownOpen(!segdropdownOpen);
    }

    //Suitable for

    const [selectedSuitableOptions, setSelectedSuitableOptions] = useState([]);

    const handleSelectAllSuitable = () => {
        setSelectedSuitableOptions(idealOpt);
    };

    const handleUnselectAllSuitable = () => {
        setSelectedSuitableOptions([]);
    };

    const handleOptionChangeSuitable = (suitableOpitons) => {
        if (selectedSuitableOptions.includes(suitableOpitons)) {
            setSelectedSuitableOptions(selectedSuitableOptions.filter((item) => item !== suitableOpitons));
        } else {
            setSelectedSuitableOptions([...selectedSuitableOptions, suitableOpitons]);
        }
    };

    const [sfdropdownOpen, setsfDropdownOpen] = useState(false);

    const sftoggleDropdown = () => {
        setsfDropdownOpen(!sfdropdownOpen);
    }

    //raw material

    const [selectedRawOptions, setSelectedRawOptions] = useState([]);

    const handleSelectAllRaw = () => {
        setSelectedRawOptions(rawOptions);
    };

    const handleUnselectAllRaw = () => {
        setSelectedRawOptions([]);
    };

    const handleOptionChangeRaw = (rawOptions) => {
        if (selectedRawOptions.includes(rawOptions)) {
            setSelectedRawOptions(selectedRawOptions.filter((item) => item !== rawOptions));
        } else {
            setSelectedRawOptions([...selectedRawOptions, rawOptions]);
        }
    };

    const [rwdropdownOpen, setrwDropdownOpen] = useState(false);

    const rwtoggleDropdown = () => {
        setrwDropdownOpen(!rwdropdownOpen);
    }

    //Pattern

    const [selectedPatternOptions, setSelectedPatternOptions] = useState([]);

    const handleSelectAllPattern = () => {
        setSelectedPatternOptions(patternOpt);
    };

    const handleUnselectAllPattern = () => {
        setSelectedPatternOptions([]);
    };

    const handleOptionChangePattern = (patternOpt) => {
        if (selectedPatternOptions.includes(patternOpt)) {
            setSelectedPatternOptions(selectedPatternOptions.filter((item) => item !== patternOpt));
        } else {
            setSelectedPatternOptions([...selectedPatternOptions, patternOpt]);
        }
    };

    const [pdropdownOpen, setpDropdownOpen] = useState(false);

    const pdtoggleDropdown = () => {
        setpDropdownOpen(!pdropdownOpen);
    }
    return (
        <div>
            <div className='mb'>
                <div className="container2" style={{ backgroundColor: "white" }}>
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
            <div style={{display:"flex"}}>
            <div style={{ width: "250px", height: "auto"}} >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input type='checkbox' style={{ width: "25px", height: "25px", margin: "20px 0px 20px 30px", cursor: "progress" }} />
                    <label style={{ fontFamily: "sans-serif", fontWeight: "bold", marginLeft: "5px" }}>CUSTOMIZBLE</label>
                </div>
                <hr style={{ margin: '0px 15px 10px 15px' }}></hr>
                <div>
                    <div style={{ margin: "20px 0px 20px 30px", textAlign: "center" }}>
                        <label htmlFor="idealFor" style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>IDEAL FOR</label>
                        <Link style={{ margin: "0px 0px 0px 80px" }} onClick={toggleDropdown}>
                            {dropdownOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: "20px", height: "20px" }}><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: "20px", height: "20px" }}><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>}
                        </Link>
                    </div>
                    <div>
                        <div style={{ margin: "20px 20px 0px 40px" }}>
                            <Link id="selectAll" onClick={handleSelectAll} className='links' style={{ textDecoration: "none", margin: "10px", color: "black", cursor: "pointer", fontWeight: "lighter" }}>
                                <label htmlFor="selectAll" style={{ cursor: "pointer" }}>All</label>
                            </Link>
                        </div>
                    </div>
                    {dropdownOpen && (
                        <>
                            <div style={{ margin: "20px 0px 0px 45px" }}>
                                <Link onClick={handleUnselectAll} className='links' style={{ color: "grey", cursor: "pointer" }}>
                                    <label htmlFor="unselectAll" style={{ cursor: "pointer" }}>Unselect all</label>
                                </Link>
                            </div>
                            {idealOpt.map((option) => (
                                <div key={option}>
                                    <div style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                                        <input
                                            type="checkbox"
                                            style={{ width: "25px", height: "25px", margin: "20px 0px 20px 50px", cursor: "progress" }}
                                            id={option}
                                            checked={selectedIdealOptions.includes(option)}
                                            onChange={() => handleOptionChange(option)}
                                        />
                                        <label htmlFor={option} style={{ fontFamily: "sans-serif", margin: "0px 10px 0px 10px", cursor: "pointer" }}>{option}</label>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
                <hr style={{ margin: '15px' }}></hr>


                <div>
                    <div>
                        <div style={{ margin: "20px 0px 20px 30px", textAlign: "center" }}>
                            <label htmlFor="idealFor" style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>OCCATION</label>
                            <Link style={{ margin: "0px 0px 0px 80px" }} onClick={occtoggleDropdown}>
                                {occdropdownOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: "20px", height: "20px" }}><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: "20px", height: "20px" }}><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>}
                            </Link>
                        </div>
                        <div>
                            <div style={{ margin: "20px 20px 0px 40px" }}>
                                <Link id="selectAll" onClick={handleSelectOccAll} className='links' style={{ textDecoration: "none", margin: "10px", color: "black", cursor: "pointer", fontWeight: "lighter" }}>
                                    <label htmlFor="selectAll" style={{ cursor: "pointer" }}>All</label>
                                </Link>
                            </div>
                        </div>
                        {occdropdownOpen && (
                            <>
                                <div style={{ margin: "20px 0px 0px 45px" }}>
                                    <Link onClick={handleUnselectOccAll} className='links' style={{ color: "grey", cursor: "pointer" }}>
                                        <label htmlFor="unselectAll" style={{ cursor: "pointer" }}>Unselect all</label>
                                    </Link>
                                </div>
                                {occationOpt.map((option) => (
                                    <div key={option}>
                                        <div style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                                            <input
                                                type="checkbox"
                                                style={{ width: "25px", height: "25px", margin: "20px 0px 20px 50px", cursor: "progress" }}
                                                id={option}
                                                checked={selectedOccOptions.includes(option)}
                                                onChange={() => handleOptionChangeOcc(option)}
                                            />
                                            <label htmlFor={option} style={{ fontFamily: "sans-serif", margin: "0px 10px 0px 10px", cursor: "pointer" }}>{option}</label>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>




                </div>
                <hr style={{ margin: '15px' }}></hr>
                <div>
                    <div>
                        <div style={{ textAlign: "center", margin: "20px 0px 20px 30px" }}>
                            <label htmlFor="idealFor" style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>WORK</label>
                            <Link style={{ margin: "0px 0px 0px 105px" }} onClick={worktoggleDropdown}>
                                {workdropdownOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: "20px", height: "20px" }}><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: "20px", height: "20px" }}><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>}
                            </Link>
                        </div>
                        <div>
                            <div style={{ margin: "20px 20px 0px 40px" }}>
                                <Link id="selectAll" onClick={handleSelectWorkAll} className='links' style={{ textDecoration: "none", margin: "10px", color: "black", cursor: "pointer", fontWeight: "lighter" }}>
                                    <label htmlFor="selectAll" style={{ cursor: "pointer" }}>All</label>
                                </Link>
                            </div>
                        </div>
                        {workdropdownOpen && (
                            <>
                                <div style={{ margin: "20px 0px 0px 45px" }}>
                                    <Link onClick={handleUnselectWorkAll} className='links' style={{ color: "grey", cursor: "pointer" }}>
                                        <label htmlFor="unselectAll" style={{ cursor: "pointer" }}>Unselect all</label>
                                    </Link>
                                </div>
                                {workOpt.map((option) => (
                                    <div key={option}>
                                        <div style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                                            <input
                                                type="checkbox"
                                                style={{ width: "25px", height: "25px", margin: "20px 0px 20px 50px", cursor: "progress" }}
                                                id={option}
                                                checked={selectedWorkOptions.includes(option)}
                                                onChange={() => handleOptionChangeWork(option)}
                                            />
                                            <label htmlFor={option} style={{ fontFamily: "sans-serif", margin: "0px 10px 0px 10px", cursor: "pointer" }}>{option}</label>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
                <hr style={{ margin: '15px' }}></hr>



                <div>
                    <div>
                        <div style={{ margin: "20px 0px 20px 30px", textAlign: "center" }}>
                            <label htmlFor="idealFor" style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>FABRIC</label>
                            <Link style={{ margin: "0px 0px 0px 105px" }} onClick={ftoggleDropdown}>
                                {fdropdownOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: "20px", height: "20px" }}><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: "20px", height: "20px" }}><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>}
                            </Link>
                        </div>
                        <div>
                            <div style={{ margin: "20px 20px 0px 40px" }}>
                                <Link id="selectAll" onClick={handleSelectAllFab} className='links' style={{ textDecoration: "none", margin: "10px", color: "black", cursor: "pointer", fontWeight: "lighter" }}>
                                    <label htmlFor="selectAll" style={{ cursor: "pointer" }}>All</label>
                                </Link>
                            </div>
                        </div>
                        {fdropdownOpen && (
                            <>
                                <div style={{ margin: "20px 0px 0px 45px" }}>
                                    <Link onClick={handleUnselectAllFab} className='links' style={{ color: "grey", cursor: "pointer" }}>
                                        <label htmlFor="unselectAll" style={{ cursor: "pointer" }}>Unselect all</label>
                                    </Link>
                                </div>
                                {fabricOpt.map((option) => (
                                    <div key={option}>
                                        <div style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                                            <input
                                                type="checkbox"
                                                style={{ width: "25px", height: "25px", margin: "20px 0px 20px 50px", cursor: "progress" }}
                                                id={option}
                                                checked={selectedFabOptions.includes(option)}
                                                onChange={() => handleOptionChangeFab(option)}
                                            />
                                            <label htmlFor={option} style={{ fontFamily: "sans-serif", margin: "0px 10px 0px 10px", cursor: "pointer" }}>{option}</label>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
                <hr style={{ margin: '15px' }}></hr>



                <div>
                    <div>
                        <div style={{ margin: "20px 0px 20px 30px", textAlign: "center" }}>
                            <label htmlFor="idealFor" style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>SEGMENT</label>
                            <Link style={{ margin: "0px 0px 0px 80px" }} onClick={segtoggleDropdown}>
                                {segdropdownOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: "20px", height: "20px" }}><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: "20px", height: "20px" }}><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>}
                            </Link>
                        </div>
                        <div>
                            <div style={{ margin: "20px 20px 0px 40px" }}>
                                <Link id="selectAll" onClick={handleSelectAllSeg} className='links' style={{ textDecoration: "none", margin: "10px", color: "black", cursor: "pointer", fontWeight: "lighter" }}>
                                    <label htmlFor="selectAll" style={{ cursor: "pointer" }}>All</label>
                                </Link>
                            </div>
                        </div>
                        {segdropdownOpen && (
                            <>
                                <div style={{ margin: "20px 0px 0px 45px" }}>
                                    <Link onClick={handleUnselectAllSeg} className='links' style={{ color: "grey", cursor: "pointer" }}>
                                        <label htmlFor="unselectAll" style={{ cursor: "pointer" }}>Unselect all</label>
                                    </Link>
                                </div>
                                {segmentopt.map((option) => (
                                    <div key={option}>
                                        <div style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                                            <input
                                                type="checkbox"
                                                style={{ width: "25px", height: "25px", margin: "20px 0px 20px 50px", cursor: "progress" }}
                                                id={option}
                                                checked={selectedSegOptions.includes(option)}
                                                onChange={() => handleOptionChangeSeg(option)}
                                            />
                                            <label htmlFor={option} style={{ fontFamily: "sans-serif", margin: "0px 10px 0px 10px", cursor: "pointer" }}>{option}</label>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
                <hr style={{ margin: '15px' }}></hr>



                <div>
                    <div>
                        <div style={{ margin: "20px 0px 20px 30px", textAlign: "center" }}>
                            <label htmlFor="idealFor" style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>SUITABLE FOR</label>
                            <Link style={{ margin: "0px 0px 0px 50px" }} onClick={sftoggleDropdown}>
                                {sfdropdownOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: "20px", height: "20px" }}><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: "20px", height: "20px" }}><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>}
                            </Link>
                        </div>
                        <div>
                            <div style={{ margin: "20px 20px 0px 40px" }}>
                                <Link id="selectAll" onClick={handleSelectAllSuitable} className='links' style={{ textDecoration: "none", margin: "10px", color: "black", cursor: "pointer", fontWeight: "lighter" }}>
                                    <label htmlFor="selectAll" style={{ cursor: "pointer" }}>All</label>
                                </Link>
                            </div>
                        </div>
                        {sfdropdownOpen && (
                            <>
                                <div style={{ margin: "20px 0px 0px 45px" }}>
                                    <Link onClick={handleUnselectAllSuitable} className='links' style={{ color: "grey", cursor: "pointer" }}>
                                        <label htmlFor="unselectAll" style={{ cursor: "pointer" }}>Unselect all</label>
                                    </Link>
                                </div>
                                {suitableOpitons.map((option) => (
                                    <div key={option}>
                                        <div style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                                            <input
                                                type="checkbox"
                                                style={{ width: "25px", height: "25px", margin: "20px 0px 20px 50px", cursor: "progress" }}
                                                id={option}
                                                checked={selectedSuitableOptions.includes(option)}
                                                onChange={() => handleOptionChangeSuitable(option)}
                                            />
                                            <label htmlFor={option} style={{ fontFamily: "sans-serif", margin: "0px 10px 0px 10px", cursor: "pointer" }}>{option}</label>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
                <hr style={{ margin: '15px' }}></hr>



                <div>
                    <div>
                        <div style={{ margin: "20px 0px 20px 30px", textAlign: "center" }}>
                            <label htmlFor="idealFor" style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>RAW MATERIALS</label>
                            <Link style={{ margin: "0px 0px 0px 30px" }} onClick={rwtoggleDropdown}>
                                {rwdropdownOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: "20px", height: "20px" }}><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: "20px", height: "20px" }}><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>}
                            </Link>
                        </div>
                        <div>
                            <div style={{ margin: "20px 20px 0px 40px" }}>
                                <Link id="selectAll" onClick={handleSelectAllRaw} className='links' style={{ textDecoration: "none", margin: "10px", color: "black", cursor: "pointer", fontWeight: "lighter" }}>
                                    <label htmlFor="selectAll" style={{ cursor: "pointer" }}>All</label>
                                </Link>
                            </div>
                        </div>
                        {rwdropdownOpen && (
                            <>
                                <div style={{ margin: "20px 0px 0px 45px" }}>
                                    <Link onClick={handleUnselectAllRaw} className='links' style={{ color: "grey", cursor: "pointer" }}>
                                        <label htmlFor="unselectAll" style={{ cursor: "pointer" }}>Unselect all</label>
                                    </Link>
                                </div>
                                {rawOptions.map((option) => (
                                    <div key={option}>
                                        <div style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                                            <input
                                                type="checkbox"
                                                style={{ width: "25px", height: "25px", margin: "20px 0px 20px 50px", cursor: "progress" }}
                                                id={option}
                                                checked={selectedRawOptions.includes(option)}
                                                onChange={() => handleOptionChangeRaw(option)}
                                            />
                                            <label htmlFor={option} style={{ fontFamily: "sans-serif", margin: "0px 10px 0px 10px", cursor: "pointer" }}>{option}</label>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
                <hr style={{ margin: '15px' }}></hr>
                <div>

                    <div>
                        <div style={{ margin: "20px 0px 20px 30px", textAlign: "center" }}>
                            <label htmlFor="idealFor" style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>PATTERN</label>
                            <Link style={{ margin: "0px 0px 0px 80px" }} onClick={pdtoggleDropdown}>
                                {pdropdownOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: "20px", height: "20px" }}><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: "20px", height: "20px" }}><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>}
                            </Link>
                        </div>
                        <div>
                            <div style={{ margin: "20px 20px 0px 40px" }}>
                                <Link id="selectAll" onClick={handleSelectAllPattern} className='links' style={{ textDecoration: "none", margin: "10px", color: "black", cursor: "pointer", fontWeight: "lighter" }}>
                                    <label htmlFor="selectAll" style={{ cursor: "pointer" }}>All</label>
                                </Link>
                            </div>
                        </div>
                        {pdropdownOpen && (
                            <>
                                <div style={{ margin: "20px 0px 0px 45px" }}>
                                    <Link onClick={handleUnselectAllPattern} className='links' style={{ color: "grey", cursor: "pointer" }}>
                                        <label htmlFor="unselectAll" style={{ cursor: "pointer" }}>Unselect all</label>
                                    </Link>
                                </div>
                                {patternOpt.map((option) => (
                                    <div key={option}>
                                        <div style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                                            <input
                                                type="checkbox"
                                                style={{ width: "25px", height: "25px", margin: "20px 0px 20px 50px", cursor: "progress" }}
                                                id={option}
                                                checked={selectedPatternOptions.includes(option)}
                                                onChange={() => handleOptionChangePattern(option)}
                                            />
                                            <label htmlFor={option} style={{ fontFamily: "sans-serif", margin: "0px 10px 0px 10px", cursor: "pointer" }}>{option}</label>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
                <hr style={{ margin: '15px' }}></hr>
            </div>
            <div>
                <Products />
            </div>
            </div>
        </div>
    )
}

export default MobileViewFilters;