class BotWidget {
  iframe = null;
  iframeSrc = "http://localhost:8083";
  maxWidth = 400;
  maxHeight = 650;
  minWidth = 60;
  minHeight = 60;
  constructor() {
    this.init();
  }

  init() {
    this.createWidgetContainer();
    this.createIframe();
    this.addEvent();
  }

  createWidgetContainer() {
    this.widgetContainer = document.createElement("div");
    this.widgetContainer.id = "widget-container";
    this.widgetContainer.style.position = "fixed";
    this.widgetContainer.style.right = "10px";
    this.widgetContainer.style.bottom = "10px";
    this.widgetContainer.style.backgroundColor = "transparent"
    
    this.widgetContainer.style.overflow = "hidden"
    this.close()
    document.body.appendChild(this.widgetContainer);
  }

  createIframe() {
    if (this.iframe) return;
    this.iframe = document.createElement("iframe");
    if (!window._CGBOT_CONFIG_.TOKEN) {
      throw new Error("No token found");
    }
    this.iframe.src = `${this.iframeSrc}?token=${window._CGBOT_CONFIG_.TOKEN}`;
    this.iframe.style.width = "100%";
    this.iframe.style.height = "100%";
    this.iframe.style.border = "none";
    this.widgetContainer.appendChild(this.iframe);
  }

  addEvent() {
    window.addEventListener("message", (event) => {
      console.log(event.data);
      switch (event.data.type) {
        case "open":
          this.open();
          break;
        case "close":
          this.close();
          break;
        default:
          break;
      }
    });
    
  }
  open() {
    this.widgetContainer.style.width = this.maxWidth + "px";
    this.widgetContainer.style.height = this.maxHeight + "px";
    this.widgetContainer.style.borderRadius = "0"
  }
  close() {
    this.widgetContainer.style.width = this.minWidth + "px";
    this.widgetContainer.style.height = this.minHeight + "px";
    this.widgetContainer.style.borderRadius = "50%"
  }
}

new BotWidget();
