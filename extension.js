// Add items to the application launcher dropdown menu.
window.OPENSHIFT_CONSTANTS.APP_LAUNCHER_NAVIGATION = [{
  title: "Tectonic",                    // The text label
  iconClass: "fa fa-dashboard",          // The icon you want to appear
  href: "http://127.0.0.1:9000",  // Where to go when this item is clicked
  tooltip: 'Admin UI'              // Optional tooltip to display on hover
},
{
  title: "Tectonic 2",                    // The text label
  iconClass: "fa fa-dashboard",          // The icon you want to appear
  href: "http://127.0.0.1:9000",  // Where to go when this item is clicked
  tooltip: 'Admin UI'              // Optional tooltip to display on hover
}];

window.OPENSHIFT_CONSTANTS.CATALOG_HELP_RESOURCES.push({
  title: 'Blog',
  href: 'https://blog.openshift.com'
});

angular
  .module('openshiftOnlineExtensions', ['openshiftConsole'])
  .run([
    'extensionRegistry',
    function(extensionRegistry) {

      var system_status_elem = $('<a href="http://status.openshift.com/" target="_blank" class="nav-item-iconic system-status project-action-btn">');
      var system_status_elem_mobile = $('<div row flex class="navbar-flex-btn system-status-mobile">');


      $.getJSON("https://m0sg3q4t415n.statuspage.io/api/v2/summary.json", function (data) {
        var n = (data.incidents || [ ]).length;
        if (n > 0) {
          var issueStr = n + ' open issue';
          if (n !== 1) {
            issueStr += "s";
          }
          $('<span title="System Status" class="fa status-icon pficon-warning-triangle-o"></span>').appendTo(system_status_elem);
          $('<span class="status-issue">' + issueStr + '</span>').appendTo(system_status_elem);

          system_status_elem_mobile.append(system_status_elem.clone());

          // only add the extension if there is something to show so we
          // do not generate empty nodes if no issues
          extensionRegistry
            .add('nav-system-status', function() {
              return [{
                type: 'dom',
                node: system_status_elem
              }];
            });

          extensionRegistry
            .add('nav-system-status-mobile', function() {
              return [{
                type: 'dom',
                node: system_status_elem_mobile
              }];
            });

        }
      });

      extensionRegistry
        .add('nav-help-dropdown', function() {
          return [
            {
              type: 'dom',
              node: '<li><a href="https://bugzilla.redhat.com/enter_bug.cgi?product=OpenShift%20Online" target="_blank">Report a Bug</a></li>'
            }, {
              type: 'dom',
              node: '<li><a href="https://stackoverflow.com/tags/openshift" target="_blank">Stack Overflow</a></li>'
            }, {
              type: 'dom',
              node: '<li class="divider"></li>'
            }, {
              type: 'dom',
              node: '<li><a href="http://status.openshift.com/" target="_blank">System Status</a></li>'
            }
          ];
        });

    }
  ]);

angular
  .module('mymenu', ['openshiftConsole'])
  .run([
    'extensionRegistry',
    function(extensionRegistry) {
      extensionRegistry
        .add('nav-help-dropdown', function() {
          return [
            {
              type: 'dom',
              node: '<li><a href="http://www.example.com/report" target="_blank">Report a Bug</a></li>'
            }, {
              type: 'dom',
              node: '<li class="divider"></li>'  // If you want a horizontal divider to appear in the menu
            }, {
              type: 'dom',
              node: '<li><a href="http://www.example.com/status" target="_blank">System Status</a></li>'
            }
          ];
        });
    }
  ]);

hawtioPluginLoader.addModule('mymenu');


pluginLoader.addModule('openshiftOnlineExtensions');

// Append a new primary nav item.  This is a simple direct navigation item
// with no secondary menu.
window.OPENSHIFT_CONSTANTS.PROJECT_NAVIGATION.push({
  label: "Dashboard",           // The text label
  iconClass: "fa fa-dashboard", // The icon you want to appear
  href: "/dashboard"            // Where to go when this nav item is clicked.
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

// Add a primary item to the top of the list.  This primary item is shown conditionally.
window.OPENSHIFT_CONSTANTS.PROJECT_NAVIGATION.unshift({
  label: "Getting Started",
  iconClass: "pficon pficon-screen",
  href: "/getting-started",
  prefixes: [                   // Primary nav items can also specify prefixes to trigger
    "/getting-started/"         // active state
  ],
  isValid: function() {         // Primary or secondary items can define an isValid
    return isNewUser;           // function. If present it will be called to test whether
                                // the item should be shown, it should return a boolean
  }
});

// Modify an existing menu item
var applicationsMenu = _.find(window.OPENSHIFT_CONSTANTS.PROJECT_NAVIGATION, { label: 'Applications' });
applicationsMenu.secondaryNavSections.push({ // Add a new secondary nav section to the Applications menu
  // my secondary nav section
});


