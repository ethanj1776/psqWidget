// Define PSQWidget class
class PSQWidget {
  constructor(parentContainerID, psqBusinessLink, businessName, widgetSize, widgetColor) {
    // Initialization code
    this.parentContainer = document.getElementById(parentContainerID);
    this.psqBusinessLink = psqBusinessLink;
    this.businessName = businessName;
    this.widgetSize = widgetSize;
    this.widgetColor = widgetColor;

    if (!this.parentContainer) {
      console.error(`Element with ID "${parentContainerID}" not found.`);
      return;
    }
    this.init();
    // this.addListeners();
  }

  // addListeners() {
  //   // Add any event listeners or interactions here
  //   this.parentContainer?.addEventListener('click', () => {
  //     // Example: Open a new window when the widget is clicked
  //     if (!this.psqBusinessLink) {
  //       window.open('https://www.publicsquare.com', '_blank');
  //     } else {
  //       window.open(this.psqBusinessLink, '_blank');
  //     }
  //   });
  // }

  // Method to initialize the widget
  init() {
    // Widget initialization logic
    console.log('Widget initialized!');
    this.parentContainer ? this.parentContainer.innerHTML = `
    <div class="widget-container border-gradient border-gradient-purple">
      <a
        href="https://www.publicsquare.com"
        target="_blank"
        class="psq-link"
        id="psq-link"
      >
        <p class="m-1">Find us on</p>
        <img class="logo" src="./images/PSQ_Logo.png" alt="PublicSquare Logo" />
      </a>
    </div>
    ` : console.log('Widget failed!');
  }

  // Other methods and properties of YourWidget
}

// Export the YourWidget class so it can be used in other files
export { PSQWidget };