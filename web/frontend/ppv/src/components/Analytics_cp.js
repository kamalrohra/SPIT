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
                                return (
                                    <tr className="row100 body">
                                        <td className="cell100 column1">{elem.timestamp}</td>
                                        <td className="cell100 column2">{elem.from}</td>
                                        <td className="cell100 column3">{elem.to}</td>
                                        <td className="cell100 column4">{elem.price}</td>
                                        <td className="cell100 column5">{elem.video}</td>
                                    </tr>
                                )
                            })}

                            <tr className="row100 body">
                                <td className="cell100 column1">Mind &amp; Body</td>
                                <td className="cell100 column2">Yoga</td>
                                <td className="cell100 column3">8:00 AM - 9:00 AM</td>
                                <td className="cell100 column4">Adam Stewart</td>
                                <td className="cell100 column5">15</td>
                            </tr>
                            <tr className="row100 body">
                                <td className="cell100 column1">Crit Cardio</td>
                                <td className="cell100 column2">Gym</td>
                                <td className="cell100 column3">9:00 AM - 10:00 AM</td>
                                <td className="cell100 column4">Aaron Chapman</td>
                                <td className="cell100 column5">10</td>
                            </tr>
                            <tr className="row100 body">
                                <td className="cell100 column1">Wheel Pose Full Posture</td>
                                <td className="cell100 column2">Yoga</td>
                                <td className="cell100 column3">7:00 AM - 8:30 AM</td>
                                <td className="cell100 column4">Donna Wilson</td>
                                <td className="cell100 column5">15</td>
                            </tr>
                            <tr className="row100 body">
                                <td className="cell100 column1">Playful Dancer's Flow</td>
                                <td className="cell100 column2">Yoga</td>
                                <td className="cell100 column3">8:00 AM - 9:00 AM</td>
                                <td className="cell100 column4">Donna Wilson</td>
                                <td className="cell100 column5">10</td>
                            </tr>
                            <tr className="row100 body">
                                <td className="cell100 column1">Zumba Dance</td>
                                <td className="cell100 column2">Dance</td>
                                <td className="cell100 column3">5:00 PM - 7:00 PM</td>
                                <td className="cell100 column4">Donna Wilson</td>
                                <td className="cell100 column5">20</td>
                            </tr>
                            <tr className="row100 body">
                                <td className="cell100 column1">Cardio Blast</td>
                                <td className="cell100 column2">Gym</td>
                                <td className="cell100 column3">5:00 PM - 7:00 PM</td>
                                <td className="cell100 column4">Randy Porter</td>
                                <td className="cell100 column5">10</td>
                            </tr>
                            <tr className="row100 body">
                                <td className="cell100 column1">Pilates Reformer</td>
                                <td className="cell100 column2">Gym</td>
                                <td className="cell100 column3">8:00 AM - 9:00 AM</td>
                                <td className="cell100 column4">Randy Porter</td>
                                <td className="cell100 column5">10</td>
                            </tr>
                            <tr className="row100 body">
                                <td className="cell100 column1">Supple Spine and Shoulders</td>
                                <td className="cell100 column2">Yoga</td>
                                <td className="cell100 column3">6:30 AM - 8:00 AM</td>
                                <td className="cell100 column4">Randy Porter</td>
                                <td className="cell100 column5">15</td>
                            </tr>
                            <tr className="row100 body">
                                <td className="cell100 column1">Yoga for Divas</td>
                                <td className="cell100 column2">Yoga</td>
                                <td className="cell100 column3">9:00 AM - 11:00 AM</td>
                                <td className="cell100 column4">Donna Wilson</td>
                                <td className="cell100 column5">20</td>
                            </tr>
                            <tr className="row100 body">
                                <td className="cell100 column1">Virtual Cycle</td>
                                <td className="cell100 column2">Gym</td>
                                <td className="cell100 column3">8:00 AM - 9:00 AM</td>
                                <td className="cell100 column4">Randy Porter</td>
                                <td className="cell100 column5">20</td>
                            </tr>
                            <tr className="row100 body">
                                <td className="cell100 column1">Like a butterfly</td>
                                <td className="cell100 column2">Boxing</td>
                                <td className="cell100 column3">9:00 AM - 11:00 AM</td>
                                <td className="cell100 column4">Aaron Chapman</td>
                                <td className="cell100 column5">10</td>
                            </tr>
                            <tr className="row100 body">
                                <td className="cell100 column1">Mind &amp; Body</td>
                                <td className="cell100 column2">Yoga</td>
                                <td className="cell100 column3">8:00 AM - 9:00 AM</td>
                                <td className="cell100 column4">Adam Stewart</td>
                                <td className="cell100 column5">15</td>
                            </tr>
                            <tr className="row100 body">
                                <td className="cell100 column1">Crit Cardio</td>
                                <td className="cell100 column2">Gym</td>
                                <td className="cell100 column3">9:00 AM - 10:00 AM</td>
                                <td className="cell100 column4">Aaron Chapman</td>
                                <td className="cell100 column5">10</td>
                            </tr>
                            <tr className="row100 body">
                                <td className="cell100 column1">Wheel Pose Full Posture</td>
                                <td className="cell100 column2">Yoga</td>
                                <td className="cell100 column3">7:00 AM - 8:30 AM</td>
                                <td className="cell100 column4">Donna Wilson</td>
                                <td className="cell100 column5">15</td>
                            </tr>
                            <tr className="row100 body">
                                <td className="cell100 column1">Playful Dancer's Flow</td>
                                <td className="cell100 column2">Yoga</td>
                                <td className="cell100 column3">8:00 AM - 9:00 AM</td>
                                <td className="cell100 column4">Donna Wilson</td>
                                <td className="cell100 column5">10</td>
                            </tr>
                            <tr className="row100 body">
                                <td className="cell100 column1">Zumba Dance</td>
                                <td className="cell100 column2">Dance</td>
                                <td className="cell100 column3">5:00 PM - 7:00 PM</td>
                                <td className="cell100 column4">Donna Wilson</td>
                                <td className="cell100 column5">20</td>
                            </tr>
                            <tr className="row100 body">
                                <td className="cell100 column1">Cardio Blast</td>
                                <td className="cell100 column2">Gym</td>
                                <td className="cell100 column3">5:00 PM - 7:00 PM</td>
                                <td className="cell100 column4">Randy Porter</td>
                                <td className="cell100 column5">10</td>
                            </tr>
                            <tr className="row100 body">
                                <td className="cell100 column1">Pilates Reformer</td>
                                <td className="cell100 column2">Gym</td>
                                <td className="cell100 column3">8:00 AM - 9:00 AM</td>
                                <td className="cell100 column4">Randy Porter</td>
                                <td className="cell100 column5">10</td>
                            </tr>
                            <tr className="row100 body">
                                <td className="cell100 column1">Supple Spine and Shoulders</td>
                                <td className="cell100 column2">Yoga</td>
                                <td className="cell100 column3">6:30 AM - 8:00 AM</td>
                                <td className="cell100 column4">Randy Porter</td>
                                <td className="cell100 column5">15</td>
                            </tr>
                            <tr className="row100 body">
                                <td className="cell100 column1">Yoga for Divas</td>
                                <td className="cell100 column2">Yoga</td>
                                <td className="cell100 column3">9:00 AM - 11:00 AM</td>
                                <td className="cell100 column4">Donna Wilson</td>
                                <td className="cell100 column5">20</td>
                            </tr>
                            <tr className="row100 body">
                                <td className="cell100 column1">Virtual Cycle</td>
                                <td className="cell100 column2">Gym</td>
                                <td className="cell100 column3">8:00 AM - 9:00 AM</td>
                                <td className="cell100 column4">Randy Porter</td>
                                <td className="cell100 column5">20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Analytics;