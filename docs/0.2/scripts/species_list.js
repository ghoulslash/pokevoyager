function changetab(evt, divname) {
    var i, tabcontent, tablinks

    /** hide other tabs */
    var alltabs
    alltabs = evt.currentTarget.parentNode;
    for (i = 0; i < alltabs.children.length; i++) {
        alltabs.children[i].className = alltabs.children[i].className.replace(" active", "");
    }
    for (i = 0; i < alltabs.children.length; i++) {
        var tabcontent = document.getElementById(alltabs.children[i].getAttribute("content-id"));
        tabcontent.style.display = "none";
    }

    document.getElementById(divname).style.display = "block";
    evt.currentTarget.className += " active";
}
