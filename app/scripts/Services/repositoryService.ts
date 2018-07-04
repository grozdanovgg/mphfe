import IPool from './../Pools/IPool';
import Pool from '../Pools/Pool';

// function addToken(token: Token) {

//     chrome.storage.sync.get(['user'], function (result) {
//         console.log('Value currently is ' + result.user);

//         const user = new User(result.user.name, result.user.email);
//         user.addToken(token);

//         chrome.storage.sync.set({ user: user }, function () {
//             console.log('Value is set to ' + user);
//         });
//     });
// }

// function addPool(token: Token, pool: Pool) {

//     chrome.storage.sync.get(['user'], function (result) {
//         console.log('Value currently is ' + result.user);

//         const user = new User(result.user.name, result.user.email);
//         user.addToken(token);
//         user.tokens[0].addPool(pool);

//         chrome.storage.sync.set({ user: user }, function () {
//             console.log('Value is set to ' + user);
//         });
//     });
// }


async function addPool(pool: Pool): Promise<Pool | void> {
    chrome.storage.sync.get(['pools'], (response: { pools: IPool[] }) => {
        if (!response.pools) {
            response = { pools: [] };
        }
        const duplicatePool = response.pools.findIndex(
            (existingPool) => {
                return existingPool.name === pool.name;
            }
        );

        if (duplicatePool === -1) {
            response.pools.push(pool);
            chrome.storage.sync.set({ pools: response.pools }, () => {
                console.log('Value is set to: ');
                console.log(pool);
            });
        } else {
            throw Error('A pool with this name is already added.');
        }
    });
}



const repositoryService = {
    // addToken,
    addPool
};

export default repositoryService;