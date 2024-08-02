import { ReactElement } from "react";

interface FooterItemProps {
  title: string;
  msg: string;
  icon: ReactElement;
}

export const FooterItem = ({ title, msg, icon }: FooterItemProps) => {
  return (
    <div className="flex justify-center items-center gap-2">
      {icon}
      <div>
        <h2 className='text-xl'><strong>{title}</strong></h2>
        <p className="text-white text-l">
          <strong>{msg}</strong>{" "}
        </p>
      </div>
    </div>
  );
};
