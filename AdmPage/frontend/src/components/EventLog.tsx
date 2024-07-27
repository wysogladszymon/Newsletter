import { Stack } from "react-bootstrap";
import { observer } from "mobx-react";
import { useStores } from "../hooks/useStores";
import { Event } from "../stores/EmailStore";

export const EventLog = observer(() => {
  const { emailStore } = useStores();

  return (
    <Stack className="h-full p-20 max-h-[100vh]">
      <div className="text-2xl mb-10">
        <h1>Event Log</h1>
      </div>
      <ul className="flex-grow overflow-auto gap-3 bg-gray-100 border p-3 rounded-xl h-[75vh]">
        {emailStore?.events.map((event, i) => <Log key={i} event={event}/>)}
      </ul>
    </Stack>
  );
});

interface LogProps {
  event: Event;
}

const Log = observer(({ event }: LogProps) => {
  return (
    <li>
      <Stack>
        <p className='text-xs text-gray-500'>{formatDate(event.date)}</p>
        <p>{event.msg}</p>
      </Stack>
    </li>
  );
});

function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}
