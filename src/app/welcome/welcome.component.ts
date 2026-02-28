import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

    quotes: string[] = [
    "May peace find you today.",
    "You are stronger than you feel.",
    "Healing is happening within you.",
    "This moment will pass.",
    "You are deeply protected.",
    "Breathe. You are safe."
  ];

  randomQuote: string = '';


  ngOnInit(): void {
    this.generateQuote();
  }
  generateQuote() {
    const index = Math.floor(Math.random() * this.quotes.length);
    this.randomQuote = this.quotes[index];
  }

}
