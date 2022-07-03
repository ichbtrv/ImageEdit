import { useEffect, useRef } from 'react';
import { Observer } from 'mobx-react';

import useStore from '~/hooks/useStore';

const Canvas = () => {
  const canvasRef = useRef<HTMLElement>(null);
  const canvasElement = canvasRef.current;
  const rootStore = useStore();

  useEffect(() => {
    if (!canvasElement) {
      return;
    }
    rootStore.addCanvasToDocument(canvasElement);
  }, [canvasElement, canvasRef]);

  return <Observer>{() => <section className='canvas appear' ref={canvasRef}></section>}</Observer>;
};

export default Canvas;
