import { LogoutService } from './../../services/logout/logout.service';
import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  public opensidenav: boolean = false;

  private _transformer = (node: any, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      url: !node.children ? node.url : null,
    };
  };

  treeControl = new FlatTreeControl<any>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private logOutService: LogoutService, private router: Router) {
    this.dataSource.data = [
      {
        name: 'Principal',
        url: 'home',
      },
      {
        name: 'Perfilamiento',
        url: 'perfilamiento',
      },
    ];
  }

  hasChild = (_: number, node: any) => node.expandable;

  ngOnInit() {}

  logout() {
    this.logOutService.logout();
  }

  navegatePage(url: string) {
    this.router.navigate(['main/' + url]);
  }
}
