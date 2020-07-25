if ("serviceWorker" in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js').then(registration => {
                console.log('SW Registered',registration)
            })
            .catch(registrationError => {
                console.log('SW Not Registered',registrationError);

            })
    })
} else {
    console.log('browser not supported');

}

// Periksa fitur Notification API
if ("Notification" in window) {
    requestPermission();
} else {
    console.error("browser not supported");
}

// Meminta ijin menggunakan Notification API
function requestPermission() {
    Notification.requestPermission().then(function(result) {
        if (result === "denied") {
            console.log("access denied");
            return;
        } else if (result === "default") {
            console.error("access denied");
            return;
        }

        console.log("Notification is allowed");
    });
}


function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

if ('PushManager' in window) {
    navigator.serviceWorker.ready.then(function(registration) {
        // console.log(navigator.serviceWorker.getSubscription())
        registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array("BM6x_apCLtm8r32tprMUzSUT_ECaHF4rR9Z-j4hQTnpl5gmfEaxFIwgXqiXtrVxTZYndUBaOFS73jOwg2IDTFT8")
        }).then(function(subscribe) {
            console.log('Berhasil melakukan subscribe dengan endpoint: ', subscribe.endpoint);
            console.log('Berhasil melakukan subscribe dengan p256dh key: ', btoa(String.fromCharCode.apply(
                null, new Uint8Array(subscribe.getKey('p256dh')))));
            console.log('Berhasil melakukan subscribe dengan auth key: ', btoa(String.fromCharCode.apply(
                null, new Uint8Array(subscribe.getKey('auth')))));
        }).catch(function(e) {
            console.error('Tidak dapat melakukan subscribe ', e.message);
        });
    });
}