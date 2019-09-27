import { Component, OnInit } from '@angular/core';
import { NormalUser } from '../classes';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-normaluser',
  templateUrl: './normal-user.component.html',
  styleUrls: ['./normal-user.component.css']
})
export class NormalUserComponent implements OnInit {
  normalUsers: NormalUser[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.heroService.getUsers()
    .subscribe(normalUsers => this.normalUsers = normalUsers);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addUser({ name } as NormalUser)
      .subscribe(hero => {
        this.normalUsers.push(hero);
      });
  }

  delete(hero: NormalUser): void {
    this.normalUsers = this.normalUsers.filter(h => h !== hero);
    this.heroService.deleteNormalUser(hero).subscribe();
  }

}
