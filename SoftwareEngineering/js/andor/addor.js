var score=89;
var grade;

if(score<=100 && score>=91){ //in && both the conditions must be met
    grade = "A" //this is a simplified version instead of writing console very time and this works because of line 20
}
else if (score <=90 && score>=81){
    grade = "B"
}
else if (score<=80 && score>=71) {
    grade = "B-"
}
else if (score<=70 && score>=61) {
    grade = "C"
}
else { //in the else do not put any (blah) conditions. it will automatiically do it for you
    grade= " try harder next time";
}

    console.log(grade);//this is needed because otherwise the program will not work.