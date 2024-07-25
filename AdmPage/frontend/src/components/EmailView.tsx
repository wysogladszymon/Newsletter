import { Stack } from "react-bootstrap";
import { EmailBody, EmailHeader } from "./";
import { observer } from "mobx-react";
import { useStores } from "../hooks/useStores";

export const EmailView = observer(() => {
  const { emailStore } = useStores();

  return (
    <Stack className="h-full p-20 max-h-[100vh]">
      <div className="text-2xl mb-10">
        <h1>Email Preview</h1>
      </div>
      <Stack className="bg-gray-100 border p-3 rounded-xl h-[75vh]">
        <EmailHeader />
        <EmailBody
          className="flex-grow bg-blue-50"
          dangerouslySetInnerHTML={{ __html: emailStore?.emailBody ?? " " }}
        />
      </Stack>
    </Stack>
  );
});
