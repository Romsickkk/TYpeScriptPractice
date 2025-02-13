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
        console.log("CLEARING");

        form.current?.reset();
      },
    };
  });

  function handleSubmmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
  }

  return (
    <form onSubmit={handleSubmmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
});
export default Form;
