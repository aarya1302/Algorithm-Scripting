function myReplace(str, before, after) {
  //creating RegExpression from argument
  let query = new RegExp(before, "i");

  //finding the index of the letter to be replaced in string
  let indexOfLetter = str.search(query);

  //if letter is capital
  return /[A-Z]/.test(str[indexOfLetter])
    ? // replace  before in str with 1st letter of after converted to uppercase concatinated with the rest of after
      str.replace(query, after[0].toUpperCase() + after.substr(1))
    : // replace  before in str with 1st letter of after converted to lowercase concatinated with the rest of after
      str.replace(query, after[0].toLowerCase() + after.substr(1));
}

console.log(myReplace("I think we should look up there", "up", "Down"));
