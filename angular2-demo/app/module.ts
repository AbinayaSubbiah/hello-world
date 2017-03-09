import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {PersonComponent}  from './person.component';
import {MsgComponent}  from './msg.component';
@NgModule({
  imports:      [BrowserModule],
  declarations: [PersonComponent, MsgComponent],
  bootstrap:    [PersonComponent]
})
export class AppModule { }
  