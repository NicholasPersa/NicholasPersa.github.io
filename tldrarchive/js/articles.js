
	function Article (title, link, weight, tags, section){
		this.title = title;
		this.link = link;
		this.weight = weight;
		this.tags = tags;
		this.section = section;
	}

	Article.prototype.getTitle = function (){
		return this.title
	};
	Article.prototype.getLink = function (){
		return this.link
	};
	Article.prototype.getWeight = function (){
		return this.weight
	};
	Article.prototype.getTags = function (){
		return this.tags
	};
	Article.prototype.getSection = function (){
		return this.section
	};
	Article.prototype.getInfo = function (){
		return [this.title, this.link, this.weight, this.tags, this.section];
	};

	var articleItems = [];

	//GAME Development
	articleItems.push(new Article("Arrowhead: Magicka","https://quip.com/4T9fAuWAeWx0",600,["development"],"games"));
	articleItems.push(new Article("M Herman: Rules","https://quip.com/7PuuA7Yl7ufc",800,["development"],"games"));
	articleItems.push(new Article("Mechanics Basics","https://quip.com/WaX1AvaGgz9K",800,["development"],"games"));
	articleItems.push(new Article("Gaming Motivations","https://quip.com/ZaytARYFbalb",900,["development"],"games"));
	articleItems.push(new Article("Player Modeling","https://quip.com/7A5BAbPJcbac",950,["development"],"games"));
	articleItems.push(new Article("Motivation & Engagement","https://quip.com/x93KAesDh0mq",950,["development"],"games"));
	articleItems.push(new Article("Designing E Learning","https://quip.com/FZAvAo8PPnLS",990,["education"],"games"));

	//Edu games
	articleItems.push(new Article("Good Question Game","https://quip.com/iUDRAFpLiDT5",750,["education"],"games"));
	articleItems.push(new Article("Learning & Gaming","https://quip.com/CICkA50GySma",900,["education"],"games"));
	articleItems.push(new Article("Activity Theory in Games","https://quip.com/lRIHAmeiA8yz",950,["education"],"games"));

	//
	////PhD//
	//
	//Development
	articleItems.push(new Article("IxD Gamification","https://quip.com/cIzzAeaSqoN0",1010,["phd-development"],"games"));
	articleItems.push(new Article("Skill Atom Framework","https://quip.com/BwhZAcjwPNps",1009,["phd-development"],"games"));
	articleItems.push(new Article("Edu Game Taxonomy","https://quip.com/o4WEAiJBQGw8",1009,["phd-development"],"games"));
	articleItems.push(new Article("Enterprise Design Cards","https://quip.com/LkV5Ap47PHH5",1005,["phd-development"],"games"));
	articleItems.push(new Article("Enterprise Game Taxonomy","https://quip.com/sTNEAbPjNQZX",1001,["phd-development"],"games"));
	articleItems.push(new Article("Player Types","https://quip.com/YbSUAIjosWYL",1005,["phd-development"],"games"));
	articleItems.push(new Article("Define Gamification","https://quip.com/AncmAl5ApFMU",1000,["phd-development"],"games"));
	articleItems.push(new Article("Instructions in Games","https://quip.com/UfaxAU8dlsEf",1000,["phd-development"],"games"));
	articleItems.push(new Article("Norton Design Case","",1010,["phd-development"],"games"));

	//Gamification (incl education)
	articleItems.push(new Article("Design: Supercharged","https://quip.com/alioAYLSX3lv",1010,["phd-education"],"games"));
	articleItems.push(new Article("GBL Frameworks","https://quip.com/HYbzAstRfd8f",1000,["phd-education"],"games"));
	articleItems.push(new Article("Game Design Learning","https://quip.com/KzolAyMm7qaL",1000,["phd-education"],"games"));
	articleItems.push(new Article("Edu gDesign Review","https://quip.com/UWUWAye5H1s4",1000,["phd-education"],"games"));
	articleItems.push(new Article("Evaluating Edu Games","https://quip.com/qVV4AjTZX50X",1000,["phd-education"],"games"));
	articleItems.push(new Article("Badge Overlays","https://quip.com/1V5IAOVqLtHX",1000,["phd-education"],"games"));
	articleItems.push(new Article("Rewards in Edu Games","https://quip.com/uaZ2AUWD47zg",1000,["phd-education"],"games"));
	articleItems.push(new Article("Gamifying Language","https://quip.com/6g53ASyfzFEN",1000,["phd-education"],"games"));
	articleItems.push(new Article("Structural Debriefing","https://quip.com/JyMpAMm0Uqa7",1000,["phd-education"],"games"));
	articleItems.push(new Article("Edu Goals in Games","https://quip.com/OYXaAzCmFpyY",1000,["phd-education"],"games"));
	articleItems.push(new Article("Gamification Maturing","https://quip.com/manEAksqfhm2",1001,["phd-education"],"games"));
	articleItems.push(new Article("Gamification Failures","https://quip.com/7UAcAWp03nmw",1001,["phd-education"],"games"));
	articleItems.push(new Article("Cultures of Play","https://quip.com/ewjsAyMYpM0F",1005,["phd-education"],"games"));
	articleItems.push(new Article("Science Discourse: AR","https://quip.com/LGXEAwayJIyo",1005,["phd-education"],"games"));
	articleItems.push(new Article("Gamification (3D Lab Questing)","https://quip.com/aSbBAgUj8MJj",1005,["phd-education"],"games"));
  articleItems.push(new Article("Games & Motivation","https://quip.com/hxZsAfVxRyfw",1010,["phd-education"],"games"));

	//Design
  articleItems.push(new Article("Eudaimonic Design","https://quip.com/0992AL9wNpHj",1010,["phd-design"],"games"));
	articleItems.push(new Article("DBR in MUVEs","https://quip.com/NuhXApqrMPbF",1000,["phd-design"],"education"));
	articleItems.push(new Article("Educational Frames","https://quip.com/YYJaAGyHk4NM",1000,["phd-design"],"education"));
	articleItems.push(new Article("Social Structuring","https://quip.com/Gj0YAt7AxR8d",1000,["phd-design"],"education"));
	articleItems.push(new Article("Design Roles","https://quip.com/KpP5AQwlS0TN",1000,["phd-design"],"education"));
	articleItems.push(new Article("DBR Literature Review","https://quip.com/KJJ9A6T4Z9cx",1000,["phd-design"],"education"));

	//Games
	articleItems.push(new Article("Man, Play & Games","https://quip.com/3bRaAXZujGpY",1000,["phd-games"],"games"));
	articleItems.push(new Article("Homo Ludens","https://quip.com/S8lGAbB8NYvx",1000,["phd-games"],"games"));
	articleItems.push(new Article("Rules of Play","https://quip.com/iHIfAuIDALhs",1010,["phd-games"],"games"));
	articleItems.push(new Article("Well Played: MTG","https://quip.com/X2eFApBbpJmX",1000,["phd-games"],"games"));
	articleItems.push(new Article("Trust Spectrum","https://quip.com/Ndb8AlN4iqRR",1010,["phd-games"],"games"));

	//Educationa and Theory
	articleItems.push(new Article("Activity Theory in Learning Tech","https://quip.com/iVMIAhEFJ21Y",1010,["phd-theory"],"AT"));

	//Teaching (assistants)
	articleItems.push(new Article("Active Learning (meta study)","https://quip.com/KO2qAxih1rfC",900,["phd-teaching"],"education"));

	//Data science
	articleItems.push(new Article("Anarchy in Sports","https://quip.com/Y1RAAkSkAQsZ",1000,["phd-data"],"data"));
  articleItems.push(new Article("Hearthstone Analytics","https://docs.google.com/document/d/1KE_95VdeMjz4kt0KzlrTI7VE9fpx0FXhKDMWnb5Y2gY/edit?usp=sharing",1010,["phd-data"],"data"));

	//methods
	articleItems.push(new Article("Multi-site Enthography","https://quip.com/VQtKAQt9ypiY",1005,["phd-method"],"method"));



	//NON PHD LABEL//
	//Core-drives
	articleItems.push(new Article("Accomplishment","https://quip.com/QhhzAai1oAe8",800,["core-drives"],"games"));
	articleItems.push(new Article("Which Way to Win","https://quip.com/pg3cAKnl4OTb",800,["core-drives"],"games"));
	articleItems.push(new Article("Chou's Techniques","https://quip.com/PapOARw86ebe",800,["core-drives"],"games"));
	articleItems.push(new Article("Epic Purpose","https://quip.com/nuFuAeH8xBLw",800,["core-drives"],"games"));
	articleItems.push(new Article("Fit Investment","https://quip.com/bLWCA3nNGjFe",800,["core-drives"],"games"));
	articleItems.push(new Article("Community","https://quip.com/i0WbAA7vsTFa",801,["core-drives"],"games"));
	articleItems.push(new Article("Rare & Shiny","https://quip.com/LdPXA0CzbjmC",800,["core-drives"],"games"));
	articleItems.push(new Article("Curios & Expectations","https://quip.com/qkzuA49NDga3",800,["core-drives"],"games"));
	articleItems.push(new Article("Value & Time","https://quip.com/H2baAhJrk5ls",800,["core-drives"],"games"));
	articleItems.push(new Article("Identity Networks","https://quip.com/xYDXA00uNx1b",801,["core-drives"],"games"));
	articleItems.push(new Article("Game Frameworks","https://quip.com/aFk0AMZfCm8a",801,["core-drives"],"games"));
	articleItems.push(new Article("Phases in Games","https://quip.com/uZ3EASv7m08b",700,["core-drives"],"games"));
	articleItems.push(new Article("Yu-kai Design Document","https://quip.com/hbT7AdIi28A9",800,["core-drives"],"games"));

	//EDUCATION Dev
	articleItems.push(new Article("TV TEC Variety","https://quip.com/ELc4AXdUJSWN",940,["design"],"education"));
	articleItems.push(new Article("TV Attrition","https://quip.com/X0adAbOTpyIr",940,["design"],"education"));
	articleItems.push(new Article("TV Motivation","https://quip.com/aOmeAYDt4aS7",940,["design"],"education"));
	articleItems.push(new Article("TV Tone Climate","https://quip.com/uBnEAD6PciuT",940,["design"],"education"));
	articleItems.push(new Article("TV Encouragement","https://quip.com/fWjlAthqaEBz",940,["design"],"education"));
	articleItems.push(new Article("TV Curiosity","https://quip.com/T51MAzif1sFY",940,["design"],"education"));
	articleItems.push(new Article("TV Variety","https://quip.com/ACObAXqK23Cs",940,["design"],"education"));
	articleItems.push(new Article("TV Autonomy","https://quip.com/n0sTAadafJq0",940,["design"],"education"));
	articleItems.push(new Article("TV Relevance","https://quip.com/ZUGyAhbd0hbf",940,["design"],"education"));
	articleItems.push(new Article("TV Interactivity","https://quip.com/4We3AWUSe95s",940,["design"],"education"));
	articleItems.push(new Article("TV Engagement","https://quip.com/0KcaAgvmJStz",940,["design"],"education"));
	articleItems.push(new Article("TV Tension","https://quip.com/uMwmAJD4OplJ",940,["design"],"education"));
	articleItems.push(new Article("TV Yield Products","https://quip.com/3oMUAZ2s2Ul0",940,["design"],"education"));
	articleItems.push(new Article("TV Supporting Change","https://quip.com/vwwKAJFa36sX",940,["design"],"education"));

	articleItems.push(new Article("Affinity Spaces","https://quip.com/YzyYAlouEKbD",900,["games"],"education"));
	articleItems.push(new Article("Co Design Innovation","https://quip.com/Hxa3AleUDHFW",800,["design"],"education"));
	articleItems.push(new Article("DBR with Hive","https://quip.com/jXcfAJox0ayu",810,["design"],"education"));
	articleItems.push(new Article("Designing Theory","https://quip.com/APlaA8Pavvl2",950,["design"],"education"));
	articleItems.push(new Article("Learning for Use","https://quip.com/66XRApttF1ZN",950,["design"],"education"));
	articleItems.push(new Article("Design Possibilities","https://quip.com/AY9DAebCqzws",800,["design"],"education"));
	articleItems.push(new Article("Progress Portfolio","https://quip.com/FsKhA46GgQ5B",950,["design"],"education"));
	articleItems.push(new Article("Learner Centered Design","https://quip.com/RLh0A62Lw7gb",950,["design"],"education"));
	articleItems.push(new Article("Design Experiments","https://quip.com/DimbAat4fnUm",955,["design"],"education"));
	articleItems.push(new Article("Usable Innovations","https://quip.com/qCidAuf0u8KC",955,["design"],"education"));
	articleItems.push(new Article("Jasper Series","https://quip.com/aAYtAhqWrW6W",855,["design"],"education"));
	articleItems.push(new Article("Doom Principles","https://quip.com/yTeJAEnOxV6G",855,["design"],"education"));
	articleItems.push(new Article("Cooperative Inquiry","https://quip.com/W3eXAZaXWmGq",950,["design"],"education"));
	articleItems.push(new Article("Mindstorms","https://quip.com/JBvqAYDLG0Ah",980,["design"],"education"));
	articleItems.push(new Article("Learning by Design","https://quip.com/av1wAS4W4FQ4",980,["design"],"education"));
	articleItems.push(new Article("Interactive Exhibits","https://quip.com/vnz3A9Ulxx1B",950,["design"],"education"));
	articleItems.push(new Article("Museum Learning","https://quip.com/M8t3Ab8aVChd",950,["design"],"education"));
	articleItems.push(new Article("Routines of Thinking","https://quip.com/zu4LAsoZZ9i5",950,["design"],"education"));
	articleItems.push(new Article("Self Learning","https://quip.com/c9UVAYK34Tya",950,["design"],"education"));
	articleItems.push(new Article("Culturally Relevant Pegagogy","https://quip.com/59GlABWb6vnC",990,["design"],"education"));
	articleItems.push(new Article("Reading Environments","https://quip.com/sCvhAhWc1rsF",950,["design"],"education"));
	articleItems.push(new Article("Goal Based Scenarios","https://quip.com/Wl15A5Id31ll",990,["design"],"education"));
	articleItems.push(new Article("Embedded Phenomena","https://quip.com/N8SuAweDLc0l",950,["design"],"education"));
	articleItems.push(new Article("MathWorlds","https://quip.com/dbzuAEThNncE",750,["design"],"education"));
	articleItems.push(new Article("Thinker Tools","https://quip.com/d0tuAoZOnsHu",800,["design"],"education"));
	articleItems.push(new Article("Understanding by Design","https://quip.com/iBTfAFq3GSrK",991,["design"],"education"));

	//BUSINESS
	articleItems.push(new Article("Y Moon: Strengths","https://quip.com/E6m1AKQ4j93x",800,["business"],"business"));
	articleItems.push(new Article("Team Composition","https://quip.com/iWE7AaCWOAVP",400,["business"],"business"));
	articleItems.push(new Article("Early Access","https://quip.com/BFa9AyasmE7Z",600,["games"],"business"));

	//DESGIN
	articleItems.push(new Article("Transparency","https://quip.com/qXCpAojvaNs4",700,["design"],"design"));
	articleItems.push(new Article("Creative Spaces","https://quip.com/svxFApDVhrkw",500,["design"],"design"));
	articleItems.push(new Article("Webfacing","https://quip.com/43rCAxkydhz9",500,["design"],"design"));
	articleItems.push(new Article("Typography General","https://quip.com/gZ5pAFe10EIn",500,["design"],"design"));
	articleItems.push(new Article("Ludwig Game Art","https://quip.com/QWw2AaVe90Kl",500,["games"],"design"));
	articleItems.push(new Article("Minimalism","https://quip.com/1J5jA63mF3VK",800,["design"],"design"));

	//UXUI
	articleItems.push(new Article("N Rosencranz: UXUI","https://quip.com/tuGHAxcuzvZB",500,["uxui"],"uxui"));
	articleItems.push(new Article("Error Experience","https://quip.com/aq7uAWHGF0gZ",500,["uxui"],"uxui"));
	articleItems.push(new Article("Usability Hertz 16","https://quip.com/hNZEAz6l3tlz",600,["uxui"],"uxui"));
	articleItems.push(new Article("Defining UXUI Hertz 10","https://quip.com/LfI9Aj5QSLGW",800,["uxui"],"uxui"));

	//Human factors
	articleItems.push(new Article("Ergonomics","https://quip.com/AzmDANCbOHLz",600,["human-factors"],"human-factors"));
	articleItems.push(new Article("Cognitive Ergonomics","https://quip.com/6qT0A3Ft2KvF",930,["human-factors"],"human-factors"));
	articleItems.push(new Article("Info Processing","https://quip.com/Dtr2AbeSXN6a",930,["human-factors"],"human-factors"));
	articleItems.push(new Article("The Empty Brain","https://quip.com/HsrLAVgQazIK",800,["human-factors"],"human-factors"));
	articleItems.push(new Article("Intuitive Expertise","https://quip.com/Vg0RAk26HLnM",900,["human-factors"],"human-factors"));
	articleItems.push(new Article("Cognitive Continuum","https://quip.com/Qi8oAvvzFE3a",850,["human-factors"],"human-factors"));
	articleItems.push(new Article("Attention Allocation","https://quip.com/GO4rA3VkYJFt",700,["human-factors"],"human-factors"));
	articleItems.push(new Article("Visual Search","https://quip.com/Srz8AZo5EZki",700,["human-factors"],"human-factors"));
	articleItems.push(new Article("Mental Workload","https://quip.com/a6wJAnwLEYba",700,["human-factors"],"human-factors"));
	articleItems.push(new Article("Crossmodal Attention","https://quip.com/wU8pAbo2REDw",700,["human-factors"],"human-factors"));
	articleItems.push(new Article("Memory in Court","https://quip.com/poYEAqTVfUOs",600,["human-factors"],"human-factors"));
	articleItems.push(new Article("Monitor Alarm Fatigue","https://quip.com/jWvUA5DZnmLH",600,["human-factors"],"human-factors"));
	articleItems.push(new Article("Workplace Design","https://quip.com/Bza1A6VMqjxk",600,["human-factors"],"human-factors"));
	articleItems.push(new Article("Surgeon Task Analysis","https://quip.com/1zVHAAbCJ0fH",200,["human-factors"],"human-factors"));
	articleItems.push(new Article("Cognitive Task Analysis","https://quip.com/deq9Ao1UI1Jx",900,["human-factors"],"human-factors"));
	articleItems.push(new Article("Crew Resource Management","https://quip.com/bssYAbPFb1ox",940,["human-factors"],"human-factors"));
	articleItems.push(new Article("Mental Workload","https://quip.com/GKeIA27Ilcnf",900,["human-factors"],"human-factors"));
	articleItems.push(new Article("Decision Support Systems","https://quip.com/oyNjAyo82mGZ",700,["human-factors"],"human-factors"));
	articleItems.push(new Article("Human Error","https://quip.com/47EQATmlmf82",700,["human-factors"],"human-factors"));
	articleItems.push(new Article("Automation","https://quip.com/xlqUAbMb78Ft",900,["human-factors"],"human-factors"));

	//PSYCHOLOGY
	articleItems.push(new Article("Memory in Design","https://quip.com/TcNoArb2Ktkp",500,["uxui"],"psychology"));
	articleItems.push(new Article("Learning by Tests","https://quip.com/zRTIAb4zLUys",600,["psychology"],"psychology"));
	//articleItems.push(new Article("Learning with Animation","https://quip.com/a7LmAyHro4bL",600,["psychology"],"psychology"));
	articleItems.push(new Article("Listen, then Talk","https://quip.com/M64BABTzXwTT",300,["psychology"],"psychology"));
	articleItems.push(new Article("Motivation Ryan 06","https://quip.com/rfhrAHPJqIsH",800,["psychology"],"psychology"));

	//SOCIOCULTURAL
	articleItems.push(new Article("Participatory Development","https://quip.com/uiYlA1wXQms9",700,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Arithmetic Development","https://quip.com/VJEmAVbv2aOW",700,["constructionism"],"sociocultural"));
	articleItems.push(new Article("Culture X Development","https://quip.com/ueM5AXQHJR7u",700,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Cultural Membership","https://quip.com/4VcEAaqvMpp1",700,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Transformative Participation","https://quip.com/tphQAtC3yehl",700,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Cultural Tools","https://quip.com/7KcpA6lWWK7S",700,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Paper","https://quip.com/M7GRAS9qcwCx",700,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Artifact Mediation","https://quip.com/PTE6Ali2BF92",700,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("ZPD Usage","https://quip.com/5dqMApte3Pca",700,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Evolving Institutions","https://quip.com/jQxCAz3A8Wez",700,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Sociocult Approach","https://quip.com/d02vAdtbLJMq",700,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Creative Collab","https://quip.com/enfdAYSxaNKb",700,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Words and Minds","https://quip.com/9iCxAhYVUtSh",700,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Capturing Change","https://quip.com/gCMpALLtod3V",800,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Classroom Dialogue","https://quip.com/16fRAgMQMqCl",800,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Dist Cognition Learning","https://quip.com/VQEgA2nyw8el",800,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Sociotechnical Systems","https://quip.com/H70WAn1cnL7c",800,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Distributed Cognition","https://quip.com/wojLARyS2qWm",800,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("POV on Activity Theory","https://quip.com/bw54Aw75tJUo",400,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Activity Systems Analysis","https://quip.com/yDauAwpInYRM",800,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Activity System Actors","https://quip.com/lcPUA89dUeVV",400,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Learning via Resistance","https://quip.com/HoxpAtbfiMkk",700,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Systems & Activity Theory","https://quip.com/ht0VAX4dLrYf",1000,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("CoP Prelude","https://quip.com/ZnY5ADRRjkNQ",690,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Practices of Meaning","https://quip.com/cCUNARLznotb",790,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Cultural Activity Theory","https://quip.com/1OMpAjyaSP7u",700,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Cognitive Apprentice","https://quip.com/dTMPAm3Zj3DJ",990,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Community Argumentation","https://quip.com/bnYvAvuEpi5H",700,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Scientific Practice","https://quip.com/nSaSAQF03qvk",700,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Cognition in Flux","https://quip.com/Iiy0ALoqW7fJ",400,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Identity & Agency","https://quip.com/kjHLAOTecvpo",550,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("PD in Figured Worlds","https://quip.com/m1B6ABHK8GsR",650,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("CHAT","https://quip.com/ZRN1A4QQweaz",850,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Race, Culture & Learning","https://quip.com/MkuwAaNGb0iv",900,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Cultural Pedagogy","https://quip.com/GXMpAfe6v8Qs",700,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Theory of CRP","https://quip.com/mzq4AsBqQUNR",900,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Justice in Math","https://quip.com/25A8A1Sx4YQj",920,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Funds of Knowledge","https://quip.com/70p7ARgwzDeo",920,["sociocultural"],"sociocultural"));

	//HCI Methodology
	articleItems.push(new Article("Evolution History HCI","https://quip.com/irGuAPC5vycR",900,["HCI"],"HCI"));
	articleItems.push(new Article("Frameworks in HCI","https://quip.com/bPe9Alul09cd",900,["HCI"],"HCI"));
	articleItems.push(new Article("HCI Research Ethics","https://quip.com/rVM3Abu2Vw56",700,["HCI"],"HCI"));
	articleItems.push(new Article("DOTCOM POV HCI","https://quip.com/3A86AzY3r6YP",700,["HCI"],"HCI"));
	articleItems.push(new Article("Unremarkable Computing","https://quip.com/Un0OAJhhrJSj",900,["HCI"],"HCI"));
	articleItems.push(new Article("21st Century","https://quip.com/83f7AhzFvsf1",820,["HCI"],"HCI"));
	articleItems.push(new Article("Methodology Matters","https://quip.com/9bbqAiCKFgq8",800,["HCI"],"HCI"));
	articleItems.push(new Article("HCI Method Primer","https://quip.com/OkMbADxripoN",800,["HCI"],"HCI"));
	articleItems.push(new Article("Building Theory","https://quip.com/xZZiA1eKsNXG",800,["HCI"],"HCI"));
	articleItems.push(new Article("Digital Trust","https://quip.com/LOEDA46jSmv1",800,["HCI"],"HCI"));
	articleItems.push(new Article("CMC Theories","https://quip.com/Bz1GAU0FVTUi",400,["HCI"],"HCI"));
	articleItems.push(new Article("MC Theories & Methods","https://quip.com/1KKeANJ96Lji",800,["HCI"],"HCI"));
	articleItems.push(new Article("Adaptive UI","https://quip.com/DIYRA7fAj3BT",800,["HCI"],"HCI"));
	articleItems.push(new Article("Blind Interaction","https://quip.com/HS4kAHVXpTDQ",800,["HCI"],"HCI"));
	articleItems.push(new Article("Ethnography","https://quip.com/lT9eAb0fbyjf",800,["HCI"],"HCI"));
	articleItems.push(new Article("Accessibility Guidelines","https://quip.com/zhU1AubnJ8ZK",650,["HCI"],"HCI"));
	articleItems.push(new Article("Groupware Implementation","https://quip.com/nZlhAUBrbZ10",800,["HCI"],"HCI"));
	articleItems.push(new Article("Groupware Dynamics","https://quip.com/yEKNADkaaqRu",800,["HCI"],"HCI"));
	articleItems.push(new Article("Robot Coworkers","https://quip.com/153BAfrWAAef",810,["HCI"],"HCI"));
	articleItems.push(new Article("Ethnographic Coding","https://quip.com/XIXaAXFM5dnp",810,["HCI"],"HCI"));
	articleItems.push(new Article("Grounded Theory","https://quip.com/GKYmA6AGwggs",810,["HCI"],"HCI"));
	articleItems.push(new Article("CSCW Lite Dossier","https://quip.com/sb8KA2GkGZyN",200,["HCI"],"HCI"));
	articleItems.push(new Article("Theory in Practice","https://quip.com/T8JxASCnDVL7",800,["HCI"],"HCI"));
	articleItems.push(new Article("Graphical Representations","https://quip.com/eppjAbCHIHll",800,["HCI"],"HCI"));
	articleItems.push(new Article("Writing Fieldnotes","https://quip.com/bNAQAwfebQ9a",800,["HCI"],"HCI"));
	articleItems.push(new Article("Basic Methods HCI","https://quip.com/YSdVACOq68By",600,["HCI"],"HCI"));
	articleItems.push(new Article("Computer Based Tutoring","https://quip.com/MtYMA1thVD74",800,["HCI"],"HCI"));
	articleItems.push(new Article("Crowdsource Writing","https://quip.com/jfTbAfHbudIn",700,["HCI"],"HCI"));
	articleItems.push(new Article("Human Computation","https://quip.com/cVHJATyJkw4k",700,["HCI"],"HCI"));
	articleItems.push(new Article("Purposeful Games","https://quip.com/6TbSAPQMTrLM",700,["games"],"HCI"));
	articleItems.push(new Article("Gamify It","https://quip.com/u6AbA3Sa5xbi",850,["HCI"],"HCI"));
	articleItems.push(new Article("MMO Social Dynamics","https://quip.com/YJbjAxjYlfZt",850,["HCI"],"HCI"));
	articleItems.push(new Article("Stealth Assessment","https://quip.com/TMMPAYvLAZd2",850,["HCI"],"HCI"));
	articleItems.push(new Article("Brain Comp UI","https://quip.com/zaMPAbIwCam1",400,["HCI"],"HCI"));
	articleItems.push(new Article("Adaptive UX","https://quip.com/7T7WAK8IFdMw",700,["HCI"],"HCI"));
	articleItems.push(new Article("Physiological Computing","https://quip.com/faXfAkbVfHfh",500,["HCI"],"HCI"));
	articleItems.push(new Article("Affect in HCI","https://quip.com/SbbaAywkEOvw",500,["HCI"],"HCI"));
	articleItems.push(new Article("User Behavior Logs","https://quip.com/0TwRA4j0l7l8",500,["HCI"],"HCI"));
	articleItems.push(new Article("Memory & Visuals","https://quip.com/xeH5AznvyWZ2",700,["HCI"],"HCI"));
	articleItems.push(new Article("Animation & Mental Maps","https://quip.com/2MiQATO0vAC5",710,["HCI"],"HCI"));
	articleItems.push(new Article("Crowds MTurk","https://quip.com/f5ZiAz0OITkQ",410,["HCI"],"HCI"));
	articleItems.push(new Article("Value of Visualization","https://quip.com/5FDJATCJQZtP",410,["HCI"],"HCI"));
	articleItems.push(new Article("Visualization","https://quip.com/5FDJATCJQZtP",950,["HCI"],"HCI"));
	articleItems.push(new Article("Visualization","https://quip.com/RkL9AD7xcaip",750,["HCI"],"HCI"));
	articleItems.push(new Article("MTurk Research","https://quip.com/V3IGAFdnlAqP",500,["HCI"],"HCI"));
	articleItems.push(new Article("Survey Design","https://quip.com/e3LBAtH8sLFa",805,["HCI"],"HCI"));
	articleItems.push(new Article("Recommender Systems","https://quip.com/s4YkAYFLTPFR",690,["HCI"],"HCI"));
	articleItems.push(new Article("Technology Use Profiles","https://quip.com/mPmzA6ErdjlW",690,["HCI"],"HCI"));
	articleItems.push(new Article("User Modeling","https://quip.com/AU2fAna8biU0",800,["HCI"],"HCI"));
	articleItems.push(new Article("Media Behavior Norms","https://quip.com/gQqAAV3HIqwM",400,["HCI"],"HCI"));
	articleItems.push(new Article("Brain UI","https://quip.com/qCbTAfP8u9Eo",400,["HCI"],"HCI"));
	articleItems.push(new Article("Design Based Research","https://quip.com/Dfz0ACytzRQx",900,["HCI"],"HCI"));
	articleItems.push(new Article("Interactive Tutor Design","https://quip.com/LPJJAWKlQmtt",850,["HCI"],"HCI"));


	//Sustainable design
	articleItems.push(new Article("Socio-science Paradigm","https://quip.com/mjG7Ao9bFpfo",600,["Systems-Thinking"],"Systems-Thinking"));
	articleItems.push(new Article("Systematic Revolution","https://quip.com/aaT3ABjwH4Z3",600,["Systems-Thinking"],"Systems-Thinking"));
	articleItems.push(new Article("The Mechanicals","https://quip.com/pRMGAVNK4oYH",600,["Systems-Thinking"],"Systems-Thinking"));
	articleItems.push(new Article("Systems Thinking","https://quip.com/E7RIAcxqNvX4",600,["Systems-Thinking"],"Systems-Thinking"));
	articleItems.push(new Article("Systems View of Life","https://quip.com/MbaGAjl5WDnj",600,["Systems-Thinking"],"Systems-Thinking"));
	articleItems.push(new Article("Disorder & Complexity","https://quip.com/5vixA4CFXzbK",800,["Systems-Thinking"],"Systems-Thinking"));
	articleItems.push(new Article("Biologic Evolution","https://quip.com/FrD9A4m9bFkH",600,["Systems-Thinking"],"Systems-Thinking"));
	articleItems.push(new Article("Earth: Origin Story","https://quip.com/80TfAfZzgJCr",600,["Systems-Thinking"],"Systems-Thinking"));
	articleItems.push(new Article("Human Adventure","https://quip.com/CweTAkqm2Uei",400,["Systems-Thinking"],"Systems-Thinking"));
	articleItems.push(new Article("Mind & Being","https://quip.com/1P4PAhVN59Mh",400,["Systems-Thinking"],"Systems-Thinking"));
	articleItems.push(new Article("Science & Spirituality","https://quip.com/bYpkAMAYaqxP",410,["Systems-Thinking"],"Systems-Thinking"));
	articleItems.push(new Article("Life, Mind & Society","https://quip.com/hUmjA3pfL9co",450,["Systems-Thinking"],"Systems-Thinking"));
	articleItems.push(new Article("Health Systems","https://quip.com/O4SIAcXjqS0F",450,["Systems-Thinking"],"Systems-Thinking"));
	articleItems.push(new Article("Ecology Systems","https://quip.com/CU4JAv9YRSXh",450,["Systems-Thinking"],"Systems-Thinking"));
	articleItems.push(new Article("Connecting Dots","https://quip.com/xKMoAGePetux",450,["Systems-Thinking"],"Systems-Thinking"));
	articleItems.push(new Article("Systematic Solutions","https://quip.com/lhErARdub0Jb",450,["Systems-Thinking"],"Systems-Thinking"));
	articleItems.push(new Article("Systems Primer","https://quip.com/ZacVAaQLORX2",900,["Systems-Thinking"],"Systems-Thinking"));
	articleItems.push(new Article("Edu Policy Systems","https://quip.com/KlJBAp5IbVPA",900,["Systems-Thinking"],"Systems-Thinking"));
	articleItems.push(new Article("Learning Systems","https://quip.com/p5GSAXqYS1lt",800,["Systems-Thinking"],"Systems-Thinking"));
	articleItems.push(new Article("Classroom Systems","https://quip.com/H755AkS6wI27",850,["Systems-Thinking"],"Systems-Thinking"));
	articleItems.push(new Article("Knowledge Profession","https://quip.com/8HtRAQrzwP6i",900,["Systems-Thinking"],"Systems-Thinking"));
	articleItems.push(new Article("Civ & Systems","https://quip.com/bmR7AvnLCXz8",800,["Systems-Thinking"],"Systems-Thinking"));


	//Informatics
	articleItems.push(new Article("Connectivism","https://quip.com/P4H3AMvqs8S5",700,["Informatics"],"Informatics"));
	articleItems.push(new Article("Quest Learning","https://quip.com/ATmLAs5U6pF4",750,["games"],"Informatics"));
	articleItems.push(new Article("MOOC Survey 14","https://quip.com/PfVXAWCqDsNe",650,["Informatics"],"Informatics"));
	articleItems.push(new Article("Open Education Resources","https://quip.com/ASiyAZlK8naN",750,["Informatics"],"Informatics"));
	articleItems.push(new Article("Design Based Research","https://quip.com/1LatAmyCxHbY",750,["Informatics"],"Informatics"));
	articleItems.push(new Article("Animation Manipulation","https://quip.com/ADETAqSqwgX4",750,["Informatics"],"Informatics"));
	articleItems.push(new Article("Notes on Digital Media","https://quip.com/wwffAFsyJDiL",750,["Informatics"],"Informatics"));
	articleItems.push(new Article("Bonk YT MOOCs","https://quip.com/g2b7A1S2DyaW",850,["Informatics"],"Informatics"));
	articleItems.push(new Article("Playable Models","https://quip.com/i8iCAp6qCDA2",850,["games"],"Informatics"));
	articleItems.push(new Article("Exploratory Learning","https://quip.com/kLHtAybNmzVR",750,["Informatics"],"Informatics"));
	articleItems.push(new Article("Game Based Environment","https://quip.com/kDJrAkOl9Oc4",750,["Informatics"],"Informatics"));
	articleItems.push(new Article("P2P Diagramming","https://quip.com/7A41A4USdFnd",750,["Informatics"],"Informatics"));
	articleItems.push(new Article("Formative Research VR","https://quip.com/04XTASppwoxo",750,["Informatics"],"Informatics"));
	articleItems.push(new Article("GBL Systems Analysis","https://quip.com/kAszAdgx2GBx",750,["games"],"Informatics"));
	articleItems.push(new Article("Problem Solving Online","https://quip.com/p2dQAb4PDIk8",800,["Informatics"],"Informatics"));
	articleItems.push(new Article("Connected Learning","https://quip.com/ZTxHAtHwdEmE",950,["Informatics"],"Informatics"));
	articleItems.push(new Article("MMO Academia","https://quip.com/pFMrAvVZvUTC",950,["Informatics"],"Informatics"));
	articleItems.push(new Article("Dissemination of KM","https://quip.com/4aJzAYuu0e65",950,["Informatics"],"Informatics"));
	articleItems.push(new Article("Emergent Innovation","https://quip.com/b5wVAdWZ3C0s",950,["Informatics"],"Informatics"));
	articleItems.push(new Article("Participatory Design","https://quip.com/CQWSA074XqEq",890,["Informatics"],"Informatics"));
	articleItems.push(new Article("Systems in Academics","https://quip.com/WF0ZAJqMtaIf",890,["Informatics"],"Informatics"));
	articleItems.push(new Article("Design System Thinkers","https://quip.com/MnRZAbRvLKgY",890,["Informatics"],"Informatics"));
	articleItems.push(new Article("Systems in Education","https://quip.com/BDWFAM6QzuWX",890,["Informatics"],"Informatics"));
	articleItems.push(new Article("Changing Systems","https://quip.com/vvJnAbYbKisL",890,["Informatics"],"Informatics"));
	articleItems.push(new Article("Knowledge Building","https://quip.com/8qp2AWOvPvMc",890,["Informatics"],"Informatics"));
	articleItems.push(new Article("Rich Connections","https://quip.com/aW4YAMx2UKJN",810,["Informatics"],"Informatics"));
	articleItems.push(new Article("Virtual Affordances","https://quip.com/2RWnAC19lrBQ",810,["Informatics"],"Informatics"));
	articleItems.push(new Article("GroupMind Tools","https://quip.com/20KCAmyqm8Pv",810,["Informatics"],"Informatics"));
	articleItems.push(new Article("Virtual Contributors","https://quip.com/xtTwAOyGOxnU",810,["Informatics"],"Informatics"));
	articleItems.push(new Article("Meta Design in VW","https://quip.com/8oKBAmAcwv9K",810,["games"],"Informatics"));
	articleItems.push(new Article("Collaborative Design","https://quip.com/c5mGAvdijRl3",810,["Informatics"],"Informatics"));
	articleItems.push(new Article("Experts & Novices","https://quip.com/pxnoA3kxzLHK",750,["Informatics"],"Informatics"));
	articleItems.push(new Article("PORTAAL Observation","https://quip.com/DQbjASMsl3i3",950,["Informatics"],"Informatics"));
	articleItems.push(new Article("Open Student Models","https://quip.com/cULKAOaQbn9c",920,["Informatics"],"Informatics"));
	articleItems.push(new Article("Open Edu Resources","https://quip.com/4G9KASDCQxT6",920,["Informatics"],"Informatics"));
	articleItems.push(new Article("Power in Feedback","https://quip.com/9VX1AguYkXHt",800,["Informatics"],"Informatics"));
	articleItems.push(new Article("Active Learning Review","https://quip.com/2duVAk0OeDRa",800,["Informatics"],"Informatics"));
	articleItems.push(new Article("Formative Feedback","https://quip.com/BYndAScur0Jc",800,["Informatics"],"Informatics"));
	articleItems.push(new Article("Active Pedagogy","https://quip.com/TvynAei2TIC8",950,["Informatics"],"Informatics"));

	//Academic tools
	articleItems.push(new Article("Dissertation Framework","https://quip.com/ahaZA9ObgDVe",700,["Academic-Tools"],"Academic-Tools"));

	//Personal Development
	articleItems.push(new Article("Rebels at Work","https://quip.com/yEk8A7l0aq4U",2000,["Personal-Development"],"Personal-Development"));
	articleItems.push(new Article("Who is Persa?","https://quip.com/IcUQA4YfFiaN",2000,["Personal-Development"],"Personal-Development"));

	//Diversity
	articleItems.push(new Article("Discovering Diversity","https://quip.com/ZvCxA7SDSBi2",810,["Diversity"],"Diversity"));
	articleItems.push(new Article("Diversity Spectrum","https://quip.com/CDT8AfoVZh36",810,["Diversity"],"Diversity"));
	articleItems.push(new Article("Speak Sister","https://quip.com/SFdJAT7zuObJ",810,["Diversity"],"Diversity"));
	articleItems.push(new Article("Feminist Theory","https://quip.com/Jlf3AzQlKFbh",910,["Diversity"],"Diversity"));
	articleItems.push(new Article("Gender in IT","https://quip.com/F2h2AbMEUJCR",800,["Diversity"],"Diversity"));
	articleItems.push(new Article("Web Ethnicity","https://quip.com/yuFZA7TYTLpw",800,["Diversity"],"Diversity"));
	articleItems.push(new Article("Ambient Belonging","https://quip.com/nRaGAN0f3ZZM",900,["Diversity"],"Diversity"));
	articleItems.push(new Article("Hawkeye initiative","https://quip.com/Bb3tA8oHXzK8",900,["Diversity"],"Diversity"));
	articleItems.push(new Article("Gender & Film","https://quip.com/jlsbA5O3DePu",900,["Diversity"],"Diversity"));
	articleItems.push(new Article("Imposter Syndrome","https://quip.com/yhCDAFaayITj",800,["Diversity"],"Diversity"));
	articleItems.push(new Article("Meritocracy","https://quip.com/UGVpAkC3fBOH",850,["Diversity"],"Diversity"));
	articleItems.push(new Article("Race in WoW","https://quip.com/lKy0AcAVo8HX",900,["Diversity"],"Diversity"));
	articleItems.push(new Article("Digital Divide","https://quip.com/1LZQAnZ8LjsR",900,["Diversity"],"Diversity"));
	articleItems.push(new Article("Technology Opportunity","https://quip.com/iXgaAH0twp5B",900,["Diversity"],"Diversity"));
	articleItems.push(new Article("Barriers in Diversity","https://quip.com/lN9AAFbYeGRc",900,["Diversity"],"Diversity"));
	articleItems.push(new Article("Empowerment","https://quip.com/QovhAbKTYFJ9",900,["Diversity"],"Diversity"));
	articleItems.push(new Article("Daughters in Tech","https://quip.com/wZUAAlvpaEUv",900,["Diversity"],"Diversity"));
	articleItems.push(new Article("Inclusiveness","https://quip.com/MQ0fAbWlxb2g",900,["Diversity"],"Diversity"));
	articleItems.push(new Article("Entry to STEM","https://quip.com/jn4bAQgah8kb",700,["Diversity"],"Diversity"));
	articleItems.push(new Article("Biased Pathways","https://quip.com/CJViAoGzPXnv",800,["Diversity"],"Diversity"));
	articleItems.push(new Article("Bias Against Women","https://quip.com/WES9ASUqMT9v",900,["Diversity"],"Diversity"));
	articleItems.push(new Article("Closed Source Software","https://quip.com/7r3DARua7TIC",905,["Diversity"],"Diversity"));
	articleItems.push(new Article("Floss & Women","https://quip.com/P1WEAL6TtBjB",905,["Diversity"],"Diversity"));
	articleItems.push(new Article("Social Barriers","https://quip.com/OjkEA0wG3aJk",900,["Diversity"],"Diversity"));
	articleItems.push(new Article("Competing Genders","https://quip.com/ktZTA9DSY5zk",900,["Diversity"],"Diversity"));
	articleItems.push(new Article("I am Women","https://quip.com/GeWPAVRARvKO",900,["Diversity"],"Diversity"));
	articleItems.push(new Article("Racism and Prejudice","https://quip.com/5huhA5exwbtA",700,["Diversity"],"Diversity"));

	//Misc research methods
	articleItems.push(new Article("AT: Heart Failure","https://quip.com/lhAsAROecgbd",760,["Methods"],"Methods"));

	//Fiction
	articleItems.push(new Article("Evicted","https://quip.com/G6RWAvQtSjbK",700,["Community"],"Books"));

	//TLDR
	articleItems.push(new Article("TLDR Archive","https://quip.com/QDiJAu9KsTa7",2000,["tldr"],"tldr"));
	articleItems.push(new Article("As We May Think","https://quip.com/EZBEAmBUMlUr",2000,["tldr"],"tldr"));
	articleItems.push(new Article("Mother of All Demos","https://quip.com/47M5A3CR4jcz",2000,["tldr"],"tldr"));
	articleItems.push(new Article("Augmenting Intellect","https://quip.com/lkZbAKCZSWql",2000,["tldr"],"tldr"));
	articleItems.push(new Article("Crowdwork Future [TLDR]","https://quip.com/eGUBApQh3oaO",2000,["tldr"],"tldr"));
	articleItems.push(new Article("Creative Communities","https://quip.com/OxGTA2ao0baI",2000,["tldr"],"tldr"));
