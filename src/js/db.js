import idb from 'idb';

let dbPromised = idb.open("papan-tanding-v1", 1, function(upgradeDb) {
  let articlesObjectStore = upgradeDb.createObjectStore("team",{
  	keyPath: 'id'
  });

});


function saveForLater(team) {
  dbPromised
    .then(function(db) {
      let tx = db.transaction("team", "readwrite");
      let store = tx.objectStore("team")
      store.put(team)
      return tx.complete;
    })
    .then(() => {
      console.log("team berhasil di simpan")
    })
    .catch(error => {
    	console.log(error)
    })
}

function getAll() {
	return new Promise((resolve,reject) => {

		dbPromised.then(function(db) {
		  let tx = db.transaction('team', 'readonly');
		  let store = tx.objectStore('team');
		  
		  return store.getAll(); 
		}).then(val => {
		  resolve(val)
		});
	})
}

function getDataByID(id) {
  return new Promise((resolve,reject) => {

    dbPromised.then(function(db) {
      let tx = db.transaction('team', 'readonly');
      let store = tx.objectStore('team');
      
      return store.get(id); 
    })
    .then(val => {
      resolve(val)

    })
    .catch(error => {
      reject(error)
    })

  })
}

function deleteData(id) {
	return new Promise((resolve,reject) => {

		dbPromised.then(function(db) {
		  let tx = db.transaction('team', 'readwrite');
		  let store = tx.objectStore('team');
		  
		  return store.delete(id); 
		}).then(val => {
		console.log(val)
		  M.toast({html: 'data terhapus'})
		  window.location.reload()
		});
	})
}

export {getAll,saveForLater,deleteData,getDataByID} 