# 📝 Backtick - Professional Technical Markdown IDE

**Backtick** is a publishing-grade, 100% client-side Markdown IDE designed specifically for technical writers, software engineers, and researchers. It provides a visual editor sandbox inspired by premium writing suites like Obsidian and Typora.

---

## 💡 What Problem Does Backtick Solve?

Writing technical documentation is tedious. Technical writers face several key friction points:
1. **Manual Table Layouts are Painful:** Constructing markdown table pipes (`|---|---|`) manually is slow and prone to formatting syntax errors.
2. **LaTeX Rendering is Slow or Absent:** Standard markdown engines don't support mathematical equations (`$` or `$$`), or require heavy server-side processing that lags.
3. **Drafting Blueprints takes Time:** Setting up GitHub READMEs, API specifications, or scientific abstracts requires writing the same boilerplate code repeatedly.
4. **Data Security Concerns:** Modern cloud editors upload drafts to servers, compromising private software blueprints or intellectual property.

**Backtick solves this** by executing **100% inside your browser** (fully local). It provides a visual table hover matrix, a scientific LaTeX symbols panel with KaTeX compiling, and rapid structural templates—all rendering side-by-side in real-time.

---

## ⚡ Quick Start: How to Open & Test Instantly

Because Backtick requires **no backend server**, you can open it in one click:

1. Open your file explorer and navigate to `d:\SpringBasedProject\DocuMint\`.
2. **Double-click** on **`index.html`** (or drag and drop it into Chrome, Brave, Firefox, or Edge).
3. The editor is now live! You are ready to start testing.

---

## 🧪 Step-by-Step Testing Guide (Input vs Output)

Follow these interactive tests to explore the IDE:

### 🔬 Test 1: The Visual Table Generator
Markdown tables are usually hard to align. With Backtick, you can generate them visually:
1. Click on the **Table Generator** tab in the visual toolkit (left panel).
2. Click the **Center Align Columns** button (`align-center` icon).
3. Hover your mouse over the visual square matrix (e.g., move your cursor to highlight a **4 x 3** grid). Watch the green hover coordinates light up.
4. **Click** the square.
5. **Result (Input):** A perfectly formatted markdown grid structure will immediately insert at your active cursor inside the editor textarea:
   ```markdown
   | Header 1 | Header 2 | Header 3 | Header 4 |
   | :---: | :---: | :---: | :---: |
   | Cell 1,1 | Cell 1,2 | Cell 1,3 | Cell 1,4 |
   | Cell 2,1 | Cell 2,2 | Cell 2,3 | Cell 2,4 |
   | Cell 3,1 | Cell 3,2 | Cell 3,3 | Cell 3,4 |
   ```
6. **Result (Output):** Look at the right panel. Inside **Reader Mode**, you will see a Stripe-style clean document table with subtle grey borders and zebra striping!

---

### 📐 Test 2: LaTeX Mathematical Formulations
Backtick uses KaTeX via CDN to render formulas instantly without breaking standard paragraphs.
1. Clear the editor and **copy-paste** this mathematical block directly into the left pane:
   ```markdown
   # Quantum Harmonic Oscillator Analysis

   We formulate the discrete energy eigenvalues of a quantum oscillator under mechanical tension:

   $$ E_n = \left(n + \frac{1}{2}\right) \hbar \omega $$

   Where the angular frequency $\omega$ is calculated by:

   $$ \omega = \sqrt{\frac{k}{m}} $$
   ```
2. **Result (Output):** In **Reader Mode**, look at how the center equations render with high-fidelity publishing aesthetics.
3. **Interactive Test:** Toggle to the **LaTeX Assistant** tab. Select the **Calculus / Integrals** category. Click on the symbol labeled **`Integral`**. It instantly inserts `\int_{a}^{b} f(x) dx` at your cursor!
4. **Cursor Highlight:** Click on any line of math in the editor. Watch the small **Active Formula** playground sandbox at the left automatically isolate and render that formula!

---

### 📑 Test 3: Structural Blueprint templates
When starting a document from scratch, you can deploy pre-formatted skeletons:
1. Toggle to the **Template Skeletons** tab in the visual toolkit.
2. Click on the **API Catalog Reference** card (or use the top-bar blueprint dropdown).
3. Click **OK** to confirm the overwrite.
4. **Result (Input):** The editor is filled with a complete API structure including authentication tokens, endpoint methods, payloads, and JSON response bodies.
5. **Result (Output):** Explore the document. Click **Developer Mode** on the top-right. You will see a full-height, syntax-highlighted code output box of the raw markdown with a dedicated **Copy Output** button!

---

## 💻 Sandbox Copy-Paste Test Block
If you want to quickly see all features working together, copy the entire block below and paste it into the editor:

```markdown
# 🚀 Backtick Feature Sandbox

This is a demonstration of publishing-grade elements compiled in real-time.

## 📊 Scientific Data Grid

| Parameter | Notation | Experimental Value | Evaluation Status |
| :--- | :---: | :---: | ---: |
| Displacement Constant | $k$ | $40.1 \text{ N/m}$ | \`Confirmed\` |
| Angular Frequency | $\omega$ | $3.14 \text{ rad/s}$ | \`Validated\` |
| Total Restoring Force | $F_r$ | $-9.82 \text{ N}$ | \`Pending\` |

## 📐 Calculus Formulation

We represent mechanical restorative integrals using Hooke's Law:

$$ \int_{x_1}^{x_2} F(x) \, dx = \int_{x_1}^{x_2} (-k x) \, dx = -\frac{1}{2} k \left( x_2^2 - x_1^2 \right) $$

> [!NOTE]
> The negative sign confirms that restoring forces act in opposition to mechanical displacements.
```

---

## 🔒 100% Client-Side Privacy
Backtick executes entirely in your browser sandbox. No telemetry, no analytical trackers, and no server round-trips. Your documentation never leaves your computer.
