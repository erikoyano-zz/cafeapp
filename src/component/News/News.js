import React from "react";
import "./News.css";

function About() {
  return (
    <div className="component-block">
      <h1 className="title-block" id="news">
        News
      </h1>
      <div className="content-block">
        6/21〜7/11までの期間中の酒類提供は東京都のガイドラインに沿い、酒類をご注文のお客様におかれましては:
        <li className="list">同グループ２人以内での利用</li>
        <li className="list"> 提供時間は11時〜19時まで</li>
        <li className="list">
          利用者の滞在時間９０分以内 とさせていただきます。
        </li>
      </div>
    </div>
  );
}

export default About;
