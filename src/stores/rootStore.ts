import { fabric } from 'fabric';
import { ImageStore } from './imageStore';
import { CanvasStore } from './canvasStore';

export class RootStore {
  canvasStore: CanvasStore;
  imageStore: ImageStore;

  private canvasElement: HTMLCanvasElement;
  constructor() {
    this.canvasElement = document.createElement('canvas');
    document.body.append(this.canvasElement);
    const fabricCanvas = new fabric.Canvas(this.canvasElement);
    this.canvasStore = new CanvasStore(this, fabricCanvas);
    this.imageStore = new ImageStore(this);
  }

  addCanvasToDocument(container: HTMLElement): void {
    const parent = this.canvasElement.parentElement as Node;
    container.append(parent);
  }
}

export default new RootStore();
