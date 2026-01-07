---
title: "Scaf, for Scaffolding"
date: 2026-01-07
lang: "en"
translationOf: "scaf-de-scaffolding"
description: "A tool to get your folders and files structure. My first npm package"
tags: ["npm", "scaf", "tool", "node", "javascript"]
---

I wanted a clean cli tool to easily get the structure of folders and files on my stuff. There are a few, but no one quite the way I'd like it. So I developed scaf, for scaffolding. It's both minimal, for quick use, but also has some really nice settings for a more nerdy analysis.

I also made it node-based, because I wanted something cross-platform. To install it globally in your machine, you'll need node and some package manager of your choice, like npm. See bellow.

### How to use

#### 1. Install It

```
npm install -g @dandesdev/scaf
```

You absolutely don't need to use npm, feel free to use any other package manager you like.

#### 2. Run it

Decide from where you want your scaffolding, then, in your terminal, get to that location and simply run

```
scaf
```

You should see the entire scaffolding unfolding into your very eyes. It can be blazingly fast thou, so focus not to miss it.

#### 3. Do more

From that point, you can use flags to do all sorts of stuff; I asked an AI friend of mine, and It gave us these awesome tables to explain it better:

### Complete scaf Flags Table

#### Input and Output

| Flag | Description | Example | Default |
|------|-------------|---------|---------|
| `-p, --path <dir>` | Target directory to scan | `scaf -p ./src` | Current directory |
| `-md, --maxdepth <n>` | Maximum folder depth to scaf (0 = infinite) | `scaf -md 3` | Infinity |
| `-o <file>` | Save output to file, it can be text or json. Format is auto-detected by extension (.txt, .json). | `scaf -o mystuff.json` | No output file, it displays to console |
| `-b, --buffered` | Use buffered mode for text output (builds complete scaffolding before displaying) WARNING: It can crash your computer on large structures. | `scaf -b -o out.txt` | Streaming mode, it prints as it reads, this way there's a low cap in memory usage. |

#### File and Directory Filtering

| Flag | Description | Example | Default |
|------|-------------|---------|---------|
| `-i, --ignore <...>` | Patterns to ignore (space-separated) | `scaf -i node_modules dist config.yml *.log` | Nothing, except what is specified in .gitignore, .dockerignore or .scafignore files, see more bellow. |
| `-ti, --typed-ignore` | Enable typed ignore mode, where files don't need their extensions specified and folders must have trailing slashes (see table below). | `scaf -ti -i node_modules/ dist/ config` | false |
| `-n, --only <...>` | Show only files matching patterns (directories always shown for navigation) | `scaf -n .ts .tsx` | [] |
| `-d, --dirs-only` | Display only directories, hiding files | `scaf -d` | false |
| `--gitignore [true\|false]` | Respect .gitignore rules. Accepts optional boolean value | `scaf --gitignore false` | true |
| `--dockerignore` | Respect .dockerignore rules | `scaf --dockerignore` | true |
| `-a, --show-hidden` | Show hidden files and folders (dotfiles) | `scaf -a` | false |

#### Display and Format

| Flag | Description | Example | Default |
|------|-------------|---------|---------|
| `--size` | Display size of each file | `scaf --size` | false |
| `--sort <type>` | Sort entries by: name, size, date | `scaf --sort size` | name |
| `-q, --quiet` | Suppress informational messages (useful for pipelines) | `scaf -q` | false |

#### Statistics

| Flag | Description | Example | Default |
|------|-------------|---------|---------|
| `--stats [mode]` | Display basic statistics. Modes: console, include (in file), all (both) | `scaf --stats include -o out.txt` | console |
| `--stats-only [mode]` | Display only detailed statistics. Modes: strict (honors filters) or all (ignores filters) | `scaf --stats-only all` | strict |

#### General

| Flag | Description | Example | Default |
|------|-------------|---------|---------|
| `-h, --help` | Display help message and exit | `scaf --help` | - |

#### Typed Ignore Mode (-ti)

When -ti is enabled, patterns in -i behave differently:

| Pattern | Effect | Example |
|---------|--------|---------|
| `name` | Ignores files with that basename (any extension) | `scaf -ti -i index` ignores index.js, index.ts |
| `folder/` | Ignores folders with that name | `scaf -ti -i bin/` ignores folder bin/ |
| `*.` | Ignores all files (leaves only folders) | `scaf -ti -i *.` |
| `*/` | Ignores all folders (shows only files in root) | `scaf -ti -i */` |

Important: In typed mode, -ti and -i are meant to be used together, and patterns must come immediately after -i.

#### Automatic Ignore Files

Scaf always loads these files if present in the root:

| File | Loaded by default? | Comment |
|------|-------------------|---------|
| `.scafignore` | ✅ Always | Create your custom patterns |
| `.gitignore` | ✅ With --gitignore (default: true) | |
| `.dockerignore` | ✅ With --dockerignore (default: true) | |

Tip: Use scaf --help to see practical examples and common use cases.

### Get in touch

If you have any ideas, critics, love or hate towards scaf, please get in touch. <3
