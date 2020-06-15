import { AnimalService } from "./animal.service";

export class LionService extends AnimalService{
    name = 'Lion';
    food = 'Meat';

    constructor(){
        super();
    }
}