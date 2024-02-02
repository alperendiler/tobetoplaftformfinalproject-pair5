import React from "react";
import "../../../styles/copyUrl.css";

interface CopyUrlProps {
  url: string;
}

const CopyUrl: React.FC<CopyUrlProps> = ({ url }) => {
  const copyUrlToClipboard = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => alert("URL kopyalandı"))
      .catch(() => alert("URL kopyalanırken bir hata oluştu"));
  };

  return (
    <>
      <div className="row">
        <div className="col-md-10 col-12">{url}</div>
        <div className="col-md-2 col-12">
          <button onClick={copyUrlToClipboard} className="button-color">
            <img
              src="https://w7.pngwing.com/pngs/991/486/png-transparent-computer-icons-cut-copy-and-paste-avatar-purple-heroes-violet.png"
              className="icon-copy"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default CopyUrl;
