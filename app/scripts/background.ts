import IPool from './Pools/IPool';

chrome.storage.sync.get(['pools'], (response: { pools: IPool }) => {
    console.log(response);
    console.log(response.pools);
});













// import Token from './Tokens/Token';
// import Pool from './Pools/Pool';
// import User from './User/User';
// import * as $ from 'jquery';
// import repositoryService from './Services/repositoryService';

// // chrome.runtime.onInstalled.addListener(function () {
// //     chrome.storage.sync.set({ color: '#3aa757' }, function () {
// //         console.log('The color is green.');
// //     });
// //     chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
// //         chrome.declarativeContent.onPageChanged.addRules([{
// //             conditions: [new chrome.declarativeContent.PageStateMatcher({
// //                 pageUrl: { hostEquals: 'developer.chrome.com' },
// //             })
// //             ],
// //             actions: [new chrome.declarativeContent.ShowPageAction()]
// //         }]);
// //     });
// // });

// // const user = new User('pesh', 'pesho@peshonpmv.com');
// // MOCK DATA START
// // TODO get data from DataBase.
// // user.addToken(new Token('ravencoin'));
// // user.addToken(new Token('ether'));

// // const pools: Pool[] = [new Pool('omegapool'), new Pool('hash4life')];
// // user.tokens[0].addPool(pools[0]);
// // user.tokens[0].addPool(pools[1]);
// // MOCK DATA END


// // chrome.storage.sync.set({ user: user }, function () {
// //   console.log('Value is set to ' + user);
// //   console.log(user);
// // });

// // console.log('=================================================');

// // chrome.storage.sync.get(['user'], function (response: { user: User }) {
// //   console.log(response);
// //   const user = $.extend(User, response.user);
// //   console.log(user);
// //   console.log('Value currently is ' + user.userName);
// //   console.log('tokens currently is ' + user.tokens);
// // });

// chrome.runtime.onMessage.addListener(
//   function (request, sender, sendResponse) {
//     console.log(request);
//     console.log(sender);
//     console.log(sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension');
//     console.log(request.elementText);
//     console.log('Element selector:' + request.elementSelector);

//     if (request.type === 'selected-element' && request.elementText && !isNaN(request.elementText)) {
//       sendResponse(true);

//       // chrome.storage.sync.set({ user: user }, function () {
//       //   console.log('Value is set to ' + user);
//       //   console.log(user);
//       // });

//       // const token = new Token('ravencoin');
//       // const pool = new Pool('omegapool');
//       // pool.lastBlockHTMLSelector = request.elementSelector;

//       // repositoryService.addPool(pool);
//     }
//   });