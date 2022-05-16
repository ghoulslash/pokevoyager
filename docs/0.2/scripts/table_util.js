function sortTable() {
    const th = event.srcElement;
    const header_id = th.textContent;

    const getCellValue = (tr, idx) => {
        const elt = tr.querySelector('#' + header_id);
        return elt.getAttribute("data-sortkey") || elt.textContent;
    };

    const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
        v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

    const table = th.closest('table');
    const thead = table.querySelector('thead');
    const tbody = table.querySelector('tbody');
    Array.from(tbody.querySelectorAll('tr'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => tbody.appendChild(tr));
}
