import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className="">
      <footer className={styles.footerContainer}>
      <div className={styles.footerLanguages}>
        <a href="#">English</a>
        <a href="#">Deutsch</a>
        <a href="#">Italiano</a>
        <a href="#">Français</a>
        <a href="#">Español</a>
        <a href="#">日本語</a>
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.footerColumn}>
          <h5>Quick Links</h5>
          <ul>
            <hr />
            <li><a href="#">Home</a></li>
            <li><a href="#">BMW in your country</a></li>
            <li><a href="#">BMW Group Careers</a></li>
            <li><a href="#">EU Detergents Regulation</a></li>
            <li><a href="#">REACH Regulation</a></li>
            <li><a href="#">Compatibility Check</a></li>
            <li><a href="#">Accessories Update</a></li>
            <li><a href="#">Connected Test Vehicle</a></li>
            <li><a href="#">Service Page Charging Products</a></li>
            <li><a href="#">Cooperation Test Car</a></li>
            <li><a href="#">EU Battery Regulation</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h5>More BMW Websites</h5>
          <ul>
            <hr />
            <li><a href="#">BMW M</a></li>
            <li><a href="#">BMW M Motorsport</a></li>
            <li><a href="#">BMW Golfsport</a></li>
            <li><a href="#">BMW M Driving Experience</a></li>
            <li><a href="#">BMW Welt</a></li>
            <li><a href="#">BMW Group Classic</a></li>
            <li><a href="#">BMW Corporate/Direct Sales</a></li>
            <li><a href="#">BMW Group</a></li>
            <li><a href="#">BMW Group Culture</a></li>
            <li><a href="#">BMW ConnectedDrive Upgrades</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h5>BMW.com</h5>
          <ul>
            <hr />
            <li><a href="#">About BMW.com</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Imprint</a></li>
            <li><a href="#">Legal Notice / Data protection</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h5>Visit us on</h5>
          <ul>
            <hr />
            <li><a href="#">Facebook</a></li>
            <li><a href="#">X</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© BMW AG 2024</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
