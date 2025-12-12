#!/bin/bash

# Convert image sequence to optimized APNG
# First render an image sequence with Remotion Studio for animated-logo-banner-dark
# Usage: ./create-apng.sh <input-dir> <output-file>

INPUT_DIR=${1:-"out/animated-logo-banner-dark"}
OUTPUT_FILE=${2:-"animated-logo-banner-dark.apng"}

ffmpeg -y \
  -framerate 30 \
  -i "$INPUT_DIR/element-%02d.png" \
  -plays 1 \
  -pix_fmt rgba \
  -compression_level 9 \
  -pred mixed \
  -f apng \
  "$OUTPUT_FILE"

echo "Created $OUTPUT_FILE"
