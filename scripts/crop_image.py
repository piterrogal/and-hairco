from PIL import Image
import os
import glob

# Find the project root by looking for public folder
cwd = os.getcwd()
print(f"Current working directory: {cwd}")

# List contents of current directory
print(f"Contents of cwd: {os.listdir(cwd)}")

# Try to find public folder
public_candidates = glob.glob("**/public", recursive=True)
print(f"Public folder candidates: {public_candidates}")

# Use direct path
hair1_path = "public/hair1.jpg"
hair2_path = "public/hair2.jpg"

print(f"Hair1 exists: {os.path.exists(hair1_path)}")
print(f"Hair2 exists: {os.path.exists(hair2_path)}")

# Get dimensions of hair1 (the reference image - red hair)
with Image.open(hair1_path) as img1:
    w1, h1 = img1.size
    aspect_ratio = w1 / h1
    print(f"Hair1 dimensions: {w1}x{h1}, aspect ratio: {aspect_ratio:.3f}")

# Open hair2 and crop to match hair1's aspect ratio
with Image.open(hair2_path) as img2:
    w2, h2 = img2.size
    print(f"Hair2 original dimensions: {w2}x{h2}")
    
    # Calculate new dimensions maintaining hair1's aspect ratio
    # We'll crop from center
    target_aspect = aspect_ratio
    current_aspect = w2 / h2
    
    if current_aspect > target_aspect:
        # Image is wider than target, crop width
        new_width = int(h2 * target_aspect)
        new_height = h2
        left = (w2 - new_width) // 2
        top = 0
        right = left + new_width
        bottom = h2
    else:
        # Image is taller than target, crop height
        new_width = w2
        new_height = int(w2 / target_aspect)
        left = 0
        top = (h2 - new_height) // 2
        right = w2
        bottom = top + new_height
    
    print(f"Cropping to: {new_width}x{new_height}")
    print(f"Crop box: left={left}, top={top}, right={right}, bottom={bottom}")
    
    # Crop and save
    cropped = img2.crop((left, top, right, bottom))
    
    # Resize to match hair1 dimensions exactly
    cropped_resized = cropped.resize((w1, h1), Image.LANCZOS)
    cropped_resized.save(hair2_path, quality=95)
    print(f"Hair2 cropped and resized to {w1}x{h1}")
    print("Done!")
