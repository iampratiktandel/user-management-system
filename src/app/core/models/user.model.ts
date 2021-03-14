export class User {
    constructor(
        public permanent : boolean,
        public id : number,
        public name? : string,
        public email? : string,
        public mobile? : string,
        public city? : string,
        public gender? : string,
        public department? : string,
        public hireDate? : string
    ) {
        // this.id = id
        // this.name = '',
        // this.email = '',
        // this.mobile = '',
        // this.city = '',
        // this.gender = '',
        // this.department = '',
        // this.hireDate = '',
        // this.permanent = false
    }
}