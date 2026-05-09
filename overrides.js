/** CONTAINERS ***/
// PREF: enable container tabs
user_pref("privacy.userContext.enabled", true);

/** SYNC & ACCOUNTS ***/
// PREF: disable Firefox Sync
user_pref("identity.fxaccounts.enabled", false);
// PREF: disable the Firefox View tour from popping up
user_pref("browser.firefox-view.feature-tour", '{"screen":"","complete":true}');

/** LOGIN & AUTOFILL ***/
// PREF: disable login manager
user_pref("signon.rememberSignons", false);
// PREF: disable address and credit card manager
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

/** SOCIAL MEDIA ***/
// PREF: do not allow embedded tweets, Instagram, Reddit, and Tiktok posts
user_pref("urlclassifier.trackingSkipURLs", "");
user_pref("urlclassifier.features.socialtracking.skipURLs", "");

/** HTTPS & DNS ***/
// PREF: enable HTTPS-Only Mode
// Warn me before loading sites that don't support HTTPS
// in both Normal and Private Browsing windows.
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);
// PREF: enforce DNS-over-HTTPS (DoH)
user_pref("network.trr.mode", 2);
user_pref("network.trr.max-fails", 5);

/** DOWNLOADS ***/
// PREF: always ask where to download
// true = Direct download
// false = The user is asked what to do
user_pref("browser.download.useDownloadDir", false);

/** STARTUP & SESSION ***/
// PREF: restore previous session on startup
// 0 = Blank page
// 1 = Home page
// 2 = Home page and additional windows
// 3 = Restore previous session
user_pref("browser.startup.page", 3);

/** BOOKMARKS ***/
// PREF: always show the bookmarks toolbar
// Controls the visibility of the bookmarks toolbar:
// "always" = Always visible
// "never" = Never visible
// "newtab" = Visible only on the New Tab page
user_pref("browser.toolbars.bookmarks.visibility", "always");

/** MOUSE BEHAVIOR [LINUX] ***/
// PREF: enable autoscroll (automatic scroll with middle click)
user_pref("general.autoScroll", true);
// PREF: prevent middle click from pasting clipboard content on page
user_pref("middlemouse.paste", false);
