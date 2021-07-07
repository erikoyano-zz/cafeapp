import React from "react";
import "./News.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function About() {
  return (
    <div className="component-block">
      <h1 className="title-block" id="news">
        NEWS
      </h1>
      <div className="content-block">
        <div className="twitter-container">
          <TwitterTimelineEmbed
            sourceType="profile"
            // The preferred screen name goes next:
            screenName="OrganicLScafe"
            // Style options goes here:
            options={{ height: 200, width: 400, id: 2, tweetLimit: 1 }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
