import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigationtService {

  constructor(private router: Router) { }

  public navigateTo(url: string = 'index', param: any = 'new', query: string = ''): void {
    const targetUrl = (url !== 'index')? `/${url}/${param}`: '';

    this.router.navigate([targetUrl]);
  }
}
