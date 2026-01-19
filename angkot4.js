let jmlAngkot = 10;
let angkotBeroperasi = 6;       

for(let angkot = 1; angkot <= jmlAngkot; angkot++) {
    if(angkot <= 6 && angkot !== 5){
        console.log('angkot ' + angkot + 'sedang beroperasi');
    } else if (angkot === 8 || angkot === 10 || angkot === 5) {
        console.log('angkot' + angkot + ' lembur');
    } else {
        console.log('angkot ' + angkot + ' tidak beroperasi' );
    }

}