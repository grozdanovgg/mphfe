export default class Pool {

    name: string;
    lastBlock: number;
    lastBlockHTMLSelector: string;

    constructor(name: string) {
        this.name = name;
    }
}