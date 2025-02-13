import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  href?: string;
};

function isAnchorType(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorType(props)) {
    return (
      <a {...props} className="button">
        {props.children}
      </a>
    );
  }

  return (
    <button {...props} className="button">
      {props.children}
    </button>
  );
}

export default Button;
