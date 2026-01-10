import React from "react";
import { ReactLenis } from "lenis/react";

const SmoothScroll = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ReactLenis options={{ duration: 2 }} root>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
