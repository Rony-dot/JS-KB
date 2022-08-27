// Accessors are only available when targeting ECMAScript 5 and higher.
// to use accessors => {get, set} we mus use the flag --target ES5
// tsc --target ES5 --noEmitOnError Customer.ts 

// we added here tsc --init
// it created a tsconfig.json file
// we added "noEmitOnError" : "true"
// now writing only "tsc" will compile all our ".ts" files 
// and generate correspondig ".js" files; 
// "node some.js" works same as before

export class Customer{
    constructor(private _firstName : string, private _lastName: string){
    }
    public get firstName() : string{
        return this._firstName;
    }
    public set firstName(value : string){
        this._firstName = value
    }
    public get lastName() : string{
        return this._lastName;
    }
    public set lastName(value : string){
        this._lastName = value
    }
}