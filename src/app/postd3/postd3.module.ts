import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Postd3Component } from './postd3.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';
import { MapReduceD3Module } from '../mapReduceD3/mapReduceD3.module';
import { mapReduceD3Component } from '../mapReduceD3/mapReduceD3.component';



@NgModule({
  declarations: [mapReduceD3Component],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MapReduceD3Module
  ]
})

export class Postd3Module { }
