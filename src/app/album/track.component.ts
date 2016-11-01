import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styles: [`
.glyphicon {
  font-size: 50px;
  margin-right: 30px;
  cursor: pointer;
}
.glyphicon:hover {
  color: #ffffff;
}
audio {
    background-color: #000;
}

`]
})
export class TrackComponent {

  @Input() track;
  @Input() id;
  isToggled = 'stop';
  @Input() activeId:number;
  @Output() onIdChange:EventEmitter<any> = new EventEmitter();


  playPreview(state?, id?){
    console.log(state);
    console.log(id);
    this.onIdChange.emit(id);
    this.isToggled = state

  }

  playStop(){
    this.isToggled = 'stop'
  }




}
