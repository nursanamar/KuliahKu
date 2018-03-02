import FCM from 'react-native-fcm';
// export function getData(when){
//     var data;
//     if(when === 'today'){
//         data =[
//             {
//                 matkul: "Pengantar teknik informatika",
//                 dosen: "suriayani ST.MT",
//                 time: "09:30",
//                 room:"E402",
//                 status: "Masuk",
//                 tugas: "Menbuat rangkuman dari materi minggu lalu dikumpul pertemuan berikutnya"
//             },
//             {
//                 matkul: "Matematika komputer",
//                 dosen: "Andi Muhammad Syafar ST.MT",
//                 time: "11:15",
//                 room:"E403",
//                 status: "Masuk",
//                 tugas:"Persentasi kelompok 2"
//             },
//             {
//                 matkul: "Fisika",
//                 dosen: "Faisal ST.MT",
//                 time: "12:40",
//                 room:"E404",
//                 status: "Masuk",
//                 tugas: "persentasi"
//             },
//             {
//                 matkul: "Pengantar teknik informatika",
//                 dosen: "suriayani ST.MT",
//                 time: "09:30",
//                 room:"E402",
//                 status: "Masuk",
//                 tugas: "Tidak ada tugas"
//             },
//             {
//                 matkul: "Pengantar teknik informatika",
//                 dosen: "suriayani ST.MT",
//                 time: "09:30",
//                 room:"E402",
//                 status: "Masuk",
//                 tugas: "tidak ada tugas"
//             },
//         ];  
//     }else{
//         data = [
//             {
//                 matkul: "Pengantar teknik informatika",
//                 dosen: "suriayani ST.MT",
//                 time: "09:30",
//                 room:"E402",
//                 status: "Masuk",
//                 tugas: "Menbuat rangkuman dari materi minggu lalu dikumpul pertemuan berikutnya"
//             },
//             {
//                 matkul: "Matematika komputer",
//                 dosen: "Andi Muhammad Syafar ST.MT",
//                 time: "11:15",
//                 room:"E403",
//                 status: "Masuk",
//                 tugas:"Persentasi kelompok 2"
//             },
//             {
//                 matkul: "Fisika",
//                 dosen: "Faisal ST.MT",
//                 time: "12:40",
//                 room:"E404",
//                 status: "Masuk",
//                 tugas: "persentasi"
//             },
//             {
//                 matkul: "Pengantar teknik informatika",
//                 dosen: "suriayani ST.MT",
//                 time: "09:30",
//                 room:"E402",
//                 status: "Masuk",
//                 tugas: "Tidak ada tugas"
//             },
//             {
//                 matkul: "Pengantar teknik informatika",
//                 dosen: "suriayani ST.MT",
//                 time: "09:30",
//                 room:"E402",
//                 status: "Masuk",
//                 tugas: "tidak ada tugas"
//             },
//         ];
//     }
//     return data;
// }
var host = 'https://boiling-island-33613.herokuapp.com/index.php';

export function getData(token,onSucces,onError = function(){}){
    fetch(host+'/jadwal',{
        method: 'GET',
        headers: {
            'content-type':'application/json',
            'Authorization' : 'Bearer '+token
        }  
    }).then((respon) => {
        return respon.json();
    }).then((json) => {
        onSucces(json);
    }).catch((err) => {
        onError(err);
    })
}

export function authUser(nim,pass,callback,errcalback){
    fetch(host+"/login",{
        method: 'POST',
        headers: {
            'content-type':'application/json',
        },
        body: JSON.stringify({
            'nim':nim,
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

export function fireNotif(msg){
    FCM.presentLocalNotification({
        ...msg,
        show_in_foreground : true
    })
  }

export function storeToken(token,id){
    console.log("dari store token ",id);
    fetch(host+'/token',{
        method: 'POST',
        headers: {
            'content-type':'application/json',
            'Authorization' : 'Bearer '+token
        },
        body: JSON.stringify({
            "token" : id,
        })
    })
}

export function removeToken(token,notifId){
    fetch(host+"/removeToken",{
        method : 'POST',
        headers : {
            'content-type':'application/json',
            'Authorization' : 'Bearer '+token
        },
        body: JSON.stringify({
            token :notifId,
        })
    })
}

