# Firefox Hardening Configuration

Firefox hardening profile based on Betterfox plus custom overrides.

## What this repository contains

- `buildScript.sh`: builds the final `user.js`
- `betterfox.js`: upstream Betterfox `user.js` downloaded by the script
- `overrides.js`: Custom preferences
- `user.js`: final file to copy into your Firefox profile

## Build the final user.js

The script is Bash (`#!/usr/bin/env bash`). From fish, run it with Bash or make it executable.

```bash
# Works from fish
bash ./buildScript.sh

# Optional: make executable once
chmod +x ./buildScript.sh
./buildScript.sh
```

What it does:

1. Downloads Betterfox `user.js` into `betterfox.js`
2. Finds `// Enter your personal overrides below this line:`
3. Inserts all lines from `overrides.js` after that marker
4. Writes the result to `user.js`

If the marker is missing, the script exits with an error.

## Install in Firefox

1. Open `about:profiles`
2. Open the active profile root directory
3. Copy `user.js` to that directory
4. Restart Firefox

Recommended: install uBlock Origin and use [yokoffing filterlists](https://github.com/yokoffing/filterlists#guidelines).

## Highlights

- Betterfox base (FastFox, SecureFox, PeskyFox)
- HTTPS-Only Mode enabled
- DNS-over-HTTPS enabled (`network.trr.mode = 2`)
- Telemetry and experiments disabled
- Firefox Sync disabled
- Login manager and form autofill disabled
- Container tabs enabled
- Social embed tracking restrictions
- Linux-friendly mouse behavior overrides

## Maintenance Notes

- Changes made in `about:config` can be overwritten on restart by `user.js`
- In this workflow, edit `overrides.js` and rebuild with `bash ./buildScript.sh`
- Back up your Firefox profile before applying major changes
- For stronger hardening defaults (e.g., anti-fingerprinting and stricter privacy), consider using [LibreWolf](https://librewolf.net/)

## Validate your setup

1. Verify key prefs in `about:config`
2. Test your usual websites for breakage
3. Check privacy at [Cover Your Tracks](https://coveryourtracks.eff.org/)
4. Check DNS behavior at [Cloudflare DNS Test](https://1.1.1.1/help)
5. Check WebRTC leaks at [BrowserLeaks WebRTC](https://browserleaks.com/webrtc)

## Credits

- Based on [Betterfox](https://github.com/yokoffing/Betterfox)
- Privacy resources from [PrivacyGuides](https://privacyguides.org/)
