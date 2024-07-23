export const textToHtmlMapper = (text : string) => {
  const arr = text.split('\n');
  let ans = '';
  arr.forEach(word => {
    ans += `<p> ${word} <br/> </p>`;
  })
  return ans;
}