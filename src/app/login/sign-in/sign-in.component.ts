import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  message: string;
  oldMessage: string;
  messages: Array<string>;
  index: number;

  constructor() {
    this.messages = [
      "Cheers love, the cavalry's here!",
      "Imagination is the essence of discovery.",
      "True self is without form",
      "Together we are strong.",
      "Heroes never die.",
      "Time's up!",
      "You are only human.",
      "I'm an army of one.",
      "Let them eat cake",
      "Flow like water.",
      "It's the little things.",
      "I dreamt I was a butterfly.",
      "Strong as the mountain."
    ];
  }

  ngOnInit(): void {
    this.dontRepeat();
  }

  dontRepeat() {
    this.messages = this.shuffle(this.messages);
    this.index = Math.floor(Math.random() * this.messages.length); // Gera um numero aleatorio baseado no tamanho do array
    this.oldMessage = JSON.parse(localStorage.getItem('oldMessage')); // Pega a mensagem antiga do local storage

    // Verifica se tem uma mensagem antiga
    if (isNullOrUndefined(this.oldMessage)) {
      localStorage.setItem('oldMessage', JSON.stringify(this.messages[this.index])); // Caso não tenha mensagem antiga a atual se torna a antiga
    } else {
      // Caso tenha uma mensagem antiga verifica se ela é igual a atual
      if (this.oldMessage.toLowerCase() == this.messages[this.index].toLowerCase()) {
        let oldIndex = this.index; // Index auxiliar

        // Enquanto o indice atual for igual ao indice antigo irá gerar um aleatorio
        while (this.index == oldIndex) {
          this.index = Math.floor(Math.random() * this.messages.length);
        }
      }
    }
    this.message = this.messages[this.index];

    // Salva a mensagem atual para que se torne a mensagem anterior
    localStorage.setItem('oldMessage', JSON.stringify(this.message));
  }

  shuffle(array: Array<string>) {
    let currentIndex = array.length;
    let randomIndex: number;
    let temporaryValue: string;

    // Enquanto tiver item a ser embaralhado
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex); // Gera um numero aleatorio baseado no indice atual do array
      currentIndex -= 1; // Retira um do indice para não estourar o array ou sobreescrever um valor

      // Logica de ordenação aleatoria, trocando a posicao do item atual com o novo aleatorio
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}
