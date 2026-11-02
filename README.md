# abinesh1006.github.io

Personal site of Abinesh Subramani: résumé, RefinePoint, and an "Ask about me" chat that runs a small language model
entirely in the visitor's browser.

## How the chat works

1. **Retrieval.** `js/knowledge.js` holds short fact cards. For each question, a BM25 keyword search
   (`retrieve()` in `js/chat.js`) picks the best-matching cards and drops weak matches.
2. **Nothing matched → no model.** If no card matches, the reply is a fixed "I don't have that information"
   message. Small models asked about things they have no facts for tend to invent answers, so they are never asked.
3. **Generation.** Otherwise the cards go to a GGUF model running in the browser through
   [wllama](https://github.com/ngxson/wllama) (llama.cpp compiled to WebAssembly, WebGPU when available), with
   instructions to answer only from them. The answer streams in and lists the cards it was given.

Models are downloaded from Hugging Face on first use and cached by the browser:

| Model | Size | Notes |
| --- | --- | --- |
| SmolLM2 360M Instruct (Q4_K_M) | 270 MB | Fastest; weakest at following the rules |
| Qwen2.5 0.5B Instruct (Q4_K_M) | 490 MB | Default |
| Qwen2.5 1.5B Instruct (Q4_K_M) | 1.1 GB | Best answers; needs a capable machine |

Before a model is loaded, questions are answered by showing the matching cards directly.

## Files

```
index.html            the page
css/style.css         styles (light and dark)
js/knowledge.js       what the chat knows: edit this to change its answers
js/chat.js            retrieval, model loading, chat UI
vendor/wllama/        wllama 3.8.1 (MIT), unmodified
resume/               downloadable résumé (PDF)
service-worker.js     removes the service worker left by the previous version of this site
```

No build step, no tracking, no server: GitHub Pages serves the files as they are. To try it locally, serve the
folder with any static server (for example `npx serve .`) and open it in Chrome or Edge.
