import { MutableRefObject, PropsWithChildren, useEffect, useRef } from "react";
import Typed from "typed.js";

type Props = {
    typewriterKey : string
    typed : MutableRefObject<Typed | undefined>
    refresh: number
}

const TypeWriter = (props : PropsWithChildren<Props>) => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const options = {
      stringsElement: "#typed-strings" + props.typewriterKey,
      typeSpeed: 70,
    };

    if (el.current) props.typed.current = new Typed(el.current, options)
    props.typed.current?.stop()

    return () => {
      if (props.typed.current != undefined) props.typed.current.destroy()
    };
  }, [props.typewriterKey, props.refresh])


  return (
    <>
      <div id={"typed-strings" + props.typewriterKey}>{props.children}</div>
      <span style={{ whiteSpace: "pre-wrap" }} ref={el} />
    </>
  );
};

export default TypeWriter;
