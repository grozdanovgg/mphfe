// import Pool from '../Pools/Pool';

// export default class Token {

//     readonly name: string;
//     private _pools: Pool[] = [];

//     constructor(name: string) {
//         this.name = name;
//     }

//     get pools(): Pool[] {
//         return this._pools;
//     }

//     addPool(pool: Pool): void {
//         this._pools.push(pool);
//     }

//     removePool(poolName: string): void {
//         const selectedPool = this._pools.findIndex(pool => { return pool.name === poolName; });
//         if (selectedPool !== -1) {
//             this._pools.splice(selectedPool);
//         }
//     }
// }