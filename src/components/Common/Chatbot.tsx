import React, { useEffect } from "react";

export default function Chatbot() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.type = "text/javascript";
    script.setAttribute("data-id", "3333755888");
    script.id = "chatling-embed-script";
    script.src = "https://chatling.ai/js/embed.js";
    document.body.appendChild(script);

    return () => {
      const chatbot = document.getElementById("chatling-open-chat-icon");
      chatbot!.remove();
      document.body.removeChild(script);
    };
  }, []);

  return null;
}