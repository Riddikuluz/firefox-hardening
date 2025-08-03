# Firefox Hardening Configuration

A comprehensive Firefox user.js configuration file for enhanced privacy, security, and performance, based on the Betterfox project with additional custom hardening modifications.

## Overview

This configuration applies three main optimization categories:

- **FastFox**: Performance optimizations
- **SecureFox**: Security enhancements
- **PeskyFox**: UI/UX improvements

Plus additional custom hardening for enhanced privacy protection.

## Installation

1. Open Firefox and type `about:profiles` in the address bar
2. Find your current profile (marked as "This is the profile in use")
3. Click "Open Folder" next to "Root Directory"
4. Copy the `user.js` file to this directory
5. Restart Firefox for changes to take effect

## Configuration Sections

### 🚀 FastFox (Performance)

- **Network optimizations**: Increased connection limits and reduced DNS cache expiration
- **Cache management**: Disabled disk cache, optimized memory cache
- **Media enhancements**: Improved media caching and image decoding
- **Speculative loading**: Disabled prefetching for faster loading
- **Experimental features**: CSS grid masonry support enabled

### 🔒 SecureFox (Security)

- **Strict tracking protection**: Enhanced content blocking with strict mode
- **SSL/TLS hardening**: Improved certificate validation and 0-RTT disabled
- **Mixed content blocking**: Enhanced security for HTTPS sites
- **Telemetry completely disabled**: All Firefox telemetry and data collection blocked
- **Safe browsing**: Configured for optimal security with remote downloads disabled
- **OCSP validation**: Optimized certificate checking
- **Global Privacy Control**: Enabled for enhanced privacy signaling

### 🎨 PeskyFox (UI/UX)

- **Clean interface**: Removed promotional content and unnecessary UI elements
- **Enhanced new tab page**: Customized without sponsored content or top stories
- **Improved fullscreen**: Faster transitions and reduced warnings
- **Better downloads**: Enhanced download management with temporary directory usage
- **Mozilla UI cleanup**: Disabled VPN promotions, recommendations, and studies
- **Compact mode**: Available for denser interface

### 🛡️ Custom Hardening Features

#### Privacy & Security Enhancements

- **HTTPS-Only Mode**: Forces HTTPS connections with user warnings in all windows
- **DNS-over-HTTPS (DoH)**: Enforced encrypted DNS queries with strict mode (mode 2)
- **Custom DNS Provider**: Uses BeaconDB for enhanced geolocation services
- **Container tabs**: Enhanced isolation between browsing contexts enabled
- **Social media tracking blocked**: Embedded content from social platforms disabled

#### Additional Privacy Options

The configuration includes commented optional hardening features that can be enabled by uncommenting:

- **Resist Fingerprinting Protocol (RFP)**: Comprehensive fingerprinting protection with automatic canvas blocking
- **WebRTC disabling**: Prevents IP leaks through WebRTC connections
- **Letterboxing**: Viewport fingerprinting protection with 200×100px blocks
- **WebGL restrictions**: Minimal capability mode and debug info blocking
- **Font visibility limitations**: Hide system fonts in private browsing
- **Performance API restrictions**: Disable timing APIs for enhanced privacy
- **WebAudio disabling**: Complete audio fingerprinting protection
- **User Agent override**: Homogeneous UA spoofing options
- **DRM disabling**: Complete DRM removal for maximum privacy

## Key Features

### 🔐 Privacy Protection

- **Firefox Sync disabled**: No data synchronization with Mozilla servers
- **Login manager disabled**: No password storage or autofill
- **Address/credit card autofill disabled**: No form data collection
- **Social media tracking blocked**: Embedded content from social platforms disabled
- **Comprehensive telemetry blocking**: All data collection and experiments disabled
- **Crash reporting disabled**: No crash data sent to Mozilla
- **Safe browsing optimized**: Local protection without remote queries

### ⚡ Performance Optimizations

- **Font rendering**: DirectWrite optimizations (Windows-specific)
- **Cache optimizations**: Memory-focused caching with disabled disk cache
- **Network enhancements**: Increased connection limits and optimized SSL tokens
- **Media improvements**: Enhanced caching and decoding parameters
- **Cross-platform compatibility**: Works seamlessly on Windows, macOS, and Linux

### 🎯 User Experience

- **Mouse behavior**: Autoscroll enabled, middle-click paste disabled for Linux compatibility
- **Bookmarks toolbar**: Always visible for quick access
- **Session management**: Previous session restoration on startup
- **Download behavior**: Always prompt for download location
- **Fullscreen experience**: Instant transitions without warnings
- **Compact mode**: Available for users preferring denser interfaces

## Important Notes

⚠️ **Compatibility**: Some settings may break certain websites or features. Test thoroughly with your browsing habits.

⚠️ **Updates**: Changes to `about:config` while Firefox is running will be overwritten when Firefox restarts. Always edit the `user.js` file directly.

⚠️ **Backup**: Keep a backup of your current Firefox profile before applying these changes.

⚠️ **DRM Content**: DRM is enabled by default for streaming services. Disable in optional hardening if maximum privacy is preferred over media compatibility.

⚠️ **Fingerprinting Protection**: RFP and WebRTC are currently disabled for compatibility. Enable in optional hardening for maximum privacy.

## Testing Your Configuration

After applying the configuration:

1. **Verify settings**: Visit `about:config` to confirm preferences are applied
2. **Website compatibility**: Test your most-used websites for functionality
3. **Privacy testing**: Check protection at [Cover Your Tracks](https://coveryourtracks.eff.org/)
4. **Fingerprinting verification**: Test uniqueness at [AmIUnique](https://amiunique.org/)
5. **DNS verification**: Confirm DoH is working at [Cloudflare DNS Test](https://1.1.1.1/help)
6. **WebRTC leak test**: Verify IP protection at [BrowserLeaks WebRTC](https://browserleaks.com/webrtc)

## Troubleshooting

### Common Issues

**Website functionality problems:**

- Try disabling RFP temporarily if enabled: `privacy.resistFingerprinting = false`
- Add problematic sites to container exceptions
- Enable WebRTC if video calling is needed

**Performance concerns:**

- Adjust memory cache limits if experiencing issues on low-RAM systems
- Re-enable disk cache for slower connections: `browser.cache.disk.enable = true`
- Modify network connection limits based on your internet speed

**Streaming service issues:**

- Ensure DRM preferences remain enabled for streaming compatibility
- Check that `media.eme.enabled = true` in about:config
- Restart Firefox after any DRM-related changes

## Current Configuration Status

✅ **Currently Active Features:**

- HTTPS-Only Mode enforced globally
- DNS-over-HTTPS in strict mode (mode 2)
- Complete telemetry elimination
- Container tabs enabled and UI visible
- Social media tracking blocked
- Login manager and autofill disabled
- Firefox Sync disabled
- Custom BeaconDB geolocation provider

⚠️ **Optional Features (Currently Commented - Available for Manual Activation):**

- **Resist Fingerprinting Protocol (RFP)**: Complete fingerprinting protection
- **WebRTC disabling**: IP leak prevention (will break video calling)
- **Letterboxing**: Viewport fingerprinting protection
- **DRM disabling**: Maximum privacy (will break streaming services)
- **WebGL/WebAudio hardening**: May break multimedia websites
- **Performance API restrictions**: May break timing-dependent applications
- **User Agent override**: Homogeneous spoofing

## Optional Hardening

For maximum privacy, consider uncommenting these additional features in the user.js:

### Maximum Privacy Configuration

#### Enable Resist Fingerprinting Protocol

```javascript
// Enable core RFP with comprehensive protection
user_pref("privacy.resistFingerprinting", true);

// Automatic canvas blocking without user prompts
user_pref(
  "privacy.resistFingerprinting.autoDeclineNoUserInputCanvasPrompts",
  true
);

// Block extension detection
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);

// Letterboxing with 200×100px viewport blocks
user_pref("privacy.resistFingerprinting.letterboxing", true);

// Timer jitter adjustment (microseconds)
user_pref("privacy.resistFingerprinting.reduceTimerPrecision.jitterMax", 1000);
```

#### WebRTC Protection

```javascript
// Disable WebRTC completely to prevent IP leaks
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.default_address_only", true);
```

#### Advanced Privacy Features

```javascript
// Hide system fonts in private mode
user_pref("layout.css.font-visibility.private", 2);

// Disable performance timing APIs
user_pref("dom.enable_performance", false);
user_pref("dom.enable_user_timing", false);

// Block WebAudio fingerprinting
user_pref("dom.webaudio.enabled", false);
```

#### WebGL Restrictions

```javascript
// Minimal WebGL capability mode
user_pref("webgl.enable-debug-renderer-info", false);
user_pref("webgl.min_capability_mode", true);
```

#### Maximum Privacy (Will Break Streaming Services)

```javascript
// Disable DRM completely for maximum privacy
user_pref("browser.eme.ui.enabled", false);
user_pref("media.eme.enabled", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.gmp-manager.updateEnabled", false);
```

#### User Agent Spoofing

```javascript
// Homogeneous UA override (example for Firefox 102)
user_pref(
  "general.useragent.override",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0"
);
```

### ⚠️ **Important Notes on Optional Features:**

- **RFP (Resist Fingerprinting)**: Provides excellent privacy but may break some websites and change browser behavior
- **WebRTC Disabling**: Will break video calling, WebRTC games, and peer-to-peer applications
- **Letterboxing**: May cause website layout issues but provides excellent fingerprinting protection
- **DRM Disabling**: Will break Netflix, Spotify, Amazon Prime, and other streaming services
- **WebAudio Blocking**: May break websites with audio processing or music applications
- **WebGL Restrictions**: Could affect 3D graphics, games, and some data visualization sites
- **Performance API Restrictions**: May break timing-dependent web applications

## Activation Guide

To enable optional hardening features:

1. Open the `user.js` file in a text editor
2. Find the desired preference in the "OPTIONAL HARDENING" section
3. Remove the `//` at the beginning of the line to uncomment it
4. Save the file and restart Firefox
5. Test your frequently used websites for compatibility

## Credits

- Based on [Betterfox](https://github.com/yokoffing/Betterfox) project
- Additional hardening inspired by [LibreWolf](https://librewolf.net/)
- Privacy testing resources from [PrivacyGuides](https://privacyguides.org/)
