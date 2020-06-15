import { Injectable } from "@angular/core";

@Injectable()
export class AnimalService {
    name = 'Animal';
    food = 'food';

    getName() {
        return this.name;
    }

    getFood() {
        return this.food;
    }
}