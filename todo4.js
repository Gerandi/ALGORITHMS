// Only Keep the Last Few
// Stan learned something today: that directly decrementing an array’s .length immediately shortens it by that amount. Given array arr and number X, remove all except the last X elements, and return arr (changed and shorter). Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.

function onlyKeepTheLastFew(arr, x) {
  arr.splice(0, arr.length - x);
  return arr;
}

console.log(onlyKeepTheLastFew([2, 4, 6, 8, 10], 3));

// Math Help
// Cartman doesn’t really like math; he needs help. You are given two numbers – coefficients M and B in the equation Y = MX + B. Build a function to return the X-intercept (his older cousin Fiaz wisely reminds him that X-intercept is the value of X where Y equals zero; Cartman just snorts in his general direction).

function mathHelp(m, b) {
  return -b / m;
}

console.log(mathHelp(2, 4));

// Poor Kenny
// Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 25 blizzards and 30 meteors (for 100 days total). If these probabilities continue, write whatHappensToday() to print a day’s outcome.

function whatReallyHappensToday() {
  var disasters = ['volcanos', 'tsunamis', 'earthquakes', 'blizzards', 'meteors'];
  var happened = [];
  for (var i = 0; i < disasters.length; i++) {
      if (Math.random() < 0.1) {
          happened.push(disasters[i]);
      }
  }
  if (happened.length === 0) {
      console.log("Nothing happened today.");
  } else {
      console.log(happened.join(', ') + ' happened today.');
  }
}

whatReallyHappensToday();

// What Really Happened?
// Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated to the chance of another. Change whatHappensToday() function to create whatReallyHappensToday(). In this new function test for each disaster independently, instead of assuming exactly one disaster will happen. In other words, with this new function, all five might occur today – or none. Maybe Kenny will survive!

function whatReallyHappensToday() {
  let disasters = ['volcanos', 'tsunamis', 'earthquakes', 'blizzards', 'meteors'];
  let result = [];
  for (let i = 0; i < disasters.length; i++) {
    let probability = Math.random();
    if (probability < 0.1) {
      result.push(disasters[i]);
    }
  }
  if (result.length === 0) {
    console.log("Kenny survived the day without any disaster");
  } else {
    console.log("Today's disaster(s): ", result.join(", "));
  }
}


// Soaring IQ
// Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, Bogdan entered with a modest IQ of 101. Let’s say that during a 14-week bootcamp, his IQ rose by .01 on the first day, then went up by an additional .02 on the second day, then up by .03 more on the third day, etc. all the way until increasing by .98 on his 98th day (the end of 14 full weeks). What is Bogdan’s final IQ?

function finalIQ(iq) {
  let days = 0;
  for (let i = 0.01; i <= 0.98; i += 0.01) {
    days++;
    iq += i;
  }
  return iq;
}
console.log(finalIQ(101));

// Letter Grade
// Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100? Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’. For example, given 88, you should log "Score: 88. Grade: B". Given the score 61, log the string "Score: 61. Grade: D".

function letterGrade(score) {
  let grade;
  if (score >= 90) {
    grade = 'A';
  } else if (score >= 80) {
    grade = 'B';
  } else if (score >= 70) {
    grade = 'C';
  } else if (score >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }
  console.log(`Score: ${score}. Grade: ${grade}`);
}

letterGrade(88); // Score: 88. Grade: B
letterGrade(61); // Score: 61. Grade: D

// More Accurate Grades
// For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores, and “+” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+). Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-" .

function letterGrade(score) {
  let grade;
  if (score >= 90) {
    grade = 'A';
  } else if (score >= 80) {
    grade = 'B';
  } else if (score >= 70) {
    grade = 'C';
  } else if (score >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }
  if (grade !== 'A' && grade !== 'F') {
    if (score % 10 > 7) {
      grade += '+';
    } else if (score % 10 < 3) {
      grade += '-';
    }
  }
  console.log(`Score: ${score}. Grade: ${grade}`);
}

letterGrade(88); // Score: 88. Grade: B+
letterGrade(61); // Score: 61. Grade: D-

