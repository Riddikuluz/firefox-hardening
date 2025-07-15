# Firefox Hardening Configuration

A comprehensive Firefox user.js configuration file for enhanced privacy, security, and performance, based on the Betterfox project with additional custom hardening modifications.

## Overview

This configuration applies three main optimization categories:

- **FastFox**: Performance optimizations
- **SecureFox**: Security enhancements
- **PeskyFox**: UI/UX improvements

Plus additional custom hardening for enhanced privacy protection.

## Installation

### Method 1: Direct Access via Firefox

1. Open Firefox and type `about:profiles` in the address bar
2. Find your current profile (marked as "This is the profile in use")
3. Click "Open Folder" next to "Root Directory"
4. Copy the `user.js` file to this directory
5. Restart Firefox for changes to take effect

### Method 2: Manual Profile Location

1. Locate your Firefox profile directory:

   - **Windows**: `%APPDATA%\Mozilla\Firefox\Profiles\[profile-name]`
   - **macOS**: `~/Library/Application Support/Firefox/Profiles/[profile-name]`
   - **Linux**: `~/.mozilla/firefox/[profile-name]`

2. Copy the `user.js` file to your Firefox profile directory

3. Restart Firefox for changes to take effect

💡 **Tip**: The `about:profiles` method is the easiest way to find your active profile directory without manually navigating through system folders.

## Configuration Sections

### 🚀 FastFox (Performance)

- **Network optimizations**: Increased connection limits and reduced DNS cache expiration
- **Cache management**: Disabled disk cache, optimized memory cache
- **Media enhancements**: Improved media caching and image decoding
- **Speculative loading**: Disabled prefetching for faster loading

### 🔒 SecureFox (Security)

- **Strict tracking protection**: Enhanced content blocking
- **SSL/TLS hardening**: Improved certificate validation
- **Mixed content blocking**: Enhanced security for HTTPS sites
- **Telemetry disabled**: All Firefox telemetry and data collection disabled
- **Safe browsing**: Configured for optimal security

### 🎨 PeskyFox (UI/UX)

- **Clean interface**: Removed promotional content and unnecessary UI elements
- **Enhanced new tab page**: Customized without sponsored content
- **Improved fullscreen**: Faster transitions and reduced warnings
- **Better downloads**: Enhanced download management

### 🛡️ Custom Hardening Features

#### Privacy & Fingerprinting Protection

- **Resist Fingerprinting Protocol (RFP)**: Comprehensive fingerprinting protection
- **WebRTC disabled**: Prevents IP leaks through WebRTC
- **Canvas protection**: Automatic rejection of canvas fingerprinting attempts
- **Extension detection blocking**: Prevents websites from detecting installed extensions

#### Security Enhancements

- **HTTPS-Only Mode**: Forces HTTPS connections with user warnings
- **DNS-over-HTTPS (DoH)**: Enforced encrypted DNS queries
- **DRM Support**: Enabled for media content (Netflix, etc.)
- **Container tabs**: Enhanced isolation between browsing contexts

#### Additional Privacy Options

The configuration includes commented optional hardening features:

- Letterboxing for viewport fingerprinting protection
- WebGL restrictions
- Font visibility limitations
- Performance API restrictions
- WebAudio disabling

## Key Features

### 🔐 Privacy Protection

- Firefox Sync disabled
- Login manager disabled
- Address/credit card autofill disabled
- Social media tracking blocked
- Comprehensive telemetry blocking

### ⚡ Performance Optimizations

- DirectWrite font rendering (Windows)
- Optimized cache settings
- Enhanced network configurations
- Reduced timer precision for security

### 🎯 User Experience

- Autoscroll enabled
- Middle-click paste disabled
- Bookmarks toolbar always visible
- Previous session restoration
- Compact mode available

## Important Notes

⚠️ **Compatibility**: Some settings may break certain websites or features. Test thoroughly with your browsing habits.

⚠️ **Updates**: Changes to `about:config` while Firefox is running will be overwritten when Firefox restarts. Always edit the `user.js` file directly.

⚠️ **Backup**: Keep a backup of your current Firefox profile before applying these changes.

## Testing Your Configuration

After applying the configuration:

1. Visit `about:config` to verify settings are applied
2. Test your most-used websites for compatibility
3. Check privacy protection at [Cover Your Tracks](https://coveryourtracks.eff.org/)
4. Verify fingerprinting protection at [AmIUnique](https://amiunique.org/)

## Troubleshooting

If you experience issues:

1. **Website breaks**: Try disabling RFP temporarily or add site to exceptions
2. **Performance issues**: Adjust cache settings or network limits
3. **Missing features**: Re-enable specific preferences as needed

## Credits

- Based on [Betterfox](https://github.com/yokoffing/Betterfox) project
- Additional hardening inspired by [LibreWolf](https://librewolf.net/)
- Configuration version: 138

## License

This configuration is provided as-is for educational and personal use. Test thoroughly before deploying in production environments.
