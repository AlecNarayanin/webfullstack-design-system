import { Component, ElementRef, Input , SimpleChanges, ViewChild , AfterViewInit , OnChanges , OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import DataChart from './chart.interface';

@Component({
  selector: 'lib-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit , OnChanges , OnDestroy {

  @ViewChild('myCanvas', {static: false}) canvas: ElementRef | undefined;
  @Input() minX: number = 0;
  @Input() minY: number = 0;
  @Input() maxX: number = 140;
  @Input() maxY: number = 100;
  @Input() unitsPerTickX: number = 10;
  @Input() unitsPerTickY: number =10;
  @Input() data : DataChart[] =[];
  @Input() canvasHeigth : number = 450;
  @Input() canvasWidth : number = 550;

  private context!: CanvasRenderingContext2D;

  scaleX = 0;
  scaleY = 0;
  pointRadius = 5;
  x= 0;
  y = 0;
  height = 0;

  onChanges = new Subject<SimpleChanges>();

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.onChanges.next(changes);
  }

  ngAfterViewInit(): void {
    this.create();
    this.onChanges.subscribe((data:SimpleChanges)=>{
        this.update();
    });
  }
  ngOnDestroy(){
    this.onChanges.complete();
  }

  private LineChart(con :any) {
    // user defined properties
    const minX = con.minX;
    const minY = con.minY;
    const maxX = con.maxX;
    const maxY = con.maxY;
    const unitsPerTickX = con.unitsPerTickX;
    const unitsPerTickY = con.unitsPerTickY;

    // constants
    const padding = 10;
    const tickSize = 10;
    const axisColor = "#555";
    const font = "13pt Helvetica ";

    const fontHeight = 12;

    // relationships
    this.context = this.canvas?.nativeElement.getContext("2d");
    const canvas = this.canvas as ElementRef;
    const rangeX = maxX - minY;
    const rangeY = maxY - minY;
    const numXTicks = Math.round(rangeX / unitsPerTickX);
    const numYTicks = Math.round(rangeY / unitsPerTickY);
    this.x = this.getLongestValueWidth({numYTicks, unitsPerTickY , maxY , font}) + padding * 2;
    this.y = padding * 2;
    const width = canvas.nativeElement.width - this.x - padding * 2;
    this.height = canvas.nativeElement.height - this.y - padding - fontHeight;
    this.scaleX = width / rangeX;
    this.scaleY = this.height / rangeY;

    // draw x y axis and tick marks
    this.drawXAxis( {   axisColor , width , numXTicks , tickSize, font , maxX , padding});
    this.drawYAxis( { axisColor , numYTicks ,tickSize, font , maxY , padding});
}

  private getLongestValueWidth( data :any) {
    this.context.font = data.font;
      let longestValueWidth = 0;
      for (let n = 0; n <= data.numYTicks; n++) {
          const value = data.maxY - (n * data.unitsPerTickY);
          longestValueWidth = Math.max(longestValueWidth, this.context.measureText(value.toString()).width);
      }
      return longestValueWidth;
  };

  private drawXAxis( data :any ) {
      const height = this.height ? this.height : 0;
      this.context.save();
      this.context.beginPath();
      this.context.moveTo(this.x, this.y + height);
      this.context.lineTo(this.x + data.width, this.y + height);
      this.context.strokeStyle = data.axisColor;
      this.context.lineWidth = 2;
      this.context.stroke();

      // draw tick marks
      for (let n = 0; n < data.numXTicks; n++) {
        this.context.beginPath();
        this.context.moveTo((n + 1) * data.width / data.numXTicks + this.x, this.y +height);
        this.context.lineTo((n + 1) * data.width / data.numXTicks + this.x, this.y + height - data.tickSize);
        this.context.stroke();
      }

      // draw labels
      this.context.font = data.font;
      this.context.fillStyle = "black";
      this.context.textAlign = "center";
      this.context.textBaseline = "middle";

      for (let n = 0; n < data.numXTicks; n++) {
          const label = Math.round((n + 1) * data.maxX / data.numXTicks);
          this.context.save();
          this.context.translate((n + 1) * data.width / data.numXTicks + this.x, this.y + height + data.padding);
          this.context.fillText(label.toString(), 0, 0);
          this.context.restore();
      }
      this.context.restore();
  };

  private drawYAxis ( data :any ) {
      const height = this.height ? this.height : 0;
      this.context.save();
      this.context.save();
      this.context.beginPath();
      this.context.moveTo(this.x, this.y);
      this.context.lineTo(this.x, this.y + height);
      this.context.strokeStyle = data.axisColor;
      this.context.lineWidth = 2;
      this.context.stroke();
      this.context.restore();

      // draw tick marks
      for (let n = 0; n < data.numYTicks; n++) {
          this.context.beginPath();
          this.context.moveTo(this.x, n * height / data.numYTicks + this.y);
          this.context.lineTo(this.x + data.tickSize, n * height / data.numYTicks + this.y);
          this.context.stroke();
      }

      // draw values
      this.context.font = data.font;
      this.context.fillStyle = "black";
      this.context.textAlign = "right";
      this.context.textBaseline = "middle";

      for (let n = 0; n < data.numYTicks; n++) {
          const value = Math.round(data.maxY - n * data.maxY / data.numYTicks);
          this.context.save();
          this.context.translate(this.x - data.padding, n * height / data.numYTicks + this.y);
          this.context.fillText(value.toString(), 0, 0);
          this.context.restore();
      }
      this.context.restore();
  };

  private drawLine(data : any , color : string , width : number) {
      this.context.save();
      this.transformContext();
      this.context.lineWidth = width;
      this.context.strokeStyle = color;
      this.context.fillStyle = color;
      this.context.beginPath();
      this.context.moveTo(data[0].x * this.scaleX, data[0].y * this.scaleY);

      for (let n = 0; n < data.length; n++) {
          const point = data[n];

          // draw segment
          this.context.lineTo(point.x * this.scaleX, point.y * this.scaleY);
          this.context.stroke();
          this.context.closePath();
          this.context.beginPath();
          this.context.arc(point.x * this.scaleX, point.y * this.scaleY, this.pointRadius, 0, 2 * Math.PI, false);
          this.context.fill();
          this.context.closePath();

          // position for next segment
          this.context.beginPath();
          this.context.moveTo(point.x * this.scaleX, point.y * this.scaleY);
      }
      this.context.restore();
  };

  transformContext() {
    const height = this.height ? this.height : 0;
    this.context.translate(this.x, this.y + height);
    this.context.scale(1, -1);
  };

  create(){
    this.LineChart({
      minX: this.minX,
      minY: this.minY,
      maxX: this.maxX,
      maxY: this.maxY,
      unitsPerTickX: this.unitsPerTickX,
      unitsPerTickY: this.unitsPerTickY
   });
   for(let i = 0; i < this.data.length; i++){
    this.drawLine(this.data[i].data, this.data[i].color, 3);
   }
  }
  clear() {
    this.context.clearRect(0, 0, this.canvas?.nativeElement.width, this.canvas?.nativeElement.height);
  }

  update(){
    this.clear();
    this.create();
  }


}
