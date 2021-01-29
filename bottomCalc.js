const T1 = .6, T2 = .4, T3 = .2;
const TT1 = 4, TT2 = 76, TT3 = 45, TT4 = 96, TT5 = 60, TT6 = 38, TT7 = 50, TT8 = 87, TT9 = 22;



let mbti, enneagram, tritype, bottom = 0;

function showMbtiMenu() {
  document.getElementById("dropMbti").style.display = "block";
}

function showEnneagramMenu() {
  document.getElementById("dropEnneagram").style.display = "block";
}


function setMbti() {
  mbti = event.target.innerText;
}

function setEnneagram() {
  enneagram = event.target.innerText;
}

function setTritype() {
  tritype = document.getElementById("tritype").value;
}

function calculate() {
  bottom = 0;
  tritype.toString();
  if (tritype.charAt(0) =='1')
    bottom += T1 * TT1;
  if (tritype.charAt(0) == '2')
    bottom += T1 * TT2;
  if (tritype.charAt(0) == '3')
    bottom += T1 * TT3;
  if (tritype.charAt(0) == '4')
    bottom += T1 * TT4;
  if (tritype.charAt(0) == '5')
    bottom += T1 * TT5;
  if (tritype.charAt(0) == '6')
    bottom += T1 * TT6;
  if (tritype.charAt(0) == '7')
    bottom += T1 * TT7;
  if (tritype.charAt(0) == '8')
    bottom += T1 * TT8;
  if (tritype.charAt(0) == '9')
    bottom += T1 * TT9;
  if (tritype.charAt(1) == '1')
    bottom += T2 * TT1;
  if (tritype.charAt(1) == '2')
    bottom += T2 * TT2;
  if (tritype.charAt(1) == '3')
    bottom += T2 * TT3;
  if (tritype.charAt(1) == '4')
    bottom += T2 * TT4;
  if (tritype.charAt(1) == '5')
    bottom += T2 * TT5;
  if (tritype.charAt(1) == '6')
    bottom += T2 * TT6;
  if (tritype.charAt(1) == '7')
    bottom += T2 * TT7;
  if (tritype.charAt(1) == '8')
    bottom += T2 * TT8;
  if (tritype.charAt(1) == '9')
    bottom += T2 * TT9;
  if (tritype.charAt(2) == '1')
    bottom += T3 * TT1;
  if (tritype.charAt(2) == '2')
    bottom += T3 * TT2;
  if (tritype.charAt(2) == '3')
    bottom += T3 * TT3;
  if (tritype.charAt(2) == '4')
    bottom += T3 * TT4;
  if (tritype.charAt(2) == '5')
    bottom += T3 * TT5;
  if (tritype.charAt(2) == '6')
    bottom += T3 * TT6;
  if (tritype.charAt(2) == '7')
    bottom += T3 * TT7;
  if (tritype.charAt(2) == '8')
    bottom += T3 * TT8;
  if (tritype.charAt(2) == '9')
    bottom += T3 * TT9;

  bottom / 100;
  bottom = Math.round(bottom);
  alert(bottom + "%");
}
