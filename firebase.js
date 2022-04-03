const { getStorage, ref, getDownloadURL } = require("firebase/storage");
const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyCnDwuKS678pMcuFpshE3ZXgHOfZJZYmAk",
  authDomain: "feisty-etching-333216.firebaseapp.com",
  projectId: "feisty-etching-333216",
  storageBucket: "feisty-etching-333216.appspot.com",
  messagingSenderId: "628088000886",
  appId: "1:628088000886:web:a3d11df61b0a7c74a9ea57",
  measurementId: "G-S4090FPDCW",
};
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
function getFile(name) {
  return getDownloadURL(ref(storage, name));
}
module.exports = { getFile };
