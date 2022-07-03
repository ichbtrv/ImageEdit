import { useRef } from "react";
import { useObserver } from "mobx-react";

const Canvas = () => {
  const canvasRef = useRef<HTMLElement>(null);

  return useObserver(() => (
    <section
      ref={canvasRef}>
    </section>
  ));
}

export default Canvas;