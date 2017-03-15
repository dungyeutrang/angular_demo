import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Router} from "@angular/router";

@Component({
    selector: 'my-app',
    templateUrl: `./../register.html`,
})

export class HeroComponent implements OnInit {

    title = 'Tour of Heroes';
    email = '';
    errorPassword = false;
    heroes: Hero[];
    selectedHero: Hero;

    constructor(  private router: Router,private heroService: HeroService) {
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
    /**
     * validate form
     */
    validateForm() {

    }
}