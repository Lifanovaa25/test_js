import "./../@types/types";


export const calculateLineCoords = (
  a: Element,
  b: Element
): Coord => {
  const aBox = a.getBoundingClientRect();
  const bBox = b.getBoundingClientRect();
  // const start ={x: aBox.left - 240 + aBox.width / 2,y: aBox.top - 110 + aBox.height / 2}
  // const end = {x:bBox.left - 240 + bBox.width / 2,y: bBox.top - 100 + bBox.height / 2}
    const start ={x: aBox.x - 80 ,y: aBox.y - 50 + aBox.height / 2}
  const end = {x:bBox.x - 70,y: bBox.y - 40}
  const center = {
    x: (start.x + end.x) / 2 - aBox.height / 2,
    y: (start.y + end.y) / 2 ,
  };
  console.log(aBox.y)
  const controlPoint = {
    x: start.x  + Math.min(
        distance(start, end),
        Math.abs(bBox.y - aBox.y) / 2,
        40
    ),
    y: start.y,
};

return (`
    M ${start.x},${start.y} 
    Q ${controlPoint.x}, ${controlPoint.y} ${center.x},${center.y} 
    T ${end.x},${end.y}
  `);

};
function distance(start: Point, end: Point)
{
  const dx = start.x - end.x
  const dy = start.y - end.y

  return Math.sqrt(dx * dx + dy * dy)
}
// function translit(word){
// 	var answer = '';
// 	var converter = {
// 		'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
// 		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
// 		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
// 		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
// 		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
// 		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
// 		'э': 'e',    'ю': 'yu',   'я': 'ya',
 
// 		'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
// 		'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
// 		'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
// 		'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
// 		'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
// 		'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
// 		'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
// 	};
 
// 	for (var i = 0; i < word.length; ++i ) {
// 		if (converter[word[i]] == undefined){
// 			answer += word[i];
// 		} else {
// 			answer += converter[word[i]];
// 		}
// 	}
 
// 	return answer;
// }