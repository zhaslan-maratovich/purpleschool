function checkBirthday(str) {
    const birthday = new Date(str);
    const now = new Date();
    const age = 14;
  
    if (birthday.setFullYear(birthday.getFullYear() + age) < now) {
        return true;
    }
    return false;
}
  
console.log(checkBirthday('2000-01-01'));
console.log(checkBirthday('2011-01-01'));