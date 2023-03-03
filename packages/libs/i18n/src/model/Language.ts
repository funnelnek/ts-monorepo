import { i18n } from "../constants/i18n";
import { ILanguage } from "../contracts";


export class Language implements ILanguage {
    constructor(private lang: ILanguage) { 
    }

    get code(): i18n {
        return this.lang.code;
    }

    get name(): string {
        return this.lang.name;
    }    
}