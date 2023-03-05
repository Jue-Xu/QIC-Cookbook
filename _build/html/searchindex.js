Search.setIndex({"docnames": ["intro", "math/linear_algebra/complex_matrix_multiplication", "math/linear_algebra/linear_algebra", "physics/brownian_motion", "preface/CONDUCT", "preface/CONTRIBUTING", "preface/Cookiecutter", "preface/README", "preface/samples/markdown", "preface/samples/markdown-notebooks", "preface/samples/matplotlib_samples", "preface/samples/notebooks", "qic/grover", "qic/polynomial_method"], "filenames": ["intro.md", "math/linear_algebra/complex_matrix_multiplication.ipynb", "math/linear_algebra/linear_algebra.ipynb", "physics/brownian_motion.ipynb", "preface/CONDUCT.md", "preface/CONTRIBUTING.md", "preface/Cookiecutter.md", "preface/README.md", "preface/samples/markdown.md", "preface/samples/markdown-notebooks.md", "preface/samples/matplotlib_samples.ipynb", "preface/samples/notebooks.ipynb", "qic/grover.ipynb", "qic/polynomial_method.ipynb"], "titles": ["Quantum Information and Computation Cookbook: Recipes", "Complex matrix multiplication", "Linear Algebra", "Brownian motion", "Code of Conduct", "Contributing", "Cookiecutter Jupyter Book", "About Jupyter-Book", "Markdown Files", "Notebooks with MyST Markdown", "Matplotlib Samples", "Content with notebooks", "Grover algorithm", "Polynomial Method"], "terms": {"check": [0, 6, 11], "out": [0, 3, 6, 10, 11], "content": [0, 6, 8, 9], "page": [0, 6, 7, 8, 9], "bundl": 0, "thi": [0, 3, 4, 5, 6, 7, 8, 9, 10, 11], "sampl": [0, 3, 11], "book": [0, 8, 9, 11], "see": [0, 6, 7, 8, 9, 11], "more": [0, 3, 5, 6, 9, 10, 11], "about": [0, 5, 6, 8, 9, 11], "jupyt": [0, 8, 9, 11], "matplotlib": [0, 3, 11, 12, 13], "linear": [0, 12], "algebra": 0, "brownian": 0, "motion": 0, "polynomi": 0, "method": [0, 6], "grover": 0, "algorithm": 0, "It": [0, 6, 8], "doe": 0, "go": [0, 6], "depth": 0, "ani": [0, 4, 5, 6, 7, 9], "particular": 0, "topic": 0, "document": [0, 6, 7, 8, 9, 11], "import": [1, 2, 3, 10, 11, 12, 13], "numpi": [1, 2, 3, 10, 11, 12, 13], "np": [1, 2, 3, 10, 11, 12, 13], "from": [1, 2, 3, 4, 6, 10, 11, 12], "math": [1, 2, 3, 10, 11], "sqrt": [1, 2, 3, 10, 12], "u": [1, 2, 6], "1": [1, 2, 3, 4, 6, 10, 11, 12, 13], "2": [1, 2, 3, 6, 9, 10, 12, 13], "1j": [1, 2], "x": [1, 2, 3, 10, 13], "0": [1, 2, 3, 6, 10, 11, 12, 13], "y": [1, 2, 3, 6, 10, 12, 13], "z": [1, 2, 10], "geth": [1, 2], "matmul": [1, 2], "print": [1, 2, 3, 9, 10], "h": [1, 2], "dot": 1, "5j": [1, 2], "70710678": [1, 2], "5": [1, 2, 6, 10, 11, 12, 13], "70710678j": [1, 2], "j": [1, 2, 10], "7": [1, 2, 10, 12], "07106781e": [1, 2], "01": [1, 2, 10], "11022302e": [1, 2], "16": [1, 2, 3, 6, 12], "scipi": [1, 2, 3, 12], "linalg": [1, 2], "expm": [1, 2], "sinm": [1, 2], "cosm": [1, 2], "hadmard": [1, 2], "gate": [1, 2], "arrai": [1, 2, 3, 10, 11, 13], "pi": [1, 2, 10, 12], "6": [1, 2, 3, 6, 10, 13], "123234e": [1, 2], "17": [1, 2], "000000e": [1, 2], "00": [1, 2], "A": [2, 3, 6, 7, 10], "4": [2, 3, 4, 6, 9, 10, 11, 12, 13], "3": [2, 6, 10, 12, 13], "b": [2, 3, 10, 12], "c": [2, 10, 13], "inv": 2, "matrix_rank": 2, "det": 2, "transpos": 2, "set_printopt": 2, "precis": 2, "random": [2, 3, 10, 11, 12], "randn": [2, 10, 11], "at_a": 2, "rank": 2, "a_left_invers": 2, "09817149": 2, "33201712": 2, "2904607": 2, "06313421": 2, "06871144": 2, "78344587": 2, "21548836": 2, "01727506": 2, "0225844": 2, "14484675": 2, "22248659": 2, "90393535": 2, "98670536": 2, "4890267": 2, "68922908": 2, "0879725": 2, "66926732": 2, "96574028": 2, "01190626": 2, "46536899": 2, "8017096": 2, "26108565": 2, "50153755": 2, "91912438": 2, "63828801": 2, "60610161": 2, "00000000e": 2, "55111512e": 2, "02549258": 2, "05563398": 2, "13578556": 2, "05753129": 2, "99682389": 2, "00775191": 2, "00328442": 2, "98107996": 2, "00801627": 2, "99660357": 2, "11646058": 2, "7721102": 2, "15285136": 2, "5238527": 2, "40045735": 2, "16139739": 2, "07700096": 2, "20284767": 2, "63729466": 2, "16139961": 2, "79602338": 2, "14495342": 2, "0417993": 2, "38943776": 2, "ainv": 2, "allclos": 2, "ey": 2, "10": [2, 3, 10, 11, 12, 13], "12": [2, 3], "29": 2, "21": 2, "18": 2, "197442310920468e": 2, "14": [2, 12], "53327479e": 2, "15": [2, 6], "68884986e": 2, "81474977e": 2, "12589991e": 2, "87649984e": 2, "12749974e": 2, "13": [2, 10, 12], "fals": [2, 10], "stat": 3, "norm": [3, 10], "process": 3, "paramet": 3, "delta": 3, "25": [3, 10], "dt": [3, 10], "initi": [3, 10], "condit": 3, "number": 3, "iter": 3, "comput": [3, 10], "n": [3, 8, 10, 11, 12], "20": [3, 10], "step": [3, 5, 6, 10], "k": [3, 13], "rang": [3, 10, 11], "rv": 3, "scale": 3, "0013265565851465124": [], "005214365777154496": [], "005578803956998093": [], "009502700506497059": [], "01465142508713416": [], "024052471572305997": [], "029461998608026636": [], "03653468678230966": [], "03324791616914536": [], "03572759458612753": [], "030561387650968948": [], "022338285011898416": [], "011003307573063682": [], "015725392735469766": [], "02327489056900597": [], "02698809706424034": [], "03373700116482865": [], "03243871798808629": [], "030046346254249953": [], "03637832986720624": [], "implement": 3, "one": [3, 8, 10], "i": [3, 10], "e": [3, 4, 5, 6], "wiener": 3, "file": [3, 5, 6, 7, 9], "py": 3, "def": [3, 10], "x0": 3, "none": [3, 6, 10], "gener": [3, 6], "an": [3, 4, 5, 6, 8, 10], "instanc": [3, 4], "t": [3, 6, 8, 10, 11, 12], "where": 3, "t0": 3, "t1": 3, "normal": [3, 10], "distribut": 3, "variabl": 3, "mean": [3, 11], "varianc": 3, "The": [3, 4, 5, 6, 8, 9], "make": [3, 4, 5, 6, 10, 11], "explicit": [3, 4], "statist": 3, "independ": 3, "differ": [3, 4, 8], "time": [3, 10], "interv": 3, "t2": 3, "t3": 3, "ar": [3, 4, 5, 6, 8, 9], "disjoint": 3, "written": [3, 8, 9], "scheme": 3, "If": [3, 5, 6, 7, 9], "like": [3, 6, 7, 8, 9], "each": [3, 10], "valu": [3, 6, 10], "treat": [3, 9], "return": [3, 10], "dimens": 3, "than": 3, "argument": [3, 10], "float": 3, "someth": 3, "can": [3, 5, 6, 7, 8, 9, 11], "convert": [3, 9, 10], "us": [3, 4, 5, 6, 7, 8, 9, 10], "asarrai": 3, "s": [3, 4, 5, 8, 9, 10, 11, 12], "posit": [3, 4], "int": 3, "take": [3, 4], "determin": [3, 4], "speed": 3, "ha": 3, "whose": 3, "specifi": 3, "which": [3, 4, 9], "put": 3, "result": 3, "new": [3, 6], "creat": [3, 4, 5, 6, 7, 10, 11], "shape": 3, "note": [3, 5, 6, 8], "includ": [3, 4, 5, 6, 7, 9, 11], "For": [3, 6, 7, 8, 11], "element": 3, "r": [3, 6, 7, 10, 12, 13], "size": [3, 4, 10, 12], "wa": [3, 6, 7], "given": [3, 5], "output": [3, 9], "empti": [3, 10], "form": 3, "cumul": 3, "sum": 3, "cumsum": 3, "axi": [3, 10, 12], "add": [3, 6, 10], "expand_dim": 3, "pylab": 3, "plot": [3, 11, 12], "show": [3, 4, 8, 9, 10, 13], "grid": [3, 10, 12], "xlabel": [3, 10], "ylabel": [3, 10], "mpl": [3, 10, 12, 13], "rcparam": [3, 10, 11, 12, 13], "figur": [3, 10, 12, 13], "dpi": [3, 10, 12, 13], "400": [3, 10, 12], "pyplot": [3, 10, 11, 12, 13], "plt": [3, 10, 11, 12, 13], "inlin": [3, 8, 10, 12, 13], "config": [3, 10, 12, 13], "inlinebackend": [3, 10, 12, 13], "figure_format": [3, 10, 12, 13], "retina": [3, 10, 12, 13], "total": 3, "500": [3, 12], "realiz": 3, "m": [3, 6], "store": [3, 8], "50": [3, 10, 13], "linspac": [3, 10, 11, 12, 13], "fig": [3, 10, 11, 12, 13], "ax": [3, 10, 11, 12, 13], "subplot": [3, 11, 12, 13], "figsiz": [3, 10, 11, 12, 13], "set_xlabel": [3, 10, 12, 13], "set_ylabel": [3, 10, 12, 13], "fontsiz": 3, "true": [3, 10, 12, 13], "savefig": [3, 10, 12, 13], "brownian_motion_1d": 3, "pdf": [3, 10, 12, 13], "transpar": [3, 10, 12, 13], "nameerror": [], "traceback": 10, "most": [8, 10], "recent": 10, "call": [8, 10], "last": 10, "cell": 10, "In": [4, 8, 10], "line": [6, 8, 9, 11, 12], "34": [], "31": [], "32": [], "33": [], "35": [], "36": 10, "name": [5, 6], "defin": [4, 9, 10], "titl": [3, 12], "2d": 3, "trajectori": 3, "mark": 3, "start": [3, 6, 8, 9], "end": [3, 11], "point": [3, 10], "yo": 3, "ro": [3, 10], "decor": 3, "set_titl": [3, 10, 12], "equal": 3, "brownian_motion_2d": 3, "interest": 4, "foster": 4, "open": [4, 5, 7], "welcom": [4, 5, 6, 7], "environ": [4, 6, 7], "we": [4, 6, 7, 10], "contributor": [4, 5, 6], "maintain": 4, "particip": 4, "project": [4, 5, 6, 7, 10], "commun": 4, "harass": 4, "free": 4, "experi": 4, "everyon": 4, "regardless": 4, "ag": 4, "bodi": 4, "disabl": 4, "ethnic": 4, "gender": 4, "ident": 4, "express": [4, 10], "level": 4, "nation": 4, "person": 4, "appear": 4, "race": 4, "religion": 4, "sexual": 4, "orient": [4, 10], "exampl": [4, 6, 7, 8, 10, 11], "behavior": 4, "contribut": [4, 7, 10], "inclus": 4, "languag": [4, 8], "Being": 4, "respect": [4, 6], "viewpoint": 4, "gracefulli": 4, "accept": [4, 8], "construct": 4, "critic": 4, "focus": 4, "what": 4, "best": [4, 5], "empathi": 4, "toward": 4, "other": [4, 6, 9], "member": 4, "unaccept": 4, "imageri": 4, "unwelcom": 4, "attent": 4, "advanc": 4, "troll": 4, "insult": 4, "derogatori": 4, "comment": 4, "polit": 4, "attack": 4, "public": [4, 6], "privat": 4, "publish": 4, "inform": [4, 6, 7, 9, 11], "physic": 4, "electron": 4, "address": 4, "without": 4, "permiss": 4, "could": [4, 5], "reason": 4, "consid": 4, "inappropri": 4, "profession": 4, "set": [4, 5, 6, 10], "clarifi": 4, "expect": [4, 6], "appropri": 4, "fair": 4, "correct": 4, "action": [4, 6, 7], "have": [4, 6, 9], "right": [4, 10, 12, 13], "remov": [4, 7], "edit": [4, 6, 7], "reject": 4, "commit": [4, 5, 6], "wiki": 4, "issu": [4, 5], "align": [4, 11], "ban": 4, "temporarili": 4, "perman": 4, "thei": [4, 5, 8], "deem": 4, "threaten": 4, "offens": 4, "harm": 4, "appli": 4, "both": [4, 8], "within": [4, 7], "space": [4, 10], "when": [4, 6, 7, 8, 9], "individu": 4, "repres": 4, "its": [4, 5], "offici": [4, 5], "mail": 4, "post": [4, 5, 11], "via": 4, "social": 4, "media": 4, "account": 4, "act": 4, "appoint": 4, "onlin": [4, 6, 7], "offlin": 4, "event": 4, "represent": 4, "mai": [4, 6], "further": 4, "abus": 4, "otherwis": 4, "report": 4, "contact": 4, "team": 4, "review": 4, "investig": 4, "all": [4, 6, 7, 8, 9, 10], "complaint": 4, "respond": 4, "wai": [4, 5, 6, 10], "circumst": 4, "oblig": 4, "confidenti": 4, "regard": 4, "incid": 4, "detail": [4, 5, 9], "specif": [4, 7, 8], "polici": 4, "separ": 4, "who": 4, "do": [4, 6, 7, 8, 11], "follow": [4, 8, 9], "good": 4, "faith": 4, "face": 4, "temporari": 4, "repercuss": 4, "leadership": 4, "adapt": 4, "coven": 4, "version": [4, 5, 6, 7, 10], "greatli": 5, "appreci": 5, "everi": 5, "littl": 5, "bit": 5, "help": [5, 6, 7, 8], "credit": 5, "alwai": 5, "you": [5, 6, 7, 8, 9, 11], "list": [5, 6, 7], "below": [5, 6], "github": [5, 6, 7], "pleas": [5, 7], "your": [5, 6, 7, 8, 9, 11], "oper": 5, "system": [5, 10], "local": [5, 6], "setup": 5, "might": 5, "troubleshoot": 5, "reproduc": [5, 11], "look": 5, "through": [5, 10], "anyth": [5, 10], "tag": 5, "want": [5, 11], "whoever": 5, "enhanc": 5, "qic": [5, 7], "cookbook": [5, 7], "whether": [5, 8], "part": 5, "doc": 5, "docstr": 5, "even": 5, "web": 5, "blog": 5, "articl": 5, "send": 5, "propos": 5, "explain": 5, "how": [5, 9], "would": [5, 6, 10], "work": [5, 6, 11], "keep": [5, 11], "scope": 5, "narrow": 5, "possibl": [5, 6], "easier": 5, "rememb": 5, "volunt": 5, "driven": 5, "readi": [5, 6], "here": [5, 6, 8, 11], "up": 5, "develop": [5, 7], "fork": 5, "repo": [5, 7], "clone": [5, 7], "instal": [5, 6, 7], "copi": 5, "virtualenv": 5, "g": [5, 6, 10, 12], "conda": [5, 6], "branch": [5, 6, 7], "chang": 5, "push": [5, 6, 7], "pull": [5, 7], "request": [5, 6, 7], "websit": 5, "releas": 5, "By": 5, "agre": 5, "abid": 5, "term": 5, "simpl": [6, 8, 10], "render": [6, 7, 8], "shown": 6, "my_book": 6, "workflow": [6, 7], "deploi": [6, 7], "yml": 6, "conduct": 6, "md": [6, 8, 9], "licens": 6, "_config": 6, "_toc": 6, "intro": 6, "logo": 6, "png": [6, 10], "markdown": 6, "notebook": [6, 8, 10], "ipynb": [6, 8], "refer": [6, 8], "bib": [6, 8], "readm": 6, "requir": [6, 7], "txt": [6, 7], "haven": 6, "yet": 6, "pip": [6, 7], "fill": 6, "default": [6, 9, 12], "squar": [6, 12], "bracket": 6, "enter": 6, "git": 6, "com": 6, "executablebook": [6, 7], "author_nam": 6, "captain": 6, "toma": 6, "beuzen": 6, "github_usernam": 6, "tomasbeuzen": 6, "book_nam": 6, "my": 6, "book_slug": 6, "book_short_descript": 6, "boilerpl": 6, "first": 6, "select": 6, "open_source_licens": 6, "mit": 6, "bsd": 6, "apach": 6, "softwar": 6, "cc": 6, "BY": 6, "sa": 6, "choos": 6, "include_ci": [6, 7], "gitlab": [6, 7], "packag": 6, "recommend": [6, 7], "virtual": [6, 7], "option": [6, 7], "activ": 6, "mybook": 6, "python": 6, "8": [6, 10, 12], "cd": 6, "build": [6, 8, 10], "html": [6, 7, 11], "view": [6, 10], "_build": [6, 7], "index": 6, "ad": [6, 10], "updat": [6, 10], "tabl": 6, "configur": 6, "custom": 6, "come": 6, "ci": [6, 7], "easili": [6, 7], "been": 6, "directori": [6, 7], "structur": [6, 8], "chose": [6, 7], "include_ci_fil": 6, "abov": 6, "sure": [6, 11], "addit": 6, "repositori": [6, 7], "host": 6, "hidden": 6, "There": [6, 11], "mani": [6, 8, 9], "init": [6, 9], "remot": 6, "origin": 6, "user": 6, "main": [6, 7], "provid": [6, 10], "automat": [6, 7, 10], "gh": [6, 7], "onc": [6, 7], "typic": 6, "avail": 6, "after": 6, "few": 6, "minut": 6, "http": 6, "io": 6, "myonlinebook": 6, "need": [6, 9, 10], "tab": [6, 7], "under": 6, "head": 6, "sourc": [6, 7], "drop": 6, "down": 6, "altern": 6, "ubuntu": 6, "modifi": 6, "os": 6, "read": 6, "recogn": [6, 7], "d": [6, 7, 9], "feedback": 6, "identifi": 6, "bug": 6, "featur": 6, "guid": [6, 11], "get": [6, 8, 9, 10], "current": [6, 7], "inspir": 6, "made": [6, 7], "should": [7, 9, 10], "run": [7, 9], "locat": [7, 10], "qic_cookbook": 7, "clean": 7, "exist": 7, "fulli": 7, "built": [7, 9], "discov": 7, "servic": 7, "netlifi": 7, "deploy": 7, "cookiecutt": 7, "templat": 7, "continu": 7, "integr": 7, "excel": 7, "write": [8, 9, 10], "regular": 8, "ll": 8, "same": [8, 10], "flavor": 8, "off": [8, 9], "some": [8, 11], "syntax": 8, "stand": 8, "markedli": 8, "text": [8, 9, 10, 12], "slight": 8, "variat": 8, "commonmark": 8, "small": 8, "extens": 8, "allow": 8, "sphinx": 8, "ecosystem": 8, "overview": 8, "two": [8, 9], "power": 8, "tool": 8, "kind": 8, "function": 8, "markup": 8, "serv": 8, "similar": 8, "purpos": 8, "wherea": 8, "span": 8, "input": 8, "those": 8, "depend": 8, "being": 8, "special": 8, "box": 8, "also": [8, 9, 10, 11], "cite": 8, "bibtex": 8, "holdgraf_evidence_2014": 8, "hdhpk14": 8, "moreov": 8, "insert": 8, "bibliographi": 8, "must": 8, "properli": 8, "christoph": 8, "ramsai": 8, "holdgraf": 8, "wendi": 8, "de": 8, "heer": 8, "brian": 8, "paslei": 8, "robert": 8, "knight": 8, "evid": 8, "predict": 8, "code": [8, 9], "human": 8, "auditori": 8, "cortex": 8, "intern": 8, "confer": 8, "cognit": 8, "neurosci": 8, "brisban": 8, "australia": 8, "2014": 8, "frontier": 8, "just": 8, "starter": 8, "lot": [8, 11], "jupyterbook": 8, "org": 8, "let": 9, "base": 9, "instruct": 9, "With": 9, "direct": 9, "so": [9, 10], "block": 9, "execut": 9, "kernel": 9, "displai": [9, 10], "rest": 9, "jupytext": 9, "support": 9, "thing": 9, "understand": 9, "top": [9, 10], "presenc": 9, "That": 9, "command": 9, "path": [9, 10], "markdownfil": 9, "y1": [10, 12, 13], "exp": 10, "sin": 10, "y2": [10, 12, 13], "co": 10, "y3": [10, 12], "y4": [10, 12], "bo": 10, "markers": 10, "linewidth": 10, "set_xlim": [10, 12, 13], "set_ylim": [10, 12, 13], "phi": 10, "pr": 10, "f": 10, "legend": [10, 11, 12, 13], "loc": [10, 12, 13], "upper": [10, 12, 13], "demo": 10, "x1": [10, 13], "x2": [10, 13], "o": [10, 13], "tale": 10, "damp": 10, "oscil": 10, "xtick": 10, "undamp": 10, "mpl_toolkit": 10, "axes_grid1": 10, "host_subplot": 10, "axisartist": 10, "aa": 10, "111": 10, "axes_class": 10, "xx": 10, "arang": 10, "yp": 10, "xi": 10, "100": [10, 11, 12], "yi": 10, "stineman_interp": 10, "ax2": [10, 12], "twin": 10, "respons": 10, "set_xtick": 10, "set_xticklabel": 10, "frac": [10, 12], "major_ticklabel": 10, "set_vis": 10, "ax0": 10, "ax1": 10, "ncol": 10, "semilog": 10, "logi": 10, "semilogx": 10, "logx": 10, "suptitl": 10, "tight_layout": 10, "300": [10, 13], "newaxi": 10, "p": [10, 13], "imshow": 10, "gcf": 10, "clim": 10, "clamp": 10, "color": [10, 11, 12], "limit": 10, "bore": 10, "slide": 10, "els": 10, "set_data": 10, "canva": 10, "draw": 10, "paus": 10, "9": [10, 12], "label": [10, 12], "11": [10, 13], "scatter": [10, 13], "marker": [10, 13], "sleep": 10, "patch": 10, "our": 10, "data": [10, 11], "1000": 10, "bin": 10, "corner": 10, "rectangl": 10, "left": 10, "bottom": 10, "zero": 10, "len": 10, "numrect": 10, "numsid": 10, "helper": 10, "compound": 10, "xy": 10, "object": 10, "barpath": 10, "make_compound_path_from_poli": 10, "pathpatch": 10, "add_patch": 10, "min": 10, "max": 10, "seed": [10, 11], "10000": 10, "30000": 10, "xweight": 10, "ones_lik": 10, "yweight": 10, "hist": 10, "weight": 10, "lightblu": 10, "alpha": 10, "salmon": 10, "comparison": 10, "dataset": 10, "margin": 10, "05": [10, 12], "mu": 10, "200": [10, 13], "sigma": 10, "histtyp": 10, "stepfil": 10, "facecolor": 10, "75": 10, "edg": 10, "unequ": 10, "150": 10, "180": 10, "195": 10, "205": 10, "220": 10, "250": 10, "bar": 10, "rwidth": 10, "mplot3d": 10, "axes3d": 10, "gca": 10, "set_zlabel": 10, "typeerror": 10, "get_ipython": 10, "run_line_mag": 10, "got": 10, "unexpect": 10, "keyword": 10, "2560x1920": 10, "28": 10, "667": 10, "x_dot": 10, "y_dot": 10, "z_dot": 10, "stepcnt": 10, "xs": 10, "ys": 10, "zs": 10, "deriv": 10, "state": [10, 11], "lw": [10, 11], "n_radii": 10, "n_angl": 10, "radii": 10, "angl": 10, "radiu": 10, "omit": 10, "elimin": 10, "duplic": 10, "125": 10, "endpoint": [10, 12], "repeat": 10, "coord": 10, "cartesian": 10, "manual": 10, "stage": 10, "plane": 10, "append": 10, "flatten": 10, "pringl": 10, "plot_trisurf": 10, "antialias": 10, "demonstr": 10, "revers": 10, "ylgnbu": 10, "map": 10, "latex": 10, "mode": 10, "armin": 10, "moser": 10, "add_subplot": 10, "correspond": 10, "meshgrid": 10, "plot_surfac": 10, "cmap": [10, 11], "cm": [10, 11], "ylgnbu_r": 10, "tweak": 10, "set_zlim": 10, "phi_": 10, "mathrm": 10, "real": 10, "im": 10, "v": 10, "offset": 10, "As": [10, 11], "rotat": 10, "remain": 10, "awai": 10, "center": [10, 12], "trigger": 10, "1e5": 10, "less": 10, "mgrid": 10, "ab": 10, "surf": 10, "autumn": 10, "cstride": 10, "rstride": 10, "emb": 11, "imag": 11, "etc": 11, "add_": 11, "begin": 11, "mbox": 11, "la_": 11, "tex": 11, "But": 11, "escap": 11, "dollar": 11, "sign": 11, "well": 11, "cycler": 11, "ion": 11, "contextlib": 11, "exitstack": 11, "0x7f7fd0cb6820": 11, "fix": 11, "19680801": 11, "logspac": 11, "ii": 11, "coolwarm": 11, "prop_cycl": 11, "line2d": [11, 12], "custom_lin": 11, "cold": 11, "medium": 11, "hot": 11, "interact": 11, "small_siz": 12, "medium_s": 12, "bigger_s": 12, "rc": 12, "font": 12, "control": 12, "128": 12, "grover_spectrum": 12, "signal": 12, "num_point": 12, "tan": 12, "arctan": 12, "full": 12, "duti": 12, "y5": 12, "twinx": 12, "lambda": 12, "tick_param": 12, "labelcolor": 12, "2t": 12, "epsilon": 12, "interpol": 12, "qaa": 12, "optim": 12, "quantum": 12, "walk": 12, "qaoa": 12, "lower": [12, 13], "grover_qaoa_qaa": 12, "wave": 12, "0x7fd6b9955a00": 12, "bound": 13, "queri": 13, "complex": 13, "poli": 13, "plot_config": 13, "dx": 13, "lagrang": 13, "pariti": 13, "polynomial_method": 13, "00990681801814496": 3, "023488953006924898": 3, "017976494268187437": 3, "01943999726496126": 3, "015944755556534893": 3, "014392008059627665": 3, "009265770459349839": 3, "01723037996505692": 3, "020508300050775523": 3, "012731134409374737": 3, "004351658524200717": 3, "0033012907278598923": 3, "0025711696837315105": 3, "0015495247788114399": 3, "010615824548195749": 3, "002141063525279636": 3, "008013178930202145": 3, "01578472502469504": 3, "014615826569290771": 3, "01054117889031372": 3}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"quantum": 0, "inform": 0, "comput": 0, "cookbook": 0, "recip": 0, "prefac": 0, "mathemat": 0, "physic": 0, "complex": 1, "matrix": [1, 2], "multipl": [1, 10], "linear": 2, "algebra": 2, "dot": 2, "product": 2, "exponenti": 2, "solv": 2, "invers": 2, "brownian": 3, "motion": 3, "One": 3, "dimension": 3, "code": [4, 5, 11], "conduct": [4, 5], "our": 4, "pledg": 4, "standard": 4, "respons": 4, "scope": 4, "enforc": 4, "attribut": 4, "contribut": [5, 6], "report": 5, "bug": 5, "fix": 5, "implement": 5, "featur": 5, "write": 5, "document": 5, "submit": 5, "feedback": 5, "get": 5, "start": 5, "cookiecutt": 6, "jupyt": [6, 7], "book": [6, 7], "templat": 6, "usag": [6, 7], "acknowledg": 6, "about": 7, "build": 7, "host": 7, "contributor": 7, "credit": 7, "markdown": [8, 9, 11], "file": 8, "what": 8, "myst": [8, 9, 11], "sampl": [8, 10], "role": 8, "direct": 8, "citat": 8, "learn": 8, "more": 8, "notebook": [9, 11], "an": 9, "exampl": 9, "cell": 9, "creat": 9, "quickli": 9, "add": 9, "yaml": 9, "metadata": 9, "matplotlib": 10, "2d": 10, "plot": [10, 13], "function": 10, "line": 10, "subplot": 10, "log": 10, "anim": 10, "histogram": 10, "3d": 10, "lorenz": 10, "attractor": 10, "surfac": 10, "triangular": 10, "mesh": 10, "polar": 10, "coordin": 10, "test": [10, 13], "h4": 10, "titl": 10, "content": 11, "block": 11, "output": 11, "grover": 12, "algorithm": 12, "spectral": 12, "gap": 12, "differ": 12, "framework": 12, "polynomi": 13, "method": 13, "theori": 13}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})