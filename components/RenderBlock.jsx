
"use client";
import { componentRegistry } from "./componentRegistry";

export default function RenderBlock({ block, site }) {
  const Comp = componentRegistry[block.type];
  if (!Comp) return null;


  const injectedProps =
    block.type === "header-sec"
      ? { ...block.props, logo: site?.logo }
      : block.props;

      console.log(injectedProps);
      console.log(site?.logo);

  return (
    <Comp
      {...injectedProps}
      children={block.children}
    />
  );
}
