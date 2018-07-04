// import * as $ from 'jquery';

// // console.log(lastBlock);


// $('body').mousemove(function (event) {
//     // console.log(event)
//     $('.mphce-hover').removeClass('mphce-hover');
//     $(event.target).addClass('mphce-hover');
// });

// $(document).click(function (event) {
//     event.preventDefault();

//     const path = fullPath(event.target);
//     const el = $(path);
//     const text = $($(path)[0]).text();

//     // chrome.storage.sync.set({
//     //     type: 'selected-element',
//     //     elementSelector: path,
//     //     elementText: +text
//     // }, function () {
//     //     console.log('Value is set to ' + path);
//     //     console.log(+text);
//     // });
//     // $(document).unbind('click');
//     // $('body').unbind('mousemove');
//     // $('.mphce-hover').removeClass('mphce-hover');

//     // chrome.runtime.sendMessage({
//     //     type: 'selected-element',
//     //     elementSelector: path,
//     //     elementText: +text
//     // }, function (response) {
//     //     if (response) {
//     //         $(document).unbind('click');
//     //         $('body').unbind('mousemove');
//     //         $('.mphce-hover').removeClass('mphce-hover');
//     //     }
//     // });
// });



// // function fullPath(el: any) {
// //     const names = [];
// //     while (el.parentNode) {
// //         if (el.id) {
// //             names.unshift('#' + el.id);
// //             break;
// //         } else {
// //             if (el === el.ownerDocument.documentElement) names.unshift(el.tagName);
// //             else {
// //                 for (let c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++) {
// //                     names.unshift(el.tagName + ':nth-child(' + c + ')');
// //                 }
// //             }
// //             el = el.parentNode;
// //         }
// //     }
// //     return names.join(' > ');
// // }

// function fullPath(el: any): string {
//     if (!(el instanceof Element))
//         return '';
//     const path = [];
//     while (el.nodeType === Node.ELEMENT_NODE) {
//         let selector = el.nodeName.toLowerCase();
//         if (el.id) {
//             selector += '#' + el.id;
//             path.unshift(selector);
//             break;
//         } else {
//             let sib = el, nth = 1;
//             while (sib = sib.previousElementSibling) {
//                 if (sib.nodeName.toLowerCase() == selector)
//                     nth++;
//             }
//             // tslint:disable-next-line:triple-equals
//             if (nth != 1)
//                 selector += ':nth-of-type(' + nth + ')';
//         }
//         path.unshift(selector);
//         el = el.parentNode;
//     }
//     return path.join(' > ');
// }

