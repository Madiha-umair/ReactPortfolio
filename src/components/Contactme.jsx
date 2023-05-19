import React from "react";

export default function ContactButton() {
  const handleContactClick = () => {
    window.location.href = "mailto:madiha.altaf@yahoo.com";
  };

  return (
    <div id="contactme">
    <button onClick={handleContactClick}><a href="mailto:madiha.altaf@yahoo.com" class="contact-button">Contact me</a></button>
    </div>
  );
}

