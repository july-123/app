import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-uno',
  templateUrl: './pagina-uno.page.html',
  styleUrls: ['./pagina-uno.page.scss'],
})
export class PaginaUnoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  ValidarCredenciales(){
    console.log("Boton presionado");
    this.router.navigate(["pagina-dos"]);
  }

}
