import React from "react";
import "./News.css";
import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed";

function About() {
  return (
    <div className="component-block">
      <h1 className="title-block" id="news">
        News
      </h1>
      <div className="content-block">
        <div className="twitter-container">
          <TwitterTimelineEmbed
            sourceType="profile"
            // The preferred screen name goes next:
            screenName="OrganicLScafe"
            // Style options goes here:
            options={{ height: 400, width: 800, id: 2 }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
