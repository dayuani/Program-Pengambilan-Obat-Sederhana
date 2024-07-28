    function Pasien(nama, jenisObat, alamat, status, harga){
        this.nama = nama;
        this.jenisObat = jenisObat;
        this.alamat = alamat;
        this.status = status;
        this.harga = harga;
    

    this.ambil_obat = function(jenisObat, biaya){
        this.jenisObat.push(jenisObat);
        this.harga += biaya
        return jenisObat;
    }

    this.obat_diambil = function(){
        if(this.jenisObat.length === 0){
            alert('obat tidak tersedia untuk di ambil');
            return false;
        }

    this.status = 'diambil';
    return{
        nama : this.nama,
        jenisObat : this.jenisObat,
        harga: this.harga

    };
}
}
var psn1 = new Pasien('Budi', [],'kesatrian', 'Menunggu', 0);


