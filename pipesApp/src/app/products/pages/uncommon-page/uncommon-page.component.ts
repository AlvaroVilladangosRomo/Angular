import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

    //i18n Select

    public name: String = "Alvaro";
    public gender: 'male'| 'female' = 'male';
    public invitationMap = {
      'male': 'invitarlo',
      'female': 'invitarla'
    }

    changeClient() :void {
      this.name = 'Melissa';
      this.gender = 'female';
    }

    // KeyValue Pipe
    public person = {
      name: 'Fernando',
      age: 36,
      address: 'Ottawa, Canada',
    }

    // i18nPlural

    public clients: string [] = ['Maria','Pedro','Fernando','Hernando','Eduardo'];

    public clientsMap = {
      '=0': 'no tenemos ningun cliente esperando.',
      '=1': 'tenemos 1cliente esperando.',
      'other': 'tenemos #  clientes esperando.',
    }

    deleteClient(): void {
      this.clients.shift();
    }

      // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value ) ),
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.' );
      console.log( 'Tenemos data en la promesa.' );
      this.person.name = 'Otro nombre'
    }, 3500);
  })


}
