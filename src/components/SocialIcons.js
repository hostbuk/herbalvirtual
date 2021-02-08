import React from "react";
import Facebook from "../svg-icons/facebook.js";
import Youtube from "../svg-icons/youtube.js";
import Twitter from "../svg-icons/twitter.js";
import SiteMetaData from "./SiteMetadata";

const SocialIcons = () => {
  const { facebook, youtube, twitter } = SiteMetaData();

  return (
    <div className="social-icons">
      {youtube && (
        <a href={youtube} className="social-icon" target="_blank" data-wpel-link="external" rel="follow external noopener noreferrer">
          <Youtube />
        </a>
      )}
      {facebook && (
        <a href={facebook} className="social-icon" target="_blank" data-wpel-link="external" rel="follow external noopener noreferrer">
          <Facebook />
        </a>
      )}
      {twitter && (
        <a href={twitter} className="social-icon" target="_blank" data-wpel-link="external" rel="follow external noopener noreferrer">
          <Twitter />
        </a>
      )}
    </div>
  );
};

export default SocialIcons;
