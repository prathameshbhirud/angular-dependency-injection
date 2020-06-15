import { ErrorHandler, Injector, Injectable } from "@angular/core";
import { LoggerService } from "./services/logger.service";

@Injectable()
export class GlobalErrorHandlerService extends ErrorHandler{
    constructor(private injector: Injector) {
        super();
    }

    handleError(error: any){
        const loggerService = this.injector.get(LoggerService);
        loggerService.log('An error occurred:' + error.message);
    }
}