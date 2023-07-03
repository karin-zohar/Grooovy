export class Contact {

    constructor(
        public _id?: string,
        public name: string = '',
        public email: string = '',
        public phone: string = '',
        public gender: string = '',
        public imgUrl?: string) {

    }

    setId?(id: string = 'r101') {
        id = 'r' + (parseInt(id.slice(1)) + 1).toString
        this._id = id
    }
}

