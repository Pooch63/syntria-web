#!/usr/bin/env bash
set -e

# echo "=== Installing Ollama ==="
# if [[ "$OSTYPE" == "darwin"* ]]; then
#     # macOS
#     curl -fsSL https://ollama.com/install.sh | sh
# elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
#     # Linux
#     curl -fsSL https://ollama.com/install.sh | sh
# else
#     echo "Unsupported OS. Ollama supports macOS, Linux, and Windows via WSL2."
#     exit 1
# fi

echo "=== Starting Ollama service in background ==="
# Launch Ollama service in the background
ollama serve &

echo "=== Pulling DeepSeek-Coder-V2:16B model (this may take a while) ==="
ollama pull deepseek-coder-v2:16b

echo "=== Configuring autocorrective_big_changes.py to use Ollama model ==="
# Create Python script if not present
if [[ ! -f autocorrective_big_changes.py ]]; then
    echo "Error: autocorrective_big_changes.py not found in current directory."
    echo "Run this script from the root of your Next.js project where autocorrective_big_changes.py is located."
    exit 1
fi

# Update the MODEL variable in Python script
sed -i.bak 's/^MODEL = .*/MODEL = "ollama\/deepseek-coder-v2:16b"/' autocorrective_big_changes.py

echo "=== Done! ==="
echo "You can now run big codebase edits for free using the local DeepSeek model."
echo ""
echo "Example:"
echo "  python autocorrective_big_changes.py \"Refactor authentication flow to use JWT instead of sessions\""
echo ""
echo "Ollama will run DeepSeek locally — no API fees."
