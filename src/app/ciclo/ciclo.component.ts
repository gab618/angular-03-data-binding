import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css'],
})
export class CicloComponent
  implements
    OnInit,
    OnChanges,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    DoCheck {
  @Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor');
  }
  ngOnChanges() {
    this.log('ngOnChanges');
  }
  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }
  ngDoCheck(): void {
    this.log('ngDoCheck');
  }

  private log(hook: string) {
    console.log(hook);
  }
}
