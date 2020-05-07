import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Kulendu, {currentYear}</p>
    </footer>
  );
}

export default Footer;
