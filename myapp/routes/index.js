function getDay(dValue){
  if(dValue == 'd1') return '1';
  else if (dValue == 'd2') return '2';
  else return '?';
}
function getColumn(cValue){
  if(cValue == undefined) return '?';
  else return cValue;
}
function eastDefaultBlock(place){
  console.log('eastDefaultBlock');
  if(1<=place && place<7) return '1'
  else if(7<=place && place<14) return '2'
  else if(14<=place && place<21) return '3'
  else if(21<=place && place<27) return '4'
  else if(27<=place && place<33) return '5'
  else if(33<=place && place<40) return '6'
  else if(40<=place && place<47) return '7'
  else if(47<=place && place<53) return '8'
  return '?';
}
function westDefaultBlock1(place){
  console.log('westDefaultBlock1');
  if(1<=place && place<6) return '1'
  else if(6<=place && place<11) return '2'
  else if(11<=place && place<16) return '3'
  else if(16<=place && place<22) return '4'
  else if(22<=place && place<28) return '5'
  else if(28<=place && place<32) return '6'
  else if(32<=place && place<38) return '7'
  else if(38<=place && place<43) return '8'
  return '?';
}
function westDefaultBlock2(place){
  console.log('westDefaultBlock2');
  if(1<=place && place<11) return '1'
  else if(11<=place && place<16) return '2'
  else if(16<=place && place<23) return '3'
  else if(23<=place && place<30) return '4'
  else if(30<=place && place<35) return '5'
  else if(35<=place && place<45) return '6'
  return '?';
}
function westDefaultBlock3(place){
  console.log('westDefaultBlock3');
  if(1<=place && place<6) return '1'
  else if(6<=place && place<13) return '2'
  else if(13<=place && place<20) return '3'
  else if(20<=place && place<25) return '4'
  return '?';
}
function westPiller(place){
  console.log('westPiller');
  if(1<=place && place<5) return '1'
  else if(5<=place && place<12) return '2'
  else if(12<=place && place<19) return '3'
  else if(19<=place && place<23) return '4'
  return '?';
}
function eastPiller1(place){
  console.log('eastPiller1');
  if(1<=place && place<6) return '1'
  else if(6<=place && place<12) return '2'
  else if(12<=place && place<18) return '3'
  else if(18<=place && place<23) return '4'
  else if(23<=place && place<28) return '5'
  else if(28<=place && place<34) return '6'
  else if(34<=place && place<40) return '7'
  else if(40<=place && place<45) return '8'
  return '?';
}
function eastPiller2(place){
  console.log('eastPiller2');
  if(1<=place && place<6) return '1'
  else if(6<=place && place<13) return '2'
  else if(13<=place && place<20) return '3'
  else if(20<=place && place<25) return '4'
  else if(25<=place && place<30) return '5'
  else if(30<=place && place<37) return '6'
  else if(37<=place && place<44) return '7'
  else if(44<=place && place<49) return '8'
  return '?';
}
function eastEdge(place){
  console.log('eastEdge');
  if(1<=place && place<7) return '1'
  else if(7<=place && place<12) return '2'
  else if(12<=place && place<17) return '3'
  else if(17<=place && place<23) return '4'
  else if(23<=place && place<29) return '5'
  else if(29<=place && place<34) return '6'
  else if(34<=place && place<39) return '7'
  else if(39<=place && place<45) return '8'
  return '?';
}
function eastWall(place){
  console.log('eastWall');
  if(1<=place && place<11) return '1'
  else if(11<=place && place<21) return '2'
  else if(21<=place && place<31) return '3'
  else if(31<=place && place<38) return '4'
  else if(38<=place && place<48) return '5'
  else if(48<=place && place<55) return '6'
  else if(55<=place && place<62) return '7'
  else if(62<=place && place<72) return '8'
  else if(72<=place && place<82) return '9'
  else if(82<=place && place<92) return '0'
  return '?';
}
function westWallA(place){
  console.log('westWallあ');
  if(1<=place && place<16) return '1'
  else if(21<=place && place<24) return '2'
  else if(24<=place && place<30) return '3'
  else if(30<=place && place<38) return '4'
  else if(38<=place && place<46) return '5'
  else if(46<=place && place<54) return '6'
  else if(54<=place && place<58) return '7'
  else if(62<=place && place<70) return '8'
  return '?';
}
function westWallM(place){
  console.log('westWallめ');
  if(1<=place && place<16) return '1'
  else if(16<=place && place<24) return '2'
  else if(24<=place && place<30) return '3'
  else if(30<=place && place<38) return '4'
  else if(38<=place && place<46) return '5'
  else if(46<=place && place<54) return '6'
  else if(54<=place && place<62) return '7'
  else if(62<=place && place<70) return '8'
  return '?';
}

function getBlock(column='c', place){
  /*
  共通処理
  C-L, O-X, ア-コ, セーヌ, ハ-ポ, ムーレ
  いーか,へーむ
  きーさ,ねーふ
  せーな
  
  柱
  し、す、に、ぬ
  M、Z、ネ、ミ
  N、Y、ノ、マ

  島はじ
  B、サ、ス、ロ

  壁
  A、シ、あ、め
  */
  col_num = column.charCodeAt(0);

  //C-L
  if(66 < col_num && col_num < 77) return eastDefaultBlock(place)
  //O-X
  if(79 <= col_num && col_num <= 88) return eastDefaultBlock(place)
  //ア-コ
  if(12450 <= col_num && col_num <= 12467) return eastDefaultBlock(place)
  //セーヌ
  if(12475 <= col_num && col_num <= 12492) return eastDefaultBlock(place)
  //ハ-ポ
  if(12495 <= col_num && col_num <= 12509) return eastDefaultBlock(place)
  //ムーレ
  if(12512 <= col_num && col_num <= 12524) return eastDefaultBlock(place)

  //いーか
  if(12356 <= col_num && col_num <= 12363) return westDefaultBlock1(place)
  //へーむ
  if(12408 <= col_num && col_num <= 12416) return westDefaultBlock1(place)

  //きーさ
  if(12365 <= col_num && col_num <= 12373) return westDefaultBlock2(place)
  //ねーふ
  if(12397 <= col_num && col_num <= 12405) return westDefaultBlock2(place)

  //せーな
  if(12379 <= col_num && col_num <= 12394) return westDefaultBlock3(place)

  //し、す、に、ぬ
  if(12375 == col_num || 12377 == col_num || 12395 == col_num || 12397 == col_num) return westPiller(place)
  //M、Z、ネ、ミ
  if(77 == col_num || 90 == col_num || 12493 == col_num || 12511 == col_num) return eastPiller1(place)
  //N、Y、ノ、マ
  if(78 == col_num || 89 == col_num || 12494 == col_num || 12510 == col_num) return eastPiller2(place)

  //B、サ、ス、ロ
  if(66 == col_num || 12288 == col_num || 12292 == col_num || 12525 == col_num) return eastEdge(place)


  //壁
  if(65 == col_num || col_num == 12471) return eastWall(place);
  if(12354 == col_num) return westWallA(place);
  if(12417 == col_num) return westWallM(place);
}


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
    {
      day: getDay(req.query.day), 
      column: getColumn(req.query.column),
      block: getBlock(req.query.column, Number(req.query.place))
    }
  );
});

module.exports = router;
