import sys
import re

def scan_file(path):
    with open(path, 'r') as f:
        content = f.read()
    if "Math.random()" in content or "md5" in content.lower():
        print(f"FAIL: Entropy violation in {path}")
        sys.exit(1)
    print(f"PASS: {path} is Stationary")

if __name__ == "__main__":
    scan_file(sys.argv[1])
