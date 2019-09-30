const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute( 'src', siteContent["nav"]["img-src"] )

//============================= MVP =================================================

//------- 1
const nav         = document.querySelector   ( 'nav' );
const navLinks    = document.querySelectorAll( "nav a" );
const navValues   = Object.values            (siteContent.nav);
const cta_h1      = document.querySelector   ( '.cta-text h1' );
const cta_button  = document.querySelector   ( '.cta-text button' );
const cta_img     = document.querySelector   ( '#cta-img' );
const top_h4s     = document.querySelectorAll( '.top-content .text-content h4' );
const top_ps      = document.querySelectorAll( '.top-content .text-content p' );
const mid_img     = document.querySelector   ( '#middle-img' );
const btm_h4s     = document.querySelectorAll( '.bottom-content .text-content h4' );
const btm_ps      = document.querySelectorAll( '.bottom-content .text-content p' );
const con_h4      = document.querySelector   ( '.contact h4' );
const con_ps      = document.querySelectorAll( '.contact p' );
const foot        = document.querySelector   ( 'footer p' );

//------- 2

navLinks.forEach( (e,i) => { e.textContent = navValues[i]; } );

cta_h1.textContent = siteContent.cta.h1;

cta_button.textContent = siteContent.cta.button;

cta_img.setAttribute( 'src', siteContent.cta["img-src"] );

top_h4s.forEach( (e,i) => {
   e.textContent = i === 0 ? siteContent["main-content"]["features-h4"] : siteContent["main-content"]["about-h4"];
});

top_ps.forEach( (e,i) => {
   e.textContent = i === 0 ? siteContent["main-content"]["features-content"] : siteContent["main-content"]["about-content"];
});

mid_img.setAttribute( 'src', siteContent["main-content"]["middle-img-src"] );

btm_h4s.forEach( (e,i) => {
   switch (i) {
      case 0:
         e.textContent = siteContent["main-content"]["services-h4"];
         break;
      case 1:
         e.textContent = siteContent["main-content"]["product-h4"];
         break;
      case 2:
         e.textContent = siteContent["main-content"]["vision-h4"];
         break;
      default:
         break;
   }
});

btm_ps.forEach( (e,i) => {
   switch (i) {
      case 0:
         e.textContent = siteContent["main-content"]["services-content"];
         break;
      case 1:
         e.textContent = siteContent["main-content"]["product-content"];
         break;
      case 2:
         e.textContent = siteContent["main-content"]["vision-content"];
         break;
      default:
         break;
   }
});

con_h4.textContent = siteContent.contact["contact-h4"];

con_ps.forEach( (e,i) => {
   switch (i) {
      case 0:
         e.textContent = siteContent.contact.address;
         break;
      case 1:
         e.textContent = siteContent.contact.phone;
         break;
      case 2:
         e.textContent = siteContent.contact.email;
         break;
      default:
         break;
   }
});

foot.textContent = `\u00a9 ${siteContent.footer.copyright}`;

//------- 3
navLinks.forEach( (e) => { e.style.color = 'green'; } );
const pre  = document.createElement('a');
const post = document.createElement('a');

pre.setAttribute( 'href', "#" );
pre.textContent = 'pre';
post.setAttribute( 'href', "#" );
post.textContent = 'post';

nav.prepend( pre );
nav.appendChild( post );

//============================= Stretch =================================================
pre.style.marginLeft = '2rem';






















