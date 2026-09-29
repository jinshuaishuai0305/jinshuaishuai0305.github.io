# AGENT_LOG.md

> 维护日志 / 后续 Agent 工作指南  
> 最近更新：2026-09-25  
> 线上站点：https://jinshuaishuai0305.github.io/  
> GitHub 仓库：`jinshuaishuai0305/jinshuaishuai0305.github.io`  
> 本地路径：`/home/jss/share/jinshuaishuai0305.github.io`

---

## 1. 项目概况

游志勇课题组官网，多页面静态站点，部署在 GitHub Pages。

当前页面：

| 页面 | 文件 | 说明 |
|---|---|---|
| 封面 | `index.html` | 动态首页、粒子背景、打字机、数据统计 |
| 研究方向 | `research.html` | 4 个研究方向、研究路径 |
| 团队成员 | `team.html` | 负责人、团队数据、研究小组、团队风采 |
| 研究成果 | `publications.html` | 论文、项目、专利、著作、荣誉，支持筛选搜索 |
| 新闻动态 | `news.html` | 新闻中心、工作动态、通知公告、学术活动 |
| 加入我们 / 联系 | `contact.html` | 联系方式、咨询表单、招生合作 |
| 404 | `404.html` | 自定义 404 |

主要目录：

```text
.
├── index.html
├── research.html
├── team.html
├── publications.html
├── news.html
├── contact.html
├── 404.html
├── assets/
│   ├── css/style.css
│   ├── js/data.js
│   ├── js/app.js
│   └── img/
│       ├── favicon.svg
│       ├── youzhiyong.png
│       ├── books/
│       │   └── *.jpg
│       └── gallery/
│           ├── *.jpg
│           └── thumbs/*.jpg
├── sitemap.xml
├── robots.txt
└── BingSiteAuth.xml
```

---

## 2. 内容维护入口

**绝大多数内容只需要修改：**

```text
assets/js/data.js
```

该文件包含：

- `meta`：站点名称、单位、邮箱、地址、更新时间
- `stats`：首页数据统计
- `research`：研究方向
- `publications`：论文
- `projects`：科研项目
- `patents`：授权专利
- `books`：著作 / 译著
- `awards`：奖励荣誉
- `news`：新闻动态
- `gallery`：团队风采照片
- `team`：负责人、团队数据、研究小组

### 2.1 新增论文

`publications` 数组当前共 **60 篇论文**，按年份从新到旧排列（年份相同时新论文放在前面）。
`app.js` 的 `renderPublications()` 会再次按 `year` 倒序排序并自动插入年份分隔标题，因此数组顺序只影响同一年内的先后，新增论文建议插到对应年份的开头。

在 `publications: [` 数组中添加：

```js
{
  type: "paper",
  year: 2026,
  title: "论文标题",
  authors: "作者列表",
  venue: "期刊, 卷, 页码 · DOI: 10.xxxx/xxxxx",
  tags: ["关键词1", "关键词2"],
  link: "https://doi.org/10.xxxx/xxxxx"
}
```

### 2.2 新增著作（含封面）

在 `books: [` 数组中添加；图书封面字段 `cover` 可选，填了就显示缩略图并可点击放大：

```js
{
  type: "book",
  year: 2025,
  title: "《书名》",
  authors: "游志勇 主编",          // 或 "游志勇 著" / "参与译著"
  venue: "出版社，城市，年.月",
  tags: ["增材制造", "教材", "主编"],
  cover: "assets/img/books/english-name.jpg",   // 无封面则写 "" 或省略
  link: ""
}
```

封面图统一放在 `assets/img/books/`，用英文短横线命名（不要中文文件名），宽度压到 760、`mozjpeg` 质量 84：

```bash
cd /home/jss/share/jinshuaishuai0305.github.io
node - <<'NODE'
const sharp = require('/tmp/imgtools/node_modules/sharp');
sharp('原始封面.png').flatten({ background: '#ffffff' })
  .resize({ width: 760, withoutEnlargement: true })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile('assets/img/books/english-name.jpg')
  .then(i => console.log(i.width + 'x' + i.height, Math.round(i.size / 1024) + 'KB'));
NODE
```

`.pub-cover` 宽度固定 110px，桌面端在类型标签上方竖排，620px 以下与标签并排。点击封面走的是全局 lightbox（`app.js` 的 `initGallery()` 里绑定 `[data-full]`，不只是 `.gallery-item`）。

### 2.3 新增新闻

在 `news: [` 数组中添加：

```js
{
  date: "2026-09-25",
  category: "科研进展", // 可选：科研进展 / 工作动态 / 学术活动 / 通知公告
  title: "新闻标题",
  summary: "精简摘要，建议 1—2 句话",
  link: "publications.html" // 可为空字符串
}
```

如果要增加新的新闻分类：

1. 在 `data.js` 中使用新的 `category`
2. 在 `news.html` 的 `#newsFilters` 中增加：

```html
<button class="filter-btn" type="button" data-filter="新分类">新分类</button>
```

`app.js` 会自动绑定筛选事件。

### 2.4 新增照片

1. 原图不要直接放进仓库提交。
2. 压缩生成两份：

```text
assets/img/gallery/xxx.jpg          # 完整版，最大边 1800，质量 82
assets/img/gallery/thumbs/xxx.jpg   # 缩略图，最大边 900，质量 78
```

3. 在 `data.js` 的 `gallery` 数组中添加：

```js
{
  id: "unique-id-2026",
  src: "assets/img/gallery/thumbs/xxx.jpg",
  full: "assets/img/gallery/xxx.jpg",
  caption: "照片说明",
  tag: "学术交流" // 或 团队合影 / 毕业留念 / 团队活动
}
```

首页默认展示 `gallery` 的前 3 项；团队页展示最多 4 项。  
照片点击后会通过 `app.js` 中的 lightbox 放大。

### 2.5 修改负责人信息

编辑 `data.js` 中的 `team.pi`：

- `role`：负责人角色
- `bio`：个人简介
- `fields`：团队页展示的字段
- `links`：外部链接

首页 `index.html` 中还有一块静态负责人卡片，修改负责人信息时不要忘记同步首页中的：

- `pi-name`
- `pi-bio`
- `info-list`
- `hero-actions`

### 2.6 修改导航

导航由 `assets/js/app.js` 顶部的 `NAV` 数组统一生成：

```js
var NAV = [
  { id: "home", label: "首页", href: "index.html" },
  ...
];
```

修改后所有页面的头部和底部导航会自动更新。

---

## 3. 页面 / 交互结构

核心交互都在：

```text
assets/js/app.js
assets/css/style.css
```

不要随意删除以下占位 ID：

```text
#site-header
#site-footer
#home-stats
#home-research
#home-news
#home-gallery
#research-grid
#pi-card
#team-stats
#team-groups
#team-gallery
#pubFilters
#pubSearch
#pub-list
#newsFilters
#newsSearch
#news-list
#contactForm
#backToTop
```

`app.js` 负责：

- 注入 header / footer
- 明暗主题切换
- 移动端导航
- 滚动进度、返回顶部
- 滚动渐入、数字动画
- 粒子背景、打字机
- 研究方向、团队、成果、新闻、相册动态渲染
- 成果按年份分组渲染（`.pub-year-sep` 为年份分隔标题，`.pub-item` 不再显示右侧年份）
- 成果筛选和搜索
- 新闻筛选和搜索
- 相册与图书封面 lightbox（点击带 `data-full` 的元素放大）
- 联系表单 `mailto:` 发送

---

## 4. 图片压缩方法

当前环境曾使用 `sharp`。如果 `/tmp/imgtools` 不存在，可重新安装：

```bash
mkdir -p /tmp/imgtools
cd /tmp/imgtools
npm init -y
npm install sharp
```

然后在仓库根目录运行：

```bash
cd /home/jss/share/jinshuaishuai0305.github.io

node - <<'NODE'
const sharp = require('/tmp/imgtools/node_modules/sharp');
const input = '原图文件名.jpg';
const name = 'new-photo-2026.jpg';

(async () => {
  await sharp(input).rotate()
    .resize({ width: 1800, height: 1800, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(`assets/img/gallery/${name}`);

  await sharp(input).rotate()
    .resize({ width: 900, height: 900, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(`assets/img/gallery/thumbs/${name}`);

  console.log('processed', name);
})().catch(err => { console.error(err); process.exit(1); });
NODE
```

仓库根目录下的原始大图通常不提交；只提交 `assets/img/gallery/` 中处理后的版本。

---

## 5. 本地预览与测试

### 5.1 启动本地服务

```bash
cd /home/jss/share/jinshuaishuai0305.github.io
python3 -m http.server 8765 --bind 127.0.0.1
```

访问：

```text
http://127.0.0.1:8765/
```

### 5.2 Chromium 无头检查

可用已有 Chromium：

```bash
CHROME="$HOME/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome"

"$CHROME" \
  --headless=new \
  --no-sandbox \
  --disable-gpu \
  --dump-dom \
  http://127.0.0.1:8765/index.html
```

或截图：

```bash
"$CHROME" \
  --headless=new \
  --no-sandbox \
  --disable-gpu \
  --window-size=1440,2000 \
  --screenshot=/tmp/site.png \
  http://127.0.0.1:8765/
```

### 5.3 检查重点

- 页面返回 `200`
- 顶部导航 / 底部正常
- 动态内容是否渲染：
  - 首页统计、研究方向、新闻、相册
  - 成果列表数量
  - 新闻列表数量
  - 相册照片数量和点击放大
- 移动端无横向溢出
- 浏览器控制台无报错

---

## 6. 发布流程

远程 `origin` 当前是 HTTPS 地址，直接 `git push origin main` 可能要求输入用户名密码。  
建议使用 SSH 直接推送：

```bash
cd /home/jss/share/jinshuaishuai0305.github.io

GIT_SSH_COMMAND='ssh -o BatchMode=yes -o StrictHostKeyChecking=accept-new' \
git push git@github.com:jinshuaishuai0305/jinshuaishuai0305.github.io.git main

GIT_SSH_COMMAND='ssh -o BatchMode=yes -o StrictHostKeyChecking=accept-new' \
git fetch git@github.com:jinshuaishuai0305/jinshuaishuai0305.github.io.git \
main:refs/remotes/origin/main
```

提交作者可使用：

```bash
git -c user.name='jinshuaishuai0305' \
    -c user.email='jinshuaishuai0305@users.noreply.github.com' \
    commit -m '说明信息'
```

推送后等待 GitHub Pages 部署：

```bash
gh run list --repo jinshuaishuai0305/jinshuaishuai0305.github.io --limit 5
```

部署成功后访问：

https://jinshuaishuai0305.github.io/

如果浏览器仍显示旧页面，使用 `Ctrl + F5` 强制刷新。

---

## 7. 当前内容状态（2026-09-29）

- 最近一次内容提交：`bba1532 Add additive manufacturing textbook with book covers`
- 页面：7 个
- 成果总数：`97`
  - 论文：`60`（2026 年 8 篇 / 2025 年 12 篇 / 2024 年 7 篇 / 2023 年 5 篇 / 2021 年 4 篇 / 2020 年 3 篇，其余见 `data.js`）
  - 项目：`9`
  - 专利：`5`
  - 著作：`4`（2025《增材制造技术导论——原理与应用》游志勇 主编、2024《镁合金强韧化原理及技术》游志勇 著、2020 译著第十一章、2008《金属基复合材料制备及在力学环境中的作用》；前两本带封面图）
  - 荣誉：`19`
- 新闻动态：`10` 条
- 团队相册：`4` 张
- 新闻分类：
  - 科研进展
  - 工作动态
  - 学术活动
  - 通知公告
- 负责人信息已补充：
  - 现任国内交流合作办公室主任
  - 校友工作办公室主任

### 论文数据说明

- 论文清单一轮重建于 2026-09-29，数据来源为课题组 Zotero 文献库导出的 BibTeX。
- BibTeX 中 58 条记录，去掉 1 组中英文重复（蒋傲雪《固溶时效对半固态挤压 SiC/AZ91D 组织与性能的影响》，中英文同刊同卷同页，只保留 1 条）后为 57 条。
- 另保留 3 篇 BibTeX 未收录但此前已上站的旧论文：2016 China Foundry（机械合金化颗粒增强铝基复合材料）、2014 China Foundry（Pr 对 AZ61 的影响）、2012 Applied Mechanics and Materials（半水石膏装备热耗）。如需与 BibTeX 完全一致可删除这 3 条。
- 作者姓名已统一为「姓, 名」顺序（BibTeX 中 `Aoxue, Jiang; Zhiyong, You` 一类字段已纠正为 `Jiang, Aoxue; You, Zhiyong`）。
- 40 条带 DOI 链接，其余中文期刊未查到 DOI 的条目 `link` 留空。

### 著作数据说明

- 2025 年 1 月北京理工大学出版社出版《增材制造技术导论——原理与应用》，游志勇任主编，2026-09-29 新增。
- 同社 2024 年 4 月出版的《镁合金强韧化原理及技术》（封面实为「及技术」），此前误记为《镁合金强韧化原理与技术》，已按封面更正；作者信息由「北京理工大学出版社」更正为「游志勇 著」。
- 两本图书封面由仓库根目录的原始 PNG（1654×2339）压缩为 `assets/img/books/` 下的 JPG（760×1075，46–59 KB）。

---

## 8. 更新日志

### 2026-09-29

- 新增著作《增材制造技术导论——原理与应用》（游志勇 主编，北京理工大学出版社，2025.1），并按封面更正《镁合金强韧化原理及技术》书名与作者信息
- 两本图书封面压缩入 `assets/img/books/`，`data.js` 的 `books` 增加 `cover` 字段；`app.js` 的 `renderPublications()` 在 `.pub-side` 中渲染封面缩略图（`.pub-cover`），lightbox 的点击代理由 `.gallery-item` 放宽为 `[data-full]`
- 重建「研究成果 → 论文」：按课题组 Zotero BibTeX 汇总重写 `data.js` 的 `publications` 数组，论文由 14 篇补齐为 60 篇
- `app.js` 的 `renderPublications()` 改为按年份倒序分组渲染，新增 `.pub-year-sep` 年份分隔标题（`style.css`）
- `.pub-item` 改为两列栅格（去掉右侧年份列），同步调整 1080px / 620px 响应式规则
- 首页统计「发表论文」由 `60+` 改为精确值 `60`，`meta.updated` 更新为 2026 年 9 月

### 2026-09-25

- `c85b000` 重构为多页面动态站点
- `058e312` 新增团队相册、毕业合照、教师节合照
- `f5341d7` 新增 5 篇论文，补充工作动态 / 通知公告
- `3f4ff75` 新增 ICCES 大会照片和新闻

---

## 9. 后续可完善

- 补充课题组在读研究生、博士生的真实姓名和个人研究方向
- 当前团队成员页主要展示研究小组和人数，个人卡片可继续扩充
- 可将更多论文补充 DOI、期刊封面或 PDF 链接
- 新闻动态可继续增加学术会议、项目进展、获奖信息
- 仓库根目录下仍有若干未跟踪的原始照片，处理后再放入 `assets/img/gallery/`，不要直接提交原图

---

## 10. 注意事项

- **不要删除** `BingSiteAuth.xml`、`robots.txt`、`sitemap.xml`
- 新增页面后同步更新 `sitemap.xml`
- 图片优先使用 `.jpg`，命名使用英文短横线，不要使用中文文件名
- 涉及未公开个人信息、学生姓名、联系方式时，先向课题组确认是否公开发布
- 修改后先本地测试，再提交并推送
