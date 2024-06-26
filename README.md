# PSQWidget
## Installation
To install and implement the PSQ widget on your website, the following methods can be used:

### Installation Using NPM
In your CLI, run the command `npm i psqwidget`. 

### Installation Using CDN
Copy and paste the following two links in your html head tag 
`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/psqwidget@1.1.7/widget.css"/>`

`<script src="https://cdn.jsdelivr.net/npm/psqwidget@1.1.7/widget.js"></script>`

## PSQWidget Parameters and Options
The PSQWidget takes the following parameters, in order: parentContainerID, psqBusinessLink, widgetSize.

### parentContainerId
The parentContainerId is the id of the element where the PSQWidget will be nested. The styling of the parent element _may effect_ the widget. If the sizing of the widget is not working as expected, ensure the parent container is not constraining the widget. 

### psqBusinessLink
The psqBusinessLink is the link that will be opened in a new tab when users click on the widget. The desired link can be found by navigating to your business listing on publicsquare.com and copying the url via the browser url or the share button located at the top of the listing. The PSQWidget psqBusinessLink has a default root of `https://www.publicsquare.com/featured/marketplace/`. Therefore, you will only need to add the id found at the end of the url slug. 

### widgetSize
The widgetSize parameter accepts one of three pre-designated values. Further customization is possible by manipulating the DOM via JavaScript ie. removing the size class and adding your own. The four available sizes are: small, medium, large, or banner. The default size is small. 

Each size has a max width of:
- Small - 100px
- Medium - 200px
- Large - 300px
- Banner - auto

### Examples 
For the small, medium or large widget, this should be the result:

![psqWidgetLg](https://github.com/Ethan-Johnson17/psqWidget/assets/85658808/57995bf0-a597-40c3-bd7c-e74a98ae65da)

HTML:
```
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My Website</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/psqwidget@1.1.7/widget.css"
    />
    <link rel="stylesheet" href="style.css" />
    <script src="https://cdn.jsdelivr.net/npm/psqwidget@1.1.7/widget.js"></script>
  </head>
  <body>
    <div id="widget-parent"></div>
    <script src="main.js"></script>
  </body>
</html>

```
JavaScript:
```
document.addEventListener("DOMContentLoaded", function () {
  // Create an instance of the widget
        var widget = new PSQWidget(
          "widget-parent", // parentContainerID
          "9f548a8a-256a-11ed-a38a-50eb7179fd78", // psqBusinessLink
          "large" // widgetSize
        );
      });
```

For the banner, you should see this spanning the width of the page:

![psqWidgetBanner](https://github.com/Ethan-Johnson17/psqWidget/assets/85658808/0fd8b108-ff31-450f-96eb-7407dfee6dc9)


HTML:
```
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My Website</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/psqwidget@1.1.7/widget.css"
    />
    <link rel="stylesheet" href="style.css" />
    <script src="https://cdn.jsdelivr.net/npm/psqwidget@1.1.7/widget.js"></script>
  </head>
  <body>
    <div id="widget-parent"></div>
    <script src="main.js"></script>
  </body>
</html>

```
JavaScript:
```
document.addEventListener("DOMContentLoaded", function () {
  // Create an instance of the widget
        var widget = new PSQWidget(
          "widget-parent", // parentContainerID
          "120a5060-c371-11ed-a416-07e9294e9f7a", // psqBusinessLink
          "banner" // widgetSize
        );
      });
```

