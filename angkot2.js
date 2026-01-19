var jmlAngkot = 10;
var angkot = 1;
var angkotBeroperasi = 9;

while(angkot <= angkotBeroperasi){
    console.log('Angkot No. ' + angkot + ' beroperasi dengan baik');
angkot++;
}

for(angkot = angkotBeroperasi + 1 ; angkot <= jmlAngkot; angkot++) {
    console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi')
}