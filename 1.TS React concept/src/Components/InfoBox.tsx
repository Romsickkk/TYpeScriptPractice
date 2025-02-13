import { type ReactNode } from "react";

type HintBoxType = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxType = {
  mode: "warning";
  severity?: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxType = HintBoxType | WarningBoxType;

function InfoBox(props: InfoBoxType) {
  const { mode, children } = props;
  // info, worning
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}

export default InfoBox;
