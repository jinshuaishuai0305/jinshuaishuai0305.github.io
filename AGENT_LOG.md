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
| 团队成员 | `team.html` | 负责人、工作经历时间线、团队数据、研究小组、团队风采 |
| 研究成果 | `publications.html` | 论文、项目、专利、著作、荣誉，支持筛选搜索 |
| 对外开放 | `exchange.html` | 国际会议汇报（ICCES）、国际期刊代表作、合作版图、开放共享 |
| 申报通知 | `notices.html` | 自动抓取的山西省科技厅申报通知，年份筛选 + 搜索 |
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
├── exchange.html
├── news.html
├── contact.html
├── notices.html
├── 404.html
├── assets/
│   ├── css/style.css
│   ├── js/data.js
│   ├── js/notices.js
│   ├── js/app.js
│   └── img/
│       ├── favicon.svg
│       ├── youzhiyong.png
│       ├── exchange/
│       │   └── *.jpg
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
- `quickLinks`：学生常用链接（智慧校园 / 校园邮箱 / 图书馆 / 研究生院 / 四六级报名），渲染到团队页与联系页
- `graduates`：毕业生名单（`intro` + `list`，含 year/name/thesis/field），团队页按届分组渲染

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

`link` 填 https:// 开头的站外地址时，卡片上的「相关链接」会自动 target="_blank" 新窗口打开（renderNewsTimeline 按是否 http 判断）；站内链接仍是同窗口跳转。转载校外新闻时建议在 summary 末尾注明来源，如「（来源：太原理工大学新闻网）」。

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

### 2.7 新增项目

在 `projects: [` 数组中添加。项目条目比论文多两个字段（`nature` 项目性质、`level` 项目级别），页面会在标签行最前面用金色徽章显示：

```js
{
  type: "project",
  year: 2025,
  title: "项目全称",
  nature: "科研纵向",              // 科研纵向 / 科研横向
  level: "省部级",                 // 国家级 / 省部级 / 市厅级 / 校级 / 其他
  authors: "项目来源单位 · 计划类别",
  venue: "2025.04—2027.04，40 万元，在研，主持",   // 起止 / 经费 / 状态 / 角色
  grade: "自然科学D类",           // 项目分级，项目卡片以小字显示
  category: "横向",                // 项目类型（国自然（面上）/省自然（其他）/省重点研发计划/横向）
  tags: ["关键词1", "关键词2"],
  link: ""
}
```

说明：`level` 与 `nature` 也会进入搜索（app.js 的 `publicationMatches`），搜「省部级」「横向」可直接筛出对应项目。经费口径写在 `venue` 里；若是「需求经费」而非合同额，务必注明，避免与合同经费混算。

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
#pi-career
#team-stats
#team-groups
#team-gallery
#pubFilters
#exchange-stats
#pubSearch
#pub-list
#noticeUpdated
#notice-list
#noticeSearch
#noticeFilters
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
- 对外开放页数据条渲染（`#exchange-stats` ← `DATA.exchangeStats`）
- 成果筛选和搜索
- 申报通知页渲染（`window.SITE_NOTICES` ← `assets/js/notices.js`）：年份筛选 + 关键词搜索 + 外链新窗口
- 学生常用链接渲染（`renderQuickLinks()`，读取 `DATA.quickLinks`，填充所有 `#quick-links` 容器，外链新窗口打开）
- 毕业生渲染（`renderGraduates()`：按届分组、届别倒序、每届标注人数，卡片含姓名 / 论文题目 / 方向标签，缺论文信息的显示「论文信息待补」）
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
- 页面：9 个
- 成果总数：`133`
  - 论文：`63`（2026 年 9 篇 / 2025 年 12 篇 / 2024 年 7 篇 / 2023 年 5 篇 / 2021 年 4 篇 / 2020 年 3 篇，其余见 `data.js`）
  - 项目：`35`（含 24 项横向/技术服务/专利转让，均带「项目性质 / 项目级别 / 项目分级 / 项目类型」字段；到账额写在 venue 里）
  - 专利：`5`（中国 3 / 美国 1 / 澳大利亚 1；均已补专利号、申请日、授权日、证书号与专利权人，附 5 张证书图；其中 2 项已转化，合计 40 万元）
  - 著作：`4`（2025《增材制造技术导论——原理与应用》游志勇 主编、2024《镁合金强韧化原理及技术》游志勇 著、2020 译著第十一章、2008《金属基复合材料制备及在力学环境中的作用》；前两本带封面图）
  - 荣誉：`26`（含 2025 年中国大学生机械工程创新创意大赛一等奖指导教师、2020 年山西省铸造行业创新技术成果奖、2024 年度《特种铸造及有色合金》卓越贡献编委）
- 新闻动态：`15` 条（其中 6 条为太原理工大学官网/学院官网转载，附原文链接）
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

- 「对外开放」页补充 2026-08-10 08:00 报告现场照与报告信息（`assets/img/exchange/`），头条卡片改为上图下文 + 左题右信息版式，新增「报告现场」双图区
- 删除与新转载重复的一条旧新闻（2026-06-05 院士工作站正式授牌，原无链接版），保留带 tyut.edu.cn 原文链接的版本，新闻 16 → 15 条
- 团队页新增「毕业生」区块（ALUMNI）：2016—2026 届共 24 人，按届分组（2026 届 4 人 / 2025 届 4 人 / 2024 届 4 人 / 2023 届 3 人 / 2022 届 2 人 / 2021 届 2 人 / 2020—2016 各 1 人），卡片含论文题目与方向标签；团队统计「已毕业硕士研究生」20+ → 24 名；成员名单提示同步为 24 名（2016—2026 届）
- 按用户要求清理项目卡片文案：去除「（到账 X 万元）」、占位「状态未填」、「（实为人文社科类）」；清理后页面与数据中三者均为 0 处
- 项目分级/类型全面对齐「科研项目表_整理版.docx」（校科〔2025〕2 号口径）：35 个项目全部按该表重写 grade 与 category，其中三处与此前不同——CADI 磨球 B1→D、砂型 3D 打印 B1→D、2015 国自然面上 B2→C；Cu/Sb 与 SiC 两项类型改为「科技成果转化（专利实施）」。当前分级分布：自然科学 C 类 4 项、D 类 31 项。标题匹配改为去空格/标点后比对（原表写作「一种Cu和Sb…」，站内有空格，按原样匹配会漏 2 项）
- 按「科研项目表_整理版.docx」补录 20 个站内没有的项目（高端铸铁、华翔共建研究院、铝镁锌、轻量化外委测试、灵石亨泰、鑫宇、苏州三基、南昌航空、岚县两项咨询、高纯金属、大呈新材、石墨烯吸附、吕梁科技特派员、3D 打印教材、3D 打印仿真平台、消失模 CAD 系统、产学研专项基金、产学研合作、专利转让），项目 15 → 35、成果总数 111 → 131；文末备注中的到账金额写入 venue，状态未填的标为「状态未填」
- 论文新增 2 篇 2012 年 China Foundry 旧文（Ce 富集稀土对 Mg-10Zn-5Al-0.1Sb 组织与力学性能；Cu 添加对 Mg-10Zn-5Al-0.1Sb 高锌镁合金的影响，均附 foundryworld PDF 全文链接），论文 61 → 63、成果总数 109 → 111；同批提供的 AZ61+Pr 一篇站内已有（记为 China Foundry 11(2):103-106），未重复录入
- 论文新增 1 篇（Sun, C. 等，Bulletin of Materials Science 2026, 49(4): 226，β 相第一性原理，DOI 10.1007/s12034-026-03737-x），论文 60 → 61、近五年 37 → 38；项目新增 1 项（2025 起「一种 Cu 和 Sb 联合原位自生的组织优化镁基复合材料及其制备方法」，横向 · 山西韶泽 30 万元 · 负责人 · 在研 · 自然科学 D 类），项目 14 → 15；成果总数 109
- 新增「学生常用链接」区（团队页 + 联系页）：智慧校园、校园邮箱、图书馆、研究生院、四六级报名，数据放 data.js 的 quickLinks，卡片为标签 + 名称 + 说明 + 外链箭头，1080px 三列、620px 两列
- 新增「申报通知」页 `notices.html`：读取 `assets/js/notices.js`（41 条，抓自山西省科技厅），支持年份筛选与标题搜索、外链新窗口打开；导航增加「申报通知」（位于对外开放与新闻动态之间），「加入我们 / 联系」精简为「联系我们」以腾出导航宽度；sitemap 与 .gitignore 同步
- 新闻动态新增 6 条校外来源条目（院士工作站授牌/首次学术研讨会、赴清华与武汉调研、7·23 任职决定、数学学院党委书记交接），均带原文链接并在 summary 末尾标注来源；renderNewsTimeline 对外链自动加 target=_blank + rel=noopener
- 团队成员页新增「工作经历」时间线（`#pi-career` ← `DATA.team.pi.career`，10 段）：1995 年自动化系政治辅导员 → 信息工程学院团委副书记 → 材料学院党委副书记 → 离退休管理处副处长/处长 → 数学学院党委书记 → 材料学院党委书记（至 2026.03.04）→ 2025.07.23 起国内交流合作办公室主任；校党委委员（2021.09 起，标注「兼任」）；同步更新 PI 角色行、简介、职称/学位时间点与首页 PI 卡片
- 项目卡片新增分级/类型小字行（app.js 渲染 `.pub-extra`，样式在 style.css）：显示「项目分级：自然科学 B1 类 · 项目类型：省重点研发计划」，无该字段的条目自动隐藏
- 项目新增 `grade`（校内分级，如自然科学 B1/B2/C/D 类）与 `category`（国自然（面上）/省自然（其他）/省重点研发计划/横向）字段，按用户新版表格录入 14 项；并在项目卡片以「项目分级：… · 项目类型：…」小字显示（app.js 渲染 .pub-extra）；同时重生成 科研项目一览表.docx/pdf（10 列、8.5 磅、仍单页）
- 专利数据补全：5 件分别写入 ZL/US/AU 专利号与授权公告号、申请日、授权日、证书号、专利权人；转化情况按用户信息登记（Cu/Sb 30 万元、SiC 10 万元，其余未转化），并新增 `assets/img/patents/` 下 5 张证书 PNG（`cover` 字段复用缩略图 + 灯箱）；另生成 专利一览表.docx/pdf 供审核（已 gitignore）
- 按用户修订版表格校正两条：2016 校基金经费「未列」→ 2 万元；院士工作站全称加「太原理工大学」前缀
- 项目数据由 9 项补齐为 14 项（新增 CADI 磨球、KY202314 密封垫片测试、铸造铝锂合金、SiC 颗粒增强镁基复合材料横向、院士工作站），并把 2021 中央引导地方项目状态由「在研」改为「已完成」；project 新增 `nature`（纵向/横向）与 `level`（国家级/省部级/市厅级/校级/其他）字段，渲染为金色徽章并纳入搜索
- 4 份荣誉证书转为 PNG 并上站：`assets/img/certs/`（meicc-2025-first-prize / meicc-2025-excellent-instructor / shanxi-foundry-award-2020 / journal-editor-award-2024，1200px 宽、palette PNG，336–771 KB），awards 条目增加 `cover` 字段，复用 `.pub-cover` 缩略图 + 全站灯箱（点击放大）；证书原件 PDF 不入库
- 荣誉新增两项**邀请报告证书**：第 24 届全国铸造学术会议（2025-03-23，报告《基于砂型 3D 打印成形工艺优化制备薄壁叶轮铸件》）、2025 中国结构材料大会（2025-07-20，报告《Al2Ca/Mg 界面的第一性原理研究》），证书 PDF 转 PNG 存 assets/img/certs/；荣誉 24 → 26、成果总数 131 → 133
- 荣誉新增「吕梁市—太原理工大学企业科技特派员项目（第一期）金牌特派员」（中共吕梁市委人才工作领导小组办公室，2023 年 12 月），附证书 PNG；荣誉 23 → 24、成果总数 106 → 107
- 荣誉新增 3 项（2025 年中国大学生机械工程创新创意大赛一等奖指导教师、2020 年山西省铸造行业创新技术成果奖、2024 年度《特种铸造及有色合金》卓越贡献编委），荣誉总数 19 → 22 → 23（补入 2025 铸造工艺设计赛优秀指导教师奖），成果总数 97 → 101；奖项信息按证书原件录入（发证单位、日期、作品/成果名称）
- 新增「对外开放」页 `exchange.html`：ICCES 大会汇报（现场照片、报告题目、单位、关键词、结论要点）、国际期刊 5 篇代表作（影响因子 + DOI）、合作版图、开放共享时间线、合作邀请
- 导航 `NAV` 增加 `{ id: "exchange", label: "对外开放", href: "exchange.html" }`（位于研究成果与新闻动态之间），全站页头/页脚自动同步
- `data.js` 新增 `exchangeStats`，`init()` 增加 `renderStats(qs("#exchange-stats"), DATA.exchangeStats)`
- 新闻「课题组师生赴香港参加 ICCES 大会」的链接改为 `exchange.html`
- `sitemap.xml` 增加 `exchange.html`

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
