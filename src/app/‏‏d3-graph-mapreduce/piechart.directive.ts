import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appPiechartMap]'
})

// tslint:disable-next-line: directive-class-suffix
export class PiechartDirectiveMap implements OnInit {

  @Input() data: any[];

  private margin = { top: 20, right: 20, bottom: 30, left: 10 };
  private width: number;
  private height: number;
  private radius: number;

  private arc: any;
  private labelArc: any;
  private pie: any;
  private color: any;
  private svg: any;

  constructor(private el: ElementRef) {
    this.width = 1000 - this.margin.left - this.margin.right;
    this.height = 650 - this.margin.top - this.margin.bottom;
    this.radius = Math.min(this.width, this.height) / 2;
  }


  ngOnInit(): void {
    this.initSvg();
    this.drawPie();
  }

  private initSvg() {

    this.color = d3Scale.scaleOrdinal()
      .range(['#daffd7','#feff77', '#f6afcc', '#b4f2f1', '#89b2d8']);
    this.arc = d3Shape.arc()
      .outerRadius(this.radius - 10)
      .innerRadius(0);
    this.labelArc = d3Shape.arc()
      .outerRadius(this.radius - 70)
      .innerRadius(this.radius - 70);
    this.pie = d3Shape.pie()
      .sort(null)
      .value((d: any) => d.value);
    this.svg = d3.select(this.el.nativeElement)
      .append('g')
      .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');
    this.el.nativeElement.style.height = '600';
    this.el.nativeElement.style.width = '960';
  }

  private drawPie() {
    const g = this.svg.selectAll('.arc')
      .data(this.pie(this.data))
      .enter().append('g')
      .attr('class', 'arc');
    g.append('path').attr('d', this.arc)
      .style('fill', (d: any) => this.color(d.data._id))
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.8);
    g.append('text').attr('transform', (d: any) => 'translate(' + this.labelArc.centroid(d) + ')')
      .attr('dy', '.35em')
      .text((d: any) => (d.data._id + ': ' + d.data.value));

  }


}
