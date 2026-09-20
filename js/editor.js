/* ============================================================
   CODEACADEMY_GAME — Code Editor Engine
   Pure JS Syntax Highlighting | No External Dependencies
   Single-Pass Lexer to prevent tag mutation & plain text leaks
   ============================================================ */

class CodeEditor {
  constructor() {
    this.textarea  = document.getElementById('code-editor');
    this.hlEl      = document.getElementById('code-highlight-content');
    this.lineNumEl = document.getElementById('line-numbers');
    this.language  = 'html';
    this.onCodeChange = null;
    this._initLexers();
    this._bindEvents();
  }

  /* ──────────── Public API ──────────── */

  setLanguage(lang) {
    this.language = lang;
    this._applyHighlight();
  }

  setValue(code) {
    this.textarea.value = code;
    this._applyHighlight();
    this._updateLineNumbers();
    this._syncScroll();
    if (typeof this.onCodeChange === 'function') {
      this.onCodeChange(this.textarea.value);
    }
  }

  getValue() {
    return this.textarea.value;
  }

  focus() {
    this.textarea.focus();
  }

  /* ──────────── Event Binding ──────────── */

  _bindEvents() {
    const ta = this.textarea;

    ta.addEventListener('input', () => {
      this._applyHighlight();
      this._updateLineNumbers();
      if (typeof this.onCodeChange === 'function') {
        this.onCodeChange(this.textarea.value);
      }
    });

    ta.addEventListener('scroll', () => this._syncScroll());

    ta.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'Tab':
          e.preventDefault();
          this._insertAt(ta.selectionStart, '  ');
          break;

        case 'Enter': {
          e.preventDefault();
          const start = ta.selectionStart;
          const val   = ta.value;
          const lineStart = val.lastIndexOf('\n', start - 1) + 1;
          const curLine   = val.substring(lineStart, start);
          const indent    = (curLine.match(/^(\s*)/) || ['',''])[1];
          const lastCh    = val[start - 1];
          const extra     = ['{','(','['].includes(lastCh) ? '  ' : '';
          this._insertAt(start, '\n' + indent + extra, indent.length + extra.length + 1);
          break;
        }

        default: {
          // Auto-close pairs
          const PAIRS = { '(':')', '{':'}', '[':']' };
          if (PAIRS[e.key] && !e.ctrlKey && !e.metaKey) {
            const s = ta.selectionStart, end = ta.selectionEnd;
            if (s === end) {
              e.preventDefault();
              this._insertAt(s, e.key + PAIRS[e.key], 1);
            }
          }
        }
      }
    });
  }

  _insertAt(pos, text, cursorOffset) {
    const ta  = this.textarea;
    const val = ta.value;
    ta.value  = val.substring(0, pos) + text + val.substring(ta.selectionEnd);
    ta.selectionStart = ta.selectionEnd = pos + (cursorOffset !== undefined ? cursorOffset : text.length);
    this._applyHighlight();
    this._updateLineNumbers();
    if (typeof this.onCodeChange === 'function') {
      this.onCodeChange(this.textarea.value);
    }
  }

  _syncScroll() {
    const hlPre = this.textarea.nextElementSibling;
    if (hlPre) {
      hlPre.scrollTop  = this.textarea.scrollTop;
      hlPre.scrollLeft = this.textarea.scrollLeft;
    }
    if (this.lineNumEl) this.lineNumEl.scrollTop = this.textarea.scrollTop;
  }

  _updateLineNumbers() {
    if (!this.lineNumEl) return;
    const count = this.textarea.value.split('\n').length;
    let nums = '';
    for (let i = 1; i <= count; i++) nums += i + '\n';
    this.lineNumEl.textContent = nums;
  }

  _applyHighlight() {
    if (!this.hlEl) return;
    this.hlEl.innerHTML = this._highlight(this.textarea.value, this.language);
    this._syncScroll();
  }

  /* ──────────── Utilities ──────────── */

  _esc(t) {
    if (!t) return '';
    return t
      .replace(/&/g,  '&amp;')
      .replace(/</g,  '&lt;')
      .replace(/>/g,  '&gt;')
      .replace(/"/g,  '&quot;')
      .replace(/'/g,  '&#x27;');
  }

  _createLexer(rules, flags = 'g') {
    const pattern = new RegExp(rules.map(([type, src]) => '(' + src + ')').join('|'), flags);
    return (code) => {
      let result = '';
      let lastIndex = 0;
      let match;
      while ((match = pattern.exec(code)) !== null) {
        if (match.index > lastIndex) {
          result += this._esc(code.slice(lastIndex, match.index));
        }
        let type = null;
        for (let i = 0; i < rules.length; i++) {
          if (match[i + 1] !== undefined) {
            type = rules[i][0];
            break;
          }
        }
        const matchedText = match[0];
        if (type) {
          result += `<span class="${type}">${this._esc(matchedText)}</span>`;
        } else {
          result += this._esc(matchedText);
        }
        lastIndex = pattern.lastIndex;
      }
      if (lastIndex < code.length) {
        result += this._esc(code.slice(lastIndex));
      }
      return result;
    };
  }

  /* ──────────── Lexer Setup ──────────── */

  _initLexers() {
    this._lexCSS = this._createLexer([
      ['hl-comment', '/\\*[\\s\\S]*?\\*/'],
      ['hl-keyword', '@[a-zA-Z-]+'],
      ['hl-string', '"[^"\\n]*"|\'[^\'\\n]*\''],
      ['hl-css-var', '--[a-zA-Z0-9-]+'],
      ['hl-number', '#[0-9a-fA-F]{3,8}|\\b\\d+\\.?\\d*(?:px|em|rem|vh|vw|%|s|ms|deg|fr)?\\b'],
      ['hl-css-prop', '\\b[a-zA-Z-]+(?=\\s*:)'],
      ['hl-css-selector', '[.#:][a-zA-Z0-9_-]+'],
    ]);

    this._lexJS = this._createLexer([
      ['hl-comment', '//[^\\n]*|/\\*[\\s\\S]*?\\*/'],
      ['hl-string', '`[^`]*`|"(?:[^"\\\\\\n]|\\\\.)*"|\'(?:[^\'\\\\\\n]|\\\\.)*\''],
      ['hl-keyword', '\\b(?:const|let|var|function|return|if|else|for|while|do|break|continue|switch|case|class|extends|new|this|super|import|export|from|default|async|await|try|catch|finally|throw|typeof|instanceof|in|of|interface|type|enum|implements|readonly|public|private|protected|abstract|null|undefined|true|false|void|never|any|string|number|boolean|object|Promise|Array|Record|Partial|Required|Pick|Omit|keyof)\\b'],
      ['hl-number', '\\b\\d+\\.?\\d*\\b'],
      ['hl-function', '\\b[a-zA-Z_$][\\w$]*(?=\\s*\\()'],
    ]);

    this._lexPython = this._createLexer([
      ['hl-comment', '#[^\\n]*'],
      ['hl-string', '"""[\\s\\S]*?"""|\'\'\'[\\s\\S]*?\'\'\'|f?"(?:[^"\\\\\\n]|\\\\.)*"|f?\'(?:[^\'\\\\\\n]|\\\\.)*\''],
      ['hl-decorator', '@[\\w.]+'],
      ['hl-keyword', '\\b(?:def|class|return|if|elif|else|for|while|in|not|and|or|import|from|as|with|try|except|finally|raise|pass|break|continue|lambda|yield|global|nonlocal|del|assert|True|False|None|self|super|print|range|len|type|isinstance|int|str|float|list|dict|tuple|set|bool|enumerate|zip|map|filter|sorted|reversed|open|input)\\b'],
      ['hl-number', '\\b\\d+\\.?\\d*\\b'],
      ['hl-function', '\\b[a-zA-Z_]\\w*(?=\\s*\\()'],
    ]);

    this._lexCFamily = this._createLexer([
      ['hl-comment', '//[^\\n]*|/\\*[\\s\\S]*?\\*/'],
      ['hl-decorator', '#[\\w.]+'],
      ['hl-string', '"(?:[^"\\\\\\n]|\\\\.)*"|\'(?:[^\'\\\\\\n]|\\\\.)*\''],
      ['hl-keyword', '\\b(?:using|namespace|class|struct|interface|enum|public|private|protected|static|void|int|string|bool|float|double|char|long|short|byte|new|return|if|else|for|foreach|while|do|switch|case|break|continue|try|catch|finally|throw|var|const|readonly|abstract|virtual|override|sealed|async|await|get|set|this|base|null|true|false|out|ref|params|List|Dictionary|Console|WriteLine|Write|ReadLine|auto|vector|map|cout|cin|endl|include|define|nullptr)\\b'],
      ['hl-number', '\\b\\d+\\.?\\d*[fFdDlLuU]*\\b'],
      ['hl-function', '\\b[a-zA-Z_]\\w*(?=\\s*\\()'],
    ]);

    this._lexLua = this._createLexer([
      ['hl-comment', '--\\[\\[[\\s\\S]*?--\\]\\]|--[^\\n]*'],
      ['hl-string', '"(?:[^"\\\\\\n]|\\\\.)*"|\'(?:[^\'\\\\\\n]|\\\\.)*\''],
      ['hl-keyword', '\\b(?:local|function|end|if|then|else|elseif|for|do|while|repeat|until|return|break|not|and|or|in|nil|true|false|self|print|pairs|ipairs|type|tostring|tonumber|table|math|string|io|os|insert|remove|concat|sort|floor|ceil|abs|max|min|random|format|sub|find|match|gsub|len|error|pcall|xpcall|require)\\b'],
      ['hl-number', '\\b\\d+\\.?\\d*\\b'],
      ['hl-function', '\\b[a-zA-Z_]\\w*(?=\\s*\\()'],
    ]);

    this._lexSQL = this._createLexer([
      ['hl-comment', '--[^\\n]*|/\\*[\\s\\S]*?\\*/'],
      ['hl-string', '\'(?:[^\'\\\\]|\\.)*\'|"(?:[^"\\\\]|\\.)*"'],
      ['hl-keyword', '\\b(?:SELECT|FROM|WHERE|JOIN|LEFT|RIGHT|INNER|OUTER|FULL|CROSS|ON|AND|OR|NOT|IN|AS|GROUP|BY|ORDER|HAVING|LIMIT|OFFSET|INSERT|INTO|VALUES|UPDATE|SET|DELETE|CREATE|TABLE|INDEX|DROP|ALTER|ADD|COLUMN|PRIMARY|KEY|FOREIGN|REFERENCES|UNIQUE|NULL|DEFAULT|CONSTRAINT|COUNT|SUM|AVG|MIN|MAX|DISTINCT|ALL|EXISTS|UNION|INTERSECT|EXCEPT|CASE|WHEN|THEN|ELSE|END|IS|LIKE|BETWEEN|ILIKE|RETURNING|CASCADE|RESTRICT|VIEW|TRIGGER|PROCEDURE|FUNCTION|BEGIN|COMMIT|ROLLBACK|TRANSACTION|DATABASE|SCHEMA|IF|REPLACE|TRUNCATE|GRANT|REVOKE|EXPLAIN|ANALYZE|DESC|ASC)\\b'],
      ['hl-number', '\\b\\d+\\.?\\d*\\b'],
    ], 'gi');

    this._lexBash = this._createLexer([
      ['hl-decorator', '^#![^\\n]*'],
      ['hl-comment', '#[^\\n]*'],
      ['hl-string', '"(?:[^"\\\\\\n]|\\\\.)*"|\'(?:[^\'\\\\\\n]|\\\\.)*\''],
      ['hl-css-var', '\\$\\{?[\\w@#*?!$0-9]+\\}?'],
      ['hl-keyword', '\\b(?:if|then|else|elif|fi|for|while|do|done|case|esac|function|return|exit|echo|printf|read|export|source|local|declare|readonly|set|unset|shift|break|continue|true|false|test|grep|sed|awk|cat|ls|cd|pwd|mkdir|rmdir|rm|cp|mv|touch|chmod|chown|find|sort|uniq|head|tail|wc|cut|tr|xargs|curl|wget|ssh|scp|sudo|su|ps|kill|killall|top|df|du|tar|gzip|gunzip|zip|unzip|apt|yum|brew|git|make|python|python3|node|npm|bash|sh|which|whereis|alias|history|man|less|more|date|sleep|wait)\\b'],
      ['hl-attr', '\\s-[a-zA-Z0-9-]+'],
      ['hl-operator', '[|&><]{1,2}'],
      ['hl-number', '\\b\\d+\\b'],
    ]);
  }

  /* ──────────── Core Highlight Dispatcher ──────────── */

  _highlight(code, lang) {
    if (!code) return '';
    switch (lang) {
      case 'html':                    return this._hlHTML(code);
      case 'css':                     return this._lexCSS(code);
      case 'typescript': case 'ts':
      case 'javascript': case 'js':   return this._lexJS(code);
      case 'python':                  return this._lexPython(code);
      case 'csharp': case 'cs':
      case 'cpp':                     return this._lexCFamily(code);
      case 'lua':                     return this._lexLua(code);
      case 'sql':                     return this._lexSQL(code);
      case 'bash': case 'linux':
      case 'shell':                   return this._lexBash(code);
      default:                        return this._esc(code);
    }
  }

  /* ──────────── HTML Single-Pass Tokenizer ──────────── */

  _hlHTML(code) {
    const docRegex = /(<!--[\s\S]*?-->)|(<!DOCTYPE[^>]*>)|(<(?:\/)?[a-zA-Z0-9-]+[\s\S]*?>)/gi;
    let result = '';
    let lastIndex = 0;
    let match;
    while ((match = docRegex.exec(code)) !== null) {
      if (match.index > lastIndex) {
        result += this._esc(code.slice(lastIndex, match.index));
      }
      const [full, comment, doctype, tag] = match;
      if (comment) {
        result += '<span class="hl-comment">' + this._esc(comment) + '</span>';
      } else if (doctype) {
        result += '<span class="hl-doctype">' + this._esc(doctype) + '</span>';
      } else if (tag) {
        const tagTokenRegex = /(<\/?)|([a-zA-Z0-9:-]+)|(=)|("[^"]*"|'[^']*')|(\/?>)|(\s+)/g;
        let tagRes = '';
        let isFirstWord = true;
        let tMatch;
        while ((tMatch = tagTokenRegex.exec(tag)) !== null) {
          const [raw, openBracket, word, eq, str, closeBracket, spaces] = tMatch;
          if (openBracket) {
            tagRes += '<span class="hl-tag">' + this._esc(openBracket) + '</span>';
            isFirstWord = true;
          } else if (word) {
            if (isFirstWord) {
              tagRes += '<span class="hl-tagname">' + this._esc(word) + '</span>';
              isFirstWord = false;
            } else {
              tagRes += '<span class="hl-attr">' + this._esc(word) + '</span>';
            }
          } else if (eq) {
            tagRes += '<span class="hl-eq">=</span>';
          } else if (str) {
            tagRes += '<span class="hl-string">' + this._esc(str) + '</span>';
          } else if (closeBracket) {
            tagRes += '<span class="hl-tag">' + this._esc(closeBracket) + '</span>';
          } else if (spaces) {
            tagRes += spaces;
          }
        }
        result += tagRes;
      }
      lastIndex = docRegex.lastIndex;
    }
    if (lastIndex < code.length) {
      result += this._esc(code.slice(lastIndex));
    }
    return result;
  }
}
