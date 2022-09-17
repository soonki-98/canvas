type DrawerConstructorType = {
  width: number;
  height: number;
  backgroundColor?: string;
};

type ImageType = {
  id: any;
  position: { x: number; y: number; zIndex: number; width: number; height: number };
  src: string;
  data: HTMLImageElement;
};

class Drawer {
  private _width = 0;
  private _height = 0;
  private _isPainting = false;
  private _isReadyToPaint = true;
  private _canvas?: HTMLCanvasElement;
  private _ctx?: CanvasRenderingContext2D | null = null;
  private _strokeStyle = "black";
  private _lineWidth = 1;
  private _backgroundColor = "#fff";
  private _imgSrc = "";
  private _zIndex = 0;
  private _images: ImageType[] = [];
  private _selectedImage?: ImageType;
  private _isMovingImage = false;

  private handleMouseDown?: (event: MouseEvent) => void;
  private handleMouseUp?: () => void;
  private handleMouseMove?: (event: MouseEvent) => void;
  private handleMouseLeave?: () => void;
  private handleClick?: (event: MouseEvent) => void;

  constructor(props: DrawerConstructorType) {
    this._width = props.width;
    this._height = props.height;
    this._backgroundColor = props.backgroundColor || "#fff";
  }

  public init() {
    this.createCanvas();
    this.setEvents();
  }

  private createCanvas() {
    if (!this._canvas || !this._ctx) {
      this._canvas = document.createElement("canvas");
      this._ctx = this._canvas.getContext("2d");
      document.body.appendChild(this._canvas);

      this._canvas.width = this._width;
      this._canvas.height = this._height;
      this._canvas.style.background = this._backgroundColor;
      this._canvas.style.border = "1px solid";
    }
  }

  private startPainting() {
    this._isPainting = true;
    if (this._ctx) {
      this._ctx.strokeStyle = this._strokeStyle;
      this._ctx.lineWidth = this._lineWidth;
    }
  }

  private stopPainting() {
    this._isPainting = false;
  }

  private drawing(event: MouseEvent) {
    if (!this._canvas || !this._ctx) return;

    const { offsetX, offsetY } = event;
    if (this._isPainting) {
      this._ctx.lineTo(offsetX, offsetY);
      this._ctx.stroke();
    } else {
      this._ctx.beginPath();
      this._ctx.moveTo(offsetX, offsetY);
    }
  }

  private setEvents() {
    this.clearEvents();
    if (this._isReadyToPaint) {
      this.handleMouseMove = this.drawing.bind(this);
      this.handleMouseDown = this.startPainting.bind(this);
      this.handleMouseLeave = this.stopPainting.bind(this);
      this.handleMouseUp = this.stopPainting.bind(this);
    } else {
      this.handleMouseDown = this.startMoveImage.bind(this);
      this.handleMouseMove = this.moveImage.bind(this);
      this.handleMouseUp = this.stopMovingImage.bind(this);
      this.handleMouseLeave = this.stopMovingImage.bind(this);
    }
    if (this._canvas) {
      this.handleMouseDown && this._canvas.addEventListener("mousedown", this.handleMouseDown);
      this.handleMouseLeave && this._canvas.addEventListener("mouseleave", this.handleMouseLeave);
      this.handleMouseMove && this._canvas.addEventListener("mousemove", this.handleMouseMove);
      this.handleMouseUp && this._canvas.addEventListener("mouseup", this.handleMouseUp);
      this.handleClick && this._canvas.addEventListener("click", this.handleClick);
    }
  }

  private clearEvents() {
    if (this._canvas) {
      this.handleMouseDown && this._canvas.removeEventListener("mousedown", this.handleMouseDown);
      this.handleMouseLeave && this._canvas.removeEventListener("mouseleave", this.handleMouseLeave);
      this.handleMouseMove && this._canvas.removeEventListener("mousemove", this.handleMouseMove);
      this.handleMouseUp && this._canvas.removeEventListener("mouseup", this.handleMouseUp);
      this.handleClick && this._canvas.removeEventListener("click", this.handleClick);
    }
  }

  private _addImage() {
    if (this._ctx) {
      const img = new Image();
      img.src = this._imgSrc;
      img.style.zIndex = this._zIndex.toString();
      this._zIndex += 1;
      this._images.push({
        id: Number(img.style.zIndex),
        position: { x: 10, y: 10, width: 100, height: 100, zIndex: Number(img.style.zIndex) },
        src: img.src,
        data: img,
      });
      this._ctx.drawImage(img, 10, 10, 100, 100);
    }
  }

  private startMoveImage(event: MouseEvent) {
    if (this._ctx) {
      this._isMovingImage = true;
      const { offsetX, offsetY } = event;
      const selectedList = this._images.filter((image) => {
        if (
          offsetX <= image.position.x + image.position.width &&
          offsetX >= image.position.x &&
          offsetY <= image.position.y + image.position.width &&
          offsetY >= image.position.y
        ) {
          return image;
        }
      });
      this._readyToPaint = false;
      this._selectedImage = selectedList[selectedList.length - 1];
    }
  }

  private stopMovingImage() {
    this._isMovingImage = false;
  }

  private moveImage(event: MouseEvent) {
    if (!this._canvas || !this._ctx || !this._selectedImage || !this._isMovingImage) return;
    const { offsetX, offsetY } = event;

    this._ctx.clearRect(
      this._selectedImage.position.x,
      this._selectedImage.position.y,
      this._selectedImage.position.width,
      this._selectedImage.position.height
    );
    this._selectedImage.position.x = offsetX;
    this._selectedImage.position.y = offsetY;
    this._ctx.drawImage(this._selectedImage.data, offsetX, offsetY, 100, 100);
  }

  set _setStrokeStyle(color: string) {
    this._strokeStyle = color;
  }

  public setStrokeStyle(color: string) {
    this._setStrokeStyle = color;
  }

  set _setLineWidth(thick: number) {
    this._lineWidth = thick;
  }

  public setLineWidth(thick: number) {
    this._setLineWidth = thick;
  }

  set _setImageSrc(url: string) {
    this._imgSrc = url;
  }

  public setImageSrc(url: string) {
    this._setImageSrc = url;
  }

  set _readyToPaint(flag: boolean) {
    this._isReadyToPaint = flag;
    this.setEvents();
  }

  public readyToPaint(flag: boolean) {
    this._readyToPaint = flag;
  }

  public addImage() {
    return this._addImage();
  }

  get getAllImages() {
    return this._images;
  }
}

export default Drawer;
