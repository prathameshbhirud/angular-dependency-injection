import { AnimalService } from "./animal.service";

export class CowService extends AnimalService{
    name = 'Cow';
    food = 'Grass';

    constructor(){
        super();
    }
}