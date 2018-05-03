import './app.css';

const button = document.createElement("button");
button.textContent = 'Open chat';
document.body.appendChild(button);

// to accept HMR and re-initialize our app
if (module.hot) {
  module.hot.accept();
};

button.onclick = () => {
  import(/* webpackChunkName: "chat" */ "./chat").then(chat => {
    chat.init();
  });
};