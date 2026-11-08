from pathlib import Path

from PIL import Image, ImageDraw, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "public" / "avatar.jpg"


def circular(image: Image.Image) -> Image.Image:
    size = image.size[0]
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, size - 1, size - 1), fill=255)
    output = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    output.paste(image, (0, 0), mask)
    return output


def main() -> None:
    source = Image.open(SOURCE).convert("RGB")
    side = min(source.size)
    square = ImageOps.fit(source, (side, side), Image.Resampling.LANCZOS)
    square = square.resize((512, 512), Image.Resampling.LANCZOS)

    square.save(ROOT / "public" / "avatar.jpg", quality=88, optimize=True)
    circular(square).save(ROOT / "app" / "icon.png", optimize=True)

    apple = square.resize((180, 180), Image.Resampling.LANCZOS)
    apple.save(ROOT / "app" / "apple-icon.png", optimize=True)

    sizes = [16, 32, 48]
    icons = [circular(square.resize((size, size), Image.Resampling.LANCZOS)) for size in sizes]
    icons[0].save(
        ROOT / "app" / "favicon.ico",
        format="ICO",
        sizes=[(size, size) for size in sizes],
        append_images=icons[1:],
    )


if __name__ == "__main__":
    main()
