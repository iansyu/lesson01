// What is the season now?
const month = process.argv[2];
switch (Number(month)) {
  case 2:
  case 3:
  case 4:
    console.log('春');
    break;

  case 5:
  case 6:
  case 7:
    console.log('夏');
    break;

  case 8:
  case 9:
  case 10:
    console.log('秋');
    break;

  case 11:
  case 12:
  case 1:
    console.log('冬');
    break;

  default:
    console.log('すみません、値は正しくてはありません。１〜１２以内の「数字」を入力してください。');
}
