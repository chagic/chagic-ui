# bot-widget

## install script
```html
<body>
<script>
  window.CGBOT_CONFIG = {
    TOKEN: "",
    options: {}
  };
  (function(){
    var c = document.createElement("script");
    c.type = "text/javascript";
    c.async = true;
    c.defer = true;
    c.src = "http://bot-widget.chagic.chat/bot-widget.js";
    // c.src = ".//bot-widget.js";
    var e = document.body || document.head;
    e.appendChild(c);
  })()
</script>
</body>
```

## fetch bot settings
> api design: https://bot-widget.happyfox.com/api/v1/ping/dea23138-dad1-4154-81ad-3e21022a5c41