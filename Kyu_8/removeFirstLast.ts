//Remove First and Last Character

export function removeChar(str: string): string {
  if (str.length <= 2) {
    return "";
  } else {
    return str.slice(1, -1);
  }
}

console.log(removeChar("eloquent"));
console.log(removeChar("et"));
