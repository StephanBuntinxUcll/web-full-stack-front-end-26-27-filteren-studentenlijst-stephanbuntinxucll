const students = [
  {
    "id": 1,
    "naam": "Thijs de Vries",
    "afstudeerrichting": "Elektronica",
    "jaar": 3,
    "gemiddeld_percentage": 78,
    "vaardigheden": ["C++", "VHDL", "Arduino", "PCB Design"],
    "stage_goedgekeurd": true
  },
  {
    "id": 2,
    "naam": "Amira Alami",
    "afstudeerrichting": "ICT",
    "jaar": 3,
    "gemiddeld_percentage": 85,
    "vaardigheden": ["Python", "Java", "Docker", "Linux"],
    "stage_goedgekeurd": true
  },
  {
    "id": 3,
    "naam": "Liam Peeters",
    "afstudeerrichting": "Elektronica",
    "jaar": 2,
    "gemiddeld_percentage": 64,
    "vaardigheden": ["C", "Raspberry Pi", "ESP32", "Solderen"],
    "stage_goedgekeurd": false
  },
  {
    "id": 4,
    "naam": "Emma Willems",
    "afstudeerrichting": "ICT",
    "jaar": 3,
    "gemiddeld_percentage": 91,
    "vaardigheden": ["JavaScript", "React", "Node.js", "SQL"],
    "stage_goedgekeurd": true
  },
  {
    "id": 5,
    "naam": "Sven Janssens",
    "afstudeerrichting": "Elektronica",
    "jaar": 2,
    "gemiddeld_percentage": 72,
    "vaardigheden": ["C", "Assembly", "FPGA", "Oscilloscoop"],
    "stage_goedgekeurd": false
  },
  {
    "id": 6,
    "naam": "Yuki Tanaka",
    "afstudeerrichting": "ICT",
    "jaar": 3,
    "gemiddeld_percentage": 80,
    "vaardigheden": ["Python", "C++", "AWS Cloud", "Linux"],
    "stage_goedgekeurd": true
  },
  {
    "id": 7,
    "naam": "Noah Maes",
    "afstudeerrichting": "ICT",
    "jaar": 1,
    "gemiddeld_percentage": 69,
    "vaardigheden": ["Python", "HTML/CSS", "Git"],
    "stage_goedgekeurd": false
  },
  {
    "id": 8,
    "naam": "Elena Petrova",
    "afstudeerrichting": "Elektronica",
    "jaar": 3,
    "gemiddeld_percentage": 87,
    "vaardigheden": ["C++", "ARM Cortex", "RTOS", "Altium Designer"],
    "stage_goedgekeurd": true
  },
  {
    "id": 9,
    "naam": "Lucas Dumont",
    "afstudeerrichting": "ICT",
    "jaar": 3,
    "gemiddeld_percentage": 75,
    "vaardigheden": ["JavaScript", "Node.js", "MongoDB", "REST APIs"],
    "stage_goedgekeurd": true
  },
  {
    "id": 10,
    "naam": "Sophie Hermans",
    "afstudeerrichting": "ICT",
    "jaar": 2,
    "gemiddeld_percentage": 58,
    "vaardigheden": ["Java", "SQL", "Git", "C#"],
    "stage_goedgekeurd": false
  },
  {
    "id": 11,
    "naam": "Daan Bakker",
    "afstudeerrichting": "Elektronica",
    "jaar": 1,
    "gemiddeld_percentage": 62,
    "vaardigheden": ["Arduino", "Multisim", "Basis Elektronica"],
    "stage_goedgekeurd": false
  },
  {
    "id": 12,
    "naam": "Lina El Amrani",
    "afstudeerrichting": "ICT",
    "jaar": 3,
    "gemiddeld_percentage": 93,
    "vaardigheden": ["Python", "Machine Learning", "Docker", "Kubernetes"],
    "stage_goedgekeurd": true
  },
  {
    "id": 13,
    "naam": "Milan Claes",
    "afstudeerrichting": "Elektronica",
    "jaar": 3,
    "gemiddeld_percentage": 70,
    "vaardigheden": ["VHDL", "FPGA", "Microcontrollers", "C++"],
    "stage_goedgekeurd": true
  },
  {
    "id": 14,
    "naam": "Anouk Vermeulen",
    "afstudeerrichting": "ICT",
    "jaar": 2,
    "gemiddeld_percentage": 76,
    "vaardigheden": ["PHP", "Laravel", "SQL", "Bootstrap"],
    "stage_goedgekeurd": false
  },
  {
    "id": 15,
    "naam": "Bram Winters",
    "afstudeerrichting": "Elektronica",
    "jaar": 2,
    "gemiddeld_percentage": 81,
    "vaardigheden": ["PCB Design", "KiCad", "Embedded C", "LabVIEW"],
    "stage_goedgekeurd": true
  },
  {
    "id": 16,
    "naam": "Zainab Diallo",
    "afstudeerrichting": "ICT",
    "jaar": 3,
    "gemiddeld_percentage": 88,
    "vaardigheden": ["Cybersecurity", "Wireshark", "Linux", "Network Protocols"],
    "stage_goedgekeurd": true
  },
  {
    "id": 17,
    "naam": "Arthur Dubois",
    "afstudeerrichting": "Elektronica",
    "jaar": 3,
    "gemiddeld_percentage": 66,
    "vaardigheden": ["PLC Programming", "Siemens TIA Portal", "Solderen"],
    "stage_goedgekeurd": false
  },
  {
    "id": 18,
    "naam": "Lisa Smits",
    "afstudeerrichting": "ICT",
    "jaar": 1,
    "gemiddeld_percentage": 71,
    "vaardigheden": ["Java", "HTML/CSS", "Git Basics"],
    "stage_goedgekeurd": false
  },
  {
    "id": 19,
    "naam": "Finn Goossens",
    "afstudeerrichting": "Elektronica",
    "jaar": 3,
    "gemiddeld_percentage": 74,
    "vaardigheden": ["ARM Cortex", "RTOS", "C", "I2C/SPI"],
    "stage_goedgekeurd": true
  },
  {
    "id": 20,
    "naam": "Chloe Mertens",
    "afstudeerrichting": "ICT",
    "jaar": 2,
    "gemiddeld_percentage": 63,
    "vaardigheden": ["C#", ".NET", "SQL Server", "Git"],
    "stage_goedgekeurd": false
  }
]

// const table = document.getElementById("studentList")
// const tbody = document.createElement("tbody");
// table.appendChild(tbody);

// const clearTbody = () => {
//   tbody.replaceChildren();
// }

// const createTD = (text) => {

//   const td = document.createElement("td");
//   td.textContent = text;
//   return td;
// }


// const toonStudents = (students) => {

//   clearTbody();
//   students.forEach(student => {
//     const tr = document.createElement("tr");
//     const tdNaam = createTD(student.naam);
//     tr.appendChild(tdNaam);
//     const tdAfstudeerrichting = createTD(student.afstudeerrichting);
//     tr.appendChild(tdAfstudeerrichting);
//     const tdJaar = createTD(student.jaar);
//     tr.appendChild(tdJaar);
//     const tdVaardigheden = createTD(student.vaardigheden.join(", "));
//     tr.appendChild(tdVaardigheden);
//     const tdstage = createTD(student.stage_goedgekeurd ? "X" : " ");
//     tr.appendChild(tdstage);
//     tbody.appendChild(tr);
//   });

//   const totaalRij = document.createElement("tr");
//   totaalRij.style.backgroundColor = "lightgray";

//   const totaalCell = createTD(`Totaal: ${students.length}`);
//   const stageCell = createTD(
//     `Met stage: ${students.filter(student => student.stage_goedgekeurd).length}`
//   );
//   stageCell.colSpan = 2;
//   const jarenCell = createTD(
//     `Som jaren: ${students.reduce((som, student) => som + student.jaar, 0)}`
//   );
//   jarenCell.colSpan = 2;

//   totaalRij.appendChild(totaalCell);
//   totaalRij.appendChild(stageCell);
//   totaalRij.appendChild(jarenCell);
//   tbody.appendChild(totaalRij);
// };

// const filterRichting = document.getElementById("richting");
// const filterWelStage = document.getElementById("wel_stage");
// const filterGeenStage = document.getElementById("geen_stage");
// const filterNaam = document.getElementById("naam");

// const filterStudenten = (students) => {
//   const gekozenRichting = filterRichting.value;
//   const ingevoerdeNaam = filterNaam.value.toLowerCase();

//   return students.filter(student => {
//     const richtingKomtOvereen = gekozenRichting === ""
//       || student.afstudeerrichting === gekozenRichting;
//     const stageKomtOvereen = (filterWelStage.checked && student.stage_goedgekeurd)
//       || (filterGeenStage.checked && !student.stage_goedgekeurd);
//     const naamKomtOvereen = ingevoerdeNaam === ""
//       || student.naam.toLowerCase().includes(ingevoerdeNaam);

//     return richtingKomtOvereen && stageKomtOvereen && naamKomtOvereen;
//   });
// };

// const sorteerStudenten = (students, sorteerOp) => {
//   const gesorteerdeStudenten = [...students];

//   gesorteerdeStudenten.sort((studentA, studentB) => {
//     if (sorteerOp === "naam") {
//       return studentA.naam.localeCompare(studentB.naam);
//     }
//     if (sorteerOp === "richting") {
//       return studentA.afstudeerrichting.localeCompare(studentB.afstudeerrichting);
//     }
//     if (sorteerOp === "jaar") {
//       return studentB.jaar - studentA.jaar;
//     }
//     return Number(studentB.stage_goedgekeurd) - Number(studentA.stage_goedgekeurd);
//   });

//   return gesorteerdeStudenten;
// };

// const vernieuwStudentenlijst = () => {
//   document.querySelectorAll("th.sort").forEach(th => th.classList.remove("asc"));
//   toonStudents(filterStudenten(students));
// };

// filterRichting.addEventListener("change", vernieuwStudentenlijst);
// filterWelStage.addEventListener("change", vernieuwStudentenlijst);
// filterGeenStage.addEventListener("change", vernieuwStudentenlijst);
// filterNaam.addEventListener("input", vernieuwStudentenlijst);

// document.querySelectorAll("th.sort").forEach(th => {
//   th.addEventListener("click", () => {
//     document.querySelectorAll("th.sort").forEach(sortTh => sortTh.classList.remove("asc"));
//     th.classList.add("asc");
//     toonStudents(sorteerStudenten(filterStudenten(students), th.id.replace("sort_", "")));
//   });
// });

// vernieuwStudentenlijst();
