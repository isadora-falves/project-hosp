import { Component } from '@angular/core';
export class NgxQrCode {
  text: string | undefined;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'client';
}

/* Backlog: 
Criar qrCode ao clicar imprimir
Criar pdf
Criar pesquisa
Criar paginação
Fazer os botões do list funcionar (excluir, editar, imprimir, visualizar)
Colocar em produção
Criar parte de criar novo paciente
*/ 