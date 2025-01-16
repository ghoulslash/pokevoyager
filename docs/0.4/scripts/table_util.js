function changetab(evt, divname) {
    var i, tabcontent, tablinks

    /** hide other tabs */
    var alltabs
    alltabs = evt.currentTarget.parentNode;
    for (i = 0; i < alltabs.children.length; i++) {
        alltabs.children[i].className = alltabs.children[i].className.replace(" active", "");
        alltabs.children[i].style.background = "white";
        alltabs.children[i].style.color = "black";
    }
    for (i = 0; i < alltabs.children.length; i++) {
        var tabcontent = document.getElementById(alltabs.children[i].getAttribute("content-id"));
        tabcontent.style.display = "none";
    }

    /** highlight this tab */
    evt.currentTarget.style.background = "black";
    evt.currentTarget.style.color = "white";

    document.getElementById(divname).style.display = "block";
    evt.currentTarget.className += " active";
}

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

function species_list_filter(filter_function) {
    var table = document.getElementById("species");
    var tbody = table.getElementsByTagName("tbody");

    var tr = tbody[0].getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        if (filter_function(tr[i])) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}

function species_list_filter_test(tr) {
    var target = document.getElementById("species-filter").value.toUpperCase();
    var name = tr.getElementsByTagName("td")[2];
    if (name) {
        return (name.textContent.toUpperCase().indexOf(target) > -1);
    } else {
        return true;
    }
}
