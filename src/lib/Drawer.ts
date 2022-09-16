type DrawerConstructorType = {
  width: number;
  height: number;
  backgroundColor?: string;
};

class Drawer {
  private _width = 0;
  private _height = 0;
  private _isPainting = false;
  private _canvas?: HTMLCanvasElement;
  private _ctx?: CanvasRenderingContext2D | null = null;
  private _strokeStyle = "black";
  private _lineWidth = 1;
  private _backgroundColor = "#fff";

  private handleMouseDown?: () => void;
  private handleMouseUp?: () => void;
  private handleMouseMove?: (event: MouseEvent) => void;
  private handleMouseLeave?: () => void;

  constructor(props: DrawerConstructorType) {
    this._width = props.width;
    this._height = props.height;
    this._backgroundColor = props.backgroundColor || "#fff";
    this.init();
  }

  private init() {
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
    this.handleMouseDown = this.startPainting.bind(this);
    this.handleMouseLeave = this.stopPainting.bind(this);
    this.handleMouseMove = this.drawing.bind(this);
    this.handleMouseUp = this.stopPainting.bind(this);

    if (this._canvas) {
      this.handleMouseDown && this._canvas.addEventListener("mousedown", this.handleMouseDown);
      this.handleMouseLeave && this._canvas.addEventListener("mouseleave", this.handleMouseLeave);
      this.handleMouseMove && this._canvas.addEventListener("mousemove", this.handleMouseMove);
      this.handleMouseUp && this._canvas.addEventListener("mouseup", this.handleMouseUp);
    }
  }

  private clearEvents() {
    if (this._canvas) {
      this.handleMouseDown && this._canvas.removeEventListener("mousedown", this.handleMouseDown);
      this.handleMouseLeave && this._canvas.removeEventListener("mouseleave", this.handleMouseLeave);
      this.handleMouseMove && this._canvas.removeEventListener("mousemove", this.handleMouseMove);
      this.handleMouseUp && this._canvas.removeEventListener("mouseup", this.handleMouseUp);
    }
  }

  set setStrokeStyle(color: string) {
    this._strokeStyle = color;
  }

  set setLineWidth(thick: number) {
    this._lineWidth = thick;
  }
}

export default Drawer;
