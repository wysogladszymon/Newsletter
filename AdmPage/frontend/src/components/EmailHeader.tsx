import React from "react";
import { observer } from "mobx-react";
import { useStores } from "../hooks/useStores";
import { Stack } from "react-bootstrap";
import { SvgEmailOpen } from "../icons/SvgMailOpen";

export const EmailHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> =
  observer(() => {
    const { emailStore } = useStores();
    return (
      <Stack
        direction="horizontal"
        className="items-center mb-10 flex-grow-0 gap-4"
      >
        <div className='p-2 border rounded-full bg-gray-200'>
          <SvgEmailOpen />
        </div>
        <Stack className="">
          <p className="text-xl text-gray-800">{emailStore?.emailTitle}</p>
          <p className="text-m text-gray-600">{emailStore?.emailAuthor}</p>
        </Stack>
      </Stack>
    );
  });
