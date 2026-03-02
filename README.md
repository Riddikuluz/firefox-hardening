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

**After restarting Firefox:**

6. **Get an adblocker**: Install uBlock Origin with this recommended filters from [yokoffing's filterlists](https://github.com/yokoffing/filterlists#guidelines)

## Configuration Sections

### 🚀 FastFox (Performance)

- **Canvas acceleration**: Hardware acceleration for canvas operations with optimized cache
- **WebRender optimization**: Layer compositor enabled for improved rendering performance
- **Cache management**: Disabled disk cache, optimized memory cache
- **Media enhancements**: Improved media caching and image decoding
- **Speculative loading**: Disabled prefetching for faster loading

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
- **AI features blocked**: All Firefox AI and ML features disabled including chat, smart groups, and link previews
- **Compact mode**: Available for denser interface

### 🛡️ Custom Hardening Features

#### Privacy & Security Enhancements

- **HTTPS-Only Mode**: Forces HTTPS connections with user warnings in all windows
- **DNS-over-HTTPS (DoH)**: Enforced encrypted DNS queries with strict mode (mode 2)
- **Custom DNS Provider**: Uses BeaconDB for enhanced geolocation services
- **Container tabs**: Enhanced isolation between browsing contexts enabled
- **Social media tracking blocked**: Embedded content from social platforms disabled

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

⚠️ **Advanced Privacy Features**: For maximum privacy features like Resist Fingerprinting Protocol (RFP) and WebRTC blocking, consider using [LibreWolf](https://librewolf.net/) instead.

## Testing Your Configuration

After applying the configuration:

1. **Verify settings**: Visit `about:config` to confirm preferences are applied
2. **Website compatibility**: Test your most-used websites for functionality
3. **Privacy testing**: Check protection at [Cover Your Tracks](https://coveryourtracks.eff.org/)
4. **Fingerprinting verification**: Test uniqueness at [AmIUnique](https://amiunique.org/)
5. **DNS verification**: Confirm DoH is working at [Cloudflare DNS Test](https://1.1.1.1/help)
6. **WebRTC leak test**: Verify IP protection at [BrowserLeaks WebRTC](https://browserleaks.com/webrtc)

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

💡 **For Advanced Privacy Hardening:**

For users seeking maximum privacy protection with features like Resist Fingerprinting Protocol (RFP), WebRTC blocking, letterboxing, DRM disabling, and other advanced hardening options, consider using [LibreWolf](https://librewolf.net/) - a privacy-focused Firefox fork with these features enabled by default.

## Credits

- Based on [Betterfox](https://github.com/yokoffing/Betterfox) project
- Privacy testing resources from [PrivacyGuides](https://privacyguides.org/)
