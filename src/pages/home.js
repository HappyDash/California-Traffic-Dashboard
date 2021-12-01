import React, {Component, useState, useEffect} from 'react';
import backGround from '../assets/accident.gif';
import { Link } from "react-router-dom";
import PoliceDashboard from './police_dashboard';
import PublicDashboard from "./general_public";

export default function Home() {
    return (
        // <Button>Sankalp</Button>
        <div style={{ width: "100vw", 
                    height: "100vh",
                    backgroundColor: "#cccccc" }}>
            <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "10%",
                    color: "black",
                    fontWeight: "800",
                    position: "relative",
                    top: "0",
                    zIndex: "100",
                    fontSize: "38px",
                    borderBottom: "0.5px solid #e8e8e8",
                    backgroundColor: "#cccccc"}}>
                <div style={{
                        width: "80%",
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        }}>
                    <div className="header" style={{
                            float: "left",
                            //padding: "1%",
                            fontSize: "30px",
                            lineHeight: "20px",
                            color: "#777"
                    }}>
                        <a src="#">Home</a>
                    </div>
                    <div className="nav_header" style={{ float: 'right', marginLeft: "200px", fontSize: "30px"}}>
                        <ul style={{listStyle: "none", margin: "0"}}>
                            <li className="nav_list"><Link to="/police">Police</Link></li>
                            <li className="nav_list"><Link to="/government">Government</Link></li>
                            <li className="nav_list"><Link to="/public">Public</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{ height: "90%" }}>
                <img style={{ width: "100%",
                            height: "100%"}} src={backGround}></img>
            </div>
        </div>
    );
}