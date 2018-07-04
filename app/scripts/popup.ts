
import Pool from './Pools/Pool';
import * as $ from 'jquery';
import repositoryService from './Services/repositoryService';
import IPool from './Pools/IPool';

// let addBlockBtn = document.getElementById('add-block-to-pool');
let savePoolBtn = document.getElementById('save-pool');

// if (addBlockBtn) {
//     addBlockBtn.onclick = function (element) {
//         // let color = element.target.value;
//         console.log('clicked');
//         chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//             // chrome.tabs.executeScript(
//             //     tabs[0].id,
//             //     { code: `document.body.style.backgroundColor = '${color}';` });
//             console.log(tabs);
//             chrome.tabs.executeScript({
//                 file: 'scripts/contentscript.js'
//             });
//         });
//     };
// }

if (savePoolBtn) {

    savePoolBtn.onclick = async (element: MouseEvent) => {

        const name: string = <string>$('#pool-name').val();
        const lastBlockHTMLSelector = $('#pool-block-selector').val();
        const pool = new Pool(name);
        pool.lastBlockHTMLSelector = <string>lastBlockHTMLSelector;

        try {
            await repositoryService.addPool(pool);
            updateTableBody();
        } catch (error) {
            console.log(error);
        }

    };
}


function updateTableBody() {

    chrome.storage.sync.get(['pools'], (response) => {

        const pools = response.pools;
        let content = '';

        pools.forEach((pool: IPool) => {
            content += (`<tr>
            <td data-label="pool-name">${pool.name}</td>
            <td data-label="pool-active">
                <input type="checkbox" name="pool-active" id="">
            </td>
            <td data-label="pool-base">
                <input type="checkbox" name="pool-base" id="">
            </td>
        </tr>`);
        });

        $('#pools-table-body')
            .empty()
            .append(content);
    });
}