import React from "react";
import "../styles/Register.css"
import Filter from "./Filter";
import SingleVideo from "./SingleVideo";

//popup for metamask
function Register() {
    return (
        <div className="videos">
            <Filter />
            <br/><br/>
            <div className="container-popup d-flex justify-content-center">
            <div className="card-new shadow-lg  card-1">
                {/* <div className="card-header  pt-3 pb-0 ml-auto border-0 ">
                    <svg className=" cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 172 172" style={{fill:"#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode:"normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M33.73372,23.59961l-10.13411,10.13411l52.26628,52.26628l-52.26628,52.26628l10.13411,10.13411l52.26628,-52.26628l52.26628,52.26628l10.13411,-10.13411l-52.26628,-52.26628l52.26628,-52.26628l-10.13411,-10.13411l-52.26628,52.26628z"></path></g></g></svg>
                </div> */}
                <div className="card-body  d-flex pt-0">
                    <div className="row no-gutters  mx-auto justify-content-start flex-sm-row flex-column">
                        <div className="col-md-4  text-center"><img className="irc_mi img-fluid mr-0" src="data:image/png;base64,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"  width="100" height="100"/></div>
                        <div className="col-md-6 ">
                            <div className="card border-0 ">
                                <div className="card-body">
                                    <h5 className="card-title"><b>Kindly connect to the Metamask</b></h5>
                                    {/* <p className="card-text-pro"><p>Lorem ipsum dolor srt amet. can tetur adipiscing elt, sed do.</p></p> */}
                                    <button type="button" className="btn btn-primary btn-round-lg btn-lg"> Connect </button>
                                </div>
                            </div>
                        </div>
                </div>
                </div> 
            </div>
            </div>
        </div>
    );
}
export default Register;