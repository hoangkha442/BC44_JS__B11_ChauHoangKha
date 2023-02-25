
// Bài 1: Nhập vào số tiền lương(1h) và số giờ làm. In ra tổng lương bằng số giờ nhân tiền lương
function tinhTongLuong(){
    // input
    var soGioLam = document.getElementById('soGioLam').value;
    var luong1h = document.getElementById('luong1h').value;

    // output
    var tongLuong = 0;

    //progress
    tongLuong = soGioLam * luong1h;
    document.getElementById('tongLuong').innerHTML = tongLuong.toLocaleString();
}

// Bài 2: Viết chương trình nhập vào 5 số thực và tính trung bình 5 số này.
function tinhTrungBinh(){
    // Input 
    var soThu1 = document.getElementById('soThu1').value;
    var soThu2 = document.getElementById('soThu2').value;
    var soThu3 = document.getElementById('soThu3').value;
    var soThu4 = document.getElementById('soThu4').value;
    var soThu5 = document.getElementById('soThu5').value;

    // output
    var trungBinh = 0;

    // progress
     var sum = parseInt(soThu1) + parseInt(soThu2) + parseInt(soThu3) + parseInt(soThu4) + parseInt(soThu5);
     var trungBinh = sum / 5;
    document.getElementById('trungBinh').innerHTML = trungBinh;
    
}

// Bài 3: Cho người dùng nhập vào USD, tính và xuất ra số tiền sau khi quy đổi biết: 1$ = 23,500 VNĐ
function doiTien(){
    // input
    var vnd = document.getElementById('vnd').value;
    var usd = document.getElementById('usd').value;
    // console.log(vnd, usd);  -> check\

    // Output
    var tongTien = 0;

    // progress
    tongTien = vnd * usd;
    document.getElementById('tongTien').innerHTML = tongTien.toLocaleString();
}

// Bài 4: Tính diện tích, chu vi hình chữ nhật
function tinh(){
    // input
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;
    // console.log(chieuDai, chieuRong); -> check
    // output
    var dienTich = 0;
    var chuVi = 0
    //progress
    dienTich = chieuDai * chieuRong;
    chuVi = (parseInt(chieuDai) + parseInt(chieuRong)) * 2;
    document.getElementById('dienTich').innerHTML = dienTich;
    document.getElementById('chuVi').innerHTML = chuVi;

}

// Bài 5: Tính tổng 2 số kí
function tinhSoKy(){
    // input
    var num1 = document.getElementById('num1').value;
    var hangTruc = 0;
    var hangDonVi = 0;

    // output
    var soKy = 0;

    // progress
    hangTruc = num1 / 10;
    hangDonVi = num1 % 10;
    soKy = parseInt(hangTruc) + parseInt(hangDonVi);
    document.getElementById('soKy').innerHTML = soKy;
}