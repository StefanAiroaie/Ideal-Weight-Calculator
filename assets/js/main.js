/*

In dieser Aufgabe geht es darum, einen Rechner für das Idealgewicht nach der folgenden Formel zu programmieren:
Formel für Menschen mit einem zierlichen und schmalen Körperbau:
[(Körpergröße in cm - 100) + (Alter/10)] x 0,9 x 0,9
Formel für Menschen mit einem eher breiten Körperbau:
[(Körpergröße in cm - 100) + (Alter/10)] x 0,9 x 1,1

*/


function calculate() {
    let height = document.getElementById("inputnumber").value
    let age = document.querySelector("#inputage").value
    let wide = document.querySelector("#wide").checked
    let result = document.querySelector("#result")
    let idealAgeWide = ((height - 100) + (age / 10)) * 0.9 * 1.1;
    let idealAgeNarrow = ((height - 100) + (age / 10)) * 0.9 * 0.9;

    console.log(narrow);
    console.log(wide);

    wide
        ? result.innerHTML = idealAgeWide + " kg"
        : result.innerHTML = idealAgeNarrow + " kg"
}


/*

        if (wide) {
            console.log(idealAgeWide);
        } else {
            console.log(idealAgeNarrow);
        }
*/

