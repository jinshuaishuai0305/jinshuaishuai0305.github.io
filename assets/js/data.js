/* =========================================================
   Site content data.
   Update this file to change most of the site content.
   ========================================================= */
window.SITE_DATA = {
  meta: {
    name: "游志勇课题组",
    shortName: "YZY Group",
    affiliation: "太原理工大学材料科学与工程学院",
    email: "youzhiy1486@163.com",
    address: "山西省太原市 · 太原理工大学材料科学与工程学院",
    updated: "2026年9月"
  },

  stats: [
    { value: 60, suffix: "", label: "发表论文" },
    { value: 20, suffix: "+", label: "SCI 收录" },
    { value: 10, suffix: "+", label: "主持/参与项目" },
    { value: 20, suffix: "+", label: "已毕业硕士" }
  ],

  exchangeStats: [
    { value: 22, suffix: "篇", label: "国际期刊英文论文" },
    { value: 2, suffix: "项", label: "国际发明专利" },
    { value: 1, suffix: "个", label: "院士工作站" },
    { value: 4, suffix: "项", label: "产学研合作项目" }
  ],

  quickLinks: [
    { name: "智慧校园", desc: "选课、成绩、教务与校内服务", url: "https://one.tyut.edu.cn/tp_up/", tag: "校内" },
    { name: "校园邮箱", desc: "学校邮箱登录（学生 / 教工）", url: "https://mail.tyut.edu.cn/", tag: "校内" },
    { name: "图书馆", desc: "馆藏检索、数据库与借阅", url: "http://www.lib.tyut.edu.cn/", tag: "资源" },
    { name: "研究生院", desc: "培养、学位与招生信息", url: "http://www.gs.tyut.edu.cn/", tag: "培养" },
    { name: "四六级报名", desc: "全国大学英语四六级考试报名", url: "https://cet-bm.neea.cn/", tag: "考试" }
  ],

  research: [
    {
      id: "ductile-iron",
      index: "01",
      icon: "◎",
      title: "高强韧、高耐磨球墨铸铁",
      tagline: "Ductile Iron · Strength & Wear Resistance",
      description: "围绕高端装备对铸造材料强韧性、耐磨性与服役稳定性的需求，开展球墨铸铁成分设计、凝固组织调控、热处理工艺与性能评价研究。",
      keywords: ["球墨铸铁", "强韧化", "耐磨性", "铸造工艺"],
      highlights: ["合金成分设计", "凝固组织调控", "力学与服役性能评价"]
    },
    {
      id: "composites",
      index: "02",
      icon: "⬡",
      title: "轻质复合材料",
      tagline: "Lightweight Metal Matrix Composites",
      description: "面向轻量化与高比强度需求，研究颗粒增强金属基复合材料的界面调控、制备工艺、组织演化与强韧化机制。",
      keywords: ["金属基复合材料", "界面调控", "SiCp", "轻量化"],
      highlights: ["半固态搅拌铸造", "界面与组织表征", "力学性能协同调控"]
    },
    {
      id: "mg-al",
      index: "03",
      icon: "⌬",
      title: "结构功能一体化镁、铝合金",
      tagline: "Structure-Function Integrated Alloys",
      description: "围绕镁、铝合金的强韧化、阻尼、负热膨胀等功能特性，开展成分微合金化、第二相调控、塑性变形与结构功能一体化设计。",
      keywords: ["镁合金", "铝合金", "强韧化", "负热膨胀", "阻尼"],
      highlights: ["第一性原理计算", "第二相与界面调控", "结构功能一体化"]
    },
    {
      id: "additive",
      index: "04",
      icon: "✦",
      title: "增材制造材料及工艺",
      tagline: "Additive Manufacturing",
      description: "面向砂型 3D 打印与高性能构件制造，研究增材制造材料体系、工艺窗口、组织形成规律及面向工程应用的装备与工艺开发。",
      keywords: ["增材制造", "3D 打印", "砂型铸造", "工艺开发"],
      highlights: ["材料与工艺协同", "组织性能调控", "工程化应用探索"]
    }
  ],

  publications: [
    {
      type: "paper",
      year: 2026,
      title: "First-principles insights into the thermodynamic and mechanical behavior of the β-phase in Mg–Zn alloys: unveiling the underlying mechanisms",
      authors: "Sun, Chunle; You, Zhiyong; Han, Peide; Jiang, Aoxue; Jin, Shuaishuai",
      venue: "Bulletin of Materials Science, 49(4), 226 · DOI: 10.1007/s12034-026-03737-x",
      tags: ["Mg-Zn 合金", "β 相", "弹性各向异性", "第一性原理"],
      link: "https://doi.org/10.1007/s12034-026-03737-x"
    },
    {
      type: "paper",
      year: 2026,
      title: "First-principles study of elastic anisotropy and mechanical properties of high-pressure γ-ZrW2O8",
      authors: "Jin, Shuaishuai; Guan, Zhong; You, Zhiyong; Li, Bing; Li, Hang",
      venue: "Computational Condensed Matter, 48, e01409 · DOI: 10.1016/j.cocom.2026.e01409",
      tags: ["γ-ZrW2O8", "负热膨胀", "弹性各向异性"],
      link: "https://doi.org/10.1016/j.cocom.2026.e01409"
    },
    {
      type: "paper",
      year: 2026,
      title: "Non-monotonic ductile-to-brittle transition driven by lithium concentration and the origin of covalent networks in Al–Li solid solutions",
      authors: "Su, Guangpeng; You, Zhiyong; Guan, Zhong; Zhang, Tao; Han, Peide; Li, Hang",
      venue: "Physica B: Condensed Matter, 742, 419337 · DOI: 10.1016/j.physb.2026.419337",
      tags: ["Al-Li 合金", "韧脆转变", "负泊松比"],
      link: "https://doi.org/10.1016/j.physb.2026.419337"
    },
    {
      type: "paper",
      year: 2026,
      title: "Study on precipitation behavior of nanoscale coherent precipitates induced by semi-solid extrusion and synergistic effect on strength-ductility of Mg–Zn–Ce alloys",
      authors: "Jiang, Aoxue; You, Zhiyong; Wang, Kaiying; Sun, Chunle; Li, Manlin",
      venue: "Journal of Materials Research and Technology, 44, 136-147 · DOI: 10.1016/j.jmrt.2026.07.236",
      tags: ["Mg-Zn-Ce", "半固态挤压", "共格析出", "强韧协同"],
      link: "https://doi.org/10.1016/j.jmrt.2026.07.236"
    },
    {
      type: "paper",
      year: 2026,
      title: "Coherent precipitation and classified quantitative strengthening of T6-treated semi-solid extruded Mg-Zn-Ce alloy",
      authors: "Jiang, Aoxue; You, Zhiyong; Wang, Kaiying; Sun, Chunle; Li, Manlin",
      venue: "Journal of Alloys and Compounds, 1079, 189940 · DOI: 10.1016/j.jallcom.2026.189940",
      tags: ["Mg-Zn-Ce", "T6 热处理", "共格析出", "定量强化"],
      link: "https://doi.org/10.1016/j.jallcom.2026.189940"
    },
    {
      type: "paper",
      year: 2026,
      title: "Understanding the pressure-induced structural evolution and thermophysical response of Mg–Zn intermetallics via a neuroevolution potential",
      authors: "You, Zhiyong; Jin, Shuaishuai; Han, Peide; Niu, Xiaofeng; Li, Hang",
      venue: "Journal of Materials Research and Technology, 43, 1002-1012 · DOI: 10.1016/j.jmrt.2026.06.105",
      tags: ["Mg-Zn 金属间化合物", "NEP 势函数", "分子动力学"],
      link: "https://doi.org/10.1016/j.jmrt.2026.06.105"
    },
    {
      type: "paper",
      year: 2026,
      title: "In-situ investigation of grain boundary premelting behavior in low-carbon ferromanganese",
      authors: "Li, Jinjian; You, Zhiyong; Liu, Chunlian; Han, Peide; Wang, Limin",
      venue: "Materials Letters, 422, 141286 · DOI: 10.1016/j.matlet.2026.141286",
      tags: ["晶界预熔", "锰铁合金", "高温激光共聚焦"],
      link: "https://doi.org/10.1016/j.matlet.2026.141286"
    },
    {
      type: "paper",
      year: 2026,
      title: "T6处理对不同Zn含量Mg-Zn-Ce合金组织及性能影响",
      authors: "蒋傲雪; 游志勇; 孙春乐; 靳帅帅; 韩培德; 王开鹰",
      venue: "特种铸造及有色合金, 46(4), 525-531 · DOI: 10.15980/j.tzzz.H20250012",
      tags: ["Mg-Zn-Ce", "T6 热处理", "析出相", "强化机理"],
      link: "https://doi.org/10.15980/j.tzzz.H20250012"
    },
    {
      type: "paper",
      year: 2026,
      title: "基于响应面法的3D打印砂型空间网格工艺优化",
      authors: "刘世龙; 游志勇; 艾雨蒙; 田康康; 张笙辉; 李成坤; 谭锐",
      venue: "特种铸造及有色合金, 46(2), 182-186 · DOI: 10.15980/j.tzzz.T20240539",
      tags: ["砂型 3D 打印", "响应面法", "抗压强度"],
      link: "https://doi.org/10.15980/j.tzzz.T20240539"
    },
    {
      type: "paper",
      year: 2025,
      title: "Precipitate evolution behavior and strengthening mechanism in Ce-microalloyed Mg-Zn alloy",
      authors: "Jiang, Aoxue; You, Zhiyong; Wang, Kaiying; Sun, Chunle; Li, Manlin",
      venue: "Journal of Alloys and Compounds, 1048, 185013 · DOI: 10.1016/j.jallcom.2025.185013",
      tags: ["Mg-Zn-Ce", "析出演化", "强化机制"],
      link: "https://doi.org/10.1016/j.jallcom.2025.185013"
    },
    {
      type: "paper",
      year: 2025,
      title: "Study on the effect of Sc and Zr segregation elements on the precipitation behavior of precipitates in Mg–10Zn–5Al alloys",
      authors: "Jiang, Aoxue; You, Zhiyong; Wang, Kaiying; Han, Peide; Jin, Shuaishuai; Sun, Chunle; Li, Manlin",
      venue: "International Journal of Metalcasting, 19(6), 3759-3772 · DOI: 10.1007/s40962-025-01579-7",
      tags: ["Mg-Zn-Al", "Sc/Zr 微合金化", "析出行为"],
      link: "https://doi.org/10.1007/s40962-025-01579-7"
    },
    {
      type: "paper",
      year: 2025,
      title: "Effect of heat treatment on the phase strengthening mechanism of Mg-10Zn-5Al-0.4Zr alloy",
      authors: "You, Zhiyong; Jiang, Aoxue; Wang, Kaiying; Jin, Shuaishuai; Zhang, Yunguan; Zhang, Mengjun",
      venue: "Journal of Materials Engineering and Performance, 34(19), 21719-21729 · DOI: 10.1007/s11665-025-10904-4",
      tags: ["Mg-Zn-Al", "热处理", "共格析出"],
      link: "https://doi.org/10.1007/s11665-025-10904-4"
    },
    {
      type: "paper",
      year: 2025,
      title: "Study on the precipitation strengthening mechanism of Mg–10Zn–5Al–0.2Sc alloy",
      authors: "Jiang, A. X.; You, Z. Y.; Jin, S. S.; Zhang, Y. G.; Zhang, M. J.; Wang, K. Y.",
      venue: "International Journal of Metalcasting, 19(3), 1579-1589 · DOI: 10.1007/s40962-024-01406-5",
      tags: ["Mg-Zn-Al-Sc", "析出强化", "共格界面"],
      link: "https://doi.org/10.1007/s40962-024-01406-5"
    },
    {
      type: "paper",
      year: 2025,
      title: "Unveiling the origins of elastic anisotropy and thermodynamic stability in Mg-Zn alloy strengthening phases via first principles",
      authors: "You, Zhiyong; Jin, Shuaishuai; Han, Peide; Jiang, Aoxue; Sun, Chunle",
      venue: "Scientific Reports, 15(1), 1-15 · DOI: 10.1038/s41598-025-96708-x",
      tags: ["Mg-Zn", "第一性原理", "弹性各向异性", "热力学稳定性"],
      link: "https://doi.org/10.1038/s41598-025-96708-x"
    },
    {
      type: "paper",
      year: 2025,
      title: "A first principles study of the effect of Mo on Cr-containing carbides in carbidic austempered ductile iron",
      authors: "Song, Zhenyang; You, Zhiyong; Han, Peide; Zhang, Teng; Yang, Guodong; Han, Jiamin; Li, Bing; Sun, Chunle",
      venue: "Computational Condensed Matter, 44, e01080 · DOI: 10.1016/j.cocom.2025.e01080",
      tags: ["CADI", "含 Cr 碳化物", "Mo 掺杂", "第一性原理"],
      link: "https://doi.org/10.1016/j.cocom.2025.e01080"
    },
    {
      type: "paper",
      year: 2025,
      title: "基于砂型3D打印成形工艺优化制备薄壁叶轮铸件",
      authors: "艾雨蒙; 游志勇; 刘世龙; 张笙辉; 张耀峰; 李成坤; 谭锐",
      venue: "特种铸造及有色合金, 45(2), 221-227 · DOI: 10.15980/j.tzzz.T20240194",
      tags: ["砂型 3D 打印", "响应面法", "低压铸造"],
      link: "https://doi.org/10.15980/j.tzzz.T20240194"
    },
    {
      type: "paper",
      year: 2025,
      title: "Mn合金化及超高温热处理对CADI磨球组织和性能影响",
      authors: "牛城毅; 游志勇; 蒋傲雪; 张腾; 张明宝",
      venue: "特种铸造及有色合金, 45(2), 305-309 · DOI: 10.15980/j.tzzz.T20240079",
      tags: ["CADI 磨球", "Mn 合金化", "超高温热处理"],
      link: "https://doi.org/10.15980/j.tzzz.T20240079"
    },
    {
      type: "paper",
      year: 2025,
      title: "P含量对复合变质过共晶Al-Si-Cu-Mg组织和性能影响",
      authors: "张云冠; 游志勇; 张梦军; 蒋傲雪; 郭铁虎",
      venue: "特种铸造及有色合金, 45(3), 434-439 · DOI: 10.15980/j.tzzz.T20240038",
      tags: ["过共晶 Al-Si 合金", "复合变质", "P 含量"],
      link: "https://doi.org/10.15980/j.tzzz.T20240038"
    },
    {
      type: "paper",
      year: 2025,
      title: "SiC颗粒促进球墨铸铁珠光体中Fe3C异质形核机理及其力学性能研究",
      authors: "张腾; 游志勇; 韩培德; 宋振洋; 韩嘉敏",
      venue: "铸造, 74(10), 1321-1328",
      tags: ["球墨铸铁", "SiC 颗粒", "异质形核"],
      link: ""
    },
    {
      type: "paper",
      year: 2025,
      title: "复合析出相协同优化Mg-Zn-Cu合金热物理性能的机制研究",
      authors: "孙春乐; 游志勇; 蒋傲雪; 王磊; 黄伦豪; 李满林; 韩培德",
      venue: "铸造设备与工艺, (5), 57-63 · DOI: 10.16666/j.cnki.issn1004-6178.2025.05.012",
      tags: ["Mg-Zn-Cu", "热物理性能", "析出相尺寸"],
      link: "https://doi.org/10.16666/j.cnki.issn1004-6178.2025.05.012"
    },
    {
      type: "paper",
      year: 2025,
      title: "Mg2Ca作为增强相的第一性原理研究",
      authors: "靳帅帅; 游志勇; 蒋傲雪; 孙春乐; 王立波; 张腾; 刘世龙",
      venue: "特种铸造及有色合金, 45(1), 46-52 · DOI: 10.15980/j.tzzz.T20230489",
      tags: ["Mg2Ca", "界面能", "异质形核"],
      link: "https://doi.org/10.15980/j.tzzz.T20230489"
    },
    {
      type: "paper",
      year: 2024,
      title: "First-principles study of Y, Ca microalloyed Mg-Zn alloy",
      authors: "Jin, Shuaishuai; You, Zhiyong; Han, Peide; Jiang, Aoxue; Sun, Chunle; Han, JiaMin; Song, ZhenYang; Li, Bing",
      venue: "Materials Today Communications, 41, 110936 · DOI: 10.1016/j.mtcomm.2024.110936",
      tags: ["Mg-Zn", "Y/Ca 微合金化", "G.P. 区", "第一性原理"],
      link: "https://doi.org/10.1016/j.mtcomm.2024.110936"
    },
    {
      type: "paper",
      year: 2024,
      title: "First-principles study of the Al2Ca/Mg interface",
      authors: "Jin, Shuaishuai; You, Zhiyong; Han, Peide; Jiang, Aoxue; Sun, Chunle; Wang, Libo; Zhang, Teng; Liu, Shilong",
      venue: "Computational Materials Science, 244, 113235 · DOI: 10.1016/j.commatsci.2024.113235",
      tags: ["Al2Ca/Mg 界面", "界面能", "异质形核"],
      link: "https://doi.org/10.1016/j.commatsci.2024.113235"
    },
    {
      type: "paper",
      year: 2024,
      title: "Effects of 〈c+a〉 slip mode on microstructure evolution and compressive flow behavior of extruded dilute Mg-0.5Bi-0.5Sn-0.5Mn alloy",
      authors: "You, Zhi-yong; Cheng, Wei-li; Liu, Guo-lei; Li, Jian; Wang, Li-fei; Yu, Hui; Wang, Hong-xia; Cui, Ze-qin; Wang, Jin-hui",
      venue: "Transactions of Nonferrous Metals Society of China, 34(11), 3599-3614 · DOI: 10.1016/S1003-6326(24)66628-8",
      tags: ["Mg-Bi-Sn-Mn", "〈c+a〉滑移", "动态再结晶"],
      link: "https://doi.org/10.1016/S1003-6326(24)66628-8"
    },
    {
      type: "paper",
      year: 2024,
      title: "Study on the combined modification mechanism of P and Sr and microstructure control in hypereutectic Al–Si alloys",
      authors: "Wang, Libo; You, Zhiyong; Li, Bing; Zhang, Mengjun; Zhang, Yunguan",
      venue: "Russian Journal of Non-Ferrous Metals, 65(6), 318-327 · DOI: 10.1134/S1067821225600036",
      tags: ["过共晶 Al-Si 合金", "P/Sr 复合变质", "Sr3P2"],
      link: "https://doi.org/10.1134/S1067821225600036"
    },
    {
      type: "paper",
      year: 2024,
      title: "基于砂型3D打印技术的壳体低压铸造工艺开发与验证",
      authors: "艾雨蒙; 游志勇; 刘世龙; 张笙辉; 李成坤; 谭锐",
      venue: "铸造, 73(8), 1159-1164",
      tags: ["砂型 3D 打印", "低压铸造", "数值模拟"],
      link: ""
    },
    {
      type: "paper",
      year: 2024,
      title: "P对过共晶Al-Si合金初生Si变质机理的研究",
      authors: "张梦军; 游志勇; 李沐菲; 张云冠; 蒋傲雪; 牛晓峰",
      venue: "特种铸造及有色合金, 44(10), 1352-1357 · DOI: 10.15980/j.tzzz.2024.10.010",
      tags: ["过共晶 Al-Si 合金", "AlP 异质形核", "界面能"],
      link: "https://doi.org/10.15980/j.tzzz.2024.10.010"
    },
    {
      type: "paper",
      year: 2024,
      title: "单/双尺寸SiCp对AZ91D镁合金组织和性能的影响",
      authors: "马振星; 游志勇; 蒋傲雪; 于杰; 王彬",
      venue: "特种铸造及有色合金, 44(4), 495-499 · DOI: 10.15980/j.tzzz.2024.04.011",
      tags: ["AZ91D", "SiCp", "晶粒细化"],
      link: "https://doi.org/10.15980/j.tzzz.2024.04.011"
    },
    {
      type: "paper",
      year: 2023,
      title: "化学镀Ni-P对挤压铸造固-液复合Cu/Al双合金界面的影响",
      authors: "赵薛生; 游志勇; 刘涛; 马振星; 于杰; 王彬",
      venue: "特种铸造及有色合金, 43(2), 206-210 · DOI: 10.15980/j.tzzz.2023.02.012",
      tags: ["Cu/Al 双合金", "化学镀 Ni-P", "界面结合"],
      link: "https://doi.org/10.15980/j.tzzz.2023.02.012"
    },
    {
      type: "paper",
      year: 2023,
      title: "挤压速度对挤压铸造铝合金制动钳工艺的影响及数值模拟",
      authors: "乔岗平; 游志勇; 段状正; 赵薛生; 刘涛; 郭凌冰; 牛晓峰; 张金山",
      venue: "热加工工艺, 52(5), 71-72 · DOI: 10.14158/j.cnki.1001-3814.20210234",
      tags: ["挤压铸造", "数值模拟", "制动钳"],
      link: "https://doi.org/10.14158/j.cnki.1001-3814.20210234"
    },
    {
      type: "paper",
      year: 2023,
      title: "熔融浇注法制备可溶性盐芯的组织与性能",
      authors: "于杰; 游志勇; 蒋傲雪; 马振星; 王彬; 赵薛生; 刘涛",
      venue: "特种铸造及有色合金, 43(7), 898-902 · DOI: 10.15980/j.tzzz.2023.07.007",
      tags: ["可溶性盐芯", "熔融浇注", "抗弯强度"],
      link: "https://doi.org/10.15980/j.tzzz.2023.07.007"
    },
    {
      type: "paper",
      year: 2023,
      title: "挤压铸造参数对B390合金组织和性能的影响",
      authors: "王彬; 游志勇; 马振星; 于杰",
      venue: "特种铸造及有色合金, 43(12), 1636-1640 · DOI: 10.15980/j.tzzz.2023.012.009",
      tags: ["B390 合金", "挤压铸造", "初生 Si"],
      link: "https://doi.org/10.15980/j.tzzz.2023.012.009"
    },
    {
      type: "paper",
      year: 2023,
      title: "铝硅合金微观组织数值模拟的研究现状及发展趋势",
      authors: "张梦军; 游志勇; 张云冠; 艾雨蒙; 牛城毅; 牛晓峰",
      venue: "铸造, 72(11), 1391-1398",
      tags: ["铝硅合金", "数值模拟", "相场法", "元胞自动机"],
      link: ""
    },
    {
      type: "paper",
      year: 2022,
      title: "挤压成形及热处理对过共晶Al-15Si合金组织和性能的影响",
      authors: "刘涛; 游志勇; 赵薛生; 马振星; 于杰; 王彬",
      venue: "铸造, 71(10), 1235-1239",
      tags: ["过共晶 Al-Si 合金", "挤压铸造", "T6 热处理"],
      link: ""
    },
    {
      type: "paper",
      year: 2021,
      title: "Effects of solution and aging treatment on the microstructure and properties of semi-solid extruded SiC/AZ91D",
      authors: "蒋傲雪; 游志勇",
      venue: "稀有金属材料与工程 (Rare Metal Materials and Engineering), 50(3), 824-828 · DOI: 10.12442/j.issn.1002-185X.20200139",
      tags: ["SiC/AZ91D", "半固态挤压", "固溶时效"],
      link: "https://doi.org/10.12442/j.issn.1002-185X.20200139"
    },
    {
      type: "paper",
      year: 2021,
      title: "Effects of SiCp on microstructures of semi-solid extruded AZ91D magnesium alloys in recrystallization process",
      authors: "Jiang, Ao-xue; You, Zhi-yong; Duan, Zhuang-zheng; Qiao, Gang-ping; Zhang, Jin-shan; Guo, Ling-bing",
      venue: "China Foundry, 18(6), 565-573 · DOI: 10.1007/s41230-021-1005-y",
      tags: ["AZ91D", "SiCp", "半固态挤压", "再结晶"],
      link: "https://doi.org/10.1007/s41230-021-1005-y"
    },
    {
      type: "paper",
      year: 2021,
      title: "挤压铸造SiCp/AZ91D镁基复合材料的组织与性能",
      authors: "蒋傲雪; 游志勇; 段状正; 乔岗平; 郭凌冰; 张金山",
      venue: "特种铸造及有色合金, 41(7), 863-866 · DOI: 10.15980/j.tzzz.2021.07.014",
      tags: ["SiCp/AZ91D", "挤压铸造", "固溶时效"],
      link: "https://doi.org/10.15980/j.tzzz.2021.07.014"
    },
    {
      type: "paper",
      year: 2021,
      title: "热处理对挤压铸造SiCp/ZL101铝基复合材料组织与性能的影响",
      authors: "段状正; 游志勇; 蒋傲雪; 乔岗平; 刘涛; 赵薛生",
      venue: "特种铸造及有色合金, 41(6), 684-688 · DOI: 10.15980/j.tzzz.2021.06.005",
      tags: ["SiCp/ZL101", "挤压铸造", "固溶时效"],
      link: "https://doi.org/10.15980/j.tzzz.2021.06.005"
    },
    {
      type: "paper",
      year: 2020,
      title: "Effect of heat treatment on microstructure and properties of semi-solid squeeze casting AZ91D",
      authors: "You, Zhi-yong; Jiang, Ao-xue; Duan, Zhuang-zheng; Qiao, Gang-ping; Gao, Jing-lei; Guo, Ling-bing",
      venue: "China Foundry, 17(3), 219-226 · DOI: 10.1007/s41230-020-9103-9",
      tags: ["AZ91D", "半固态挤压铸造", "固溶时效"],
      link: "https://doi.org/10.1007/s41230-020-9103-9"
    },
    {
      type: "paper",
      year: 2020,
      title: "等通道挤压对Mg-6Zn-3Al镁合金组织和性能的影响",
      authors: "高晶磊; 游志勇; 蒋傲雪; 张拓; 张金山",
      venue: "热加工工艺, 49(7), 12-15 · DOI: 10.14158/j.cnki.1001-3814.20190295",
      tags: ["Mg-Zn-Al 合金", "等通道挤压", "阻尼性能"],
      link: "https://doi.org/10.14158/j.cnki.1001-3814.20190295"
    },
    {
      type: "paper",
      year: 2020,
      title: "T6热处理对Al+SiC预制颗粒增强ZL101/ZL101-Mg基复合材料组织和力学性能影响的研究",
      authors: "张拓; 游志勇; 司耀强; 蔡来强; 高晶磊; 张金山; 蒋傲雪",
      venue: "铸造技术, 41(2), 171-175 · DOI: 10.16410/j.issn1000-8365.2020.02.019",
      tags: ["铝基复合材料", "T6 热处理", "预制颗粒"],
      link: "https://doi.org/10.16410/j.issn1000-8365.2020.02.019"
    },
    {
      type: "paper",
      year: 2018,
      title: "热处理对SiC增强YL117复合材料组织和性能影响",
      authors: "蔡来强; 游志勇; 张拓; 司耀强; 张金山",
      venue: "太原理工大学学报, 49(1), 9-14 · DOI: 10.16355/j.cnki.issn1007-9432tyut.2018.01.002",
      tags: ["SiC 增强", "YL117", "热处理"],
      link: "https://doi.org/10.16355/j.cnki.issn1007-9432tyut.2018.01.002"
    },
    {
      type: "paper",
      year: 2017,
      title: "砂型3D打印技术对刹车盘铸造工艺的优化",
      authors: "游志勇; 张鹏; 孙战; 蔡来强; 张拓",
      venue: "中国铸造装备与技术, (2), 11-13",
      tags: ["砂型 3D 打印", "刹车盘", "铸造工艺"],
      link: ""
    },
    {
      type: "paper",
      year: 2016,
      title: "Microstructure and properties of mechanical alloying particles reinforced aluminum matrix composites prepared by semisolid stirring pouring method",
      title: "Microstructure and properties of mechanical alloying particles reinforced aluminum matrix composites prepared by semisolid stirring pouring method",
      authors: "Si, Yao-qiang; You, Zhi-yong; Zhu, Jing-xin; Cai, Lai-qiang; Zhang, Jin-shan",
      venue: "China Foundry, 13(3), 176-181 · DOI: 10.1007/s41230-016-5097-8",
      tags: ["铝基复合材料", "半固态搅拌", "机械合金化颗粒"],
      link: "https://link.springer.com/article/10.1007/s41230-016-5097-8"
    },
    {
      type: "paper",
      year: 2014,
      title: "Mg-10Sr-xCa (x=0, 0.5, 1.0, 1.5)中间合金对ZA125合金显微组织及力学性能的影响",
      authors: "李家威; 张金山; 程伟丽; 游志勇; 许春香",
      venue: "热加工工艺, 43(2), 67-69 · DOI: 10.14158/j.cnki.1001-3814.2014.02.025",
      tags: ["ZA125 合金", "Mg-Sr-Ca 中间合金", "显微组织"],
      link: "https://doi.org/10.14158/j.cnki.1001-3814.2014.02.025"
    },
    {
      type: "paper",
      year: 2014,
      title: "Effect of Pr addition on microstructure and mechanical properties of AZ61 magnesium alloy",
      authors: "You, Zhiyong; Kang, Jingjing; Zhang, Wenbo; Zhang, Jinshan",
      venue: "China Foundry, 11(2), 103-106",
      tags: ["AZ61", "稀土 Pr", "力学性能"],
      link: ""
    },
    {
      type: "paper",
      year: 2012,
      title: "The computation and comparation of the heat consumption of the equipment to produce semi-hydrated gypsum",
      authors: "You, Zhiyong; Han, Lingcui; Wei, Yinghui",
      venue: "Applied Mechanics and Materials, 182-183, 456-461",
      tags: ["热耗计算", "半水石膏", "装备"],
      link: ""
    },
    {
      type: "paper",
      year: 2012,
      title: "Effect of Cu addition on microstructure and properties of Mg-10Zn-5Al-0.1Sb high zinc magnesium alloy",
      authors: "You, Zhiyong; Zhang, Yuhua; Cheng, Weili",
      venue: "China Foundry, 9(1), 43-47",
      tags: ["Cu 添加", "高锌镁合金", "力学性能"],
      link: "http://www.foundryworld.com/uploadfile/2012031349427637.pdf"
    },
    {
      type: "paper",
      year: 2012,
      title: "Effect of Ce-rich rare earth on microstructure and mechanical properties of Mg-10Zn-5Al-0.1Sb magnesium alloy",
      authors: "You, Zhiyong; Zhang, Zhaoguang; Zhang, Jinshan",
      venue: "China Foundry, 9(2), 131-135",
      tags: ["Ce 富集稀土", "Mg-10Zn-5Al-0.1Sb", "高锌镁合金"],
      link: "http://www.foundryworld.com/uploadfile/2012053159997221.pdf"
    },
    {
      type: "paper",
      year: 2011,
      title: "低过热度浇注SiCp/Gr/ZL101复合材料组织与性能研究",
      authors: "王卓; 卫英慧; 游志勇; 侯利锋",
      venue: "稀有金属材料与工程, 40 (增刊)",
      tags: ["SiCp/Gr/ZL101", "低过热度浇注", "阻尼性能"],
      link: ""
    },
    {
      type: "paper",
      year: 2011,
      title: "基于PRO/E的十字头铸件工艺设计及数值模拟",
      authors: "游志勇; 李蔚; 马涛; 侯亚红; 王振强; 许春香; 乔慧娟",
      venue: "中国铸造装备与技术, (6), 31-33",
      tags: ["十字头铸件", "工艺设计", "数值模拟"],
      link: ""
    },
    {
      type: "paper",
      year: 2010,
      title: "稀土Gd对Zn-25Al-2.5Si组织及力学性能的影响",
      authors: "卫爱丽; 李建春; 游志勇; 梁伟",
      venue: "热加工工艺, 39(9), 31-33 · DOI: 10.14158/j.cnki.1001-3814.2010.09.010",
      tags: ["锌铝合金", "稀土 Gd", "晶粒细化"],
      link: "https://doi.org/10.14158/j.cnki.1001-3814.2010.09.010"
    },
    {
      type: "paper",
      year: 2009,
      title: "变质剂对ZA25合金耐蚀性能的影响",
      authors: "游志勇; 卫爱丽; 王保成; 卫英慧",
      venue: "太原理工大学学报, 40(5), 465-468 · DOI: 10.16355/j.cnki.issn1007-9432tyut.2009.05.005",
      tags: ["ZA25 合金", "变质剂", "耐蚀性"],
      link: "https://doi.org/10.16355/j.cnki.issn1007-9432tyut.2009.05.005"
    },
    {
      type: "paper",
      year: 2009,
      title: "Zn-Al-Si合金的断裂特性研究",
      authors: "游志勇; 赵浩峰; 李建春; 卫爱丽",
      venue: "铸造技术, 30(7), 892-895",
      tags: ["Zn-Al-Si 合金", "断裂特性", "变质处理"],
      link: ""
    },
    {
      type: "paper",
      year: 2007,
      title: "锰元素对锌基硅相复合材料性能的影响",
      authors: "游志勇; 卫爱丽; 赵浩峰",
      venue: "铸造设备研究, (2), 8-9",
      tags: ["ZA 合金", "Mn", "耐磨性"],
      link: ""
    },
    {
      type: "paper",
      year: 2005,
      title: "坚持以人为本，改进与创新高校学生思想政治教育工作",
      authors: "高航; 赵志刚; 游志勇",
      venue: "东华理工学院学报（社会科学版）, (4), 438-440",
      tags: ["思想政治教育", "以人为本", "高校育人"],
      link: ""
    },
    {
      type: "paper",
      year: 2003,
      title: "材料阻尼及ZA合金阻尼性能的研究现状",
      authors: "游志勇; 林万明; 赵浩峰",
      venue: "铸造设备研究, (3), 23-26",
      tags: ["阻尼性能", "ZA 合金", "综述"],
      link: ""
    },
    {
      type: "paper",
      year: 2003,
      title: "金属基复合材料及其发展现状",
      authors: "游志勇; 张永忠; 赵浩峰",
      venue: "山西机械, (3), 5-7",
      tags: ["金属基复合材料", "综述"],
      link: ""
    },
    {
      type: "paper",
      year: 2003,
      title: "铸造企业管理信息系统的开发",
      authors: "游志勇; 阎丽梅",
      venue: "科技情报开发与经济, (5), 219-220",
      tags: ["管理信息系统", "铸造企业", "信息化"],
      link: ""
    },
    {
      type: "paper",
      year: 2002,
      title: "浅谈高校思想政治工作网站的创建",
      authors: "游志勇",
      venue: "太原理工大学学报（社会科学版）, (4), 57-59",
      tags: ["思想政治教育", "高校育人", "网站建设"],
      link: ""
    },
    {
      type: "paper",
      year: 2002,
      title: "浅谈如何激发大学生的学习动力",
      authors: "游志勇",
      venue: "山西高等学校社会科学学报, (5), 116-117",
      tags: ["学习动机", "高校育人"],
      link: ""
    },
    {
      type: "paper",
      year: 2002,
      title: "试论铸造锌基复合材料的常温及高温性能",
      authors: "赵浩峰; 钱继锋; 刘红梅; 游志勇; 苏俊义",
      venue: "铸造设备研究, (2), 46-49",
      tags: ["锌基复合材料", "高温性能", "铸造"],
      link: ""
    },
    {
      type: "paper",
      year: 2001,
      title: "网络化对大学生思想政治教育工作的影响及对策",
      authors: "游志勇; 魏国英",
      venue: "太原理工大学学报（社会科学版）",
      tags: ["思想政治教育", "网络化", "高校育人"],
      link: ""
    }
  ],

  projects: [
    {
      type: "project",
      year: 2026,
      title: "太原理工大学轻质材料及先进成形技术院士工作站",
      nature: "科研纵向",
      level: "省部级",
      authors: "山西省院士工作站专项项目",
      venue: "2026.04 建站，35 万元，在研，核心负责人 / 项目负责人",
      tags: ["院士工作站", "轻质材料", "先进成形"],
      grade: "自然科学D类",
      category: "省级人才平台专项",
      link: ""
    },
    {
      type: "project",
      year: 2025,
      title: "锰铁合金快速凝固过程微观组织形态及力学性能的研究",
      nature: "科研横向",
      level: "其他",
      authors: "校企合作科研项目",
      venue: "2025.04—2027.04，40 万元，在研，主持",
      tags: ["快速凝固", "锰铁合金", "微观组织"],
      grade: "自然科学D类",
      category: "企业横向",
      link: ""
    },
    {
      type: "project",
      year: 2025,
      title: "一种 Cu 和 Sb 联合原位自生的组织优化镁基复合材料及其制备方法",
      nature: "科研横向",
      level: "",
      authors: "山西韶泽装备（集团）有限公司",
      venue: "2025 年起，30 万元，在研，负责人",
      tags: ["成果转化", "镁基复合材料", "横向课题"],
      grade: "自然科学D类",
      category: "科技成果转化（专利实施）",
      link: ""
    },
    {
      type: "project",
      year: 2025,
      title: "KY202314 项目密封垫片测试服务",
      nature: "科研横向",
      level: "其他",
      authors: "中核第七研究设计院有限公司",
      venue: "2025.04.23 签订，7 万元，在研，主持",
      tags: ["测试服务", "密封垫片", "横向课题"],
      grade: "自然科学D类",
      category: "企业横向（技术服务）",
      link: ""
    },
    {
      type: "project",
      year: 2025,
      title: "铸造铝锂合金及挤压成形关键技术的研发",
      nature: "科研横向",
      level: "其他",
      authors: "山西晶阵新材料科技有限公司",
      venue: "2025.08—2026.08，20 万元，在研，主持",
      tags: ["铝锂合金", "挤压成形", "横向课题"],
      grade: "自然科学D类",
      category: "企业横向",
      link: ""
    },
    {
      type: "project",
      year: 2025,
      title: "一种 SiC 颗粒增强镁基复合材料的制备方法",
      nature: "科研横向",
      level: "其他",
      authors: "晋城市鑫恒瑞铸造科技有限公司",
      venue: "2025.09—2026.09，10 万元，待执行，主持",
      tags: ["SiC 增强", "镁基复合材料", "横向课题"],
      grade: "自然科学D类",
      category: "科技成果转化（专利实施）",
      link: ""
    },
    {
      type: "project",
      year: 2024,
      title: "相变对负膨胀铝合金组织性能调控机理研究",
      nature: "科研纵向",
      level: "省部级",
      authors: "山西省科学技术厅 · 重点国别科技合作项目",
      venue: "项目号 202304041101018，2024.01—2026.12，40 万元，在研，主持",
      tags: ["负热膨胀", "铝合金", "相变调控"],
      grade: "自然科学D类",
      category: "省国际科技合作计划",
      link: ""
    },
    {
      type: "project",
      year: 2023,
      title: "高端特种铁碳合金联合实验室研发项目",
      nature: "科研横向",
      level: "其他",
      authors: "山西韶泽装备（集团）有限公司",
      venue: "2023.09—2028.09，150 万元，在研，主持",
      tags: ["横向课题", "铁碳合金", "联合实验室"],
      grade: "自然科学C类",
      category: "企业横向（自然科学）",
      link: ""
    },
    {
      type: "project",
      year: 2023,
      title: "高端装备铸件砂型 3D 打印技术开发与应用",
      nature: "科研纵向",
      level: "省部级",
      authors: "山西省科学技术厅 · 重点研发计划项目",
      venue: "项目号 2022ZDYF072，2023.01—2024.12，700 万元，完成，参与",
      tags: ["砂型 3D 打印", "高端装备", "铸造"],
      grade: "自然科学D类",
      category: "省重点研发计划（参与）",
      link: ""
    },
    {
      type: "project",
      year: 2023,
      title: "高耐磨、高强韧含碳化物等温淬火球墨铸铁（CADI）磨球组织及性能调控关键技术的研发",
      nature: "科研纵向",
      level: "市厅级",
      authors: "吕梁市校地合作重点研发专项",
      venue: "2023.05—2025.04，经费需求 750 万元，已结题，主持 / 项目负责人",
      tags: ["CADI 磨球", "等温淬火", "耐磨材料"],
      grade: "自然科学D类",
      category: "地市科技计划（校地合作专项）",
      link: ""
    },
    {
      type: "project",
      year: 2022,
      title: "吕梁市变形镁合金研发应用工程技术研究中心",
      nature: "科研纵向",
      level: "市厅级",
      authors: "吕梁市科学技术局 · 平台基地建设项目",
      venue: "项目号 2021GCZX-2-9，2022.01—2023.12，124 万元，结题，主持",
      tags: ["变形镁合金", "工程技术中心", "平台建设"],
      grade: "自然科学C类",
      category: "地市科技计划（平台基地）",
      link: ""
    },
    {
      type: "project",
      year: 2021,
      title: "高性能过共晶铝硅合金组织性能调控机理及制备技术",
      nature: "科研纵向",
      level: "省部级",
      authors: "山西省科学技术厅 · 中央引导地方科技发展资金项目",
      venue: "项目号 YDZJSX2021A008，2021.08—2024.08，40 万元，已完成，主持",
      tags: ["过共晶铝硅合金", "组织调控", "制备技术"],
      grade: "自然科学D类",
      category: "省科技计划（中央引导地方资金）",
      link: ""
    },
    {
      type: "project",
      year: 2017,
      title: "原位自生准晶对高锌镁合金组织和力学性能的影响及机理研究",
      nature: "科研纵向",
      level: "其他",
      authors: "山西省镁基材料重点实验室项目",
      venue: "2017.01—2017.12，1 万元，结题，主持",
      tags: ["准晶", "高锌镁合金", "力学性能"],
      grade: "自然科学D类",
      category: "省级重点实验室基金",
      link: ""
    },
    {
      type: "project",
      year: 2016,
      title: "高锌镁合金流变轧制成形中自生准晶的形成及其对基体合金强化机理的研究",
      nature: "科研纵向",
      level: "校级",
      authors: "太原理工大学自然科学基金项目",
      venue: "2016.01—2017.12，2 万元，完成，主持",
      tags: ["流变轧制", "准晶", "强化机理"],
      grade: "自然科学D类",
      category: "校级项目",
      link: ""
    },
    {
      type: "project",
      year: 2015,
      title: "多场作用下纳米准晶与长周期结构相复合增强高强韧镁合金机理研究",
      nature: "科研纵向",
      level: "国家级",
      authors: "国家自然科学基金项目 · 51474153",
      venue: "2015.01—2018.12，83 万元，完成，参与",
      tags: ["国家自然科学基金", "纳米准晶", "高强韧镁合金"],
      grade: "自然科学C类",
      category: "国自然·面上（参与）",
      link: ""
    },
    {
      type: "project",
      year: 2020,
      title: "高端铸铁材料及新工艺的研发产学研合作",
      nature: "科研横向",
      level: "",
      authors: "交城县红龙机械制造有限公司",
      venue: "2020.05—2023.05，合同 12 万元，已结题",
      tags: ["企业横向", "横向课题"],
      grade: "自然科学D类",
      category: "企业横向",
      link: ""
    },
    {
      type: "project",
      year: 2018,
      title: "山西华翔集团股份有限公司与太原理工大学共建材料成型技术与装备研究院协议书",
      nature: "科研横向",
      level: "",
      authors: "山西华翔集团股份有限公司",
      venue: "2018.01—2020.12，合同 300 万元",
      tags: ["企业横向", "横向课题"],
      grade: "自然科学C类",
      category: "企业横向（校企共建研究院）",
      link: ""
    },
    {
      type: "project",
      year: 2020,
      title: "铝、镁、锌合金研发产学研合作协议",
      nature: "科研横向",
      level: "",
      authors: "山西鑫日升压铝件制造有限公司",
      venue: "2020.05—2023.05，合同 5.4 万元",
      tags: ["企业横向", "横向课题"],
      grade: "自然科学D类",
      category: "企业横向",
      link: ""
    },
    {
      type: "project",
      year: 2024,
      title: "轻量化院外委测试合同",
      nature: "科研横向",
      level: "",
      authors: "北京机科国创轻量化科学研究院有限公司",
      venue: "2024.07—2025.07，合同 4.8 万元",
      tags: ["企业横向", "横向课题"],
      grade: "自然科学D类",
      category: "企业横向（技术服务）",
      link: ""
    },
    {
      type: "project",
      year: 2017,
      title: "材料学院-灵石亨泰荣和金属压铸有限公司产学研合作",
      nature: "科研横向",
      level: "",
      authors: "山西灵石亨泰荣和金属压铸有限公司",
      venue: "2017.01—2019.12，合同 7.8 万元",
      tags: ["企业横向", "横向课题"],
      grade: "自然科学D类",
      category: "企业横向",
      link: ""
    },
    {
      type: "project",
      year: 2021,
      title: "山西鑫宇机械制造股份有限公司材料研发-产学研合作",
      nature: "科研横向",
      level: "",
      authors: "山西鑫宇机械制造股份有限公司",
      venue: "2021.10—2026.10，合同 10 万元",
      tags: ["企业横向", "横向课题"],
      grade: "自然科学D类",
      category: "企业横向",
      link: ""
    },
    {
      type: "project",
      year: 2021,
      title: "苏州三基铸装材料研发",
      nature: "科研横向",
      level: "",
      authors: "苏州三基铸造装备股份有限公司",
      venue: "2021.10—2021.12，合同 1 万元",
      tags: ["企业横向", "横向课题"],
      grade: "自然科学D类",
      category: "企业横向",
      link: ""
    },
    {
      type: "project",
      year: 2021,
      title: "南昌航空加工镁合金试样",
      nature: "科研横向",
      level: "",
      authors: "南昌航空大学",
      venue: "2021.11—2022.11，合同 3 万元",
      tags: ["高校委托测试", "横向课题"],
      grade: "自然科学D类",
      category: "高校委托测试",
      link: ""
    },
    {
      type: "project",
      year: 2021,
      title: "岚县经济技术开发区铸造行业现状及发展规划",
      nature: "科研横向",
      level: "",
      authors: "岚县经济技术开发区管理委员会",
      venue: "2021.11—2022.02，合同 25 万元",
      tags: ["规划咨询", "横向课题"],
      grade: "自然科学D类",
      category: "规划咨询",
      link: ""
    },
    {
      type: "project",
      year: 2022,
      title: "岚县经开区绿色低碳循环示范园咨询项目",
      nature: "科研横向",
      level: "",
      authors: "岚县经济技术开发区",
      venue: "2022.06—2022.09，合同 5.3 万元",
      tags: ["规划咨询", "横向课题"],
      grade: "自然科学D类",
      category: "规划咨询",
      link: ""
    },
    {
      type: "project",
      year: 2023,
      title: "高纯金属研发（起步阶段）",
      nature: "科研横向",
      level: "",
      authors: "宁波丹晶新材料科技有限公司",
      venue: "2023.12—2028.12，合同 0.5 万元",
      tags: ["企业横向", "横向课题"],
      grade: "自然科学D类",
      category: "企业横向",
      link: ""
    },
    {
      type: "project",
      year: 2023,
      title: "特种金属新材料研发",
      nature: "科研横向",
      level: "",
      authors: "山西大呈新材料有限公司",
      venue: "2023.03—2028.03，合同 25 万元",
      tags: ["企业横向", "横向课题"],
      grade: "自然科学D类",
      category: "企业横向",
      link: ""
    },
    {
      type: "project",
      year: 2018,
      title: "高性能石墨烯吸附材料的研究",
      nature: "科研横向",
      level: "",
      authors: "太原环清信利科贸有限公司",
      venue: "2018.12—2020.12，合同 11 万元",
      tags: ["企业横向", "横向课题"],
      grade: "自然科学D类",
      category: "企业横向",
      link: ""
    },
    {
      type: "project",
      year: 2021,
      title: "吕梁市科技特派员服务合同——游志勇",
      nature: "科研横向",
      level: "",
      authors: "太原理工大学吕梁产业技术研究院有限公司",
      venue: "2021.09—2022.09，合同 5 万元",
      tags: ["科技特派员服务", "横向课题"],
      grade: "自然科学D类",
      category: "科技特派员服务",
      link: ""
    },
    {
      type: "project",
      year: 2019,
      title: "增材制造（3D打印）教材编写",
      nature: "科研横向",
      level: "",
      authors: "北京星驰恒动科技发展有限公司",
      venue: "2019.07—2019.10，合同 56 万元",
      tags: ["教材编写", "横向课题"],
      grade: "自然科学D类",
      category: "教材编写（非科研项目）",
      link: ""
    },
    {
      type: "project",
      year: 2015,
      title: "3D打印仿真平台的设计制作",
      nature: "科研横向",
      level: "",
      authors: "太原市信自发科技开发有限公司",
      venue: "2015.03—2016.03，合同 3 万元，已结题",
      tags: ["企业横向", "横向课题"],
      grade: "自然科学D类",
      category: "企业横向",
      link: ""
    },
    {
      type: "project",
      year: 2012,
      title: "数字化智能化计算机辅助消失模铸造工艺设计系统的开发",
      nature: "科研横向",
      level: "",
      authors: "太原市信自发科技开发有限公司",
      venue: "2012.01—2013.12，合同 10.5 万元，已结题",
      tags: ["企业横向", "横向课题"],
      grade: "自然科学D类",
      category: "企业横向",
      link: ""
    },
    {
      type: "project",
      year: 2021,
      title: "产学研专项基金",
      nature: "科研横向",
      level: "",
      authors: "山西鑫宇机械制造股份有限公司",
      venue: "2021.10—2026.10，合同 10 万元",
      tags: ["企业横向", "横向课题"],
      grade: "自然科学D类",
      category: "企业横向",
      link: ""
    },
    {
      type: "project",
      year: 2021,
      title: "产学研合作项目",
      nature: "科研横向",
      level: "",
      authors: "山西通创激光先进制造有限公司",
      venue: "2021.04—2023.04，合同 9 万元",
      tags: ["企业横向", "横向课题"],
      grade: "自然科学D类",
      category: "企业横向",
      link: ""
    },
    {
      type: "project",
      year: 2019,
      title: "《一种模拟铸铁砂型铸造过程的优化预测方法》专利权转让",
      nature: "科研横向",
      level: "",
      authors: "（受让方未填）",
      venue: "2019.06—2021.06，合同 4 万元",
      tags: ["科技成果转化", "横向课题"],
      grade: "自然科学D类",
      category: "科技成果转化（专利权转让）",
      link: ""
    },
  ],

  patents: [
    {
      type: "patent",
      year: 2024,
      title: "一种 Cu 和 Sb 联合原位自生的组织优化镁基复合材料及其制备方法",
      authors: "游志勇; 张金山",
      venue: "中国发明专利 · ZL 2022 1 1327726.7（授权公告号 CN 115874099 B）· 授权 2024-01-12 · 证书号 6621058 · 专利权人：太原理工大学",
      tags: ["镁基复合材料", "原位自生", "已转化 30 万元"],
      cover: "assets/img/patents/cn-cu-sb-composite-2024.png",
      link: ""
    },
    {
      type: "patent",
      year: 2023,
      title: "PREPARATION METHOD OF MAGNESIUM MATRIX COMPOSITE REINFORCED WITH SILICON CARBIDE PARTICLES",
      authors: "You, Zhiyong; Jiang, Aoxue",
      venue: "美国发明专利 · US 11,788,172 B1 · 申请 2023-05-12（Appl. No. 18/316,300）· 授权 2023-10-17 · 专利权人：Taiyuan University of Technology",
      tags: ["SiC 颗粒", "镁基复合材料", "美国专利", "未转化"],
      cover: "assets/img/patents/us-sic-composite-2023.png",
      link: ""
    },
    {
      type: "patent",
      year: 2023,
      title: "一种高阻尼镁合金的制备方法",
      authors: "游志勇; 高晶磊; 蒋傲雪",
      venue: "中国发明专利 · ZL 2022 1 1265931.5（授权公告号 CN 115595520 B）· 授权 2023-07-25 · 证书号 6173284 · 专利权人：太原理工大学",
      tags: ["高阻尼镁合金", "制备方法", "未转化"],
      cover: "assets/img/patents/cn-high-damping-2023.png",
      link: ""
    },
    {
      type: "patent",
      year: 2023,
      title: "一种 SiC 颗粒增强镁基复合材料的制备方法",
      authors: "蒋傲雪; 游志勇; 王开鹰",
      venue: "中国发明专利 · ZL 2022 1 1188438.8（授权公告号 CN 115491568 B）· 授权 2023-03-21 · 证书号 5797906 · 专利权人：太原理工大学",
      tags: ["SiC 颗粒", "镁基复合材料", "已转化 10 万元"],
      cover: "assets/img/patents/cn-sic-composite-2023.png",
      link: ""
    },
    {
      type: "patent",
      year: 2020,
      title: "A casting copper mould for increasing the content of authigenic quasicrystal in Mg-Zn-All alloy",
      authors: "You, Zhiyong; Zhang, Tuo; Gao, Jinglei; Jiang, Aoxue; Zhang, Jinshan",
      venue: "澳大利亚创新专利 · AU 2020102491 · 申请 2020-09-29 · 授权 2020-11-04 · 专利权人：Taiyuan University of Technology",
      tags: ["Mg-Zn-Al", "准晶", "铸造铜模", "未转化"],
      cover: "assets/img/patents/au-copper-mould-2020.png",
      link: ""
    }
  ],

  books: [
    {
      type: "book",
      year: 2025,
      title: "《增材制造技术导论——原理与应用》",
      authors: "游志勇 主编",
      venue: "北京理工大学出版社，北京，2025.1",
      tags: ["增材制造", "教材", "主编"],
      cover: "assets/img/books/additive-manufacturing-introduction.jpg",
      link: ""
    },
    {
      type: "book",
      year: 2024,
      title: "《镁合金强韧化原理及技术》",
      authors: "游志勇 著",
      venue: "北京理工大学出版社，北京，2024.4",
      tags: ["镁合金", "强韧化", "专著"],
      cover: "assets/img/books/magnesium-alloy-strengthening.jpg",
      link: ""
    },
    {
      type: "book",
      year: 2020,
      title: "译著《3D 打印技术与应用》第十一章",
      authors: "参与译著",
      venue: "3D 打印技术与应用",
      tags: ["3D 打印", "译著", "增材制造"],
      link: ""
    },
    {
      type: "book",
      year: 2008,
      title: "《金属基复合材料制备及在力学环境中的作用》",
      authors: "中国科学技术出版社",
      venue: "北京，2008.12，第 250-378 页",
      tags: ["金属基复合材料", "力学环境", "专著"],
      link: ""
    }
  ],

  awards: [
    { type: "award", year: 2025, title: "第 24 届全国 27 省（市、自治区）5 市 1 地区铸造学术会议邀请报告", authors: "第 24 届全国铸造学术会议组委会、山西省机械工业学会铸造专业委员会", venue: "2025 年 3 月 23 日 · 报告题目《基于砂型 3D 打印成形工艺优化制备薄壁叶轮铸件》", tags: ["邀请报告", "学术会议", "砂型 3D 打印"], cover: "assets/img/certs/invited-talk-foundry-congress-2025.png", link: "" },
    { type: "award", year: 2025, title: "2025 中国结构材料大会邀请报告", authors: "2025 中国结构材料大会暨第十一届全国有色金属结构材料制备/加工及应用技术交流会组委会", venue: "2025 年 7 月 20 日 · 报告题目《Al2Ca/Mg 界面的第一性原理研究》", tags: ["邀请报告", "学术会议", "第一性原理"], cover: "assets/img/certs/invited-talk-structural-materials-2025.png", link: "" },
    { type: "award", year: 2025, title: "2025 年中国大学生机械工程创新创意大赛一等奖（指导教师）", authors: "中国机械工程学会", venue: "2025 年 7 月 10 日 · 铸造工艺设计赛 · 本科生组 · 作品“C件—导向连接体”", tags: ["国家级竞赛", "指导教师", "铸造工艺"], cover: "assets/img/certs/meicc-2025-first-prize.png", link: "" },
    { type: "award", year: 2025, title: "2025 年中国大学生机械工程创新创意大赛铸造工艺设计赛优秀指导教师奖", authors: "铸造工艺设计赛执行委员会、中国机械工程学会铸造分会（代章）", venue: "2025 年 7 月 · 指导太原理工大学参赛团队成绩优异", tags: ["国家级竞赛", "优秀指导教师"], cover: "assets/img/certs/meicc-2025-excellent-instructor.png", link: "" },
    { type: "award", year: 2024, title: "校“三育人”先进个人", authors: "太原理工大学", venue: "2024 年", tags: ["校级荣誉"], link: "" },
    { type: "award", year: 2024, title: "《特种铸造及有色合金》2024 年度卓越贡献编委", authors: "《特种铸造及有色合金》杂志社", venue: "2024 年度（2025 年 8 月 9 日颁授）", tags: ["期刊编委", "学术服务"], cover: "assets/img/certs/journal-editor-award-2024.png", link: "" },
    { type: "award", year: 2023, title: "吕梁市—太原理工大学企业科技特派员项目（第一期）金牌特派员", authors: "中共吕梁市委人才工作领导小组办公室", venue: "2023 年 12 月", tags: ["科技特派员", "市级荣誉", "人才项目"], cover: "assets/img/certs/lvliang-gold-commissioner-2023.png", link: "" },
    { type: "award", year: 2022, title: "校庆工作先进个人", authors: "太原理工大学", venue: "2022 年", tags: ["校级荣誉"], link: "" },
    { type: "award", year: 2021, title: "山西省机械工程学会先进个人", authors: "山西省机械工程学会", venue: "2021 年", tags: ["学会荣誉"], link: "" },
    { type: "award", year: 2020, title: "山西省铸造行业创新技术成果奖", authors: "山西省铸造行业协会、山西省机械工程学会铸造专业委员会", venue: "2020 年 10 月 · 成果：高强韧低成本新型铝/镁合金研发及半固态挤压铸造关键技术产品", tags: ["行业奖项", "半固态挤压铸造"], cover: "assets/img/certs/shanxi-foundry-award-2020.png", link: "" },
    { type: "award", year: 2019, title: "中国老科技工作者协会成立 30 周年先进个人", authors: "中国老科技工作者协会", venue: "2019 年", tags: ["协会荣誉"], link: "" },
    { type: "award", year: 2019, title: "山西省机械工程学会先进个人", authors: "山西省机械工程学会", venue: "2019 年", tags: ["学会荣誉"], link: "" },
    { type: "award", year: 2013, title: "山西省机械工程学会先进个人", authors: "山西省机械工程学会", venue: "2013 年", tags: ["学会荣誉"], link: "" },
    { type: "award", year: 2010, title: "精神文明建设先进个人", authors: "太原理工大学", venue: "2010 年", tags: ["校级荣誉"], link: "" },
    { type: "award", year: 2010, title: "校“三育人”先进工作者", authors: "太原理工大学", venue: "2010 年", tags: ["校级荣誉"], link: "" },
    { type: "award", year: 2009, title: "校优秀工会干部", authors: "太原理工大学", venue: "2009 年", tags: ["校级荣誉"], link: "" },
    { type: "award", year: 2007, title: "山西省扶贫工作先进个人", authors: "山西省", venue: "2007 年", tags: ["省级荣誉"], link: "" },
    { type: "award", year: 2006, title: "山西省优秀班主任", authors: "山西省", venue: "2006 年", tags: ["省级荣誉"], link: "" },
    { type: "award", year: 2006, title: "校优秀共产党员", authors: "太原理工大学", venue: "2006 年", tags: ["校级荣誉"], link: "" },
    { type: "award", year: 2004, title: "校优秀专职团干", authors: "太原理工大学", venue: "2004 年", tags: ["校级荣誉"], link: "" },
    { type: "award", year: 2003, title: "山西省优秀团干部", authors: "山西省", venue: "2003 年", tags: ["省级荣誉"], link: "" },
    { type: "award", year: 2002, title: "校优秀专职团干", authors: "太原理工大学", venue: "2002 年", tags: ["校级荣誉"], link: "" },
    { type: "award", year: 2001, title: "山西省优秀团干部", authors: "山西省", venue: "2001 年", tags: ["省级荣誉"], link: "" },
    { type: "award", year: 2000, title: "校优秀专职团干", authors: "太原理工大学", venue: "2000 年", tags: ["校级荣誉"], link: "" },
    { type: "award", year: 1997, title: "校优秀共产党员", authors: "太原理工大学", venue: "1997 年", tags: ["校级荣誉"], link: "" },
    { type: "award", year: 1996, title: "山西省优秀班主任", authors: "山西省", venue: "1996 年", tags: ["省级荣誉"], link: "" }
  ],

  news: [
    {
      date: "2026-08-31",
      category: "学术活动",
      title: "轻质材料及先进成形技术院士工作站首次学术研讨交流会召开",
      summary: "8 月 27 日，院士工作站首次学术研讨交流会在太原举行。工作站发起人、国内交流合作（校友工作）办公室主任游志勇介绍工作站组织架构与未来三年重点发展方向，陈蕴博院士团队与校内科研团队围绕协同攻关交流。（来源：材料科学与工程学院）",
      link: "https://cl.tyut.edu.cn/info/1048/18915.htm"
    },
    {
      date: "2026-06-05",
      category: "工作动态",
      title: "太原理工大学轻质材料及先进成形技术院士工作站正式授牌",
      summary: "6 月 3 日，在 2026 年全国科技工作者日山西主场活动中，山西省科协主席周然为院士工作站授牌，游志勇代表学校接牌。该站引进陈蕴博院士团队，聚焦轻质材料与先进成形技术。（来源：太原理工大学新闻网）",
      link: "https://www.tyut.edu.cn/info/1028/93611.htm"
    },
    {
      date: "2026-03-13",
      category: "工作动态",
      title: "国内交流合作办公室赴清华大学调研交流",
      summary: "3 月 11 日，游志勇带队赴清华校友总会开展专题调研，围绕校友工作体系建设、国内交流合作深化与教育发展基金会工作交流经验。（来源：太原理工大学新闻网）",
      link: "https://www.tyut.edu.cn/info/2372/86921.htm"
    },
    {
      date: "2025-09-08",
      category: "工作动态",
      title: "国内交流合作办公室赴武汉调研校友工作并看望校友",
      summary: "9 月 4 日，游志勇带队赴武汉，与华中科技大学校友办就校友联络体系、基金会募捐与国内合作交流座谈，并看望在汉校友。（来源：校友工作办公室）",
      link: "https://xiaoyou.tyut.edu.cn/info/1008/21076.htm"
    },
    {
      date: "2025-07-26",
      category: "工作动态",
      title: "校党委决定游志勇同志为国内交流合作办公室主任、校友工作办公室主任",
      summary: "经校党委常委会 2025 年 7 月 23 日研究决定，聘任游志勇同志为国内交流合作办公室主任、校友工作办公室主任；7 月 25 日召开干部工作会议宣布任职决定。（来源：校友工作办公室）",
      link: "https://xiaoyou.tyut.edu.cn/info/1179/20826.htm"
    },
    {
      date: "2024-08-14",
      category: "工作动态",
      title: "数学学院宣布院党委书记任命，游志勇同志不再担任",
      summary: "8 月 13 日，数学学院召开干部教师会议，校党委宣布孙莉同志任数学学院党委书记，游志勇同志不再担任该职务。（来源：数学学院）",
      link: "https://math.tyut.edu.cn/info/1052/7493.htm"
    },
    {
      date: "2026-08-07",
      category: "学术活动",
      title: "课题组师生赴香港参加 ICCES 大会",
      summary: "2026 年 8 月 7 日至 12 日，课题组师生赴香港参加 ICCES 大会，与国内外学者开展学术交流并展示课题组最新研究进展。",
      link: "exchange.html"
    },
    {
      date: "2026-09-01",
      category: "科研进展",
      title: "课题组在 Mg-Zn-Ce 合金与 Mg-Zn 金属间化合物方向发表多篇论文",
      summary: "近期，课题组围绕半固态挤压、T6 热处理、纳米共轭析出与 NEP 势函数等方向，在 Journal of Alloys and Compounds、Journal of Materials Research and Technology、Computational Condensed Matter 等期刊发表多篇论文。",
      link: "publications.html"
    },
    {
      date: "2026-04-24",
      category: "通知公告",
      title: "课题组网站全新改版上线",
      summary: "新版网站采用多页面结构与动态交互设计，系统展示研究方向、团队成员、研究成果与新闻动态。",
      link: "publications.html"
    },
    {
      date: "2025-07-26",
      category: "通知公告",
      title: "校党委决定游志勇同志为国内交流合作办公室主任、校友工作办公室主任",
      summary: "2025 年 7 月 23 日，校党委常委会研究决定，聘任游志勇同志为国内交流合作办公室主任、校友工作办公室主任。7 月 25 日，国内交流合作办公室（校友工作办公室）召开干部工作会议。",
      link: ""
    },
    {
      date: "2025-04-15",
      category: "科研进展",
      title: "课题组在 Scientific Reports 发表 Mg-Zn 合金强化相研究成果",
      summary: "论文利用第一性原理揭示 Mg-Zn 合金强化相的弹性各向异性与热力学稳定性起源。",
      link: "publications.html"
    },
    {
      date: "2025-01-10",
      category: "科研进展",
      title: "Mg-10Zn-5Al-0.4Zr 合金热处理强化机制研究发表",
      summary: "研究系统分析热处理对 Mg-10Zn-5Al-0.4Zr 合金组织与相强化机制的影响。",
      link: "publications.html"
    },
    {
      date: "2024-11-20",
      category: "科研进展",
      title: "课题组在 Transactions of Nonferrous Metals Society of China 发表论文",
      summary: "研究挤压态稀释 Mg-0.5Bi-0.5Sn-0.5Mn 合金中 (c+a) 滑移模式对组织演化与压缩流变行为的影响。",
      link: "publications.html"
    },
    {
      date: "2024-05-08",
      category: "学术活动",
      title: "《镁合金强韧化原理及技术》正式出版",
      summary: "游志勇所著《镁合金强韧化原理及技术》由北京理工大学出版社出版。",
      link: "publications.html"
    },
    {
      date: "2023-10-17",
      category: "科研进展",
      title: "美国专利 US 11788172 获得授权",
      summary: "专利涉及 SiC 颗粒增强镁基复合材料的制备方法，标志着相关技术获得国际知识产权保护。",
      link: "publications.html"
    }
  ],

  gallery: [
    {
      id: "icces-hongkong-2026",
      src: "assets/img/gallery/thumbs/icces-hongkong-2026.jpg",
      full: "assets/img/gallery/icces-hongkong-2026.jpg",
      caption: "2026 年赴香港参加 ICCES 大会",
      tag: "学术交流"
    },
    {
      id: "graduation-group-2026",
      src: "assets/img/gallery/thumbs/graduation-group-2026.jpg",
      full: "assets/img/gallery/graduation-group-2026.jpg",
      caption: "2026 届课题组研究生毕业合照",
      tag: "团队合影"
    },
    {
      id: "graduation-five-2026",
      src: "assets/img/gallery/thumbs/graduation-five-2026.jpg",
      full: "assets/img/gallery/graduation-five-2026.jpg",
      caption: "2026 届毕业研究生合影",
      tag: "毕业留念"
    },
    {
      id: "teachers-day-2026",
      src: "assets/img/gallery/thumbs/teachers-day-2026.jpg",
      full: "assets/img/gallery/teachers-day-2026.jpg",
      caption: "2026 年教师节合影",
      tag: "团队活动"
    }
  ],

  graduates: {
    intro: "游志勇教授连续指导了 2016 届至 2026 届共 24 名研究生顺利毕业。",
    list: [
      { year: 2026, name: "韩嘉敏", thesis: "", field: "" },
      { year: 2026, name: "孙春乐", thesis: "First-principles insights into the thermodynamic and mechanical behavior of the β-phase in Mg–Zn alloys: unveiling the underlying mechanisms", field: "第一性原理计算、镁合金" },
      { year: 2026, name: "李兵", thesis: "", field: "" },
      { year: 2026, name: "宋振洋", thesis: "A first principles study of the effect of Mo on Cr-containing carbides in carbidic austempered ductile iron", field: "第一性原理计算、特种铸铁" },
      { year: 2025, name: "刘世龙", thesis: "基于响应面法的 3D 打印砂型空间网格工艺优化", field: "3D 打印、砂型工艺" },
      { year: 2025, name: "王立波", thesis: "Study on the combined modification mechanism of P and Sr and microstructure control in hypereutectic Al–Si alloys", field: "铝合金复合变质" },
      { year: 2025, name: "靳帅帅", thesis: "Mg2Ca 作为增强相的第一性原理研究", field: "第一性原理计算、材料微观机理" },
      { year: 2025, name: "张腾", thesis: "SiC 颗粒促进球墨铸铁珠光体中 Fe3C 异质形核机理及其力学性能研究", field: "球墨铸铁" },
      { year: 2024, name: "张梦军", thesis: "P 对过共晶 Al-Si 合金初生 Si 变质机理的研究", field: "铝合金变质机理" },
      { year: 2024, name: "艾雨蒙", thesis: "基于砂型 3D 打印成形工艺优化制备薄壁叶轮铸件", field: "3D 打印、铸造工艺优化" },
      { year: 2024, name: "牛城毅", thesis: "Mn 合金化及超高温热处理对 CADI 磨球组织和性能影响", field: "特种铸铁（CADI）" },
      { year: 2024, name: "张云冠", thesis: "P 含量对复合变质过共晶 Al-Si-Cu-Mg 组织和性能影响", field: "铝合金变质处理" },
      { year: 2023, name: "马振星", thesis: "单/双尺寸 SiCp 对 AZ91D 镁合金组织和性能的影响", field: "镁基复合材料" },
      { year: 2023, name: "王彬", thesis: "挤压铸造参数对 B390 合金组织和性能的影响", field: "铝合金挤压铸造" },
      { year: 2023, name: "于杰", thesis: "熔融浇注法制备可溶性盐芯的组织与性能", field: "先进铸造工艺（盐芯制备）" },
      { year: 2022, name: "赵薛生", thesis: "化学镀 Ni-P 对挤压铸造固-液复合 Cu/Al 双合金界面的影响", field: "异种金属复合、界面调控" },
      { year: 2022, name: "刘涛", thesis: "挤压成形及热处理对过共晶 Al-15Si 合金组织和性能的影响", field: "铝合金挤压成形与热处理" },
      { year: 2021, name: "段状正", thesis: "热处理对挤压铸造 SiCp/ZL101 铝基复合材料组织与性能的影响", field: "铝基复合材料" },
      { year: 2021, name: "乔岗平", thesis: "挤压速度对挤压铸造铝合金制动钳工艺的影响及数值模拟", field: "挤压铸造工艺、数值模拟" },
      { year: 2020, name: "蒋傲雪", thesis: "挤压铸造 SiCp/AZ91D 镁基复合材料的组织与性能", field: "镁合金/镁基复合材料、半固态成形与析出强化" },
      { year: 2019, name: "高晶磊", thesis: "等通道挤压对 Mg-6Zn-3Al 镁合金组织和性能的影响", field: "镁合金塑性变形" },
      { year: 2018, name: "张拓", thesis: "T6 热处理对 Al+SiC 预制颗粒增强 ZL101/ZL101-Mg 基复合材料组织和力学性能影响的研究", field: "铝基复合材料" },
      { year: 2017, name: "蔡来强", thesis: "热处理对 SiC 增强 YL117 复合材料组织和性能影响", field: "铝基复合材料、热处理" },
      { year: 2016, name: "司耀强", thesis: "Microstructure and properties of mechanical alloying particles reinforced aluminum matrix composites prepared by semisolid stirring pouring method", field: "铝基复合材料" }
    ]
  },
  team: {
    pi: {
      name: "游志勇",
      role: "课题组负责人 · 副教授 · 硕士生导师 · 校党委委员 · 国内交流合作办公室主任",
      title: "工学博士 · 材料加工系",
      bio: "1995 年本科毕业留校，先后在自动化系、信息工程学院、材料科学与工程学院、离退休管理处、数学学院从事党务与管理工作；2025 年 7 月起任学校国内交流合作办公室主任、校友工作办公室主任，2021 年 9 月起任校党委委员。管理岗位之外长期坚持材料成形与强韧化方向的教学科研工作，主持国家自然科学基金、省重点研发计划等课题。",
      email: "youzhiy1486@163.com",
      phone: "",
      address: "山西省太原市 · 太原理工大学材料科学与工程学院",
      fields: [
        { label: "职称", value: "副教授（2014.08 晋升）" },
        { label: "学历 / 学位", value: "博士研究生 / 工学博士（2012.06 获学位）" },
        { label: "导师类型", value: "硕士生导师" },
        { label: "所在系所", value: "材料加工系 · 材料成型及控制工程教研室" },
        { label: "现任职务", value: "校党委委员；国内交流合作办公室主任、校友工作办公室主任" },
        { label: "学术兼职", value: "中国机械工程学会铸造分会理事等" },
        { label: "研究方向", value: "镁铝合金 · 轻质复合材料 · 球墨铸铁 · 增材制造" }
      ],
      links: [
        { label: "电子邮箱", href: "mailto:youzhiy1486@163.com" }
      ],
      career: [
        { period: "2025.07.23 — 至今", role: "国内交流合作办公室主任、校友工作办公室主任", note: "" },
        { period: "2021.09 — 至今", role: "太原理工大学党委委员", note: "兼任" },
        { period: "2024.07 — 2026.03.04", role: "材料科学与工程学院党委书记", note: "" },
        { period: "2021.04 — 2024.07", role: "数学学院党委书记", note: "" },
        { period: "2018.12 — 2021.04", role: "离退休管理处处长", note: "" },
        { period: "2016.12 — 2018.12", role: "离退休管理处副处长（主持工作）", note: "" },
        { period: "2008.01 — 2016.12", role: "离退休管理处副处长", note: "期间：2007 年赴平顺县虹梯关乡下乡扶贫，任副队长；2012.06 获博士学位；2014.08 晋升副教授" },
        { period: "2004.12 — 2008.01", role: "材料科学与工程学院党委副书记", note: "期间：2007.07 获硕士学位" },
        { period: "1998.09 — 2004.12", role: "信息工程学院团委副书记", note: "期间：2002.12 晋升讲师" },
        { period: "1995.07 — 1998.09", role: "太原工业大学自动化系政治辅导员", note: "" }
      ]
    },

    stats: [
      { value: 2, suffix: "名", label: "在读博士研究生" },
      { value: 14, suffix: "名", label: "在读硕士研究生" },
      { value: 24, suffix: "名", label: "已毕业硕士研究生" },
      { value: 4, suffix: "个", label: "主要研究方向" }
    ],
    groups: [
      {
        name: "镁合金强韧化小组",
        role: "Research Group 01",
        focus: "镁合金成分设计、第二相调控、第一性原理计算与强韧化机制。",
        members: "博士 / 硕士研究生若干"
      },
      {
        name: "轻质复合材料小组",
        role: "Research Group 02",
        focus: "颗粒增强金属基复合材料的界面、制备工艺与力学性能。",
        members: "硕士研究生若干"
      },
      {
        name: "球墨铸铁与耐磨材料小组",
        role: "Research Group 03",
        focus: "高强韧球墨铸铁组织调控、热处理工艺与耐磨性能评价。",
        members: "硕士研究生若干"
      },
      {
        name: "增材制造材料与工艺小组",
        role: "Research Group 04",
        focus: "砂型 3D 打印材料、工艺窗口与高端装备构件制造。",
        members: "博士 / 硕士研究生若干"
      }
    ]
  }
};
