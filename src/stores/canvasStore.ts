import { observable, action } from 'mobx';

import { RootStore } from './rootStore';

type CanvasSize = { width: number; height: number };

export class CanvasStore {
  readonly SCALE_STEP: number = 0.1;
  readonly SCALE_MAX_VALUE: number = 2;
  readonly SCALE_MIN_VALUE: number = 0.5;
  readonly SCALE_DEFAULT_VALUE: number = 1;
  readonly ANGLE_STEP: number = 90;

  @observable scale: number = this.SCALE_DEFAULT_VALUE;
  @observable angle: number = 0;
  @observable flipX: boolean = false;
  @observable flipY: boolean = false;

  baseScale: number = 0;
  size: CanvasSize = { width: 0, height: 0 };

  private readonly listeners: any;
  private readonly scaler: Scaler;

  constructor(private readonly root: RootStore, readonly instance: fabric.Canvas) {
    this.scaler = new Scaler(root);
    this.listeners = {
      onMouseWheel: this.onMouseWheel.bind(this),
    };
    this.addEventListeners();
  }

  @action setScale(value: number): void {
    this.scale = Number(value.toFixed(1));
    this.scaler.setZoom(this.scale);
  }
  increaseScale(): void {
    if (this.scale >= this.SCALE_MAX_VALUE) {
      return;
    }
    this.setScale(this.scale + this.SCALE_STEP);
  }

  decreaseScale(): void {
    if (this.scale <= this.SCALE_MIN_VALUE) {
      return;
    }
    this.setScale(this.scale - this.SCALE_STEP);
  }

  setBaseScale(value: number): void {
    this.baseScale = value;
    this.setScale(value);
  }

  resetToBaseScale(): void {
    this.setScale(this.baseScale);
  }

  updateBaseScale(): void {
    this.scaler.setBaseScale();
  }

  resetState(): void {
    this.setBaseScale(this.SCALE_DEFAULT_VALUE);
  }

  setSize(width: number, height: number): void {
    this.size = { width, height };
    this.instance.setHeight(height);
    this.instance.setWidth(width);
  }

  private addEventListeners(): void {
    const canvas = (this.instance as any).upperCanvasEl;
    canvas.addEventListener('wheel', this.listeners.onMouseWheel);
  }

  private onMouseWheel(event: WheelEvent): void {
    event.preventDefault();
    if (!this.root.imageStore.url) {
      return;
    }
    if (event.deltaY > 0) {
      this.increaseScale();
    } else {
      this.decreaseScale();
    }
  }
}

class Scaler {
  constructor(private root: RootStore) {}

  setZoom(scale: number): void {
    this.root.imageStore.setSize();
    this.root.canvasStore.instance.setZoom(scale);
  }

  setBaseScale(): void {
    const scale = this.getBaseScale();
    this.root.canvasStore.setBaseScale(scale);
  }

  getBaseScale(): number {
    const canvasContainer = document.querySelector('.canvas');
    const containerHeight = canvasContainer?.clientHeight ?? this.root.imageStore.height;
    const scale = Math.floor((containerHeight * 100) / this.root.imageStore.height);

    if (scale) {
      return (scale - (scale % 10)) / 100;
    }
    return 1;
  }
}
