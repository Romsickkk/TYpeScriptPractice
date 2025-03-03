import { useRef } from "react";

import Form, { FormHandle } from "./UI/Form.tsx";
import Button from "./UI/Button.tsx";
import Input from "./UI/Input.tsx";
import { useTimersContext } from "../Store/timers-context.tsx";

export default function AddTimer() {
  const form = useRef<FormHandle>(null);
  const { addTimer } = useTimersContext();

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string };
    if (extractedData.name && +extractedData.duration > 0) {
      addTimer({ name: extractedData.name, duration: +extractedData.duration });
      form.current?.clear();
    }
  }

  return (
    <Form ref={form} onSave={handleSaveTimer} id="add-timer">
      <Input type="text" label="Name" id="name" />
      <Input type="number" label="Duration" id="duration" />
      <p>
        <Button>Add Timer</Button>
      </p>
    </Form>
  );
}
