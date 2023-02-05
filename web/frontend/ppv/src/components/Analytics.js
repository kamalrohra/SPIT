import { ethers } from "ethers";
import React from "react";
import "../styles/Analytics.css";

function Analytics({ purchases }) {
    return (
        <div>
            <div className="table100 ver1 m-b-110">
                <div className="table100-head">
                    <table>
                        <thead>
                            <tr className="row100 head">
                                <th className="cell100 column1">timestamp</th>
                                <th className="cell100 column2">from</th>
                                <th className="cell100 column3">to</th>
                                <th className="cell100 column4">video</th>
                                <th className="cell100 column5">price</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="table100-body js-pscroll ps ps--active-y">
                    <table>
                        <tbody>
                            {purchases.map((elem) => {
                                console.log(elem)
                                return (
                                    <tr className="row100 body">

                                        <td className="cell100 column1">{parseInt(elem?.time?._hex, 16)}</td>
                                        <td className="cell100 column2">{elem?.from}</td>
                                        <td className="cell100 column3">{elem?.to}</td>
                                        <td className="cell100 column4">{elem?.price}</td>
                                        <td className="cell100 column5">{elem?.name}#{elem?.link}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Analytics;