import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  @Input() name: string = "A"
  @Input() size: number = 40

  constructor() { }

  ngOnInit(): void {
  }
  
  nameLogo() {
    if (this.name != null && this.name !== '') {
      let arrS = this.name.split(" ")
      let text = ""
      for (let s of arrS) {
        text = text + s[0]
      }
      return text
    }
      
    return ""
  }
  
  getColor() {
    let sum = 0
    for (let i = 0; i < this.name.length; i++){
      sum = sum + this.name.charCodeAt(i)*(i+1) * 127
    }
    let h = (sum % 360).toString()
    //x,100,40
    return 'hsl('+h+', 100%, 60%)'
  }

  getColorFont() {
    let sum = 0
    for (let i = 0; i < this.name.length; i++){
      sum = sum + this.name.charCodeAt(i)*(i+1) * 127
    }
    let h = (sum % 360).toString()
    //x,100,40
    return 'hsl('+h+', 100%, 20%)'
  }

}
