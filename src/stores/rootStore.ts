import { fabric } from 'fabric';

export class RootStore {
  private canvasElement: HTMLCanvasElement;
  constructor() {
    this.canvasElement = document.createElement('canvas');
    document.body.append(this.canvasElement);
    const fabricCanvas = new fabric.Canvas(this.canvasElement);
  }
}

export default new RootStore();
