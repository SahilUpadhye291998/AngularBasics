import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  private serverId: number = 666;
  private serverStatus: string = 'online';

  getServerId(): number {
    return this.serverId;
  }

  getServerStatus(): string {
    return this.serverStatus;
  }
}
