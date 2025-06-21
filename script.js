const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  databaseURL: "https://your-app.firebaseio.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcde12345"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function sendMessage() {
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && message) {
    db.ref("messages").push({ name, message });
    document.getElementById("message").value = "";
  }
}

db.ref("messages").on("child_added", snapshot => {
  const { name, message } = snapshot.val();
  const msgDiv = document.createElement("div");
  msgDiv.textContent = `${name}: ${message}`;
  document.getElementById("messages").appendChild(msgDiv);
});
