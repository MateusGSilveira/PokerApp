import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titulo:string = 'Teste';
  constructor(private router:Router) {

   }

  teste()
  {
   this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
