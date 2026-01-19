let item = prompt('Masukan nama Makanan!!  \n (cth: nasi, daging, ciki. soda');

switch(item) {
    case 'nasi' : 
        alert('Makanan sehat');
    case 'daging' :
        alert('makanan sehat');
        break;
    case 'ciki' :
        alert('makanan tidak sehat');
    case 'soda' :
        alert('makanan tidak sehat');
        break;
    default :
        alert('Nama makanan nya salah!!');
        break;
}