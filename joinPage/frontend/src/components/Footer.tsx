import { EmailSvg } from "../icons/EmailSvg";
import { PhoneSvg } from "../icons/PhoneSvg";
import { FooterItem } from "./FooterItem";

export const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#9dca00", border: "none" }}
      className="min-h-[100px] w-full p-3 flex"
    >
      <div className="flex-grow-1 flex gap-10 items-center justify-center">
        <FooterItem title='Zadzwoń do nas' msg='501 727 405' icon={<PhoneSvg/>}/>
        <FooterItem title='Napisz email' msg='biuro@fitproject.com.pl' icon={<EmailSvg/>}/>
      </div>
      <div className='flex'>
        <a target="_blank" href="https://www.facebook.com/fitprojectcatering">
          <img
            height="32px"
            style={{ maxHeight: "32px" }}
            src="https://i.ibb.co/wKxzwnP/facebook.png"
            alt="facebook"
          />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/fitprojectfitproject/"
        >
          <img
            height="32px"
            style={{ maxHeight: "32px" }}
            src="https://i.ibb.co/WsJbKb7/instagram.png"
            alt="instagram"
          />
        </a>
      </div>
    </div>
  );
};
