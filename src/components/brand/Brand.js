import "./brand.css";
import { google,slack,atlassian,dropbox,shopify } from "./imports";
const Brand = () => {
  return (
    <div className="gpt3-brand section-padding">
      <div>
        <img src={google} alt="google" />
        <img src={slack} alt="slack" />
        <img src={atlassian} alt="atlassian" />
        <img src={dropbox} alt="dropbox" />
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
}

export default Brand;
