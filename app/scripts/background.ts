import Token from './Tokens/TokenModel';
import Pool from './Pools/PoolModel';
import User from './User/UserModel';
import * as $ from 'jquery';

// chrome.runtime.onInstalled.addListener(function () {
//     chrome.storage.sync.set({ color: '#3aa757' }, function () {
//         console.log('The color is green.');
//     });
//     chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
//         chrome.declarativeContent.onPageChanged.addRules([{
//             conditions: [new chrome.declarativeContent.PageStateMatcher({
//                 pageUrl: { hostEquals: 'developer.chrome.com' },
//             })
//             ],
//             actions: [new chrome.declarativeContent.ShowPageAction()]
//         }]);
//     });
// });

const user = new User('pesh', 'pesho@peshonpmv.com');
// MOCK DATA START
// TODO get data from DataBase.
user.addToken(new Token('ravencoin'));
user.addToken(new Token('ether'));

const pools: Pool[] = [new Pool('omegapool'), new Pool('hash4life')];
user.tokens[0].addPool(pools[0]);
user.tokens[0].addPool(pools[1]);
// MOCK DATA END


chrome.storage.sync.set({ user: user }, function () {
  console.log('Value is set to ' + user);
  console.log(user);
});

console.log('=================================================');

chrome.storage.sync.get(['user'], function (response: { user: User }) {
  const user = $.extend(User, response.user);
  console.log(user);
  console.log('Value currently is ' + user.userName);
});

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(request);
    console.log(sender);
    console.log(sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension');
    console.log('Selected element:' + request.elementText);
    console.log('Element selector:' + request.elementSelector);

    if (request.type === 'selected-element' && !isNaN(request.elementText)) {
      sendResponse(true);
    }
  });