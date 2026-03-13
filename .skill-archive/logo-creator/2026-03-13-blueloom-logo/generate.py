#!/usr/bin/env python3
"""
Gemini image generation script for logo batch creation.
Usage: python3 generate.py --count 20
Requires: GEMINI_API_KEY environment variable
"""

import os
import sys
import time
import argparse
from pathlib import Path
from google import genai
from google.genai import types

PROMPT = (
    "Minimalist geometric vector logo for 'BlueLoom Ventures', "
    "abstract woven network symbol inspired by a loom representing interconnected systems and automation, "
    "modern technology consulting brand, blue and teal color palette, flat design, white background, "
    "simple recognizable brand mark, scalable icon for website and favicon, "
    "professional SaaS startup aesthetic, high contrast, very simple shapes, minimal detail, vector friendly"
)

OUTPUT_DIR = Path(__file__).parent

MODEL = "gemini-3-pro-image-preview"


def generate_logos(count: int, start_index: int = 1, delay: float = 4.0):
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("ERROR: GEMINI_API_KEY environment variable not set.")
        sys.exit(1)

    client = genai.Client(api_key=api_key)

    print(f"Generating {count} logo(s) starting at index {start_index}...")
    print(f"Model: {MODEL}")
    print(f"Output directory: {OUTPUT_DIR}\n")

    generated = 0
    for i in range(start_index, start_index + count):
        filename = OUTPUT_DIR / f"logo-{i:02d}.png"
        print(f"[{i - start_index + 1}/{count}] Generating {filename.name}...", end=" ", flush=True)

        try:
            response = client.models.generate_content(
                model=MODEL,
                contents=PROMPT,
                config=types.GenerateContentConfig(
                    response_modalities=["IMAGE", "TEXT"],
                ),
            )

            image_saved = False
            for part in response.candidates[0].content.parts:
                if part.inline_data and part.inline_data.mime_type.startswith("image/"):
                    image_bytes = part.inline_data.data
                    with open(filename, "wb") as f:
                        f.write(image_bytes)
                    print(f"saved ({len(image_bytes) // 1024}KB)")
                    generated += 1
                    image_saved = True
                    break

            if not image_saved:
                print("no image in response (skipped)")

        except Exception as e:
            print(f"ERROR: {e}")

        if i < start_index + count - 1:
            time.sleep(delay)

    print(f"\nDone. {generated}/{count} logos saved to {OUTPUT_DIR}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate logo variations using Gemini Imagen")
    parser.add_argument("--count", type=int, default=20, help="Number of logos to generate")
    parser.add_argument("--start", type=int, default=1, help="Starting index for filenames")
    parser.add_argument("--delay", type=float, default=2.0, help="Delay between requests (seconds)")
    args = parser.parse_args()

    generate_logos(count=args.count, start_index=args.start, delay=args.delay)
