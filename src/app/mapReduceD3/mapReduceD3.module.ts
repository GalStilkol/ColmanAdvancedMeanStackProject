import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { mapReduceD3Component } from './mapReduceD3.component';

@NgModule({
  declarations: [mapReduceD3Component],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  exports:[mapReduceD3Component]
})

export class MapReduceD3Module { }
