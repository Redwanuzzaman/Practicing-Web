$(function () {
    "use strict";
    $("#grid").jqGrid({
        colModel: [
            { name: "age", align: "center" },
            { name: "firstName", align: "center" },
            { name: "lastName", align: "center" }
        ],
        data: [
            { id: 10, age: 20, firstName: "Angela", lastName: "Merkel" },
            { id: 20, age: 18, firstName: "Vladimir", lastName: "Putin" },
            { id: 30, age: 22, firstName: "David", lastName: "Cameron" },
            { id: 40, age: 23, firstName: "Barack", lastName: "Obama" },
            { id: 50, age: 25, firstName: "François", lastName: "Hollande" }
        ],
        caption: "External JQGrid Table",
        rownumbers: true,
    });
});
