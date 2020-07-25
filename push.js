let webPush = require('web-push');

const vapidKeys = {
   "publicKey": "BM6x_apCLtm8r32tprMUzSUT_ECaHF4rR9Z-j4hQTnpl5gmfEaxFIwgXqiXtrVxTZYndUBaOFS73jOwg2IDTFT8",
   "privateKey": "JVu8F5X9p9FKZinQAsUnFttVSr-XAe9L-0vBiwKHu7E"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
let pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/cCLmEbaAVck:APA91bHEqYm0Tdf9kZpAyJiEYFyzpU0Ew0RLdUNRyf5TLZEk34B9ttDVcYTuATL0PgJ0ekSNqb_bCeugsmPmTL-09MAXXrjpBWXIvhZC9oO1uxTjdwW9u4Yf0CpunQkRF2C5bD4PIgBD",
   "keys": {
       "p256dh": "BKI7O38yj8KjnLJ9UYoLB5cXqdAAmMZxXI9k7kcefxDpnXa0eRx5gmJaE/FhfAQpTEabzfAnaroWu2DQZUl6wNA=",
       "auth": "QLIcDpPU7z3Xnb6PfWbogQ=="
   }
};
let payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
let options = {
   gcmAPIKey: '243008841910',
   TTL: 60
};  
webPush.sendNotification(
   pushSubscription,
   payload,
   options
).catch(error => {
  console.log(error)
})
;