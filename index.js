const Valutidate = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const psw = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const check = document.getElementById("checkbox").checked;
    var Entries;
    if (localStorage.getItem('user-entries') === null)
      Entries = [];
    else
      Entries = JSON.parse(localStorage.getItem('user-entries'))
    Entries.unshift({
      name: name,
      email: email,
      psw: psw,
      dob: dob,
      check: check
    })
    localStorage.setItem('user-entries', JSON.stringify(Entries));
    visible_data();
  }
  const visible_data = () => {
    var Entries;
    if (localStorage.getItem('user-entries') === null)
      Entries = [];
    else
      Entries = JSON.parse(localStorage.getItem('user-entries'))

    var html = "";

    Entries.forEach((element, intex) => {
      html += "<tr>";
      html += "<td>" + element.name + "</td>";
      html += "<td>" + element.email + "</td>";
      html += "<td>" + element.psw + "</td>";
      html += "<td>" + element.dob + "</td>";
      html += "<td>" + element.check + "</td>";
      html += "</tr>";
    });
    document.querySelector("#regTable tbody").innerHTML = html;

  }
  document.onload = visible_data();
