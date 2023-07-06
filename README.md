## **Tutorial Setup Project MERN**

## `Setup`

### Intalling
Buka link repo github yang telah diberikan, lalu pilih tombol **code** dan pilih `download zip` <br>
<img src='/setup/1.png' width='60%' />

Ekstrak file tersebut lalu buka folder di VSCode.<br> Pada struktur folder, klik kanan di folder **frontend** lalu pilih `Open in Integrated Terminal` yang akan membuka terminal untuk folder frontend. <br>
<img src='/setup/2.png' width='50%' />

Pada terminal ketikkan perintah berikut untuk menginstal project:
```
npm i
```
lakukan hal yang sama pada folder backend untuk menjalankannya.

### Readme.md
Pada stuktur folder, hapus file `README.md` yang ada pada folder frontend. <br>
***File ini harus dihapus untuk mengantisipasi hal-hal yang tak dinginkan***.<br>
<img src='/setup/3.png' width='40%' />

## `Running Project`

Untuk menjalankan frontend, buka terminal pada bagian frontend, lalu ketikkan perintah berikut:
```
npm start
```

Untuk menjalankan backend, buka terminal pada bagian backend, lalu ketikkan perintah berikut:
```
node server.js
```

Project masih dalam proses pengerjaan hingga saat ini, maka perpindahan antar user masih dilakukan secara manual, pada file `frontend/src/App.jsx` lihat pada bagian `user state`. Pada gambar dibawah, terdapat tulisan **admin** yang menyatakan user aktif saat ini, bagian ini dapat diubah secara manual untuk melihat tampilan di setiap user yang ada.<br>
<img src='/setup/4.png' width='70%' />

> hope you are satisfied
