#!/usr/bin/env bash
set -euo pipefail

SOURCE_URL="https://raw.githubusercontent.com/yokoffing/Betterfox/main/user.js"
OUTPUT_FILE="betterfox.js"
OVERRIDES_FILE="overrides.js"
FINAL_FILE="user.js"
MARKER="// Enter your personal overrides below this line:"

if command -v curl >/dev/null 2>&1; then
  curl -fsSL "$SOURCE_URL" -o "$OUTPUT_FILE"
elif command -v wget >/dev/null 2>&1; then
  wget -qO "$OUTPUT_FILE" "$SOURCE_URL"
else
  echo "Error: curl or wget is required to download the file." >&2
  exit 1
fi

echo "File saved to: $OUTPUT_FILE"

if [ ! -f "$OVERRIDES_FILE" ]; then
  echo "Error: $OVERRIDES_FILE was not found in the current directory." >&2
  exit 1
fi

TMP_FILE="${FINAL_FILE}.tmp"

if ! awk -v marker="$MARKER" -v overrides="$OVERRIDES_FILE" '
{
  print
  if (!inserted && index($0, marker)) {
    while ((getline line < overrides) > 0) {
      print line
    }
    close(overrides)
    inserted = 1
  }
}
END {
  if (!inserted) {
    exit 42
  }
}
' "$OUTPUT_FILE" > "$TMP_FILE"; then
  rm -f "$TMP_FILE"
  echo "Error: marker line was not found in $OUTPUT_FILE:" >&2
  echo "  $MARKER" >&2
  exit 1
fi

mv "$TMP_FILE" "$FINAL_FILE"
echo "Combined file saved to: $FINAL_FILE"
