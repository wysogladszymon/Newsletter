import React from "react";
import { observer } from "mobx-react";

export const EmailBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = observer((props) => {
  return <div {...props} className='flex-grow overflow-auto'/>
})