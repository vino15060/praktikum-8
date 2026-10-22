// oprasi string

// char at
let datamhs = "Revino";
console.log(datamhs);
console.log(datamhs.charAt(3));

// concat
let namadepan = "Revino";
let namabelakang = "Af ghani Al fath";
let namaLengkap = namadepan.concat(" ", namabelakang);
console.log(namaLengkap);

//index of
console.log(datamhs.indexOf("a"));

// sub string
console.log(datamhs.substring(0, 3));
console.log(datamhs.substring(3, 6));

// slice
console.log(datamhs.slice(2, 6));
console.log(datamhs.slice(6, 2)); // datanya jadi kosong

// replace
let ubahdata = datamhs.replace("Revino", "joni");
console.log(ubahdata); // ini untuk mengubah data

// touppercase
console.log(datamhs.toUpperCase());  // untuk mengubah huruf menjadi kapital

// tolowercase
console.log(datamhs.toLowerCase()); // untuk mengubah huruf menjadi kecil

// uppercase
console.log(datamhs.toUpperCase());  // untuk mengubah huruf menjadi kapital


