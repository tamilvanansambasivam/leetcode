var isPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  r = s.split("").reverse().join("");

  if (s == r || s == "" || r == "") {
    return true;
  } else {
    return false;
  }
};
