// Add items to the application launcher dropdown menu.
window.OPENSHIFT_CONSTANTS.APP_LAUNCHER_NAVIGATION = [{
  title: "Tectonic",                    // The text label
  iconClass: "fa fa-dashboard",          // The icon you want to appear
  href: "http://127.0.0.1:9000",  // Where to go when this item is clicked
  tooltip: 'Admin UI'              // Optional tooltip to display on hover
}];

window.OPENSHIFT_CONSTANTS.SAAS_OFFERINGS = [{
  title: "Dashboard",                         // The text label
  icon: "fa fa-dashboard",                    // The icon you want to appear
  url: "http://example.com/dashboard",        // Where to go when this item is clicked
  description: "Open application dashboard."  // Short description
}, {
  title: "System Status",
  icon: "fa fa-heartbeat",
  url: "http://example.com/status",
  description: "View system alerts and outages."
}, {
  title: "Manage Account",
  icon: "pficon pficon-user",
  url: "http://example.com/account",
  description: "Update email address or password."
}];
