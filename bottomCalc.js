const T1 = .5, T2 = .35, T3 = .15;
const E1 = .75, E2 = .25
const TT1 = 4, TT2 = 76, TT3 = 45, TT4 = 96, TT5 = 60, TT6 = 38, TT7 = 50, TT8 = 87, TT9 = 22;
const ENFJ = 43, INFJ = 60, ENFP = 73, INFP = 98, ENTJ = 2, INTJ = 82, ENTP = 50, INTP = 70;
const ESFJ = 56, ISFJ = 64, ESFP = 32, ISFP = 39, ESTJ = 9, ISTJ = 52, ESTP = 20, ISTP = 27;

let mbti, enneagram, tritype, tbottom, mbottom, ebottom, bottom;

function clear() {
  document.getElementById("mbtidta").innerHTML = "";
  document.getElementById("enneagramdta").innerHTML = "";
  document.getElementById("tritypedta").innerHTML = "";
  document.getElementById("bottomdta").innerHTML = "";
}

function showMbtiMenu() {
  document.getElementById("dropMbti").style.display = "block";
}

function showEnneagramMenu() {
  document.getElementById("dropEnneagram").style.display = "block";
}


function setMbti() {
  mbti = event.target.innerText;
  document.getElementById("mbtitype").innerHTML = mbti;
  clear();
}

function setEnneagram() {
  enneagram = event.target.innerText;
  document.getElementById("enneagramtype").innerHTML = enneagram;
  clear();
}

function setTritype() {
  tritype = document.getElementById("tritype").value;
  document.getElementById("tritypetype").innerHTML = tritype;
  clear();
}

function calculate() {
  bottom = 0;
  bottom = (tcalculate() + mcalculate() + ecalculate()) / 3;
  bottom = Math.round(bottom);
  document.getElementById("mbtidta").innerHTML = mbottom + "%";
  document.getElementById("enneagramdta").innerHTML = ebottom + "%";
  document.getElementById("tritypedta").innerHTML = tbottom + "%";
  document.getElementById("bottomdta").innerHTML = bottom + "%";
}

function tcalculate() {
  tbottom = 0;
  tritype.toString();
  if (tritype.charAt(0) =='1')
    tbottom += T1 * TT1;
  if (tritype.charAt(0) == '2')
    tbottom += T1 * TT2;
  if (tritype.charAt(0) == '3')
    tbottom += T1 * TT3;
  if (tritype.charAt(0) == '4')
    tbottom += T1 * TT4;
  if (tritype.charAt(0) == '5')
    tbottom += T1 * TT5;
  if (tritype.charAt(0) == '6')
    tbottom += T1 * TT6;
  if (tritype.charAt(0) == '7')
    tbottom += T1 * TT7;
  if (tritype.charAt(0) == '8')
    tbottom += T1 * TT8;
  if (tritype.charAt(0) == '9')
    tbottom += T1 * TT9;
  if (tritype.charAt(1) == '1')
    tbottom += T2 * TT1;
  if (tritype.charAt(1) == '2')
    tbottom += T2 * TT2;
  if (tritype.charAt(1) == '3')
    tbottom += T2 * TT3;
  if (tritype.charAt(1) == '4')
    tbottom += T2 * TT4;
  if (tritype.charAt(1) == '5')
    tbottom += T2 * TT5;
  if (tritype.charAt(1) == '6')
    tbottom += T2 * TT6;
  if (tritype.charAt(1) == '7')
    tbottom += T2 * TT7;
  if (tritype.charAt(1) == '8')
    tbottom += T2 * TT8;
  if (tritype.charAt(1) == '9')
    tbottom += T2 * TT9;
  if (tritype.charAt(2) == '1')
    tbottom += T3 * TT1;
  if (tritype.charAt(2) == '2')
    tbottom += T3 * TT2;
  if (tritype.charAt(2) == '3')
    tbottom += T3 * TT3;
  if (tritype.charAt(2) == '4')
    tbottom += T3 * TT4;
  if (tritype.charAt(2) == '5')
    tbottom += T3 * TT5;
  if (tritype.charAt(2) == '6')
    tbottom += T3 * TT6;
  if (tritype.charAt(2) == '7')
    tbottom += T3 * TT7;
  if (tritype.charAt(2) == '8')
    tbottom += T3 * TT8;
  if (tritype.charAt(2) == '9')
    tbottom += T3 * TT9;
  console.log(tbottom);
  tbottom = Math.round(tbottom);
  return tbottom;
}

function mcalculate() {
  mbottom = 0;
  if (mbti == "ENFJ")
    mbottom = ENFJ;
  else if (mbti == "INFJ")
    mbottom = INFJ;
  else if (mbti == "ENFP")
    mbottom = ENFP;
  else if (mbti == "INFP")
    mbottom = INFP;
  else if (mbti == "ENTJ")
    mbottom = ENTJ;
  else if (mbti == "INTJ")
    mbottom = INTJ;
  else if (mbti == "ENTP")
    mbottom = ENTP;
  else if (mbti == "INTP")
    mbottom = INTP;
  else if (mbti == "ESFJ")
    mbottom = ESFJ;
  else if (mbti == "ISFJ")
    mbottom = ISFJ;
  else if (mbti == "ESFP")
    mbottom = ESFP;
  else if (mbti == "ISFP")
    mbottom = ISFP;
  else if (mbti == "ESTJ")
    mbottom = ESTJ;
  else if (mbti == "ISTJ")
    mbottom = ISTJ;
  else if (mbti == "ESTP")
    mbottom = ESTP;
  else if (mbti == "ISTP")
    mbottom = ISTP;
  console.log(mbottom);
  return mbottom;
}

function ecalculate() {
  ebottom = 0;
  if (enneagram.charAt(0) =='1')
    ebottom += E1 * TT1;
  if (enneagram.charAt(0) == '2')
    ebottom += E1 * TT2;
  if (enneagram.charAt(0) == '3')
    ebottom += E1 * TT3;
  if (enneagram.charAt(0) == '4')
    ebottom += E1 * TT4;
  if (enneagram.charAt(0) == '5')
    ebottom += E1 * TT5;
  if (enneagram.charAt(0) == '6')
    ebottom += E1 * TT6;
  if (enneagram.charAt(0) == '7')
    ebottom += E1 * TT7;
  if (enneagram.charAt(0) == '8')
    ebottom += E1 * TT8;
  if (enneagram.charAt(0) == '9')
    ebottom += E1 * TT9;
  if (enneagram.charAt(2) == '1')
    ebottom += E2 * TT1;
  if (enneagram.charAt(2) == '2')
    ebottom += E2 * TT2;
  if (enneagram.charAt(2) == '3')
    ebottom += E2 * TT3;
  if (enneagram.charAt(2) == '4')
    ebottom += E2 * TT4;
  if (enneagram.charAt(2) == '5')
    ebottom += E2 * TT5;
  if (enneagram.charAt(2) == '6')
    ebottom += E2 * TT6;
  if (enneagram.charAt(2) == '7')
    ebottom += E2 * TT7;
  if (enneagram.charAt(2) == '8')
    ebottom += E2 * TT8;
  if (enneagram.charAt(2) == '9')
    ebottom += E2 * TT9;

  ebottom = Math.round(ebottom);
  console.log(ebottom);
  return ebottom;
}
