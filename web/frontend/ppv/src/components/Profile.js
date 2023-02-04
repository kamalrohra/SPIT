import React from "react";
import "../styles/profile.css";
import "..";

function Profile() {
    return (
        <div>
            {/* <div classNameName="container-profile mt-4 mb-4 p-3 d-flex justify-content-center"> 
                <div classNameName="card-profile p-4"> 
                    <div classNameName=" image d-flex flex-column justify-content-center align-items-center"> <button classNameName="btn btn-secondary"> <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" /></button> <span classNameName="name mt-3">Eleanor Pena</span> <span classNameName="idd">@eleanorpena</span> 
                        <div classNameName="d-flex flex-row justify-content-center align-items-center gap-2"> <span classNameName="idd1">Oxc4c16a645_b21a</span> <span><i classNameName="fa fa-copy"></i></span> </div> 
                        <div classNameName="d-flex flex-row justify-content-center align-items-center mt-3"> <span classNameName="number">1069 <span classNameName="follow">Followers</span></span> </div> 
                        <div classNameName=" d-flex mt-2"> <button classNameName="btn1 btn-dark">Edit Profile</button> </div> 
                        <div classNameName="text mt-3"> <span>Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.<br/><br/> Artist/ Creative Director by Day #NFT minting@ with FND night. </span> </div> 
                        <div classNameName="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i classNameName="fa fa-twitter"></i></span> <span><i classNameName="fa fa-facebook-f"></i></span> <span><i classNameName="fa fa-instagram"></i></span> <span><i classNameName="fa fa-linkedin"></i></span> </div> 
                        <div classNameName=" px-2 rounded mt-4 date "> <span classNameName="join">Joined May,2021</span> </div> 
                    </div> 
                </div>    
            </div> */}
            <div className="container mt-5">
    
                <div className="row d-flex justify-content-center">
                    
                    <div className="col-md-7">
                        
                        <div className="card-pro p-3 py-4">
                            
                            <div className="text-center">
                                <img src="https://i.imgur.com/bDLhJiP.jpg" width="100" className="rounded-circle"/>
                            </div>
                            
                            <div className="text-center mt-3">
                                <span className="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                                <h5 className="mt-2 mb-0">Alexender Schidmt</h5>
                                <span>UI/UX Designer</span>
                                
                                <div className="px-4 mt-1">
                                    <p className="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                
                                </div>
                                
                                <ul className="social-list">
                                    <li><i className="fa fa-facebook"></i></li>
                                    <li><i className="fa fa-dribbble"></i></li>
                                    <li><i className="fa fa-instagram"></i></li>
                                    <li><i className="fa fa-linkedin"></i></li>
                                    <li><i className="fa fa-google"></i></li>
                                </ul>
                                
                                <div className="buttons">
                                    
                                    <button className="btn btn-outline-primary px-4">Message</button>
                                    <button className="btn btn-primary px-4 ms-3">Contact</button>
                                </div>
                                
                                
                            </div>
                            
                        
                            
                            
                        </div>
                        
                    </div>
                    
                </div>
    
            </div>
        </div>
            
    );
}
export default Profile;