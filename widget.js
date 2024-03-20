// Define PSQWidget class
class PSQWidget {
  constructor(parentContainerID, psqBusinessLink, widgetSize, widgetColor) {
    // Initialization code
    this.parentContainer = document.getElementById(parentContainerID);
    this.psqBusinessLink = "https://www.publicsquare.com/featured/marketplace/" + psqBusinessLink;
    this.widgetSize = widgetSize.toLowerCase();
    this.widgetColor = widgetColor;

    if (!this.parentContainer) {
      console.error(`Element with ID "${parentContainerID}" not found.`);
      return;
    }
    this.init();
    this.addListeners();
  }

  addListeners() {
    // Add any event listeners or interactions here
    document.getElementById('widget-container')?.addEventListener('click', () => {
      // Example: Open a new window when the widget is clicked
      if (!this.psqBusinessLink) {
        window.open('https://www.publicsquare.com', '_blank');
      } else {
        window.open(this.psqBusinessLink, '_blank');
      }
    });
  }

  // Method to initialize the widget
  init() {
    // Widget initialization logic
    console.log('Widget initializing!');
    this.parentContainer ? this.parentContainer.innerHTML = `
    <div class="widget-container" id="widget-container">
      <p class="m-1">Find us on</p>
      <img class="logo" src="https://cdn.jsdelivr.net/npm/psqwidget@1.0.0/images/PSQ_Logo.png" alt="PublicSquare" />
    </div>
    ` : console.log('Widget failed!');
    document.getElementById('widget-container')?.classList.add('psqwidget-'+ (this.widgetSize ? this.widgetSize : 'small'))
  }

  // Other methods and properties of YourWidget
}


// Export the YourWidget class so it can be used in other files
// @ts-ignore
window.PSQWidget = PSQWidget;

