export function getData(when){
    var data;
    if(when === 'today'){
        data =[
            {
                matkul: "Pengantar teknik informatika",
                dosen: "suriayani ST.MT",
                time: "09:30",
                room:"E402",
                status: "Masuk",
                tugas: "Menbuat rangkuman dari materi minggu lalu dikumpul pertemuan berikutnya"
            },
            {
                matkul: "Matematika komputer",
                dosen: "Andi Muhammad Syafar ST.MT",
                time: "11:15",
                room:"E403",
                status: "Masuk",
                tugas:"Persentasi kelompok 2"
            },
            {
                matkul: "Fisika",
                dosen: "Faisal ST.MT",
                time: "12:40",
                room:"E404",
                status: "Masuk",
                tugas: "persentasi"
            },
            {
                matkul: "Pengantar teknik informatika",
                dosen: "suriayani ST.MT",
                time: "09:30",
                room:"E402",
                status: "Masuk",
                tugas: "Tidak ada tugas"
            },
            {
                matkul: "Pengantar teknik informatika",
                dosen: "suriayani ST.MT",
                time: "09:30",
                room:"E402",
                status: "Masuk",
                tugas: "tidak ada tugas"
            },
        ];  
    }else{
        data = [
            {
                matkul: "Pengantar teknik informatika",
                dosen: "suriayani ST.MT",
                time: "09:30",
                room:"E402",
                status: "Masuk",
                tugas: "Menbuat rangkuman dari materi minggu lalu dikumpul pertemuan berikutnya"
            },
            {
                matkul: "Matematika komputer",
                dosen: "Andi Muhammad Syafar ST.MT",
                time: "11:15",
                room:"E403",
                status: "Masuk",
                tugas:"Persentasi kelompok 2"
            },
            {
                matkul: "Fisika",
                dosen: "Faisal ST.MT",
                time: "12:40",
                room:"E404",
                status: "Masuk",
                tugas: "persentasi"
            },
            {
                matkul: "Pengantar teknik informatika",
                dosen: "suriayani ST.MT",
                time: "09:30",
                room:"E402",
                status: "Masuk",
                tugas: "Tidak ada tugas"
            },
            {
                matkul: "Pengantar teknik informatika",
                dosen: "suriayani ST.MT",
                time: "09:30",
                room:"E402",
                status: "Masuk",
                tugas: "tidak ada tugas"
            },
        ];
    }
    return data;
}

export function authUser(nim,pass,callback,errcalback){
    fetch("http://10.0.3.2:443/kuliahku/index.php/login",{
        method: 'POST',
        headers: {
            'content-type':'application/json',
        },
        body: JSON.stringify({
            'user':nim,
            'pass':pass
        })
    }).then((res) => {
        return res.json();
    }).then((json) => {
        callback(json);
    }).catch((err) => {
    	errcalback(err);
    });
}
