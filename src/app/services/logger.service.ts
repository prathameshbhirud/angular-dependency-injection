import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService{
    constructor(){}

    log(message){
        console.log(message);
    }
}