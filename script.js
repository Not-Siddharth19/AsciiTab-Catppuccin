// --- CONSTANTS & DEFAULTS ---
const defaultSettings = {
    sidebar: true, widgets: true, ascii: true,
    clock24h: true, clockSeconds: false, clockDate: true,
    theme: 'mocha', font: 'normal', animations: 'on',
    engine: 'google', newtab: false, suggestions: true,
    asciiSize: 8, density: 'normal', alignment: 'center',
    showTasks: true, showNotes: true, showTimer: true,
    showWeather: true, showMedia: true, showSystem: true, showVisualizer: true,
    backgroundOptimization: true, enableCommands: true, shortcuts: true, focusMode: false,
    minimalismMode: 0
};
const defaultLinks = [
    { category: "/general", links: [{ name: "dashboard", url: "https://gmail.com" }, { name: "calendar", url: "https://calendar.google.com" }] },
    { category: "/media", links: [{ name: "youtube", url: "https://youtube.com" }, { name: "reddit", url: "https://reddit.com" }] },
    { category: "/tech", links: [{ name: "github", url: "https://github.com" }, { name: "chatgpt", url: "https://chat.openai.com" }] }
];
const defaultCommands = [
    { cmd: "!y", desc: "YouTube search", url: "https://youtube.com/results?search_query=" },
    { cmd: "!yt", desc: "YouTube search", url: "https://youtube.com/results?search_query=" },
    { cmd: "!gh", desc: "GitHub search", url: "https://github.com/search?q=" },
    { cmd: "!r", desc: "Reddit sub", url: "https://reddit.com/r/" },
    { cmd: "!g", desc: "Google search", url: "https://google.com/search?q=" },
    { cmd: "!ai", desc: "ChatGPT", url: "https://chatgpt.com/?q=" },
    { cmd: "!wa", desc: "Wolfram Alpha", url: "https://www.wolframalpha.com/input/?i=" },
    { cmd: "!w", desc: "Wikipedia search", url: "https://en.wikipedia.org/wiki/" },
    { cmd: "!maps", desc: "Google Maps", url: "https://www.google.com/maps/search/" },
    { cmd: "!mail", desc: "Gmail search", url: "https://mail.google.com/mail/u/0/#search/" }
];
const baseCommands = [
    { cmd: "@h", desc: "Help menu" },
    { cmd: "@c", desc: "Clear input" },
    { cmd: "@s", desc: "Settings menu" },
    { cmd: "@widgets", desc: "Widget Management" },
    { cmd: "@wm", desc: "Widget Management" },
    { cmd: "@theme", desc: "Change theme (mocha/frappe/macchiato/latte)" },
    { cmd: "@ascii", desc: "Open ASCII Editor" },
    { cmd: "@ae", desc: "Open ASCII Editor" },
    { cmd: "@clearascii", desc: "Reset ASCII to default" },
    { cmd: "@clear", desc: "Full clear input" },
    { cmd: "@minimalium", desc: "Toggle True Minimalism Mode" },
    { cmd: "@min", desc: "Toggle True Minimalism Mode" },
    { cmd: "@reset", desc: "Factory reset dashboard" }
];
const asciiPresets = {
    custom: `$$$$$$$$$$$$$$$$""$o$o$o$o$o$oo$$""$$$$$$$$$$$$$$$
$$$$$$$$$$$$""o$$$$$$$$$$"$"$$$$$$$o$"$$$$$$$$$$$$
$$$$$$$$$"$o$$$$""$oo $ ""      """$$$oo"$$$$$$$$$
$$$$$$$"o$$$$"   ""o  $oo o o       ""$$$o"$$$$$$$
$$$$$"o$$$"       oo$$$$$$$$$$o        "$$$o"$$$$$
$$$$"o$$$  $  o$$$$$$$$$$$$$$"$$oo       "$$$ $$$$
$$$"$$$"   "$$$$$$$$$$$$$$$$o$o$$$"        $$$o$$$
$$ $$$    o$$$$$$$$$$$$$$$$$$$$$$$$o o   o  "$$o"$
$"$$$"    o$$$$$$$$$"$$$$$$"" "$$$$$$"$$$$$  $$$"$
$o$$"    o$$$$$$$$$$o""$$$""""ooo"$$$$$$$$"   $$$"
$o$$"    o$$$$$$$$$$            ""oo"$"$o""   $$$o
o$$$     o$$$$$$$$$$                """""$    o$$o
o$$$    o$$$$$$$$$$$$o                   "o "oo$$o
o$$$  oo$$$$$$$$$$$$$$$$ooooooo$$$$$oo    $"$ "$$o
o$$$"  ""  $$$$$$$$$$$$$$$$$$$$$$$$$$$$o    " $$$
$ $$$       "$$$$$$$$$$$$$$$$$$$$$$$$$$$o    o$$"$
$$"$$o       "$$$$$$$$$$$$$$$$$$$$$$$$$$$o   $$$o$
$$o$$$o       $$""$$$$$$$$$$$$$$$$$$$$$$$o  $$$ $$
$$$o"$$o    "$""  "$""$$$$$$$$$$$$$$$$$$$oo$$$"$$$
$$$$o"$$$o        "     $$$$$$$$$$$$$$$$$o$$"o$$$$
$$$$$$o"$$$o         oo$$$$$$$$$$$$$$$$$$$$"o$$$$$
$$$$$$$$o"$$$$ooooo$$$$$$$$$$$$$$$$$$$$$$"o$$$$$$$
$$$$$$$$$$o""$$$$$$$$$$$$$$$$$$$$$$$$$"oo$$$$$$$$$
$$$$$$$$$$$$$o$""$$$$$$$$$$$$$$$$$""oo$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$o$o$"$"$"$"$oo$o$$$$$$$$$$$$$$$$`,
    default: `  /$$$$$$                      /$$ /$$ /$$$$$$$$        /$$      
 /$$__  $$                    |__/|__/|__  $$__/       | $$      
| $$  \\ $$  /$$$$$$$  /$$$$$$$ /$$ /$$   | $$  /$$$$$$ | $$$$$$$ 
| $$$$$$$$ /$$_____/ /$$_____/| $$| $$   | $$ |____  $$| $$__  $$
| $$__  $$|  $$$$$$ | $$      | $$| $$   | $$  /$$$$$$$| $$  \\ $$
| $$  | $$ \\____  $$| $$      | $$| $$   | $$ /$$__  $$| $$  | $$
| $$  | $$ /$$$$$$$/|  $$$$$$$| $$| $$   | $$|  $$$$$$$| $$$$$$$/
|__/  |__/|_______/  \\_______/|__/|__/   |__/ \\_______/|_______/`,
    tux: `         _nnnn_
        dGGGGMMb
       @p~qp~~qMb
       M|@||@) M|
       @,----.JM|
      JS^\\__/  qKL
     dZP        qKRb
    dZP          qKKb
   fZP            SMMb
   HZM            MMMM
   FqM            MMMM
 __| ".        |\\dS"qML
 |    \`.       | \`' \\Zq
_)      \\.___.,|     .'
\\____   )MMMMMP|   .'
     \`-'       \`--' hjm`,
    earth: `              _v->#H#P? "':o<>\\_
          .,dP\` \`''  "'-o.+H6&MMMHo_
        oHMH9'         \`?&bHMHMMMMMMHo.
      oMP"' '           ooMP*#&HMMMMMMM?.
    ,M*          -     \`*MSdob//\`^&##MMMH\\
   d*'                .,MMMMMMH#o>#ooMMMMMb
  HM-                :HMMMMMMMMMMMMMMM&HM[R\\
 d"Z\\.               9MMMMMMMMMMMMMMMMM[HMM|:
-H    -              MMMMMMMMMMMMMMMMMMMbMP' :
:??Mb#               \`9MMMMMMMMMMMMMMMMMMH#! .
: MMMMH#,              "*""""\`#HMMMMMMMMMMH  -
||MMMMMM6\\.                    {MMMMMMMMMH'  :
:|MMMMMMMMMMHo                 \`9MMMMMMMM'   .
. HMMMMMMMMMMP'                 !MMMMMMMM    \`
- \`#MMMMMMMMM                   HMMMMMMM*,/  :
 :  ?MMMMMMMF                   HMMMMMM',P' :
  .  HMMMMR'                    {MMMMP' ^' -
   : \`HMMMT                     iMMH'     .'
    -.\`HMH                               .
      -:*H                            . '
        -\`\\,,    .                  .-
          ' .  _                 .- \`
              '\`~\\.__,obb#q==~'''`,
    minimal: `                    |
____________    __ -+-  ____________
\\_____     /   /_ \\ |   \\     _____/
 \\_____    \\____/  \\____/    _____/
  \\_____                    _____/
     \\___________  ___________/
               /____\\`,
    dragon: `$$$$$$$$$$$$$$$$""$o$o$o$o$o$oo$$""$$$$$$$$$$$$$$$
$$$$$$$$$$$$""o$$$$$$$$$$"$"$$$$$$$o$"$$$$$$$$$$$$
$$$$$$$$$"$o$$$$""$oo $ ""      """$$$oo"$$$$$$$$$
$$$$$$$"o$$$$"   ""o  $oo o o       ""$$$o"$$$$$$$$
$$$$$"o$$$"       oo$$$$$$$$$$o        "$$$o"$$$$$$
$$$$"o$$$  $  o$$$$$$$$$$$$$$"$$oo       "$$$ $$$$$
$$$"$$$"   "$$$$$$$$$$$$$$$$o$o$$$"        $$$o$$$
$$ $$$    o$$$$$$$$$$$$$$$$$$$$$$$$o o   o  "$$o"$
$"$$$"    o$$$$$$$$$"$$$$$$"" "$$$$$$"$$$$$  $$$"$
$o$$"    o$$$$$$$$$$o""$$$""""ooo"$$$$$$$$"   $$$"
$o$$"    o$$$$$$$$$$            ""oo"$"$o""   $$$o
o$$$     o$$$$$$$$$$                """""$    o$$o
o$$$    o$$$$$$$$$$$$o                   "o "oo$$o
o$$$  oo$$$$$$$$$$$$$$$$ooooooo$$$$$oo    $"$ "$$o
o$$$"  ""  $$$$$$$$$$$$$$$$$$$$$$$$$$$$o    " $$$
$ $$$       "$$$$$$$$$$$$$$$$$$$$$$$$$$$o    o$$"$
$$"$$o       "$$$$$$$$$$$$$$$$$$$$$$$$$$$o   $$$o$
$$o$$$o       $$""$$$$$$$$$$$$$$$$$$$$$$$o  $$$ $$
$$$o"$$o    "$""  "$""$$$$$$$$$$$$$$$$$$$oo$$$"$$$
$$$$o"$$$o        "     $$$$$$$$$$$$$$$$$o$$"o$$$$
$$$$$$o"$$$o         oo$$$$$$$$$$$$$$$$$$$$"o$$$$$
$$$$$$$$o"$$$$ooooo$$$$$$$$$$$$$$$$$$$$$$"o$$$$$$$
$$$$$$$$$$o""$$$$$$$$$$$$$$$$$$$$$$$$$"oo$$$$$$$$$
$$$$$$$$$$$$$o$""$$$$$$$$$$$$$$$$$""oo$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$o$o$"$"$"$"$oo$o$$$$$$$$$$$$$$$$`
};

// --- STATE ---
function getSafeStorage(key, fallback) {
    try {
        const item = localStorage.getItem(key);
        if (!item || item === "undefined") return fallback;
        return JSON.parse(item);
    } catch (e) {
        console.warn(`Failed to parse localStorage [${key}]`, e);
        return fallback;
    }
}

let currentSettings = Object.assign({}, defaultSettings, getSafeStorage('settings', {}));
let customCommands = getSafeStorage('customCommands', defaultCommands);
let selectedSuggestionIndex = -1;

const cmd = document.getElementById('cmd');
const suggestions = document.getElementById('suggestions');
const clock = document.getElementById('clock');
const date = document.getElementById('date');
const tasks = document.getElementById('tasks');
const newTask = document.getElementById('newTask');
const memo = document.getElementById('memo');

// --- UTILS ---
function getEngines() {
    return {
        google: "https://google.com/search?q=",
        duckduckgo: "https://duckduckgo.com/?q="
    };
}

function doSearch(url) {
    if (currentSettings.newtab) {
        window.open(url, '_blank');
    } else {
        location.href = url;
    }
}

// --- MODALS ---
function closeModals() {
    document.getElementById('backdrop').style.display = 'none';
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    cmd.focus();
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModals();
    if (e.ctrlKey && e.key === 'k' && currentSettings.shortcuts) {
        e.preventDefault();
        cmd.focus();
    }
    if (e.ctrlKey && e.key === ',') {
        e.preventDefault();
        document.getElementById('backdrop').style.display = 'block';
        document.getElementById('settings-modal').style.display = 'block';
    }
    if (e.ctrlKey && e.key === 'm') {
        e.preventDefault();
        openMinimaliumManager();
    }
});

// --- CLOCK ---
setInterval(() => {
    const d = new Date();
    let hrs = d.getHours();
    const mins = d.getMinutes().toString().padStart(2, '0');
    const secs = currentSettings.clockSeconds ? ":" + d.getSeconds().toString().padStart(2, '0') : "";
    let timeString = "";
    if (!currentSettings.clock24h) {
        const ampm = hrs >= 12 ? ' PM' : ' AM';
        hrs = hrs % 12 || 12;
        timeString = `${hrs.toString().padStart(2, '0')}:${mins}${secs}${ampm}`;
    } else {
        timeString = `${hrs.toString().padStart(2, '0')}:${mins}${secs}`;
    }
    if (clock) clock.innerText = timeString;
    if (date) date.innerText = currentSettings.clockDate ? d.toDateString() : "";
}, 1000);

// --- COMMAND ENGINE ---
if (cmd) {
    cmd.addEventListener("keydown", e => {
        const suggestionElements = document.querySelectorAll('.suggestion');
        if (e.key === "ArrowDown") {
            e.preventDefault();
            if (suggestionElements.length > 0) {
                selectedSuggestionIndex = (selectedSuggestionIndex + 1) % suggestionElements.length;
                highlightSuggestion(suggestionElements);
            }
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (suggestionElements.length > 0) {
                selectedSuggestionIndex = (selectedSuggestionIndex - 1 + suggestionElements.length) % suggestionElements.length;
                highlightSuggestion(suggestionElements);
            }
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (selectedSuggestionIndex >= 0 && suggestionElements.length > 0) {
                const text = suggestionElements[selectedSuggestionIndex].dataset.cmd;
                cmd.value = text + (text.startsWith("!") || text.startsWith("@") ? " " : "");
                suggestions.style.display = "none";
                selectedSuggestionIndex = -1;
                if (!text.startsWith("!") && !text.startsWith("@")) go(text);
                return;
            }
            executeCommand(cmd.value.trim());
        } else if (e.key === "Escape") {
            suggestions.style.display = "none";
            selectedSuggestionIndex = -1;
        }
    });

    cmd.addEventListener("input", () => {
        const q = cmd.value.trim();
        selectedSuggestionIndex = -1;
        if (!q) { suggestions.style.display = "none"; return; }

        if (q.startsWith("@")) {
            const matches = baseCommands.filter(c => c.cmd.startsWith(q.split(" ")[0].toLowerCase()));
            renderSuggestions(matches.map(m => ({ text: m.cmd, desc: m.desc, value: m.cmd })));
        } else if (q.startsWith("!")) {
            const matches = customCommands.filter(c => c.cmd.startsWith(q.split(" ")[0].toLowerCase()));
            renderSuggestions(matches.map(m => ({ text: m.cmd, desc: m.desc, value: m.cmd })));
        } else if (currentSettings.suggestions && q.length >= 2) {
            fetchSuggestions(q);
        } else {
            suggestions.style.display = "none";
        }
    });

    suggestions.addEventListener("click", e => {
        const el = e.target.closest('.suggestion');
        if (!el) return;
        const query = el.dataset.cmd;
        if (query.startsWith("!") || query.startsWith("@")) goCmd(query);
        else go(query);
    });
}


async function fetchSuggestions(q) {
    if (!currentSettings.suggestions) return;
    try {
        const response = await fetch(`https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(q)}`);
        const data = await response.json();
        const list = data[1];
        if (!list || !list.length) {
            if (suggestions) suggestions.style.display = "none";
            return;
        }

        if (suggestions) {
            suggestions.replaceChildren();
            list.slice(0, 5).forEach(s => {
                const div = document.createElement('div');
                div.className = 'suggestion';
                div.dataset.cmd = s;
                div.textContent = s;
                suggestions.appendChild(div);
            });
            suggestions.style.display = "block";
        }
    } catch (err) {
        console.error("Suggestion fetch failed", err);
    }
}

function go(q) {
    const engineUrl = getEngines()[currentSettings.engine] || getEngines().google;
    doSearch(engineUrl + encodeURIComponent(q));
}

function goCmd(c) {
    cmd.value = c + " ";
    cmd.focus();
    suggestions.style.display = "none";
}

function executeCommand(v) {
    if (!v) return;
    const terms = v.split(/\s+/);
    const command = terms[0].toLowerCase();
    const arg = terms.slice(1).join(" ");

    if (currentSettings.enableCommands) {
        if (command === "@h") {
            renderHelp();
            document.getElementById('backdrop').style.display = 'block';
            document.getElementById('help-modal').style.display = 'block';
            cmd.value = "";
            return;
        } else if (command === "@addcmd") {
            openCommandManager();
            cmd.value = "";
            return;
        } else if (command === "@c" || command === "@clear") {
            cmd.value = "";
            return;
        } else if (command === "@reset") {
            resetAll();
            cmd.value = "";
            return;
        } else if (command === "@s") {
            document.getElementById('backdrop').style.display = 'block';
            document.getElementById('settings-modal').style.display = 'block';
            cmd.value = "";
            return;
        } else if (command === "@theme" && ['mocha', 'frappe', 'macchiato', 'latte'].includes(arg)) {
            currentSettings.theme = arg;
            saveAndApplySettings();
            cmd.value = "";
            return;
        } else if (command === "@ascii" || command === "@ae") {
            openAsciiEditor();
            return;
        } else if (command === "@clearascii") {
            localStorage.removeItem('customAscii');
            applyCustomAscii();
            cmd.value = "";
            return;
        } else if (command === "@widgets" || command === "@wm") {
            document.getElementById('backdrop').style.display = 'block';
            document.getElementById('widgets-modal').style.display = 'block';
            cmd.value = "";
            return;
        } else if (command === "@add" || command === "@addlink") {
            openAddLinkModal();
            cmd.value = "";
            return;
        } else if (command === "@sidebar" && ['on', 'off'].includes(arg)) {
            currentSettings.sidebar = arg === 'on';
            saveAndApplySettings();
            cmd.value = "";
            return;
        } else if (command === "@minimalium" || command === "@min") {
            openMinimaliumManager();
            cmd.value = "";
            return;
        } else {
            const foundCustom = customCommands.find(c => c.cmd === command);
            if (foundCustom) {
                doSearch(arg ? foundCustom.url + encodeURIComponent(arg) : foundCustom.url.split('?')[0]);
                return;
            }
        }
    }

    // Default: Regular Search
    const engineUrl = getEngines()[currentSettings.engine] || getEngines().google;
    doSearch(engineUrl + encodeURIComponent(v));
}

function renderSuggestions(list) {
    if (list.length === 0) { suggestions.style.display = "none"; return; }
    suggestions.replaceChildren();
    list.slice(0, 6).forEach(item => {
        const div = document.createElement('div');
        div.className = 'suggestion';
        div.dataset.cmd = item.value;
        div.textContent = item.text;
        const span = document.createElement('span');
        span.style.opacity = "0.5";
        span.style.marginLeft = "8px";
        span.textContent = `— ${item.desc}`;
        div.appendChild(span);
        suggestions.appendChild(div);
    });
    suggestions.style.display = "block";
}

function highlightSuggestion(elements) {
    elements.forEach(el => el.classList.remove('selected'));
    if (selectedSuggestionIndex >= 0) elements[selectedSuggestionIndex].classList.add('selected');
}

// --- TASKS ---
function renderTasks() {
    const defaultTasks = [
        { text: "Sleep", done: true },
        { text: "Subscribe to SidDoesTech", done: true }
    ];
    const t = JSON.parse(localStorage.tasks || JSON.stringify(defaultTasks));
    tasks.replaceChildren();
    t.forEach((task, i) => {
        const item = document.createElement('div');
        item.className = 'task-item';
        item.dataset.index = i;

        const cb = document.createElement('input');
        cb.type = 'checkbox';
        if (task.done) cb.checked = true;

        const span = document.createElement('span');
        span.textContent = task.text;
        if (task.done) span.className = 'task-done';

        item.appendChild(cb);
        item.appendChild(span);
        tasks.appendChild(item);
    });

    // Add event listeners
    document.querySelectorAll('.task-item').forEach(item => {
        const i = item.dataset.index;
        item.addEventListener('contextmenu', e => deleteTask(e, i));
        item.querySelector('input').addEventListener('click', () => toggleTask(i));
    });
}

function deleteTask(e, i) {
    e.preventDefault();
    const t = JSON.parse(localStorage.tasks);
    t.splice(i, 1);
    localStorage.tasks = JSON.stringify(t);
    renderTasks();
}

if (newTask) {
    newTask.addEventListener('keydown', e => {
        if (e.key === "Enter") {
            const t = JSON.parse(localStorage.tasks || "[]");
            t.push({ text: newTask.value, done: false });
            localStorage.tasks = JSON.stringify(t);
            newTask.value = "";
            renderTasks();
        }
    });
}

function toggleTask(i) {
    const t = JSON.parse(localStorage.tasks);
    t[i].done = !t[i].done;
    localStorage.tasks = JSON.stringify(t);
    renderTasks();
}

// --- NOTES ---
if (memo) {
    memo.value = localStorage.memo || "I use Debian btw...";
    memo.addEventListener('input', () => localStorage.memo = memo.value);
}

// --- SETTINGS & CONFIGS ---
function renderHelp() {
    const helpContent = document.getElementById('help-content');
    helpContent.replaceChildren();

    const addSection = (title, commands) => {
        const head = document.createElement('div');
        head.className = 'modal-section-title';
        head.textContent = `[ ${title} ]`;
        if (title !== 'SYSTEM') head.style.marginTop = '20px';
        helpContent.appendChild(head);

        commands.forEach(c => {
            const row = document.createElement('div');
            row.className = 'modal-row';
            const key = document.createElement('div');
            key.className = 'cmd-key';
            key.textContent = c.cmd;
            row.appendChild(key);
            row.appendChild(document.createTextNode(` ${c.desc}`));
            helpContent.appendChild(row);
        });
    };

    addSection('SYSTEM', baseCommands);
    addSection('SEARCH', customCommands);
}

function openCommandManager() {
    const list = document.getElementById('cm-list');
    list.replaceChildren();
    customCommands.forEach((c, i) => {
        const item = document.createElement('div');
        item.className = 'cmd-list-item';

        const info = document.createElement('div');
        info.className = 'cmd-info';
        const strong = document.createElement('strong');
        strong.textContent = c.cmd;
        const span = document.createElement('span');
        span.textContent = c.desc;
        info.appendChild(strong);
        info.appendChild(span);

        const btn = document.createElement('button');
        btn.className = 'mini-btn reset-btn';
        btn.dataset.index = i;
        btn.textContent = 'Delete';

        item.appendChild(info);
        item.appendChild(btn);
        list.appendChild(item);
    });

    list.querySelectorAll('.reset-btn').forEach(btn => {
        btn.addEventListener('click', () => deleteCustomCommand(btn.dataset.index));
    });

    document.getElementById('cm-prefix').value = "";
    document.getElementById('cm-desc').value = "";
    document.getElementById('cm-url').value = "";

    document.getElementById('backdrop').style.display = 'block';
    document.getElementById('command-manager-modal').style.display = 'block';
}

function addCustomCommand() {
    const cmdVal = document.getElementById('cm-prefix').value.trim();
    const desc = document.getElementById('cm-desc').value.trim();
    const url = document.getElementById('cm-url').value.trim();

    if (!cmdVal || !desc || !url) { alert("Fill all fields"); return; }
    if (!cmdVal.startsWith("!")) { alert("Prefix must start with !"); return; }

    customCommands.push({ cmd: cmdVal, desc: desc, url: url });
    localStorage.customCommands = JSON.stringify(customCommands);
    renderHelp();
    openCommandManager();
}

function deleteCustomCommand(i) {
    if (!confirm("Delete command?")) return;
    customCommands.splice(i, 1);
    localStorage.customCommands = JSON.stringify(customCommands);
    renderHelp();
    openCommandManager();
}

function renderLinks() {
    const linksConfig = localStorage.links ? JSON.parse(localStorage.links) : defaultLinks;
    const navContent = document.getElementById('nav-content');
    navContent.replaceChildren();
    linksConfig.forEach((section, sIdx) => {
        const h3 = document.createElement('h3');
        h3.textContent = section.category;
        navContent.appendChild(h3);

        section.links.forEach((l, lIdx) => {
            const container = document.createElement('div');
            container.className = 'sidebar-link-container';
            const a = document.createElement('a');
            a.href = l.url;
            a.textContent = l.name;
            const span = document.createElement('span');
            span.className = 'del-link';
            span.dataset.sidx = sIdx;
            span.dataset.lidx = lIdx;
            span.textContent = '×';
            container.appendChild(a);
            container.appendChild(span);
            navContent.appendChild(container);
        });
    });

    document.querySelectorAll('.del-link').forEach(el => {
        el.addEventListener('click', () => deleteLink(el.dataset.sidx, el.dataset.lidx));
    });

    document.getElementById('links-editor').value = JSON.stringify(linksConfig, null, 2);
    document.getElementById('commands-editor').value = JSON.stringify(customCommands, null, 2);
}

function deleteLink(sIdx, lIdx) {
    if (!confirm("Remove this link?")) return;
    const linksConfig = JSON.parse(localStorage.links || JSON.stringify(defaultLinks));
    linksConfig[sIdx].links.splice(lIdx, 1);
    if (linksConfig[sIdx].links.length === 0) linksConfig.splice(sIdx, 1);
    localStorage.links = JSON.stringify(linksConfig);
    renderLinks();
}

function openAddLinkModal() {
    const linksConfig = localStorage.links ? JSON.parse(localStorage.links) : defaultLinks;
    const catSelect = document.getElementById('al-category');
    catSelect.replaceChildren();
    linksConfig.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.category;
        opt.textContent = s.category;
        catSelect.appendChild(opt);
    });
    const newCatOpt = document.createElement('option');
    newCatOpt.value = 'NEW_CATEGORY';
    newCatOpt.textContent = '+ Create New Category';
    catSelect.appendChild(newCatOpt);

    document.getElementById('al-name').value = "";
    document.getElementById('al-url').value = "";
    document.getElementById('new-cat-row').style.display = "none";

    document.getElementById('backdrop').style.display = 'block';
    document.getElementById('add-link-modal').style.display = 'block';
}

function checkNewCategory() {
    const val = document.getElementById('al-category').value;
    document.getElementById('new-cat-row').style.display = (val === 'NEW_CATEGORY') ? 'flex' : 'none';
}

function addSidebarLink() {
    const name = document.getElementById('al-name').value.trim();
    let url = document.getElementById('al-url').value.trim();
    let category = document.getElementById('al-category').value;

    if (category === 'NEW_CATEGORY') {
        category = document.getElementById('al-new-category').value.trim();
    }

    if (!name || !url || !category) { alert("Please fill all fields"); return; }
    if (!url.startsWith('http')) url = 'https://' + url;

    const linksConfig = localStorage.links ? JSON.parse(localStorage.links) : defaultLinks;
    let section = linksConfig.find(s => s.category === category);

    if (!section) {
        section = { category: category, links: [] };
        linksConfig.push(section);
    }

    section.links.push({ name: name, url: url });
    localStorage.links = JSON.stringify(linksConfig);
    renderLinks();
    closeModals();
}

function saveAllConfigs() {
    try {
        const links = JSON.parse(document.getElementById('links-editor').value);
        const commands = JSON.parse(document.getElementById('commands-editor').value);
        localStorage.links = JSON.stringify(links);
        localStorage.customCommands = JSON.stringify(commands);
        customCommands = commands;
        renderLinks();
        alert("Configs saved!");
    } catch (e) { alert("Invalid JSON format!"); }
}

// --- TIMER ---
let timerSeconds = 1500;
let timerInterval = null;
function toggleTimer() {
    const btn = document.getElementById('timer-toggle');
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        btn.innerText = "START";
    } else {
        timerInterval = setInterval(() => {
            if (timerSeconds > 0) {
                timerSeconds--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                timerInterval = null;
                btn.innerText = "START";
                alert("Timer finished!");
            }
        }, 1000);
        btn.innerText = "STOP";
    }
}
function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timerSeconds = 1500;
    updateTimerDisplay();
    document.getElementById('timer-toggle').innerText = "START";
}
function updateTimerDisplay() {
    const m = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
    const s = (timerSeconds % 60).toString().padStart(2, '0');
    document.getElementById('timer-display').innerText = `${m}:${s}`;
}

// --- SYSTEM STATS ---
setInterval(() => {
    if (!currentSettings.showSystem) return;
    const cpu = document.getElementById('sys-cpu');
    const ram = document.getElementById('sys-ram');
    if (cpu) cpu.innerText = Math.floor(Math.random() * 20 + 5) + "%";
    if (ram) ram.innerText = (Math.random() * 1 + 3.5).toFixed(1) + "gb";
}, 3000);

function loadSettings() {
    // Basic settings check
    if (!currentSettings || typeof currentSettings !== 'object') {
        currentSettings = Object.assign({}, defaultSettings);
    }

    // Always use default minimalism mode initially to avoid getting stuck
    currentSettings.minimalismMode = 0;
    currentSettings.sidebar = true;
    currentSettings.widgets = true;
    
    // Safety check for UI elements
    const setVal = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.value = val;
    };
    const setChecked = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.checked = val;
    };

    setVal('setting-theme', currentSettings.theme);
    setVal('setting-font', currentSettings.font);
    setVal('setting-density', currentSettings.density || 'normal');
    setChecked('toggle-ascii', currentSettings.ascii);
    setVal('setting-animations', currentSettings.animations || 'on');
    setVal('setting-time-format', currentSettings.clock24h ? '24h' : '12h');
    setVal('setting-alignment', currentSettings.alignment || 'center');
    setChecked('toggle-seconds', currentSettings.clockSeconds);
    setChecked('toggle-date', currentSettings.clockDate);
    setVal('setting-engine', currentSettings.engine);
    setChecked('toggle-suggestions', currentSettings.suggestions);
    setVal('setting-target', currentSettings.newtab ? 'new' : 'current');

    setChecked('w-toggle-sidebar', currentSettings.sidebar);
    setChecked('w-toggle-widgets', currentSettings.widgets);
    setChecked('w-toggle-ascii', currentSettings.ascii);
    setChecked('w-toggle-tasks', currentSettings.showTasks !== false);
    setChecked('w-toggle-notes', currentSettings.showNotes !== false);
    setChecked('w-toggle-timer', currentSettings.showTimer !== false);
    setChecked('w-toggle-weather', currentSettings.showWeather !== false);
    setChecked('w-toggle-media', currentSettings.showMedia !== false);
    setChecked('w-toggle-system', currentSettings.showSystem !== false);
    setChecked('w-toggle-visualizer', currentSettings.showVisualizer !== false);
    setChecked('w-toggle-bg-opt', currentSettings.backgroundOptimization !== false);

    setChecked('toggle-enable-commands', currentSettings.enableCommands !== false);
    setChecked('toggle-shortcuts', currentSettings.shortcuts !== false);
    setChecked('toggle-focus', currentSettings.focusMode === true);
    
    applySettings();
}

function updateSettings() {
    currentSettings.theme = document.getElementById('setting-theme').value;
    currentSettings.font = document.getElementById('setting-font').value;
    currentSettings.density = document.getElementById('setting-density').value;
    currentSettings.ascii = document.getElementById('toggle-ascii').checked || document.getElementById('w-toggle-ascii').checked;
    currentSettings.animations = document.getElementById('setting-animations').value;
    currentSettings.clock24h = document.getElementById('setting-time-format').value === '24h';
    currentSettings.alignment = document.getElementById('setting-alignment').value;
    currentSettings.clockSeconds = document.getElementById('toggle-seconds').checked;
    currentSettings.clockDate = document.getElementById('toggle-date').checked;
    currentSettings.engine = document.getElementById('setting-engine').value;
    currentSettings.suggestions = document.getElementById('toggle-suggestions').checked;
    currentSettings.newtab = document.getElementById('setting-target').value === 'new';

    currentSettings.sidebar = document.getElementById('w-toggle-sidebar').checked;
    currentSettings.widgets = document.getElementById('w-toggle-widgets').checked;
    currentSettings.showTasks = document.getElementById('w-toggle-tasks').checked;
    currentSettings.showNotes = document.getElementById('w-toggle-notes').checked;
    currentSettings.showTimer = document.getElementById('w-toggle-timer').checked;
    currentSettings.showWeather = document.getElementById('w-toggle-weather').checked;
    currentSettings.showMedia = document.getElementById('w-toggle-media').checked;
    currentSettings.showSystem = document.getElementById('w-toggle-system').checked;
    currentSettings.showVisualizer = document.getElementById('w-toggle-visualizer').checked;
    currentSettings.backgroundOptimization = document.getElementById('w-toggle-bg-opt').checked;

    currentSettings.enableCommands = document.getElementById('toggle-enable-commands').checked;
    currentSettings.shortcuts = document.getElementById('toggle-shortcuts').checked;
    currentSettings.focusMode = document.getElementById('toggle-focus').checked;
    const minToggle = document.getElementById('toggle-minimalium');
    if (minToggle) {
        if (minToggle.checked && currentSettings.minimalismMode === 0) {
            currentSettings.minimalismMode = 1;
        } else if (!minToggle.checked) {
            currentSettings.minimalismMode = 0;
        }
    }

    saveAndApplySettings();
}

function saveAndApplySettings() {
    localStorage.settings = JSON.stringify(currentSettings);
    applySettings();
}

// Force reset all settings on load
function forceResetSettings() {
    currentSettings = Object.assign({}, defaultSettings);
    localStorage.settings = JSON.stringify(currentSettings);
    localStorage.removeItem('settings');
}

// For testing - type resetSettings() in console to clear all stored data
window.resetSettings = function() {
    localStorage.clear();
    location.reload();
}

function applySettings() {
    // Base classes
    const baseClasses = [
        `theme-${currentSettings.theme}`,
        `font-${currentSettings.font}`,
        `density-${currentSettings.density}`,
        `align-${currentSettings.alignment}`
    ];
    if (currentSettings.focusMode) baseClasses.push('focus-mode');
    if (currentSettings.minimalismMode > 0) baseClasses.push('minimalium-active');
    
    document.body.className = baseClasses.join(' ');
    
    document.documentElement.style.setProperty('--transition-speed', currentSettings.animations === 'on' ? '0.2s' : '0s');
    document.documentElement.style.setProperty('--ascii-size', (currentSettings.asciiSize || 8) + 'px');

    const minMode = currentSettings.minimalismMode || 0;
    
    // Get elements
    const leftNav = document.getElementById('left-nav');
    const rightAside = document.getElementById('right-aside');
    const clockEl = document.getElementById('clock');
    const dateEl = document.getElementById('date');
    const searchContainer = document.querySelector('.search-container');
    const asciiEl = document.getElementById('ascii-art');
    
    // Set visibility based on mode
    const setDisplay = (el, type) => { if (el) el.style.display = type; };

    if (minMode === 0) {
        // Normal - show all
        setDisplay(leftNav, 'block');
        setDisplay(rightAside, 'block');
        setDisplay(clockEl, '');
        setDisplay(dateEl, '');
        setDisplay(searchContainer, '');
        setDisplay(asciiEl, 'block');
    } else if (minMode === 1) {
        // Minimal - hide both sidebars + clock
        setDisplay(leftNav, 'none');
        setDisplay(rightAside, 'none');
        setDisplay(clockEl, 'none');
        setDisplay(dateEl, 'none');
        setDisplay(searchContainer, '');
        setDisplay(asciiEl, 'block');
    } else if (minMode === 2) {
        // Clock + Search - hide both sidebars
        setDisplay(leftNav, 'none');
        setDisplay(rightAside, 'none');
        setDisplay(clockEl, '');
        setDisplay(dateEl, '');
        setDisplay(searchContainer, '');
        setDisplay(asciiEl, 'block');
    } else if (minMode === 3) {
        // Art Only - hide everything
        setDisplay(leftNav, 'none');
        setDisplay(rightAside, 'none');
        setDisplay(clockEl, 'none');
        setDisplay(dateEl, 'none');
        setDisplay(searchContainer, 'none');
        setDisplay(asciiEl, 'block');
    }
    
    // Show/hide widgets based on right sidebar visibility
    const showWidgets = rightAside && rightAside.style.display !== 'none';
    const setWidgetDisplay = (id, condition) => {
        const el = document.getElementById(id);
        if (el) el.style.display = (showWidgets && condition) ? 'block' : 'none';
    };

    setWidgetDisplay('tasks-widget', currentSettings.showTasks !== false);
    setWidgetDisplay('notes-widget', currentSettings.showNotes !== false);
    setWidgetDisplay('timer-widget', currentSettings.showTimer !== false);
    setWidgetDisplay('weather-widget', currentSettings.showWeather !== false);
    setWidgetDisplay('media-widget', currentSettings.showMedia !== false);
    setWidgetDisplay('system-widget', currentSettings.showSystem !== false);
    setWidgetDisplay('visualizer-widget', currentSettings.showVisualizer !== false);
    
    if (currentSettings.showVisualizer && showWidgets) initVisualizer();
}

function resetSpecific(type) {
    if (!confirm(`Reset ${type}?`)) return;
    if (type === 'settings') { localStorage.removeItem('settings'); currentSettings = defaultSettings; }
    if (type === 'tasks') localStorage.removeItem('tasks');
    if (type === 'notes') localStorage.removeItem('memo');
    if (type === 'ascii') localStorage.removeItem('customAscii');
    location.reload();
}

// --- MINIMALIUM MANAGER ---
function openMinimaliumManager() {
    document.getElementById('backdrop').style.display = 'block';
    document.getElementById('minimalium-modal').style.display = 'block';
    applySettings(); // Refresh highlight on active mode
}

function setMinimaliumMode(mode) {
    currentSettings.minimalismMode = mode;
    saveAndApplySettings();
    const minToggle = document.getElementById('toggle-minimalium');
    if (minToggle) minToggle.checked = mode > 0;
    closeModals();
}

function toggleAdvanced() {
    const content = document.getElementById('advanced-content');
    const icon = document.getElementById('adv-icon');
    const isOpen = content.style.display === 'block';
    content.style.display = isOpen ? 'none' : 'block';
    icon.innerText = isOpen ? '▾' : '▴';
}

function formatJson(id) {
    try {
        const el = document.getElementById(id);
        const obj = JSON.parse(el.value);
        el.value = JSON.stringify(obj, null, 2);
    } catch (e) { alert("Invalid JSON"); }
}

function validateJson(id) {
    try {
        JSON.parse(document.getElementById(id).value);
        alert("JSON is valid!");
    } catch (e) { alert("Invalid JSON: " + e.message); }
}

function exportConfig() {
    const data = {
        settings: currentSettings,
        links: JSON.parse(localStorage.links || JSON.stringify(defaultLinks)),
        customCommands: customCommands,
        tasks: JSON.parse(localStorage.tasks || "[]"),
        memo: localStorage.memo || ""
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "catppuccin_backup.json";
    a.click();
}

function importConfig(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = evt => {
        try {
            const data = JSON.parse(evt.target.result);
            if (data.settings) localStorage.settings = JSON.stringify(data.settings);
            if (data.links) localStorage.links = JSON.stringify(data.links);
            if (data.customCommands) localStorage.customCommands = JSON.stringify(data.customCommands);
            if (data.tasks) localStorage.tasks = JSON.stringify(data.tasks);
            if (data.memo !== undefined) localStorage.memo = data.memo;
            location.reload();
        } catch (err) { alert("Invalid backup file!"); }
    };
    reader.readAsText(file);
}

function resetAll() {
    if (confirm("Full reset?")) { localStorage.clear(); location.reload(); }
}

// --- ASCII EDITOR ---
function openAsciiEditor() {
    document.getElementById('backdrop').style.display = 'block';
    document.getElementById('ascii-modal').style.display = 'block';
    document.getElementById('ascii-editor-textarea').value = localStorage.customAscii || asciiPresets.custom;
    document.getElementById('ascii-editor-textarea').focus();
    updateAsciiSizeDisplay();
}
function saveAsciiArt() {
    localStorage.customAscii = document.getElementById('ascii-editor-textarea').value;
    applyCustomAscii();
    closeModals();
}
function clearAsciiEditor() { document.getElementById('ascii-editor-textarea').value = ""; }
function loadAsciiPreset(p) { document.getElementById('ascii-editor-textarea').value = asciiPresets[p] || asciiPresets.custom; }
function applyCustomAscii() {
    const art = document.getElementById('ascii-art');
    if (art) art.innerText = localStorage.customAscii || asciiPresets.custom;
}

function adjustAsciiSize(delta) {
    currentSettings.asciiSize = Math.max(4, Math.min(48, (currentSettings.asciiSize || 8) + delta));
    saveAndApplySettings();
    updateAsciiSizeDisplay();
}

function updateAsciiSizeDisplay() {
    const display = document.getElementById('ascii-size-display');
    if (display) display.innerText = (currentSettings.asciiSize || 8) + "px";
}

// --- VISUALIZER ---
let visualizerInitialized = false;
let audioCtx, analyser, dataArray;
let isSynced = false;
let sourceNode = null;
let localSourceNode = null;

function getAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 64;
        const bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);
    }
    return audioCtx;
}

// --- LOCAL MEDIA HANDLERS ---
function handleMediaUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const mediaTrack = document.getElementById('media-track');
    mediaTrack.innerText = "♪ " + file.name;
    mediaTrack.style.color = "var(--mauve)";

    const audio = document.getElementById('local-audio');
    const url = URL.createObjectURL(file);
    audio.src = url;

    setupLocalAudioSource();
    audio.play();
    document.getElementById('media-play-pause').innerText = "⏸";
}

function setupLocalAudioSource() {
    const ctx = getAudioContext();
    const audio = document.getElementById('local-audio');

    if (sourceNode) {
        sourceNode.disconnect();
        sourceNode = null;
    }

    if (!localSourceNode) {
        localSourceNode = ctx.createMediaElementSource(audio);
        localSourceNode.connect(analyser);
        analyser.connect(ctx.destination);
    }

    isSynced = true;
    if (ctx.state === 'suspended') ctx.resume();

    audio.addEventListener('timeupdate', updateMediaProgress);
    audio.addEventListener('loadedmetadata', () => {
        document.getElementById('media-time-total').innerText = formatTime(audio.duration);
    });
    audio.addEventListener('ended', () => {
        document.getElementById('media-play-pause').innerText = "⏯";
        document.getElementById('media-progress').value = 0;
    });
}

function updateMediaProgress() {
    const audio = document.getElementById('local-audio');
    const progress = document.getElementById('media-progress');
    const current = document.getElementById('media-time-current');

    if (!isNaN(audio.duration)) {
        progress.value = (audio.currentTime / audio.duration) * 100;
        current.innerText = formatTime(audio.currentTime);
    }
}

function seekMedia() {
    const audio = document.getElementById('local-audio');
    const progress = document.getElementById('media-progress');
    if (!isNaN(audio.duration)) {
        audio.currentTime = (progress.value / 100) * audio.duration;
    }
}

function formatTime(s) {
    const m = Math.floor(s / 60);
    const secs = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${secs}`;
}

function toggleLocalPlayback() {
    const audio = document.getElementById('local-audio');
    const btn = document.getElementById('media-play-pause');
    if (!audio.src) {
        document.getElementById('media-upload').click();
        return;
    }
    if (audio.paused) {
        audio.play();
        btn.innerText = "⏸";
    } else {
        audio.pause();
        btn.innerText = "⏯";
    }
}

function initVisualizer() {
    if (visualizerInitialized) return;
    const container = document.getElementById('visualizer-bars');
    if (!container) return;
    container.replaceChildren();
    for (let i = 0; i < 20; i++) {
        const bar = document.createElement('div');
        bar.className = 'bar';
        container.appendChild(bar);
    }
    visualizerInitialized = true;
    animateVisualizer();
}

function animateVisualizer() {
    if (!currentSettings.showVisualizer || (document.hidden && currentSettings.backgroundOptimization)) {
        setTimeout(() => requestAnimationFrame(animateVisualizer), 200);
        return;
    }

    const bars = document.querySelectorAll('.bar');

    if (isSynced && analyser) {
        analyser.getByteFrequencyData(dataArray);
        bars.forEach((bar, i) => {
            const val = dataArray[i % dataArray.length] || 0;
            const h = Math.max(2, (val / 255) * 100);
            bar.style.height = h + "%";
        });
    } else {
        bars.forEach((bar, i) => {
            const targetHeight = Math.random() * 80 + 10;
            bar.style.height = targetHeight + "%";
        });
    }
    setTimeout(() => requestAnimationFrame(animateVisualizer), 80);
}

function initEventListeners() {
    // Backdrop
    const backdrop = document.getElementById('backdrop');
    if (backdrop) backdrop.addEventListener('click', closeModals);

    // ASCII art click — opens minimalium manager in art-only mode
    const asciiArt = document.getElementById('ascii-art');
    if (asciiArt) {
        asciiArt.addEventListener('click', () => {
            if (currentSettings.minimalismMode === 3) openMinimaliumManager();
        });
    }

    // Sidebar
    const addBtn = document.querySelector('.add-btn');
    if (addBtn) addBtn.addEventListener('click', openAddLinkModal);

    // Add Link Modal
    const alCat = document.getElementById('al-category');
    if (alCat) alCat.addEventListener('change', checkNewCategory);

    const alCancel = document.getElementById('add-link-cancel');
    if (alCancel) alCancel.addEventListener('click', closeModals);

    const alSave = document.getElementById('add-link-save');
    if (alSave) alSave.addEventListener('click', addSidebarLink);

    // Help Modal
    const openCmdMgr = document.getElementById('open-cmd-mgr-btn');
    if (openCmdMgr) openCmdMgr.addEventListener('click', openCommandManager);

    // Command Manager Modal
    const cmCancel = document.getElementById('cm-cancel');
    if (cmCancel) cmCancel.addEventListener('click', closeModals);

    const cmSave = document.getElementById('cm-save');
    if (cmSave) cmSave.addEventListener('click', addCustomCommand);

    // Settings Modal
    const settingsSelectors = ['setting-theme', 'setting-font', 'setting-density', 'setting-animations', 'setting-time-format', 'setting-alignment', 'setting-engine', 'setting-target'];
    settingsSelectors.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', updateSettings);
    });

    const settingsToggles = ['toggle-ascii', 'toggle-seconds', 'toggle-date', 'toggle-enable-commands', 'toggle-shortcuts', 'toggle-focus'];
    settingsToggles.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', updateSettings);
    });

    // Minimalium toggle in settings — opens manager when checked, disables when unchecked
    const minToggleSettings = document.getElementById('toggle-minimalium');
    if (minToggleSettings) {
        minToggleSettings.addEventListener('change', () => {
            if (minToggleSettings.checked) {
                openMinimaliumManager();
            } else {
                setMinimaliumMode(0);
            }
        });
    }

    // Advanced Drawer
    const toggleAdvLabel = document.getElementById('toggle-adv-label');
    if (toggleAdvLabel) toggleAdvLabel.addEventListener('click', toggleAdvanced);

    const formatLinks = document.getElementById('format-links-btn');
    if (formatLinks) formatLinks.addEventListener('click', () => formatJson('links-editor'));

    const validateLinks = document.getElementById('validate-links-btn');
    if (validateLinks) validateLinks.addEventListener('click', () => validateJson('links-editor'));

    const formatCmds = document.getElementById('format-cmds-btn');
    if (formatCmds) formatCmds.addEventListener('click', () => formatJson('commands-editor'));

    const validateCmds = document.getElementById('validate-cmds-btn');
    if (validateCmds) validateCmds.addEventListener('click', () => validateJson('commands-editor'));

    const saveAllConfigsBtn = document.getElementById('save-all-configs-btn');
    if (saveAllConfigsBtn) saveAllConfigsBtn.addEventListener('click', saveAllConfigs);

    const exportBtn = document.getElementById('export-btn');
    if (exportBtn) exportBtn.addEventListener('click', exportConfig);

    const importInput = document.getElementById('import-input');
    if (importInput) importInput.addEventListener('change', importConfig);

    document.querySelectorAll('.reset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;
            if (type) resetSpecific(type);
        });
    });

    // Widgets Modal
    const minToggle2 = document.getElementById('toggle-minimalium-2');
    if (minToggle2) {
        minToggle2.addEventListener('change', function() {
            const minToggle = document.getElementById('toggle-minimalium');
            if (minToggle) minToggle.checked = this.checked;
        });
    }
    
    const widgetToggles = ['w-toggle-sidebar', 'w-toggle-widgets', 'w-toggle-ascii', 'w-toggle-tasks', 'w-toggle-notes', 'w-toggle-timer', 'w-toggle-weather', 'w-toggle-media', 'w-toggle-system', 'w-toggle-visualizer', 'w-toggle-bg-opt'];
    widgetToggles.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', updateSettings);
    });

    // Timer
    const timerToggle = document.getElementById('timer-toggle');
    if (timerToggle) timerToggle.addEventListener('click', toggleTimer);

    const resetTimerBtn = document.getElementById('reset-timer-btn');
    if (resetTimerBtn) resetTimerBtn.addEventListener('click', resetTimer);

    // Media
    const mediaTrigger = document.getElementById('media-upload-trigger');
    if (mediaTrigger) mediaTrigger.addEventListener('click', () => document.getElementById('media-upload').click());

    const mediaProgress = document.getElementById('media-progress');
    if (mediaProgress) mediaProgress.addEventListener('input', seekMedia);

    const mediaPlayPause = document.getElementById('media-play-pause');
    if (mediaPlayPause) mediaPlayPause.addEventListener('click', toggleLocalPlayback);

    const mediaUpload = document.getElementById('media-upload');
    if (mediaUpload) mediaUpload.addEventListener('change', handleMediaUpload);

    // ASCII Modal
    document.querySelectorAll('.preset-btn').forEach(btn => {
        if (btn.dataset.preset) {
            btn.addEventListener('click', () => loadAsciiPreset(btn.dataset.preset));
        }
        if (btn.dataset.delta) {
            btn.addEventListener('click', () => adjustAsciiSize(parseInt(btn.dataset.delta)));
        }
    });

    const asciiClear = document.getElementById('ascii-clear');
    if (asciiClear) asciiClear.addEventListener('click', clearAsciiEditor);

    document.querySelectorAll('.ascii-cancel').forEach(btn => btn.addEventListener('click', closeModals));

    const asciiSave = document.getElementById('ascii-save');
    if (asciiSave) asciiSave.addEventListener('click', saveAsciiArt);

    // Minimalium Manager
    document.querySelectorAll('.min-mode-btn').forEach(btn => {
        btn.addEventListener('click', () => setMinimaliumMode(parseInt(btn.dataset.mode)));
    });

}

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    // Reset settings if corrupted or on first load
    if (!localStorage.settings || localStorage.settings === 'undefined') {
        forceResetSettings();
    }
    initEventListeners();
    renderTasks();
    renderLinks();
    applyCustomAscii();
    loadSettings();
});
