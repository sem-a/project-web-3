let ws = new WebSocket("ws://localhost:591/");

tinyMCE.init({
  selector: 'div',
  plugins: ["fullscreen"],
  setup: (editor) => {
    editor.on("init", () => {
      setTimeout( () => {
        editor.execCommand("mceFullScreen");
      }, 0)
    });
    ws.onmessage = (message) => {
      document.activeElement.blur();
      editor.setContent(message.data);
    };

    function sendDocument() {
      ws.send(editor.getContent());
    }

    editor.on("keyup", sendDocument);
    editor.on("change", sendDocument);

  },
})


await 

