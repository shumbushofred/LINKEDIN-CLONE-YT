import React from 'react'
import "./Widgets.css";
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
    return (
        <div class = "widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("The App is cool", "Top news - 9331 readers")}
            {newsArticle("Corona be killing people", "Top news - 212 readers")}
            {newsArticle("The President of Rwanda has been vaccinated", "Top news - 201 readers")}
            {newsArticle("What it takes to be a billionaire", "Top news - 192 readers")}
            {newsArticle("Finding a job as Full-stack developer", "Top news - 187 readers")}
        </div>
    )
}

export default Widgets
