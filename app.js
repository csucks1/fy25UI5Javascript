function numberOne(n) {
    let fnum = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
        'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let snum = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let test = "";

    let firstDigit = Math.floor(n / 100);
    let lastTwoDigit = Math.floor(n % 100);
    let secondDigit = Math.floor((n % 100) / 10);
    let lastDigit = Math.floor((lastTwoDigit % 10));

    if (n < 1 || n > 999) {
        console.log("invalid number");
    } else {
        if (n < 20) {
            test += fnum[n];
        } else if (n > 99) {
            test += fnum[firstDigit] + ' hundred ';
            if (lastTwoDigit < 20) {
                test += fnum[lastTwoDigit];
            } else {
                test += snum[secondDigit - 2];
                if (lastDigit > 0) {
                    test += ' ' + fnum[lastDigit];
                }
            }
        } else {
            test += snum[secondDigit - 2] + ' ' + fnum[lastDigit];
        }
        console.log(test);
    }
}

function numberTwo(n) {
    if (n > 0) {
        let i = 0;
        while (i < n) {
            let test = "";
            let j = 0;
            while (j < n) {
                if (i > j) {
                    test += " ";
                    j++;
                    continue;
                }
                test += "*";
                j++;
            }
            console.log(test);
            i++;
        }
    } else {
        console.log("must be greater than 0");
    }
}

function numberThree(n) {
    if (n > 0 && n % 1 == 0) {
        for (let i = 0; i < n; i++) {
            let test = "";
            for (let j = 0; j < n; j++) {
                if (i === j) {
                    test += "*";
                }
                else if (j + 1 === n - i) {
                    test += "*";
                }
                else {
                    test += " ";
                }
            }
            console.log(test);
        }
    } else {
        console.log("must be greater than 0 and an odd number");
    }
}

function trianglePerimeter(a, b, c) {
    return a + b + c;
}

function arrList(arr) {
    for (let i = 1; i < arr.length; i++) {
        console.log(i + " choice is " + arr[i]);
    }
}

function jsonList (record) {
    let test = record[0];

    for (let i = 1; i < record.length; i++) {
      if (record[i].SkillSet.length > test.SkillSet.length) {
        test = record[i];
      }
    }
    
    console.log("Name:", test.Name);
    console.log("Age:", test.Age);    
}

color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

let record = [{
    "Name":"Gibo",
    "Age":16,
    "SkillSet" : [{
      "Skill":"SAP UI5"
    },{
      "Skill":"SAP HANA"
    }]
  }, {
    "Name":"Patrick",
    "Age":22,
    "SkillSet" : [{
      "Skill":"SAP UI5"
    }, {
      "Skill":"SAP HANA"
    }, {
      "Skill":"SAP ABAP"
    }]
  }, {
    "Name":"MJ",
    "Age":24,
    "SkillSet" : [{
      "Skill":"SAP HANA"
    }]
}];

numberOne(999);
console.log(" ");
numberTwo(5);
console.log(" ");
numberThree(5);
console.log(" ");
console.log("The perimeter is: ", trianglePerimeter(1,2,3));
console.log(" ");
arrList(color);
console.log(" ");
jsonList(record);