import { fabric } from 'fabric';
import { action, observable } from 'mobx';
import { CanvasStore } from './canvasStore';
import { RootStore } from './rootStore';

export class ImageStore {
  @observable url = '';
  element: HTMLImageElement;
  instance: fabric.Image | null = null;
  width: number = 0;
  height: number = 0;

  private originalUrl: string = '';
  private readonly canvas: CanvasStore;

  constructor(private readonly root: RootStore) {
    this.canvas = root.canvasStore;
    this.element = new Image();
    this.element.setAttribute('crossorigin', 'anonymous');
  }
  @action async load(url: string): Promise<void> {
    this.originalUrl = url;
    await this.update(url);
  }

  @action async update(url: string): Promise<void> {
    this.url = url;
    await this.render();
  }

  setSize(): void {
    const { width, height } = this.getSize();
    this.width = width;
    this.height = height;
    this.canvas.setSize(this.width, this.height);
  }

  private render(): Promise<void> {
    if (!this.url) {
      return Promise.reject();
    }
    this.element.src = this.url;
    return new Promise((resolve) => {
      fabric.Image.fromURL(this.url, () => {
        this.onLoad();
        resolve();
      });
    });
  }

  private onLoad(): void {
    this.canvas.instance.clear();
    this.setSize();
    this.addImage();
    // this.canvas.updateBaseScale();
  }
  private createImage(): fabric.Image {
    const image = new fabric.Image(this.element);
    this.adjustImage(image);
    return image;
  }

  private addImage(): void {
    this.instance = this.createImage();
    this.canvas.instance.add(this.instance);
  }

  private adjustImage(image: fabric.Image): void {
    image.set({
      selectable: false,
      hoverCursor: 'default',
      crossOrigin: 'anonymous',
      flipX: this.canvas.flipX,
      flipY: this.canvas.flipY,
      name: 'image',
    });
    image.scaleToWidth(this.width);
    image.scaleToHeight(this.height);
  }

  private getSize(scale = this.canvas.scale): { width: number; height: number } {
    const { width: originalWidth, height: originalHeight } = this.getOriginalSize();

    const containerHeight = 0.85 * window.innerHeight * scale;
    const ratio = originalWidth / originalHeight;
    const height = Math.min(containerHeight / ratio, containerHeight);
    const width = ratio * height;

    return { width, height };
  }

  private getOriginalSize(): { width: number; height: number } {
    const originalImage = new fabric.Image(this.element);
    const { width, height } = originalImage.getBoundingRect();

    originalImage.rotate(this.canvas.angle).setCoords();

    return { width, height };
  }
}
