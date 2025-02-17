import {
  type FormEvent,
  type ComponentPropsWithRef,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

export type FormHandleType = {
  clear: () => void;
};

type FormProps = ComponentPropsWithRef<"form"> & {
  onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandleType, FormProps>(function Form(
  { onSave, children, ...otherProps }: FormProps,
  ref
) {
  //
  const form = useRef<HTMLFormElement>(null);
  useImperativeHandle(ref, () => {
    return {
      clear() {
        form.current?.reset();
      },
    };
  });

  function handleSubmmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log();

    const data = Object.fromEntries(formData);

    const allFieldsFilled = Object.values(data).every((value) => {
      return typeof value === "string" && value.trim() !== "";
    });
    if (allFieldsFilled) {
      onSave(data);
    } else {
      console.log("Not all fields are filled in");
    }
  }

  return (
    <form onSubmit={handleSubmmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
});
export default Form;
