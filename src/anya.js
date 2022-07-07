const pic = {
    uniform: "https://spy-family.net/assets/img/common/header_bottomimg_3.png",
    icecream: "https://i.imgur.com/WIjWhUP.jpg",
    uniform_large: "https://spy-family.net/assets/img/top/chara_anya_1.png",
    casual_large: "https://www.kindpng.com/picc/m/138-1386981_anime-face-png-kono-dio-da-png-transparent.png",
    avatars: [],
};

for (let i = 1; i <= 40; i++) {
    pic.avatars[i] = `https://spy-family.net/assets/img/special/anya/${i
        .toString()
        .padStart(2, "0")}.png`;
}
pic.avatars.push(
    "https://spy-family.net/assets/img/special/episode4/02.png",
    "https://spy-family.net/assets/img/special/episode4/05.png",
    "https://spy-family.net/assets/img/special/episode5/01.png",
    "https://spy-family.net/assets/img/special/episode5/02.png",
    "https://spy-family.net/assets/img/special/episode6/03.png",
    "https://spy-family.net/assets/img/special/episode6/05.png",
    "https://spy-family.net/assets/img/special/episode7/01.png",
    "https://spy-family.net/assets/img/special/episode7/03.png",
    "https://spy-family.net/assets/img/special/episode7/04.png",
    "https://spy-family.net/assets/img/special/episode8/01.png",
    "https://spy-family.net/assets/img/special/episode9/04.png",
    "https://spy-family.net/assets/img/special/episode10/02.png",
    "https://spy-family.net/assets/img/special/episode10/03.png",
    "https://spy-family.net/assets/img/special/episode10/04.png",
    "https://spy-family.net/assets/img/special/episode11/01.png",
    "https://spy-family.net/assets/img/special/episode11/02.png",
    "https://spy-family.net/assets/img/special/episode11/03.png",
    "https://spy-family.net/assets/img/special/episode11/04.png",
    "https://spy-family.net/assets/img/special/episode11/06.png",
    "https://spy-family.net/assets/img/special/episode12/03.png",
    "https://spy-family.net/assets/img/special/episode12/06.png",
);

const titles = ["First-Grade Student", "Test Subject 007", "Telepath"];

const about = [
    "我的名字叫吉良吉影,33歲。住在杜王町東北部的別墅區一帶,未婚。我在龜友連鎖店服務。",
    "每天都要加班到晚上8點才能回家。我不抽煙,酒僅止於淺嚐。晚上11點睡,每天要睡足8個小時。",
    "睡前,我一定喝一杯溫牛奶,然後做20分鐘的柔軟操,上了床,馬上熟睡。", 
    "一覺到天亮，決不把疲勞和壓力留到第二天。醫生都說我很正常。",
    "",
    "This summer I went to NTNU CSIE Camp to learn how to code.",
    "During the camp, I learned how to: ",
    "  - Build SPA Website with frontend framework Vue and Tailwind.",
    "  - Develop efficiently with Node.js ecosystem.",
    "  - Design and develop a gomoku gaming agent with Python.",
    "  - Operate Linux system with common commands.",
    "  - Use Git and GitHub to work on projects.",
    "",
    'By the way, I am starring in an anime called "SPY x FAMILY". Did you watch it?',
].join("\n");

const projects = [
    {
        name: "酷酷的桌布製作",
        description: "A portfolio website for myself that I developed in NTNU CSIE Camp.\n 學到檢視可以隱藏式窗的新技能 讚讚",
        image: "https://i.imgur.com/2aXUNGy.jpg",
        skills: ["Vue", "Tailwind", "Node.js", "GitHub"],
        url: "https://github.com/anya-forger/anya-forger.github.io",
    },
    {
        name: "AI Gomoku Gaming Agent",
        description: "A gomoku gaming agent with Python that I designed in NTNU CSIE Camp.",
        image: "https://spy-family.net/assets/img/special/wall01.jpg",
        skills: ["Python", "Algorithm", "Gomoku"],
        url: "https://github.com/anya-forger",
    },
    {
        name: "SPY x FAMILY",
        description: "An anime that I starred in.",
        image: "https://spy-family.net/assets/img/special/special10_1.gif",
        skills: ["Performings"],
        url: "https://spy-family.net",
    },
];

export { pic, titles, about, projects };
