document.getElementById('nhanVien').onclick = function () {
  let inPut = document.getElementById('workDay').value;
  document.getElementById('alertBox').style.visibility = 'visible';
  document.getElementById('day').innerHTML = inPut;
  document.getElementById('salary').innerHTML = inPut * 100000;
};

////////////////////////////////////////////////////////////////

let tong = [];
document.getElementById('btnSum').onclick = function () {
  let giaTriTrungBinh = document.getElementById('sum').value;
  giaTriTrungBinh = parseInt(giaTriTrungBinh);
  tong.push(giaTriTrungBinh);
  console.log(tong);

  function tinhTong(tong) {
    let sum = 0;
    for (let i = 0; i < tong.length; i++) {
      sum += tong[i];
    }

    if (tong.length == 5) {
      let tongCua5 = sum / tong.length;
      let outPut = document.getElementById('outputTong');
      outPut.style.visibility = 'visible';
      outPut.innerHTML = 'giá trị trung bình của 5 lần input là: ' + tongCua5;
    }
  }
  tinhTong(tong);
  document.getElementById('sum').value = '';
};

///////////////////////////////////////////////////////////////

document.getElementById('btnQuyDoi').onclick = function () {
  let inPut = parseFloat(document.getElementById('inPutquyDoi').value);
  inPut *= 23500;
  let outPut = document.getElementById('quyDoi');
  quyDoi.style.visibility = 'visible';
  outPut.innerHTML = 'tổng số tiền VND là: ' + inPut + 'VND';
};

///////////////////////////////////////////////////////////////

function tinhDienTich() {
  let chieuDai = +document.getElementById('chieuDai').value;
  let chieuRong = +document.getElementById('chieuRong').value;
  let tong = chieuDai * chieuRong;
  console.log(tong);
}

function tinhChuVi() {
  let chieuDai = +document.getElementById('chieuDai').value;
  let chieuRong = +document.getElementById('chieuRong').value;
  let tong = (chieuDai + chieuRong) * 2;
  console.log(tong);
}
