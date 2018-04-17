// Append a new primary nav item.  This is a simple direct navigation item
// with no secondary menu.
window.OPENSHIFT_CONSTANTS.PROJECT_NAVIGATION.push({
  label: "Dashboard",           // The text label
  iconClass: "fa fa-dashboard", // The icon you want to appear
  href: "http://www.google.com"            // Where to go when this nav item is clicked.
                                // Relative URLs are pre-pended with the path
                                // '/project/<project-name>'
});

// Splice a primary nav item to a specific spot in the list.  This primary item has
// a secondary menu.
window.OPENSHIFT_CONSTANTS.PROJECT_NAVIGATION.splice(2, 0, { // Insert at the third spot
  label: "Git",
  iconClass: "fa fa-code",
  secondaryNavSections: [       // Instead of an href, a sub-menu can be defined
    {
      items: [
        {
          label: "Branches",
          href: "/git/branches",
          prefixes: [
            "/git/branches/"     // Defines prefix URL patterns that will cause
                                 // this nav item to show the active state, so
                                 // tertiary or lower pages show the right context
          ]
        }
      ]
    },
    {
      header: "Collaboration",   // Sections within a sub-menu can have an optional header
      items: [
        {
          label: "Pull Requests",
          href: "/git/pull-requests",
          prefixes: [
            "/git/pull-requests/"
          ]
        }
      ]
    }
  ]
});

// Modify an existing menu item
var applicationsMenu = _.find(window.OPENSHIFT_CONSTANTS.PROJECT_NAVIGATION, { label: 'Applications' });
applicationsMenu.secondaryNavSections.push({ // Add a new secondary nav section to the Applications menu
  // my secondary nav section
});
