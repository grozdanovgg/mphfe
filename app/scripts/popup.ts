
import Pool from './Pools/Pool';
import * as $ from 'jquery';
import repositoryService from './Services/repositoryService';
import IPool from './Pools/IPool';

initTable();

// let addBlockBtn = document.getElementById('add-block-to-pool');
const table: HTMLTableElement | null = document.querySelector('table');
let addPoolBtn: HTMLElement | null = document.getElementById('add-pool');


if (table) {
    table.addEventListener('click', handleTableClick);
}

if (addPoolBtn) {
    addPoolBtn.onclick = async (element: MouseEvent) => {

        const name: string = <string>$('#pool-name').val();
        const lastBlockHTMLSelector = $('#pool-block-selector').val();
        const pool = new Pool(name);
        pool.lastBlockHTMLSelector = <string>lastBlockHTMLSelector;

        try {
            await repositoryService.addPool(pool);
            addPoolToTable(pool);
        } catch (error) {
            console.log(error);
        }

    };
}


function handleTableClick(event: MouseEvent) {
    console.log(event);
    if (event.target) {

        let target = <HTMLButtonElement>event.target;
        console.log(target.className);
        switch (target.className) {
            case 'remove-pool-btn':
                let targetPoolName = getPoolNameOnDeleteClick(target);
                repositoryService.removePool(targetPoolName);
                removePoolFromTable(target);
                break;

            default:
                break;
        }
    }
}

function getPoolNameOnDeleteClick(buttonEl: HTMLButtonElement): string {

    if (buttonEl.parentElement && buttonEl.parentElement.parentElement) {
        console.log(buttonEl.parentElement.parentElement.children[0].textContent);
        return <string>buttonEl.parentElement.parentElement.children[0].textContent;
    }

    return '';

}

function removePoolFromTable(target: HTMLButtonElement): void {
    if (target.className === 'remove-pool-btn') {
        if (target.parentElement && target.parentElement.parentElement) {
            target.parentElement.parentElement.remove();
        }

    }
}

function addPoolToTable(pool: Pool): void {
    if (table) {
        const row = table.insertRow();
        row.insertCell().textContent = pool.name;
        row.insertCell().innerHTML = `<input type="checkbox" name="pool-active">`;
        row.insertCell().innerHTML = `<input type="checkbox" name="pool-base">`;
        row.insertCell().innerHTML = `<button class="edit-pool-btn">Edit</button>`;
        row.insertCell().innerHTML = `<button class="remove-pool-btn">Remove</button>`;
    }
}

function initTable(): void {
    chrome.storage.sync.get(['pools'], (response) => {
        const pools: IPool[] = response.pools;
        if (table) {
            for (let pool of pools) {
                const row = table.insertRow();
                row.insertCell().textContent = pool.name;
                row.insertCell().innerHTML = `<input type="checkbox" name="pool-active">`;
                row.insertCell().innerHTML = `<input type="checkbox" name="pool-base">`;
                row.insertCell().innerHTML = `<button class="edit-pool-btn">Edit</button>`;
                row.insertCell().innerHTML = `<button class="remove-pool-btn">Remove</button>`;
            }
        }
    });
}