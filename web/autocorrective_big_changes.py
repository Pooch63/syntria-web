import sys
import os
import re
import requests

OLLAMA_API_URL = "http://localhost:12345/v1/completions"
MODEL_NAME = "deepseek-coder-v2:16b"

def read_files(file_paths):
    files_content = {}
    for path in file_paths:
        try:
            with open(path, "r", encoding="utf-8") as f:
                files_content[path] = f.read()
        except FileNotFoundError:
            print(f"Warning: File not found locally: {path}")
    return files_content

def call_ollama(prompt, file_paths=None):
    files_content = {}
    if file_paths:
        files_content = read_files(file_paths)

    messages = [
        {"role": "system", "content": "You are a helpful assistant that edits code."},
        {"role": "user", "content": prompt},
    ]

    # Build the JSON payload per Ollama API spec
    payload = {
        "model": MODEL_NAME,
        "messages": messages,
        "file_contents": files_content,
        "temperature": 0,
        "max_tokens": 4000,
        "stop": None,
    }

    try:
        response = requests.post(OLLAMA_API_URL, json=payload)
        response.raise_for_status()
    except requests.RequestException as e:
        print(f"Error contacting Ollama API: {e}")
        sys.exit(1)

    data = response.json()
    # The output text is usually in choices[0].message.content
    return data["choices"][0]["message"]["content"]

def run_ollama(prompt, files=None):
    return call_ollama(prompt, files)

def generate_codemap():
    print("\n[1/6] Generating CODEMAP.md ...")
    codemap_prompt = (
        "Summarize the purpose of each file in this Next.js repo into CODEMAP.md. "
        "This project uses the `src/app` directory for routes. "
        "Include app routes, API routes, components, lib files, and styles. "
        "Note dynamic segments in route names. "
        "Overwrite CODEMAP.md if it exists."
    )
    output = run_ollama(codemap_prompt)
    with open("CODEMAP.md", "w", encoding="utf-8") as f:
        f.write(output)

def create_plan(change_request):
    print("\n[2/6] Creating step-by-step change plan (with file lists)...")
    plan_prompt = (
        f"Given CODEMAP.md, create a numbered plan to {change_request}. "
        "For each step, clearly list the exact filenames to edit in a 'Files:' line. "
        "Example format:\n"
        "1. Change X\n"
        "Files: src/app/page.tsx, src/components/Header.tsx\n"
        "2. Change Y\n"
        "Files: src/lib/db.ts\n"
        "Save this plan to a file named change_plan.txt in the repo."
    )
    output = run_ollama(plan_prompt, ["CODEMAP.md"])
    with open("change_plan.txt", "w", encoding="utf-8") as f:
        f.write(output)

def parse_plan():
    print("\n[3/6] Parsing plan for steps and file lists...")
    steps = []
    current_step = None
    current_files = []

    with open("change_plan.txt", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if re.match(r"^\d+\.", line):  # New step
                if current_step:
                    steps.append((current_step, current_files))
                current_step = line
                current_files = []
            elif line.startswith("Files:"):
                file_list = [f.strip() for f in line[6:].split(",") if f.strip()]
                current_files.extend(file_list)
            elif line:
                current_step += " " + line

    if current_step:
        steps.append((current_step, current_files))

    return steps

def implement_steps(steps):
    print("\n[4/6] Implementing steps with self-healing...")
    import subprocess

    for i, (description, files) in enumerate(steps, start=1):
        print(f"\n--- Step {i}/{len(steps)}: {description} ---")
        attempt = 1
        files_with_map = ["CODEMAP.md"] + files

        while True:
            print(f"Attempt {attempt} for step {i}...")
            output = run_ollama(
                f"Implement this step: {description}\n"
                "Follow the project conventions. Commit after completing the change.",
                files_with_map
            )

            # Save the output somewhere or print it for debugging
            print(f"Model output:\n{output[:1000]}...")  # print first 1000 chars to avoid overload

            missing_files = re.findall(r"File not found: ([\w\-/\.]+)", output)
            if not missing_files:
                break  # Step succeeded
            else:
                print(f"Missing files detected: {missing_files}")
                files_with_map.extend(missing_files)
                attempt += 1

def build_project():
    import subprocess
    print("\n[5/6] Running `npm run build` to verify...")
    subprocess.run(["npm", "run", "build"], check=True)

def finish():
    print("\n[6/6] All steps implemented and build completed! Run `npm run dev` to test interactively.")

def main():
    if len(sys.argv) < 2:
        print("Usage: python big_change_safe_healing.py \"<your change request>\"")
        sys.exit(1)

    change_request = sys.argv[1]

    if not os.path.isdir(".git"):
        print("Error: No .git directory found. Run this from the root of your Next.js project with git initialized.")
        sys.exit(1)

    generate_codemap()
    create_plan(change_request)
    steps = parse_plan()
    implement_steps(steps)
    build_project()
    finish()

if __name__ == "__main__":
    main()
