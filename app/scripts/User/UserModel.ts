import Token from '../Tokens/TokenModel';

export default class User {
    userName: string;
    email: string;
    private _tokens: Token[] = [];

    constructor(name: string, email: string) {
        this.userName = name;
        this.email = email;
    }

    get tokens(): Token[] {
        return this._tokens;
    }

    addToken(token: Token): void {
        const existingTokenIndex: number = this.tokens.findIndex(tokenEl => { return tokenEl.name === token.name; });
        if (existingTokenIndex === -1) {
            this._tokens.push(token);
        } else {
            throw Error(`Token ${token.name} is already added to your tokens`);
        }
    }

}