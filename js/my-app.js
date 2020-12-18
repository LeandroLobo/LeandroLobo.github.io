  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'Leandro Lobo',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
        {
            path: '/index/',
            url: 'index.html',
        },
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

/******************************INDEX*******************************************/
$$(document).on('page:init', '.page[data-name="index"]', function (e) {
    console.log(e);
    $$('.LI-profile-badge').on('mouseover', function(){
      $$('.LI-view-profile,.LI-field>a,.LI-name>a').addClass('external').attr('target', '_blank');;
    });
})