import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  constructor(private route:Router){}
logout()
{
sessionStorage.clear();
this.route.navigate(['/login'])
}
}
