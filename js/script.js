var gefilterdeStudenten = students;

function toonStudent(studenten){
    // document.getElementById("studentList").innerHTML = "";
    let table = document.getElementById("studentList");

    while(table.children.length > 1){
        table.removeChild(table.lastChild);
    }




    for(let student of studenten){
        let rij = document.createElement("tr");
        let stage = student.stage_goedgekeurd ? "X" : " ";
        // if (student.stage_goedgekeurd) { student.stage_goedgekeurd = "X"; } else { student.stage_goedgekeurd = " "; }
        rij.innerHTML = `<td>${student.naam}</td><td>${student.afstudeerrichting}</td>
        <td>${student.jaar}</td><td>${student.vaardigheden.join(", ")}</td>
        <td>${stage}</td>`;
        table.appendChild(rij);

    }

    let rij = document.createElement("tr");
    let aantalStudenten = studenten.length;
    let aantalStageStudenten = studenten.filter(student => student.stage_goedgekeurd).length;
    let aantalJaren = studenten.reduce((som, student) => som + student.jaar, 0);

    rij.innerHTML = `<td>aantal studenten: ${aantalStudenten}</td>
    <td colspan="2">aantal jaren: ${aantalJaren}</td>
    <td colspan="2">aantal stage studenten: ${aantalStageStudenten}</td>`;
    rij.style.backgroundColor = "lightgray";
    table.appendChild(rij);
}

function filterStudenten(){
    gefilterdeStudenten = students.filter((student) => {
        let studierichting = document.getElementById("richting").value;
        let wel_stage = document.getElementById("wel_stage").checked;
        let geen_Stage = document.getElementById("geen_stage").checked;
        let naam = document.getElementById("naam").value.toLowerCase();
        let studieFilter = false;
        let stageFilter = false;
        let naamFilter = false;
        if (studierichting == "" || student.afstudeerrichting == studierichting){
            studieFilter = true;
        }
        if (wel_stage && student.stage_goedgekeurd || geen_Stage && !student.stage_goedgekeurd){
            stageFilter = true;
        }
        if (naam === "" || student.naam.toLowerCase().includes(naam)){
            naamFilter = true;
        }
        return studieFilter && stageFilter && naamFilter;
    });
    toonStudent(gefilterdeStudenten);
    let sortHeader = document.getElementsByClassName("sort");
    for (let Header of sortHeader){
        Header.classList.remove("asc");
    }
}


toonStudent(students);
document.getElementById("richting").addEventListener("change", filterStudenten);
document.getElementById("wel_stage").addEventListener("change", filterStudenten);
document.getElementById("geen_stage").addEventListener("change", filterStudenten);
document.getElementById("naam").addEventListener("input", filterStudenten);
document.getElementById("sort_naam").addEventListener("click", function(){
    gefilterdeStudenten.sort((a, b) => a.naam.localeCompare(b.naam));
    toonStudent(gefilterdeStudenten);
    this.classList.toggle("asc");
});
document.getElementById("sort_richting").addEventListener("click", function(){
    gefilterdeStudenten.sort((a, b) => a.afstudeerrichting.localeCompare(b.afstudeerrichting));
    toonStudent(gefilterdeStudenten);
    this.classList.toggle("asc");
});
document.getElementById("sort_jaar").addEventListener("click", function(){
    gefilterdeStudenten.sort((a, b) => b.jaar - a.jaar);
    toonStudent(gefilterdeStudenten);
    this.classList.toggle("asc");
});

document.getElementById("sort_stage").addEventListener("click", function(){
    gefilterdeStudenten.sort((a, b) => b.stage_goedgekeurd - a.stage_goedgekeurd);
    toonStudent(gefilterdeStudenten);
    this.classList.toggle("asc");
});





