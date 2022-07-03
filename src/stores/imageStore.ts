import { observable } from 'mobx';
import { RootStore } from './rootStore';

export class ImageStore {
  @observable url = '';
  element: HTMLImageElement;
  instance: fabric.Image | null = null;
  width: number = 0;
  height: number = 0;

  private originalUrl: string = '';

  constructor(private readonly root: RootStore) {
    this.element = new Image();
    this.element.setAttribute('crossorigin', 'anonymous');
  }
}
