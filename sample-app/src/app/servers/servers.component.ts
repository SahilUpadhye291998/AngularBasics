import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  isAvailable: boolean = false;
  private serverStatus: string = '';
  private _serverDescription: string = '';

  constructor() {
    setTimeout(() => {
      this.isAvailable = true;
    }, 2000);
  }

  public get currentStatus(): string {
    return this.serverStatus;
  }
  public set currentStatus(value: string) {
    this.serverStatus = value;
  }

  public get serverDescription(): string {
    return this._serverDescription;
  }
  public set serverDescription(value: string) {
    this._serverDescription = value;
  }

  public changeServerStatus() {
    console.log(this.serverDescription);
    this.serverStatus = `Changed Available now : ${this.serverDescription}`;
  }

  public onUpdateServerValue(event: Event): void {
    console.log(event);
    this._serverDescription = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {}
}
