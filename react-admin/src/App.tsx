import { DButton, DRootProps } from "@react-devui/ui";

import { useMemo, useState } from "react";

import { DRoot } from "@react-devui/ui";
import "@/scss/App.scss";

export default function App() {
  const [theme, setTheme] = useState("danger");

  const rootContext = useMemo<DRootProps["context"]>(
    () => ({
      layout: { pageScrollEl: "#app-main", contentResizeEl: "#app-content" },
    }),
    []
  );

  return (
    <DRoot context={rootContext}>
      <main id="app-main" style={{ overflow: "auto" }}>
        <section id="app-content" style={{ height: "200vh" }}>
          <DButton className="test">XXXXX</DButton>
          <DButton dType="secondary">Button</DButton>
          <DButton dType="outline">Button</DButton>
          <DButton dType="dashed">Button</DButton>
          <DButton dType="text">Button</DButton>
          <DButton dType="link">Button</DButton>
        </section>
      </main>
    </DRoot>
  );
}
