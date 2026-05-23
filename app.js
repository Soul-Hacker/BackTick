// Constants and Skeletons configurations for Templates
const MARKDOWN_TEMPLATES = {
  readme: `# 📦 Backtick Premium Builder

[![Version](https://img.shields.io/badge/version-1.0.0-emerald.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)]()
[![Docs](https://img.shields.io/badge/docs-publication--grade-indigo.svg)]()

A sleek, robust, and highly interactive markdown builder tailored for technical writers and engineers.

## 🚀 Key Features

* **Visual Grid Table Builder** - Seamlessly generate structured grids.
* **Inline LaTeX typesetting** - Render complex scientific formulations via KaTeX.
* **Real-time HTML previewing** - See your markup instantly translated into rich formats.
* **Privacy by Design** - No servers, no cookies, 100% browser-based.

## 🛠️ Installation

Get started by copying this project blueprint locally:

\`\`\`bash
# Clone the repository
git clone https://github.com/developer/backtick.git

# Navigate into project directory
cd backtick

# Launch developer servers
npm install && npm run dev
\`\`\`

## 💻 Code Demonstration

Below is a brief sample demonstrating code block structures inside Backtick:

\`\`\`javascript
// Quick server initialization sample
const express = require('express');
const app = express();

app.get('/status', (req, res) => {
    res.json({ status: "100% healthy", engine: "Backtick" });
});

app.listen(3000, () => console.log('Backtick engine active on port 3000!'));
\`\`\`

## 📝 Document License

Licensed under the MIT License. Feel free to remix, build, and redistribute.`,

  api: `# 📡 Developer API Gateway Documentation

## 🔒 Authentication

All API requests must include the authorization token inside the standard header:

\`\`\`http
Authorization: Bearer <YOUR_DUMMY_API_TOKEN>
\`\`\`

---

## 🚦 Endpoints Summary

| Method | Endpoint | Description | Status |
| :--- | :---: | ---: | :---: |
| \`GET\` | \`/api/v1/documents\` | Retrieve user documents catalog | \`Active\` |
| \`POST\` | \`/api/v1/documents/build\` | Compile markdown to HTML bundle | \`Active\` |
| \`DELETE\` | \`/api/v1/documents/:id\` | Purge dynamic records instantly | \`Deprecated\` |

---

## ⚡ Build Markdown Document

### Request Specification
\`\`\`http
POST /api/v1/documents/build
Content-Type: application/json
\`\`\`

### Payload Layout
\`\`\`json
{
  "documentId": "doc_9c450043_833",
  "content": "# Hello World\\nThis is a sample markdown buffer.",
  "options": {
    "enableKaTeX": true,
    "sanitize": true
  }
}
\`\`\`

### Response Payload
\`\`\`json
{
  "success": true,
  "renderedHtml": "<h1>Hello World</h1>\\n<p>This is a sample markdown buffer.</p>",
  "meta": {
    "words": 7,
    "timestamp": "2026-05-23T14:30:00Z"
  }
}
\`\`\`

## 🛑 Error Framework

| Code | Reason | Resolution |
| :---: | :--- | :--- |
| \`400\` | Malformed JSON payload | Validate request body against schema |
| \`401\` | Token expired or invalid | Generate fresh token inside developer console |
| \`404\` | Target document not found | Verify endpoint URL parameters |`,

  academic: `# 🔬 Experimental Laboratory Analysis Report
**Department of Applied Physics & Computational Mechanics**

* **Author:** Dr. Elias Vance
* **Subject:** Spring Constants and Quantum Harmonic Oscillations
* **Date:** May 23, 2026

---

## 📝 1. Abstract
This experiment aims to analyze mechanical restorative force constants using linear spring displacements (Hooke's Law) and model quantum state probabilities under variable tension conditions.

> [!NOTE]
> All measurements were captured under controlled vacuum parameters ($10^{-5}$ Torr) to eliminate atmospheric drag.

---

## 📐 2. Scientific Formulations

We begin with classical mechanics representing the restorative spring forces where $F$ defines mechanical force, $k$ specifies spring constant, and $x$ constitutes absolute displacement:

$$ F = -k \cdot x $$

In quantum mechanical environments, the potential energy $V(x)$ is formulated as a quadratic function of displacement:

$$ V(x) = \frac{1}{2} k x^2 = \frac{1}{2} m \omega^2 x^2 $$

Where the angular frequency $\omega$ is defined by:

$$ \omega = \sqrt{\frac{k}{m}} $$

Using these principles, the Schrödinger equation yields discrete energy eigenvalues:

$$ E_n = \left(n + \frac{1}{2}\right) \hbar \omega $$

---

## 📊 3. Displacement Data & Results

The spring constants were evaluated using varying mass parameters. The measured physical properties are documented in the empirical matrix below:

| Mass (g) | Mechanical Force (N) | Displacement (cm) | Computed Constant $k$ (N/m) |
| :---: | :---: | :---: | ---: |
| 100 | 0.98 | 2.45 | 40.0 |
| 200 | 1.96 | 4.88 | 40.2 |
| 500 | 4.90 | 12.19 | 40.2 |
| 1000 | 9.80 | 24.51 | 40.0 |

---

## 💡 4. Summary & Conclusions
The empirical constant $k$ averages $40.1 \text{ N/m}$, reflecting high computational accuracy. Theoretical quantum frequencies align perfectly with predictions.`
};

const LATEX_SYMBOLS = {
  basic: [
    { label: 'Multiply', syntax: '\\times' },
    { label: 'Divide', syntax: '\\div' },
    { label: 'Plus-Minus', syntax: '\\pm' },
    { label: 'Minus-Plus', syntax: '\\mp' },
    { label: 'Infinity', syntax: '\\infty' },
    { label: 'Approx', syntax: '\\approx' },
    { label: 'Not Equal', syntax: '\\neq' },
    { label: 'Less Equal', syntax: '\\leq' },
    { label: 'Greater Equal', syntax: '\\geq' },
    { label: 'Dot Product', syntax: '\\cdot' },
    { label: 'Square Root', syntax: '\\sqrt{x}' },
    { label: 'Power', syntax: 'x^y' }
  ],
  greek: [
    { label: 'Alpha', syntax: '\\alpha' },
    { label: 'Beta', syntax: '\\beta' },
    { label: 'Gamma', syntax: '\\gamma' },
    { label: 'Delta', syntax: '\\delta' },
    { label: 'Epsilon', syntax: '\\epsilon' },
    { label: 'Theta', syntax: '\\theta' },
    { label: 'Lambda', syntax: '\\lambda' },
    { label: 'Mu', syntax: '\\mu' },
    { label: 'Pi', syntax: '\\pi' },
    { label: 'Sigma', syntax: '\\sigma' },
    { label: 'Phi', syntax: '\\phi' },
    { label: 'Omega', syntax: '\\omega' }
  ],
  calculus: [
    { label: 'Integral', syntax: '\\int_{a}^{b} f(x) dx' },
    { label: 'Double Int', syntax: '\\iint' },
    { label: 'Sigma Sum', syntax: '\\sum_{i=1}^{n}' },
    { label: 'Product', syntax: '\\prod' },
    { label: 'Limit', syntax: '\\lim_{x \\to \\infty}' },
    { label: 'Derivative', syntax: '\\frac{df}{dx}' },
    { label: 'Partial', syntax: '\\partial' },
    { label: 'Gradient', syntax: '\\nabla' }
  ],
  matrices: [
    { label: 'Matrix', syntax: '\\begin{matrix} a & b \\\\ c & d \\end{matrix}' },
    { label: 'P-Matrix', syntax: '\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}' },
    { label: 'B-Matrix', syntax: '\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}' },
    { label: 'Determinant', syntax: '\\det(A)' },
    { label: 'Identity', syntax: 'I_n' },
    { label: 'Transpose', syntax: 'A^T' }
  ]
};

// Application State
let currentAlignment = 'left';
let selectedGridCols = 0;
let selectedGridRows = 0;
const undoStack = [];
const redoStack = [];
let lastSavedState = '';

// DOM Elements
const elements = {
  editor: document.getElementById('markdown-editor'),
  editorGutter: document.getElementById('editor-gutter'),
  paneReader: document.getElementById('pane-reader'),
  paneDeveloper: document.getElementById('pane-developer'),
  markdownCodeOutput: document.getElementById('markdown-code-output'),
  
  // Left Panel tabs
  tabTable: document.getElementById('tab-table'),
  tabLatex: document.getElementById('tab-latex'),
  tabTemplates: document.getElementById('tab-templates'),
  
  // Panels
  panelTable: document.getElementById('panel-table'),
  panelLatex: document.getElementById('panel-latex'),
  panelTemplates: document.getElementById('panel-templates'),
  
  // Grid
  tableGridContainer: document.getElementById('table-grid-container'),
  gridDimensions: document.getElementById('grid-dimensions'),
  alignStateHint: document.getElementById('align-state-hint'),
  alignButtons: {
    left: document.getElementById('align-left'),
    center: document.getElementById('align-center'),
    right: document.getElementById('align-right')
  },
  
  // Right Panel Toggles
  toggleReader: document.getElementById('toggle-reader'),
  toggleDeveloper: document.getElementById('toggle-developer'),
  
  // LaTeX Assistants
  latexCategory: document.getElementById('latex-category'),
  latexSymbolGrid: document.getElementById('latex-symbol-grid'),
  btnInsertInline: document.getElementById('btn-insert-inline'),
  btnInsertBlock: document.getElementById('btn-insert-block'),
  
  // Blueprint Skeletons
  templateCards: document.querySelectorAll('.template-card'),
  headerTemplateSelector: document.getElementById('header-template-selector'),
  
  // Utilities
  copyMarkdownBtn: document.getElementById('copy-markdown-btn'),
  copyMarkdownCodeBtn: document.getElementById('copy-markdown-code-btn'),
  downloadMarkdownBtn: document.getElementById('download-markdown-btn'),
  toast: document.getElementById('toast-notification'),
  toastMessage: document.getElementById('toast-message'),
  
  // Counts
  statWords: document.getElementById('stat-words'),
  statChars: document.getElementById('stat-chars'),
  statTime: document.getElementById('stat-time'),
  statLatex: document.getElementById('stat-latex'),
  statTables: document.getElementById('stat-tables')
};

// Initializer
document.addEventListener('DOMContentLoaded', () => {
  setupTabs();
  setupEditorGutterAndTracking();
  setupMarkdownCompiler();
  setupTableGridBuilder();
  setupLaTeXAssistant();
  setupTemplateEngine();
  setupDeveloperUtilities();
  setupOutputSwitcher();
  setupThemeManager();
  setupUndoManager();
  
  // Compile Initial content
  compileMarkdown();
  
  // Render Lucide icons
  lucide.createIcons();
});

// 1. TABS SYSTEM (Left Visual Panel)
function setupTabs() {
  const tabs = [
    { btn: elements.tabTable, panel: elements.panelTable },
    { btn: elements.tabLatex, panel: elements.panelLatex },
    { btn: elements.tabTemplates, panel: elements.panelTemplates }
  ];

  tabs.forEach(tab => {
    tab.btn.addEventListener('click', () => {
      tabs.forEach(item => {
        if (item.btn === tab.btn) {
          item.btn.classList.add('border-brand-500', 'text-brand-500');
          item.btn.classList.remove('border-transparent', 'text-slate-500', 'hover:text-slate-300');
          item.panel.classList.remove('hidden');
        } else {
          item.btn.classList.remove('border-brand-500', 'text-brand-500');
          item.btn.classList.add('border-transparent', 'text-slate-500', 'hover:text-slate-300');
          item.panel.classList.add('hidden');
        }
      });
    });
  });
}

// 2. OUTPUT SWITCHER (Reader vs Developer Mode - Right Panel)
function setupOutputSwitcher() {
  const tReader = elements.toggleReader;
  const tDeveloper = elements.toggleDeveloper;
  const pReader = elements.paneReader;
  const pDeveloper = elements.paneDeveloper;

  tReader.addEventListener('click', () => {
    tReader.classList.add('bg-brand-500/10', 'text-brand-500');
    tReader.classList.remove('text-slate-500', 'hover:text-slate-300');
    tDeveloper.classList.remove('bg-brand-500/10', 'text-brand-500');
    tDeveloper.classList.add('text-slate-500', 'hover:text-slate-300');
    
    pReader.classList.remove('hidden');
    pDeveloper.classList.add('hidden');
  });

  tDeveloper.addEventListener('click', () => {
    tDeveloper.classList.add('bg-brand-500/10', 'text-brand-500');
    tDeveloper.classList.remove('text-slate-500', 'hover:text-slate-300');
    tReader.classList.remove('bg-brand-500/10', 'text-brand-500');
    tReader.classList.add('text-slate-500', 'hover:text-slate-300');
    
    pDeveloper.classList.remove('hidden');
    pReader.classList.add('hidden');
  });
}

// 3. EDITOR LINE NUMBERS & CURSOR SYNC HIGH-POLISH
function setupEditorGutterAndTracking() {
  const editor = elements.editor;
  const gutter = elements.editorGutter;

  function updateLineNumbers() {
    const lines = editor.value.split('\n');
    const lineCount = Math.max(lines.length, 1);
    
    const existingCount = gutter.children.length;
    if (existingCount !== lineCount) {
      let gutterHtml = '';
      for (let i = 1; i <= lineCount; i++) {
        gutterHtml += `<div class="editor-gutter-line">${i}</div>`;
      }
      gutter.innerHTML = gutterHtml;
    }
    highlightActiveLine();
  }

  function highlightActiveLine() {
    const linesText = editor.value.substring(0, editor.selectionStart);
    const activeLineIdx = linesText.split('\n').length - 1; // 0-indexed
    
    const gutterLines = gutter.children;
    for (let i = 0; i < gutterLines.length; i++) {
      if (i === activeLineIdx) {
        gutterLines[i].classList.add('active');
      } else {
        gutterLines[i].classList.remove('active');
      }
    }
  }

  // Event handlers
  editor.addEventListener('input', () => {
    updateLineNumbers();
    compileMarkdown();
  });

  editor.addEventListener('scroll', () => {
    gutter.scrollTop = editor.scrollTop;
  });

  editor.addEventListener('keyup', highlightActiveLine);
  editor.addEventListener('mouseup', highlightActiveLine);
  editor.addEventListener('focus', highlightActiveLine);

  // Tab key processing (4-spaces insertion)
  let typingTimer = null;
  editor.addEventListener('keydown', (e) => {
    // If starting a new typing burst, save history state first
    if (!typingTimer) {
      saveStateToHistory(editor.value);
    }
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      typingTimer = null;
    }, 1000);

    if (e.key === 'Tab') {
      e.preventDefault();
      const start = editor.selectionStart;
      const end = editor.selectionEnd;
      const originalValue = editor.value;

      editor.value = originalValue.substring(0, start) + '    ' + originalValue.substring(end);
      editor.selectionStart = editor.selectionEnd = start + 4;
      
      updateLineNumbers();
      compileMarkdown();
    }
  });

  window.addEventListener('resize', () => {
    gutter.scrollTop = editor.scrollTop;
  });

  updateLineNumbers();
}

// 4. MARKDOWN COMPILER & LATEX PREPROCESSOR
function setupMarkdownCompiler() {
  marked.setOptions({
    gfm: true,
    breaks: true,
    headerIds: true,
    mangle: false
  });
}

function compileMarkdown() {
  const rawText = elements.editor.value;
  
  // Highlight developer code segment
  elements.markdownCodeOutput.textContent = rawText || '\n';
  if (window.Prism) {
    Prism.highlightElement(elements.markdownCodeOutput);
  }

  // Pre-process math arrays and output compiled HTML
  let compiledHtml = parseMarkdownAndLaTeX(rawText);
  elements.paneReader.innerHTML = compiledHtml;

  // Process KaTeX render equations
  renderKaTeXPlaceholders(elements.paneReader);
  
  // Calculate counts
  computeStatistics(rawText);
}

function parseMarkdownAndLaTeX(markdownText) {
  let text = markdownText;
  const blocks = [];
  const inlines = [];

  // Replace block math $$ math $$
  text = text.replace(/\$\$([\s\S]*?)\$\$/g, (match, mathContent) => {
    const placeholder = `::katex-block-placeholder-${blocks.length}::`;
    blocks.push({ placeholder, math: mathContent.trim() });
    return placeholder;
  });

  // Replace inline math $ math $
  text = text.replace(/\$([^$\n]+?)\$/g, (match, mathContent) => {
    const placeholder = `::katex-inline-placeholder-${inlines.length}::`;
    inlines.push({ placeholder, math: mathContent.trim() });
    return placeholder;
  });

  // marked.js compilation
  let html = marked.parse(text);

  // Restore block math
  blocks.forEach(item => {
    html = html.replace(
      item.placeholder, 
      () => `<div class="katex-placeholder-block" data-math="${escapeAttribute(item.math)}"></div>`
    );
  });

  // Restore inline math
  inlines.forEach(item => {
    html = html.replace(
      item.placeholder, 
      () => `<span class="katex-placeholder-inline" data-math="${escapeAttribute(item.math)}"></span>`
    );
  });

  return html;
}

function renderKaTeXPlaceholders(container) {
  const blockNodes = container.querySelectorAll('.katex-placeholder-block');
  blockNodes.forEach(node => {
    const math = node.getAttribute('data-math');
    try {
      katex.render(math, node, {
        displayMode: true,
        throwOnError: false,
        trust: true
      });
    } catch (e) {
      node.innerHTML = `<span class="text-rose-500 font-mono">LaTeX Error: ${escapeHtml(e.message)}</span>`;
    }
  });

  const inlineNodes = container.querySelectorAll('.katex-placeholder-inline');
  inlineNodes.forEach(node => {
    const math = node.getAttribute('data-math');
    try {
      katex.render(math, node, {
        displayMode: false,
        throwOnError: false,
        trust: true
      });
    } catch (e) {
      node.innerHTML = `<span class="text-rose-500 font-mono">LaTeX Error: ${escapeHtml(e.message)}</span>`;
    }
  });
}

// 5. VISUAL TABLE GRID BUILDER (Emerald glowing updates)
function setupTableGridBuilder() {
  const container = elements.tableGridContainer;
  const gridDimText = elements.gridDimensions;
  
  let gridHtml = '';
  for (let r = 1; r <= 10; r++) {
    gridHtml += `<div class="flex gap-1">`;
    for (let c = 1; c <= 10; c++) {
      gridHtml += `<div class="grid-square w-5 h-5 bg-obsidian-950 border border-obsidian-800 rounded cursor-pointer hover:border-brand-500" data-row="${r}" data-col="${c}"></div>`;
    }
    gridHtml += `</div>`;
  }
  container.innerHTML = gridHtml;

  const squares = container.querySelectorAll('.grid-square');

  container.addEventListener('mouseover', (e) => {
    const square = e.target.closest('.grid-square');
    if (!square) return;

    const targetRow = parseInt(square.dataset.row);
    const targetCol = parseInt(square.dataset.col);
    
    selectedGridRows = targetRow;
    selectedGridCols = targetCol;

    gridDimText.textContent = `${targetCol} x ${targetRow}`;
    
    squares.forEach(sq => {
      const r = parseInt(sq.dataset.row);
      const c = parseInt(sq.dataset.col);
      if (r <= targetRow && c <= targetCol) {
        sq.classList.add('active');
      } else {
        sq.classList.remove('active');
      }
    });
  });

  container.addEventListener('mouseleave', () => {
    selectedGridRows = 0;
    selectedGridCols = 0;
    gridDimText.textContent = '0 x 0';
    squares.forEach(sq => sq.classList.remove('active'));
  });

  container.addEventListener('click', (e) => {
    const square = e.target.closest('.grid-square');
    if (!square) return;

    const cols = parseInt(square.dataset.col);
    const rows = parseInt(square.dataset.row);

    let tableMarkdownStr = '\n';
    
    tableMarkdownStr += '|';
    for (let c = 1; c <= cols; c++) {
      tableMarkdownStr += ` Header ${c} |`;
    }
    tableMarkdownStr += '\n';

    tableMarkdownStr += '|';
    for (let c = 1; c <= cols; c++) {
      if (currentAlignment === 'left') {
        tableMarkdownStr += ' :--- |';
      } else if (currentAlignment === 'center') {
        tableMarkdownStr += ' :---: |';
      } else if (currentAlignment === 'right') {
        tableMarkdownStr += ' ---: |';
      }
    }
    tableMarkdownStr += '\n';

    for (let r = 1; r <= rows; r++) {
      tableMarkdownStr += '|';
      for (let c = 1; c <= cols; c++) {
        tableMarkdownStr += ` Cell ${r},${c} |`;
      }
      tableMarkdownStr += '\n';
    }
    tableMarkdownStr += '\n';

    insertTextAtCursor(tableMarkdownStr);
    showToast(`Inserted formatted table: ${cols}x${rows}`);
  });

  // Alignment Selectors
  Object.keys(elements.alignButtons).forEach(key => {
    elements.alignButtons[key].addEventListener('click', () => {
      Object.keys(elements.alignButtons).forEach(bKey => {
        const btn = elements.alignButtons[bKey];
        if (bKey === key) {
          btn.classList.add('bg-brand-500/10', 'text-brand-500');
          btn.classList.remove('text-slate-500', 'hover:text-slate-350');
        } else {
          btn.classList.remove('bg-brand-500/10', 'text-brand-500');
          btn.classList.add('text-slate-500', 'hover:text-slate-300');
        }
      });

      currentAlignment = key;
      const alignLabel = key.charAt(0).toUpperCase() + key.slice(1);
      elements.alignStateHint.innerHTML = `<span class="font-bold text-brand-500">Alignment:</span> ${alignLabel} columns`;
    });
  });
}

// 6. LATEX MATH ASSISTANT
function setupLaTeXAssistant() {
  const categorySelect = elements.latexCategory;
  const symbolGrid = elements.latexSymbolGrid;
  
  function renderActiveCategorySymbols() {
    const cat = categorySelect.value;
    const symbols = LATEX_SYMBOLS[cat] || [];
    
    let symbolsHtml = '';
    symbols.forEach(item => {
      symbolsHtml += `
        <button 
          class="latex-insert-btn p-1 bg-obsidian-950 hover:bg-brand-500/10 border border-obsidian-900 hover:border-brand-500/40 rounded text-[10px] font-mono text-brand-500 hover:text-brand-100 flex items-center justify-center transition-all truncate" 
          data-syntax="${escapeAttribute(item.syntax)}" 
          title="${escapeAttribute(item.label)}"
        >
          $${escapeHtml(item.syntax.substring(0, 10))}${item.syntax.length > 10 ? '..' : ''}$
        </button>
      `;
    });
    
    symbolGrid.innerHTML = symbolsHtml;

    const btns = symbolGrid.querySelectorAll('.latex-insert-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const syntax = btn.getAttribute('data-syntax');
        insertTextAtCursor(syntax);
        showToast(`Inserted LaTeX notation`);
      });
    });
  }

  categorySelect.addEventListener('change', renderActiveCategorySymbols);
  renderActiveCategorySymbols();

  // Sandbox calculations
  const sandboxMathText = document.getElementById('latex-sandbox-math');
  const sandboxRendered = document.getElementById('latex-sandbox-rendered');

  function renderSandboxMath(value) {
    if (!value || value.trim() === '') {
      sandboxMathText.textContent = 'No active equation';
      sandboxRendered.innerHTML = '';
      return;
    }

    sandboxMathText.textContent = value.substring(0, 24) + (value.length > 24 ? '...' : '');
    try {
      katex.render(value, sandboxRendered, {
        displayMode: false,
        throwOnError: false
      });
    } catch (e) {
      sandboxRendered.innerHTML = `<span class="text-rose-500 text-[10px]">Error</span>`;
    }
  }

  // Button hooks
  elements.btnInsertInline.addEventListener('click', () => {
    const editor = elements.editor;
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const text = editor.value;
    const selection = text.substring(start, end);
    
    const inlineMath = `$ ${selection || 'equation'} $`;
    insertTextAtCursor(inlineMath);
    
    if (!selection) {
      editor.selectionStart = start + 2;
      editor.selectionEnd = start + 10;
    }
  });

  elements.btnInsertBlock.addEventListener('click', () => {
    const editor = elements.editor;
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const text = editor.value;
    const selection = text.substring(start, end);

    const blockMath = `\n$$ ${selection || 'E = mc^2'} $$\n`;
    insertTextAtCursor(blockMath);

    if (!selection) {
      editor.selectionStart = start + 4;
      editor.selectionEnd = start + 12;
    }
  });

  elements.editor.addEventListener('mouseup', handleEditorSelectionChange);
  elements.editor.addEventListener('keyup', handleEditorSelectionChange);

  function handleEditorSelectionChange() {
    const editor = elements.editor;
    const text = editor.value;
    const cursor = editor.selectionStart;

    const match = findActiveMathBlock(text, cursor);
    renderSandboxMath(match);
  }
}

function findActiveMathBlock(text, cursorIndex) {
  const blockRegex = /\$\$([\s\S]*?)\$\$/g;
  let blockMatch;
  while ((blockMatch = blockRegex.exec(text)) !== null) {
    const start = blockMatch.index;
    const end = blockRegex.lastIndex;
    if (cursorIndex >= start && cursorIndex <= end) {
      return blockMatch[1].trim();
    }
  }

  const inlineRegex = /\$([^$\n]+?)\$/g;
  let inlineMatch;
  while ((inlineMatch = inlineRegex.exec(text)) !== null) {
    const start = inlineMatch.index;
    const end = inlineRegex.lastIndex;
    if (cursorIndex >= start && cursorIndex <= end) {
      return inlineMatch[1].trim();
    }
  }

  return '';
}

// 7. TEMPLATE ENGINES OVERWRITE
function setupTemplateEngine() {
  elements.templateCards.forEach(card => {
    card.addEventListener('click', () => {
      const templateKey = card.getAttribute('data-template');
      loadSelectedTemplate(templateKey);
    });
  });

  elements.headerTemplateSelector.addEventListener('change', (e) => {
    const templateKey = e.target.value;
    if (templateKey) {
      loadSelectedTemplate(templateKey);
      e.target.value = '';
    }
  });
}

function loadSelectedTemplate(key) {
  const content = MARKDOWN_TEMPLATES[key];
  if (!content) return;

  const confirmOverwrite = confirm(
    'Load selected template blueprint? This will completely replace your current editor markdown buffer.'
  );

  if (confirmOverwrite) {
    saveStateToHistory(elements.editor.value);
    elements.editor.value = content;
    
    // Re-trigger layout syncs
    const event = new Event('input', { bubbles: true });
    elements.editor.dispatchEvent(event);
    
    showToast(`Loaded template: ${key.toUpperCase()}`);
  }
}

// 8. DEVELOPER UTILITIES & EXPORTS
function setupDeveloperUtilities() {
  elements.copyMarkdownBtn.addEventListener('click', () => {
    copyTextToClipboard(elements.editor.value);
  });

  elements.copyMarkdownCodeBtn.addEventListener('click', () => {
    copyTextToClipboard(elements.editor.value);
  });

  elements.downloadMarkdownBtn.addEventListener('click', () => {
    const blob = new Blob([elements.editor.value], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'document.md';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);

    showToast('Exported document.md successfully!');
  });
}

function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    const dummyArea = document.createElement('textarea');
    dummyArea.value = text;
    dummyArea.style.top = '0';
    dummyArea.style.left = '0';
    dummyArea.style.position = 'fixed';
    document.body.appendChild(dummyArea);
    dummyArea.focus();
    dummyArea.select();
    try {
      document.execCommand('copy');
      showToast('Copied to Clipboard!');
      triggerButtonCopyState();
    } catch (err) {
      showToast('Unable to copy text.');
    }
    document.body.removeChild(dummyArea);
    return;
  }

  navigator.clipboard.writeText(text)
    .then(() => {
      showToast('Copied to Clipboard!');
      triggerButtonCopyState();
    })
    .catch(() => {
      showToast('Unable to copy text.');
    });
}

function triggerButtonCopyState() {
  const btn = elements.copyMarkdownBtn;
  const innerHtml = btn.innerHTML;

  btn.innerHTML = `
    <i data-lucide="check-check" class="h-3.5 w-3.5 text-brand-500"></i>
    <span class="text-brand-500">Copied!</span>
  `;
  lucide.createIcons();

  setTimeout(() => {
    btn.innerHTML = innerHtml;
    lucide.createIcons();
  }, 2000);
}

// 9. METRICS CALCULATOR
function computeStatistics(text) {
  const wordsArray = text.trim().split(/\s+/).filter(w => w.length > 0);
  const wordCount = wordsArray.length;
  elements.statWords.textContent = wordCount;

  elements.statChars.textContent = text.length;

  const readTime = Math.max(Math.ceil(wordCount / 220), 1); // 220 WPM standard for docs
  elements.statTime.textContent = `${readTime} min`;

  const blockMatches = text.match(/\$\$([\s\S]*?)\$\$/g) || [];
  const inlineMatches = text.match(/\$([^$\n]+?)\$/g) || [];
  elements.statLatex.textContent = blockMatches.length + inlineMatches.length;

  let actualTableCount = 0;
  const lines = text.split('\n');
  lines.forEach(line => {
    if (line.match(/^\|?\s*:?-+:?\s*(\|?\s*:?-+:?\s*)*\|?$/)) {
      actualTableCount++;
    }
  });
  elements.statTables.textContent = actualTableCount;
}

// Helper functions
function insertTextAtCursor(insertedText) {
  const editor = elements.editor;
  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  const originalVal = editor.value;

  saveStateToHistory(originalVal);
  editor.value = originalVal.substring(0, start) + insertedText + originalVal.substring(end);
  
  const newCursorPos = start + insertedText.length;
  editor.selectionStart = editor.selectionEnd = newCursorPos;
  editor.focus();

  const event = new Event('input', { bubbles: true });
  editor.dispatchEvent(event);
}

function showToast(message) {
  const toast = elements.toast;
  const msgEl = elements.toastMessage;

  msgEl.textContent = message;
  toast.classList.remove('opacity-0');
  toast.classList.add('opacity-100', 'animate-toast');

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'animate-toast');
    toast.classList.add('opacity-0');
  }, 2000);
}

function escapeHtml(string) {
  return String(string)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttribute(string) {
  return String(string)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// 10. DYNAMIC THEME SWAP MANAGER
function setupThemeManager() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (!themeBtn) return;
  
  // Initial preference check
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    updateThemeToggleUI(true);
  } else {
    document.body.classList.remove('dark-theme');
    updateThemeToggleUI(false);
  }

  themeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeToggleUI(isDark);
    showToast(isDark ? 'Obsidian Dark theme activated!' : 'Clean Light theme activated!');
  });

  function updateThemeToggleUI(isDark) {
    if (isDark) {
      themeBtn.innerHTML = `<i data-lucide="sun" class="h-4.5 w-4.5 text-yellow-500 animate-pulse"></i>`;
      themeBtn.title = 'Switch to Light Theme';
    } else {
      themeBtn.innerHTML = `<i data-lucide="moon" class="h-4.5 w-4.5 text-brand-500"></i>`;
      themeBtn.title = 'Switch to Dark Theme';
    }
    // Re-trigger Lucide render for dynamic elements
    lucide.createIcons();
  }
}

// 11. UNDO HISTORY MANAGEMENT SYSTEM
function setupUndoManager() {
  const undoBtn = document.getElementById('undo-btn');
  const redoBtn = document.getElementById('redo-btn');
  if (!undoBtn || !redoBtn) return;

  undoBtn.addEventListener('click', triggerUndo);
  redoBtn.addEventListener('click', triggerRedo);

  // Global Ctrl+Z & Ctrl+Y keyboard interceptor inside editor
  window.addEventListener('keydown', (e) => {
    if (document.activeElement === elements.editor) {
      // Ctrl+Z (Undo)
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        e.preventDefault();
        triggerUndo();
      }
      // Ctrl+Y (Redo)
      if ((e.ctrlKey || e.metaKey) && e.key === 'y') {
        e.preventDefault();
        triggerRedo();
      }
    }
  });
}

function saveStateToHistory(val) {
  if (val === lastSavedState) return;
  if (undoStack.length >= 50) {
    undoStack.shift();
  }
  undoStack.push(val);
  lastSavedState = val;
  
  // Clear redo history on a new action
  redoStack.length = 0;
  
  updateUndoButtonUI();
}

function triggerUndo() {
  if (undoStack.length === 0) {
    showToast('Nothing to revert!');
    return;
  }

  const prevState = undoStack.pop();
  
  // Push the current state onto redo stack right before applying the undo
  redoStack.push(elements.editor.value);
  
  elements.editor.value = prevState;
  lastSavedState = prevState;

  // Sync scroll and gutter line count
  const event = new Event('input', { bubbles: true });
  elements.editor.dispatchEvent(event);

  showToast('Action Reverted! (Undo)');
  updateUndoButtonUI();
}

function triggerRedo() {
  if (redoStack.length === 0) {
    showToast('Nothing to redo!');
    return;
  }

  const nextState = redoStack.pop();
  
  // Push current state back to undo stack
  undoStack.push(elements.editor.value);
  
  elements.editor.value = nextState;
  lastSavedState = nextState;

  // Sync scroll and gutter line count
  const event = new Event('input', { bubbles: true });
  elements.editor.dispatchEvent(event);

  showToast('Action Re-applied! (Redo)');
  updateUndoButtonUI();
}

function updateUndoButtonUI() {
  const undoBtn = document.getElementById('undo-btn');
  const undoIcon = document.getElementById('undo-icon');
  const redoBtn = document.getElementById('redo-btn');
  const redoIcon = document.getElementById('redo-icon');

  // Update Undo UI
  if (undoBtn) {
    if (undoStack.length > 0) {
      undoBtn.classList.remove('opacity-40', 'pointer-events-none');
      undoBtn.classList.add('opacity-100', 'cursor-pointer');
      if (undoIcon) {
        undoIcon.classList.remove('text-slate-500');
        undoIcon.classList.add('text-brand-500');
      }
    } else {
      undoBtn.classList.add('opacity-40', 'pointer-events-none');
      undoBtn.classList.remove('opacity-100', 'cursor-pointer');
      if (undoIcon) {
        undoIcon.classList.remove('text-brand-500');
        undoIcon.classList.add('text-slate-500');
      }
    }
  }

  // Update Redo UI
  if (redoBtn) {
    if (redoStack.length > 0) {
      redoBtn.classList.remove('opacity-40', 'pointer-events-none');
      redoBtn.classList.add('opacity-100', 'cursor-pointer');
      if (redoIcon) {
        redoIcon.classList.remove('text-slate-500');
        redoIcon.classList.add('text-brand-500');
      }
    } else {
      redoBtn.classList.add('opacity-40', 'pointer-events-none');
      redoBtn.classList.remove('opacity-100', 'cursor-pointer');
      if (redoIcon) {
        redoIcon.classList.remove('text-brand-500');
        redoIcon.classList.add('text-slate-500');
      }
    }
  }
}
