# Repo-specific instructions for AI coding agents

This file gives concise, actionable guidance to an AI coding assistant working in this repository. Keep instructions short, reference real files, and avoid changing judge/requirements documents in `resources/`.

1. Big picture
- Purpose: a hackathon submission template for the 42Prague DigiEduHack event. The canonical user-facing guide is `README.md` at the repo root.
- Intended structure: teams add their solution code and artifacts to the repo (recommended locations: root or `srcs/`), include dependencies, and place the pitch deck in `pitch/` and a completed solution canvas in the repo root.

2. Key files & directories (examples to reference)
- `README.md` — submission workflow (fork → branch named after team → push → PR).
- `resources/` — contains judge rules and the mandatory `Digi_Edu_Hack_Solution_Canvas_2025.pdf`. Do NOT modify these PDFs; they are source-of-truth for submissions.
- `pitch/` — expected location for pitch deck (PDF/PPTX). Current placeholder: `pitch/tmp_pdf`.
- `srcs/` — suggested place for project source code (current placeholder: `srcs/tmp_whatever`). Teams may also use top-level folders.
- `ingest_service/` — a service scaffold (contains `main.py`, `Dockerfile`, `requirements.txt`). These files are currently empty placeholders; if you implement a service, follow standard Python service conventions here.

3. What you (the AI) should do first
- Read `README.md` and the two PDFs in `resources/` to understand submission constraints and judging criteria before proposing features or changes.
- Do not alter files under `resources/` or change the `Digi_Edu_Hack_Solution_Canvas_2025.pdf` unless the user explicitly asks to add their completed PDF to the repo root as part of a submission.

4. Coding & scaffold conventions to follow (repo-specific)
- If you add a Python service, place it under `ingest_service/` and provide three artifacts: `main.py` (entrypoint), `requirements.txt` (dependencies), and `Dockerfile` (container image). The repo currently uses these filenames as conventions.
- If you add a top-level "app" or library, prefer `srcs/` for team code so reviewers can find submissions quickly.
- Keep pitch materials in `pitch/` and the filled solution canvas PDF in the repo root (per README submission steps).

5. Developer workflows (explicit from README)
- Branching: create a new branch named after your team. Commit and push to your fork, then open a pull request where the PR title = Team Name.
- Git commands (examples from README):
  - git clone <your-fork-url>
  - git checkout -b your-team-name
  - git add .; git commit -m "Add project files"; git push origin your-team-name

6. Running & testing (minimal, conservative guidance)
- There are no project-specific run scripts in the repo. If you implement Python components, follow these minimal, standard steps (ask the user before running anything):
  - Create a venv: python -m venv .venv
  - Install deps: .venv\Scripts\pip.exe install -r ingest_service\requirements.txt
  - Run service entrypoint: .venv\Scripts\python.exe ingest_service\main.py
- Only run or build containers if the user asks; `ingest_service/Dockerfile` is a placeholder.

7. Integration points & external dependencies
- No external APIs, CI, or automation are present in the repo. If you add integrations, document them in README.md and add any credentials/configuration to `.env.example` (not in repo) and describe required secrets in the PR.

8. Project-specific constraints & guardrails for the AI
- Preserve all files in `resources/` and do not alter judge templates. If asked to update the canvas PDF, add the completed file as a new file in the root and note that it will be used for submission.
- This repo is a template: many files are placeholders. Before implementing non-trivial features, confirm desired language/framework and whether team wants a runnable Docker image.

9. Good examples to reference in this repo
- `README.md` — shows the expected submission workflow and where artifacts should go.

10. Questions to ask the user before making larger changes
- Do you want a runnable service in `ingest_service/` (Dockerfile + requirements + main)?
- Where should I place your solution code (root or `srcs/`)?
- Do you want me to add CI, tests, or a simple run script?

If anything above is unclear or you want me to include additional guidance (CI, linting, test scaffolding), tell me which part to expand and I will iterate.
