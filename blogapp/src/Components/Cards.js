import React from "react";
import { Link } from "react-router-dom";
import '../style/cards.css'

export const Cards =()=>{
    return(
    <>
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="card card-margin">
                        <div class="card-header no-border">
                            <h5 class="card-title">Course</h5>
                        </div>
                        <div class="card-body pt-0">
                            <div class="widget-49">
                                <div class="widget-49-title-wrapper">
                                    <div class="widget-49-date-primary">
                                        <span class="widget-49-date-day">09</span>
                                        <span class="widget-49-date-month">apr</span>
                                    </div>
                                    <div class="widget-49-meeting-info">
                                        <span class="widget-49-pro-title">Learn React</span>
                                        <span class="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                                    </div>
                                </div>
                                <ol class="widget-49-meeting-points">
                                    <li class="widget-49-meeting-item"><span>React architecture</span></li>
                                    <li class="widget-49-meeting-item"><span>Component lifecycle and design patterns</span></li>
                                </ol>
                                <div class="widget-49-meeting-action">
                                    <Link to="/articles-list/learn-react" class="btn btn-primary">Start Reading</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card card-margin">
                        <div class="card-header no-border">
                            <h5 class="card-title">Course</h5>
                        </div>
                        <div class="card-body pt-0">
                            <div class="widget-49">
                                <div class="widget-49-title-wrapper">
                                    <div class="widget-49-date-warning">
                                        <span class="widget-49-date-day">13</span>
                                        <span class="widget-49-date-month">apr</span>
                                    </div>
                                    <div class="widget-49-meeting-info">
                                        <span class="widget-49-pro-title">C++ Advanced</span>
                                        <span class="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                                    </div>
                                </div>
                                <ol class="widget-49-meeting-points">
                                    <li class="widget-49-meeting-item"><span>Best practise for c++ algorithm</span></li>
                                    <li class="widget-49-meeting-item"><span>Clean code and hard working</span></li>
                                </ol>
                                <div class="widget-49-meeting-action">
                                <Link to="/articles-list/learn-c++" class="btn btn-primary">Start Reading</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card card-margin">
                        <div class="card-header no-border">
                            <h5 class="card-title">Course</h5>
                        </div>
                        <div class="card-body pt-0">
                            <div class="widget-49">
                                <div class="widget-49-title-wrapper">
                                    <div class="widget-49-date-success">
                                        <span class="widget-49-date-day">22</span>
                                        <span class="widget-49-date-month">apr</span>
                                    </div>
                                    <div class="widget-49-meeting-info">
                                        <span class="widget-49-pro-title">Learn Node.js</span>
                                        <span class="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                                    </div>
                                </div>
                                <ol class="widget-49-meeting-points">
                                    <li class="widget-49-meeting-item"><span>What is the Node.js</span></li>
                                    <li class="widget-49-meeting-item"><span>Why we have to use it ?</span></li>
                            
                                </ol>
                                <div class="widget-49-meeting-action">
                                <Link to="/articles-list/learn-node" class="btn btn-primary">Start Reading</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

    </>);
}

export default Cards;