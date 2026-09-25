/* =========================================================
   游志勇课题组 · 页面交互
   ========================================================= */
(function () {
  "use strict";

  var DATA = window.SITE_DATA || {};
  var page = document.body.getAttribute("data-page") || "home";

  var NAV = [
    { id: "home", label: "首页", href: "index.html" },
    { id: "research", label: "研究方向", href: "research.html" },
    { id: "team", label: "团队成员", href: "team.html" },
    { id: "publications", label: "研究成果", href: "publications.html" },
    { id: "news", label: "新闻动态", href: "news.html" },
    { id: "contact", label: "加入我们 / 联系", href: "contact.html" }
  ];

  var TYPE_LABEL = {
    paper: "论文",
    project: "项目",
    patent: "专利",
    book: "著作",
    award: "荣誉"
  };

  var ICONS = {
    menu: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    sun: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
    moon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M20 15.2A8.5 8.5 0 0 1 8.8 4a7 7 0 1 0 11.2 11.2z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    up: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
    mail: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/></svg>'
  };

  function qs(selector, context) {
    return (context || document).querySelector(selector);
  }

  function qsa(selector, context) {
    return Array.prototype.slice.call((context || document).querySelectorAll(selector));
  }

  function encode(value) {
    return encodeURIComponent(String(value || ""));
  }

  function icon(name, label) {
    if (label) return ICONS[name] || "";
    return ICONS[name] || "";
  }

  /* ------------------------------------------------------------------
     Header / footer
  ------------------------------------------------------------------ */

  function renderHeader() {
    var holder = qs("#site-header");
    if (!holder) return;

    var links = NAV.map(function (item) {
      var active = item.id === page ? " is-active" : "";
      return '<a class="nav-link' + active + '" href="' + item.href + '" data-nav="' + item.id + '">' + item.label + "</a>";
    }).join("");

    holder.innerHTML =
      '<div class="container nav-inner">' +
        '<a class="brand" href="index.html" aria-label="返回首页">' +
          '<span class="brand-mark">游</span>' +
          '<span class="brand-text">' +
            '<strong>' + DATA.meta.name + "</strong>" +
            "<small>" + DATA.meta.shortName + " · TYUT</small>" +
          "</span>" +
        "</a>" +
        '<nav class="nav-links" id="navLinks" aria-label="主导航">' + links + "</nav>" +
        '<div class="nav-actions">' +
          '<button class="icon-btn" id="themeToggle" type="button" aria-label="切换明暗主题">' + icon("moon") + "</button>" +
          '<button class="icon-btn nav-toggle" id="navToggle" type="button" aria-label="打开导航" aria-expanded="false">' + icon("menu") + "</button>" +
        "</div>" +
      "</div>";

    qsa(".nav-link", holder).forEach(function (link) {
      link.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        var toggle = qs("#navToggle");
        if (toggle) {
          toggle.setAttribute("aria-expanded", "false");
          toggle.innerHTML = icon("menu");
        }
      });
    });
  }

  function renderFooter() {
    var holder = qs("#site-footer");
    if (!holder) return;

    var year = new Date().getFullYear();
    var navLinks = NAV.map(function (item) {
      return '<a href="' + item.href + '">' + item.label + "</a>";
    }).join("");

    var researchLinks = (DATA.research || []).map(function (item) {
      return '<a href="research.html#' + item.id + '">' + item.title + "</a>";
    }).join("");

    holder.innerHTML =
      '<div class="container footer-grid">' +
        '<div class="footer-brand">' +
          '<a class="brand" href="index.html">' +
            '<span class="brand-mark">游</span>' +
            '<span class="brand-text"><strong>' + DATA.meta.name + "</strong><small>" + DATA.meta.shortName + "</small></span>" +
          "</a>" +
          "<p>面向先进金属材料、轻质复合材料与增材制造，连接基础研究、工艺开发与工程应用。</p>" +
        "</div>" +
        "<div>" +
          '<h4 class="footer-title">网站导航</h4>' +
          '<div class="footer-links">' + navLinks + "</div>" +
        "</div>" +
        "<div>" +
          '<h4 class="footer-title">研究方向</h4>' +
          '<div class="footer-links">' + researchLinks + "</div>" +
        "</div>" +
        "<div>" +
          '<h4 class="footer-title">联系</h4>' +
          '<div class="footer-links">' +
            '<a href="mailto:' + DATA.meta.email + '">' + DATA.meta.email + "</a>" +
            "<span style=\"color:var(--muted);font-size:.86rem\">" + DATA.meta.address + "</span>" +
          "</div>" +
        "</div>" +
      "</div>" +
      '<div class="container footer-bottom">' +
        "<span>© 2024–" + year + " " + DATA.meta.name + " · " + DATA.meta.affiliation + "</span>" +
        "<span>最后更新：" + DATA.meta.updated + " · 基于 GitHub Pages 构建</span>" +
      "</div>";
  }

  /* ------------------------------------------------------------------
     Global interactions
  ------------------------------------------------------------------ */

  function initTheme() {
    var toggle = qs("#themeToggle");
    var root = document.documentElement;
    var saved = null;

    try { saved = window.localStorage.getItem("yzy-theme"); } catch (e) { saved = null; }
    if (saved === "light" || saved === "dark") {
      root.setAttribute("data-theme", saved);
    }

    function refresh() {
      if (!toggle) return;
      var isLight = root.getAttribute("data-theme") === "light";
      toggle.innerHTML = isLight ? icon("sun") : icon("moon");
      toggle.setAttribute("aria-label", isLight ? "切换到深色主题" : "切换到浅色主题");
    }

    if (toggle) {
      refresh();
      toggle.addEventListener("click", function () {
        var current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
        var next = current === "light" ? "dark" : "light";
        root.setAttribute("data-theme", next);
        try { window.localStorage.setItem("yzy-theme", next); } catch (e) {}
        refresh();
      });
    }
  }

  function initMobileNav() {
    var toggle = qs("#navToggle");
    if (!toggle) return;

    toggle.addEventListener("click", function (event) {
      event.stopPropagation();
      var open = !document.body.classList.contains("nav-open");
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.innerHTML = open ? icon("close") : icon("menu");
    });

    document.addEventListener("click", function (event) {
      if (!document.body.classList.contains("nav-open")) return;
      if (event.target.closest("#navLinks") === null && event.target.closest("#navToggle") === null) {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.innerHTML = icon("menu");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.innerHTML = icon("menu");
      }
    });
  }

  function initScrollProgress() {
    var bar = qs(".scroll-progress");
    var header = qs(".site-header");
    var top = qs("#backToTop");
    if (!bar && !header && !top) return;

    function onScroll() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var progress = max > 0 ? (window.scrollY / max) * 100 : 0;
      if (bar) bar.style.width = progress.toFixed(2) + "%";
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 20);
      if (top) top.classList.toggle("is-visible", window.scrollY > 520);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  }

  function initBackToTop() {
    var top = qs("#backToTop");
    if (!top) return;
    top.innerHTML = ICONS.up;
    top.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function initReveal() {
    var items = qsa(".reveal:not([data-reveal-ready])");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (item) { item.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    items.forEach(function (item, index) {
      item.setAttribute("data-reveal-ready", "true");
      item.style.transitionDelay = Math.min(index % 5, 4) * 60 + "ms";
      observer.observe(item);
    });
  }

  function initCounters() {
    var counters = qsa("[data-counter]");
    if (!counters.length) return;

    function run(el) {
      if (el.dataset.counted === "true") return;
      var target = Number(el.dataset.counter || 0);
      var suffix = el.dataset.suffix || "";
      var duration = 1200;
      var start = null;

      function step(now) {
        if (start === null) start = now;
        var progress = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = target + suffix;
          el.dataset.counted = "true";
        }
      }

      window.requestAnimationFrame(step);
    }

    if (!("IntersectionObserver" in window)) {
      counters.forEach(run);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          run(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach(function (counter) { observer.observe(counter); });
  }

  /* ------------------------------------------------------------------
     Rendering
  ------------------------------------------------------------------ */

  function renderStats(container, stats) {
    if (!container) return;
    var items = stats || DATA.stats || [];
    container.innerHTML = items.map(function (item, index) {
      return '<div class="stat-card reveal" style="transition-delay:' + (index * 70) + 'ms">' +
        '<div class="stat-value"><span data-counter="' + item.value + '" data-suffix="' + (item.suffix || "") + '">0</span></div>' +
        '<div class="stat-label">' + item.label + "</div>" +
      "</div>";
    }).join("");
    initCounters();
  }

  function renderResearchCards(container, limit) {
    if (!container) return;
    var items = DATA.research || [];
    if (limit) items = items.slice(0, limit);

    container.innerHTML = items.map(function (item, index) {
      return '<article class="research-card reveal" id="' + item.id + '" style="transition-delay:' + (index * 70) + 'ms">' +
        '<div class="card-index">' + item.index + "</div>" +
        '<div class="card-icon">' + item.icon + "</div>" +
        "<h3>" + item.title + "</h3>" +
        '<p class="muted">' + item.tagline + "</p>" +
        "<p>" + item.description + "</p>" +
        '<div class="card-tags">' + (item.keywords || []).map(function (keyword) {
          return '<span class="tag">' + keyword + "</span>";
        }).join("") + "</div>" +
      "</article>";
    }).join("");

    initReveal();
  }

  function renderNewsCards(container, limit) {
    if (!container) return;
    var items = (DATA.news || []).slice(0, limit || 3);
    container.innerHTML = items.map(function (item, index) {
      return '<article class="news-card reveal" style="transition-delay:' + (index * 70) + 'ms">' +
        '<div class="news-date">' + item.date + " · " + item.category + "</div>" +
        "<h3>" + item.title + "</h3>" +
        "<p>" + item.summary + "</p>" +
        '<a class="btn-link" href="' + item.link + '">阅读更多</a>' +
      "</article>";
    }).join("");
    initReveal();
  }

  function renderGallery(container, limit) {
    if (!container) return;
    var items = DATA.gallery || [];
    if (limit) items = items.slice(0, limit);
    if (!items.length) return;

    container.innerHTML = items.map(function (item, index) {
      return '<button class="gallery-item reveal" type="button" data-full="' + item.full + '" data-caption="' + item.caption + '" style="transition-delay:' + (index * 70) + 'ms">' +
        '<img src="' + item.src + '" alt="' + item.caption + '" loading="lazy">' +
        '<span class="gallery-zoom" aria-hidden="true">⤢</span>' +
        '<span class="gallery-caption"><span class="gallery-tag">' + item.tag + '</span><br>' + item.caption + '</span>' +
      "</button>";
    }).join("");

    initReveal();
  }

  function initGallery() {
    var box = qs("#galleryLightbox");
    if (!box) {
      box = document.createElement("div");
      box.id = "galleryLightbox";
      box.className = "lightbox";
      box.setAttribute("role", "dialog");
      box.setAttribute("aria-modal", "true");
      box.setAttribute("aria-label", "图片预览");
      box.innerHTML =
        '<button class="lightbox-close" type="button" aria-label="关闭图片预览">×</button>' +
        '<div style="text-align:center">' +
          '<img src="" alt="">' +
          '<p class="lightbox-caption"></p>' +
        "</div>";
      document.body.appendChild(box);
    }

    var image = qs("img", box);
    var caption = qs(".lightbox-caption", box);

    function close() {
      box.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    function open(src, text, alt) {
      image.src = src;
      image.alt = alt || text || "";
      caption.textContent = text || "";
      box.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }

    box.addEventListener("click", function (event) {
      if (event.target === box || event.target.closest(".lightbox-close")) close();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") close();
    });

    document.addEventListener("click", function (event) {
      var item = event.target.closest(".gallery-item");
      if (!item) return;
      event.preventDefault();
      open(item.dataset.full, item.dataset.caption, item.dataset.caption);
    });
  }

  function renderTeamPage() {
    var piHolder = qs("#pi-card");
    var statsHolder = qs("#team-stats");
    var groupsHolder = qs("#team-groups");
    if (!piHolder && !statsHolder && !groupsHolder) return;

    var pi = DATA.team.pi;

    if (piHolder) {
      piHolder.innerHTML =
        '<div class="pi-photo"><img src="assets/img/youzhiyong.png" alt="游志勇老师照片"></div>' +
        "<div>" +
          '<p class="pi-role">' + pi.role + "</p>" +
          '<h2 class="pi-name">' + pi.name + "</h2>" +
          '<p class="pi-bio">' + pi.bio + "</p>" +
          '<div class="info-list">' + (pi.fields || []).map(function (field) {
            return '<div class="info-item"><span>' + field.label + "</span><strong>" + field.value + "</strong></div>";
          }).join("") + "</div>" +
        "</div>";
    }

    if (statsHolder) renderStats(statsHolder, DATA.team.stats);

    if (groupsHolder) {
      groupsHolder.innerHTML = (DATA.team.groups || []).map(function (group, index) {
        return '<article class="member-card reveal" style="transition-delay:' + (index * 70) + 'ms">' +
          '<div class="member-avatar">' + (index + 1) + "</div>" +
          '<p class="member-role">' + group.role + "</p>" +
          "<h3>" + group.name + "</h3>" +
          "<p>" + group.focus + "</p>" +
          '<div class="card-tags"><span class="tag gold">' + group.members + "</span></div>" +
        "</article>";
      }).join("");
      initReveal();
    }
  }

  function allPublications() {
    if (!DATA.__allPublications) {
      DATA.__allPublications = []
        .concat(DATA.publications || [])
        .concat(DATA.projects || [])
        .concat(DATA.patents || [])
        .concat(DATA.books || [])
        .concat(DATA.awards || []);
    }
    return DATA.__allPublications;
  }

  function publicationMatches(item, filter, query) {
    if (filter !== "all" && item.type !== filter) return false;
    if (!query) return true;
    var haystack = [item.title, item.authors, item.venue, (item.tags || []).join(" ")].join(" ").toLowerCase();
    return haystack.indexOf(query.toLowerCase()) !== -1;
  }

  function renderPublications(listHolder, filter, query) {
    if (!listHolder) return;
    var items = allPublications().filter(function (item) {
      return publicationMatches(item, filter, query);
    });

    if (!items.length) {
      listHolder.innerHTML = '<div class="empty-state">没有找到匹配的内容，请尝试其他关键词或筛选条件。</div>';
      return;
    }

    listHolder.innerHTML = items.map(function (item, index) {
      var label = TYPE_LABEL[item.type] || "成果";
      return '<article class="pub-item reveal" style="transition-delay:' + Math.min(index, 8) * 50 + 'ms">' +
        '<div><span class="pub-type">' + label + "</span></div>" +
        '<div class="pub-main">' +
          "<h3>" + item.title + "</h3>" +
          '<p class="pub-authors">' + item.authors + "</p>" +
          '<p class="pub-authors">' + item.venue + "</p>" +
          '<div class="pub-meta">' + (item.tags || []).map(function (tag) {
            return '<span class="tag">' + tag + "</span>";
          }).join("") + "</div>" +
          (item.link ? '<a class="pub-link" href="' + item.link + '" target="_blank" rel="noopener">查看详情 →</a>' : "") +
        "</div>" +
        '<div class="pub-year">' + item.year + "</div>" +
      "</article>";
    }).join("");

    initReveal();
  }

  function initPublicationsPage() {
    var listHolder = qs("#pub-list");
    if (!listHolder) return;

    var filter = "all";
    var query = "";
    var search = qs("#pubSearch");
    var buttons = qsa("#pubFilters .filter-btn");

    function update() {
      renderPublications(listHolder, filter, query);
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        filter = button.dataset.filter || "all";
        buttons.forEach(function (item) { item.classList.toggle("is-active", item === button); });
        update();
      });
    });

    if (search) {
      search.addEventListener("input", function () {
        query = search.value.trim();
        update();
      });
    }

    update();
  }

  function renderNewsTimeline(container, filter, query) {
    if (!container) return;
    var items = (DATA.news || []).filter(function (item) {
      if (filter && filter !== "all" && item.category !== filter) return false;
      if (!query) return true;
      return (item.title + item.summary + item.category).toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    if (!items.length) {
      container.innerHTML = '<div class="empty-state">暂无匹配的动态内容。</div>';
      return;
    }

    container.innerHTML = items.map(function (item, index) {
      return '<article class="timeline-item reveal" style="transition-delay:' + Math.min(index, 8) * 60 + 'ms">' +
        '<div class="news-meta"><span class="news-category">' + item.category + "</span><span>" + item.date + "</span></div>" +
        "<h3>" + item.title + "</h3>" +
        "<p>" + item.summary + "</p>" +
        (item.link ? '<a class="pub-link" href="' + item.link + '">相关链接 →</a>' : "") +
      "</article>";
    }).join("");

    initReveal();
  }

  function initNewsPage() {
    var holder = qs("#news-list");
    if (!holder) return;

    var filter = "all";
    var query = "";
    var buttons = qsa("#newsFilters .filter-btn");
    var search = qs("#newsSearch");

    function update() {
      renderNewsTimeline(holder, filter, query);
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        filter = button.dataset.filter || "all";
        buttons.forEach(function (item) { item.classList.toggle("is-active", item === button); });
        update();
      });
    });

    if (search) {
      search.addEventListener("input", function () {
        query = search.value.trim();
        update();
      });
    }

    update();
  }

  function initContactForm() {
    var form = qs("#contactForm");
    if (!form) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var name = qs("#contactName").value.trim();
      var email = qs("#contactEmail").value.trim();
      var subject = qs("#contactSubject").value.trim() || "课题组网站咨询";
      var message = qs("#contactMessage").value.trim();
      var body = "姓名：" + name + "\n邮箱：" + email + "\n\n" + message;
      var href = "mailto:" + DATA.meta.email +
        "?subject=" + encode("[课题组网站] " + subject) +
        "&body=" + encode(body);
      window.location.href = href;
    });
  }

  /* ------------------------------------------------------------------
     Hero effects
  ------------------------------------------------------------------ */

  function initTyping() {
    var target = qs("[data-typing]");
    if (!target) return;

    var words = (target.dataset.typing || "").split("|").filter(Boolean);
    if (!words.length) return;

    var wordIndex = 0;
    var charIndex = 0;
    var deleting = false;
    var wait = 0;

    function loop() {
      var word = words[wordIndex];
      if (!deleting) {
        charIndex += 1;
        target.textContent = word.slice(0, charIndex);
        if (charIndex === word.length) {
          deleting = true;
          wait = 1500;
        } else {
          wait = 95;
        }
      } else {
        charIndex -= 1;
        target.textContent = word.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          wait = 400;
        } else {
          wait = 45;
        }
      }

      window.setTimeout(loop, wait);
    }

    loop();
  }

  function initParticles() {
    var canvas = qs(".hero-canvas");
    if (!canvas) return;
    var context = canvas.getContext("2d");
    if (!context) return;

    var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    var width = 0;
    var height = 0;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var particles = [];
    var mouse = { x: null, y: null };

    function resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      var count = Math.min(78, Math.max(28, Math.floor(width / 20)));
      particles = [];
      for (var i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.34,
          vy: (Math.random() - 0.5) * 0.34,
          r: Math.random() * 1.7 + 0.5
        });
      }
    }

    function draw() {
      context.clearRect(0, 0, width, height);

      for (var i = 0; i < particles.length; i += 1) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        if (mouse.x !== null) {
          var dx = p.x - mouse.x;
          var dy = p.y - mouse.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150 && dist > 0) {
            p.x += (dx / dist) * 0.55;
            p.y += (dy / dist) * 0.55;
          }
        }

        context.beginPath();
        context.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        context.fillStyle = "rgba(190, 210, 255, .62)";
        context.fill();
      }

      for (var a = 0; a < particles.length; a += 1) {
        for (var b = a + 1; b < particles.length; b += 1) {
          var p1 = particles[a];
          var p2 = particles[b];
          var dx2 = p1.x - p2.x;
          var dy2 = p1.y - p2.y;
          var d = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (d < 118) {
            context.beginPath();
            context.moveTo(p1.x, p1.y);
            context.lineTo(p2.x, p2.y);
            context.strokeStyle = "rgba(91, 140, 255, " + (0.13 * (1 - d / 118)).toFixed(3) + ")";
            context.lineWidth = 1;
            context.stroke();
          }
        }
      }

      window.requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", function (event) {
      var rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    });
    window.addEventListener("mouseout", function () {
      mouse.x = null;
      mouse.y = null;
    });

    resize();
    draw();
  }

  /* ------------------------------------------------------------------
     Init
  ------------------------------------------------------------------ */

  function init() {
    renderHeader();
    renderFooter();

    initTheme();
    initMobileNav();
    initScrollProgress();
    initBackToTop();
    initTyping();
    initParticles();
    initGallery();
    initContactForm();

    renderStats(qs("#home-stats"), DATA.stats);
    renderResearchCards(qs("#home-research"), 4);
    renderNewsCards(qs("#home-news"), 3);
    renderGallery(qs("#home-gallery"), 3);
    renderGallery(qs("#team-gallery"), 4);
    renderResearchCards(qs("#research-grid"));
    renderTeamPage();
    initPublicationsPage();
    initNewsPage();

    initReveal();

    if (window.location.hash) {
      var hashTarget = document.getElementById(window.location.hash.slice(1));
      if (hashTarget) {
        window.setTimeout(function () {
          hashTarget.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 260);
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
