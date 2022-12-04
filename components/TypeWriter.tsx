import { PropsWithChildren, useEffect, useRef } from "react";
import Typed from "typed.js";

type Props = {
    typewriterKey : string
}

const TypeWriter = (props : PropsWithChildren<Props>) => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  let typed: Typed | undefined;

  useEffect(() => {
    const options = {
      stringsElement: "#typed-strings" + props.typewriterKey,
      typeSpeed: 70,
    };

    if (el.current) typed = new Typed(el.current, options);

    return () => {
      if (typed != undefined) typed.destroy();
    };
  }, []);

  return (
    <>
      <div id={"typed-strings" + props.typewriterKey}>{props.children}</div>
      <span style={{ whiteSpace: "pre" }} ref={el} />
    </>
  );
};

export default TypeWriter;
