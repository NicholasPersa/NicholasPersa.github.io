
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

	//EDUCATION Game Dev
	articleItems.push(new Article("Good Question Game","https://quip.com/iUDRAFpLiDT5",750,["education"],"games"));

	//DESGIN
	articleItems.push(new Article("Transparency","https://quip.com/qXCpAojvaNs4",700,["design"],"design"));
	articleItems.push(new Article("Creative Spaces","https://quip.com/svxFApDVhrkw",500,["design"],"design"));
	articleItems.push(new Article("Webfacing","https://quip.com/43rCAxkydhz9",500,["design"],"design"));
	articleItems.push(new Article("Typography General","https://quip.com/gZ5pAFe10EIn",500,["design"],"design"));
	articleItems.push(new Article("Ludwig Game Art","https://quip.com/QWw2AaVe90Kl",500,["game"],"design"));
	
	//BUSINESS
	articleItems.push(new Article("Job Description","https://quip.com/JN4LADIMxLuj",1000,["games"],"business"));
	articleItems.push(new Article("Y Moon: Strengths","https://quip.com/E6m1AKQ4j93x",800,["business"],"business"));
	articleItems.push(new Article("Team Composition","https://quip.com/iWE7AaCWOAVP",400,["business"],"business"));
	articleItems.push(new Article("Early Access","https://quip.com/BFa9AyasmE7Z",600,["games"],"business"));

	//UXUI
	articleItems.push(new Article("N Rosencranz: UXUI","https://quip.com/tuGHAxcuzvZB",500,["uxui"],"uxui"));
	articleItems.push(new Article("Error Experience","https://quip.com/aq7uAWHGF0gZ",500,["uxui"],"uxui"));
	articleItems.push(new Article("Usability Hertz 16","https://quip.com/hNZEAz6l3tlz",600,["uxui"],"uxui"));
	articleItems.push(new Article("Defining UXUI Hertz 10","https://quip.com/LfI9Aj5QSLGW",800,["uxui"],"uxui"));
	
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
	articleItems.push(new Article("Systems & Activity Theory","https://quip.com/ht0VAX4dLrYf",990,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("CoP Prelude","https://quip.com/ZnY5ADRRjkNQ",690,["sociocultural"],"sociocultural"));
	articleItems.push(new Article("Practices of Meaning","https://quip.com/cCUNARLznotb",790,["sociocultural"],"sociocultural"));

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
	articleItems.push(new Article("Purposeful Games","https://quip.com/6TbSAPQMTrLM",700,["HCI"],"HCI"));
	articleItems.push(new Article("Gamify It","https://quip.com/u6AbA3Sa5xbi",850,["HCI"],"HCI"));
	articleItems.push(new Article("MMO Social Dynamics","https://quip.com/YJbjAxjYlfZt",850,["HCI"],"HCI"));
	articleItems.push(new Article("Stealth Assessment","https://quip.com/TMMPAYvLAZd2",850,["HCI"],"HCI"));


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


	//Informatics
	articleItems.push(new Article("Connectivism","https://quip.com/P4H3AMvqs8S5",700,["Informatics"],"Informatics"));
	articleItems.push(new Article("Quest Learning","https://quip.com/ATmLAs5U6pF4",750,["Informatics"],"Informatics"));
	articleItems.push(new Article("MOOC Survey 14","https://quip.com/PfVXAWCqDsNe",650,["Informatics"],"Informatics"));
	articleItems.push(new Article("Open Education Resources","https://quip.com/ASiyAZlK8naN",750,["Informatics"],"Informatics"));
	articleItems.push(new Article("Design Based Research","https://quip.com/1LatAmyCxHbY",750,["Informatics"],"Informatics"));
	articleItems.push(new Article("Animation Manipulation","https://quip.com/ADETAqSqwgX4",750,["Informatics"],"Informatics"));
	articleItems.push(new Article("Notes on Digital Media","https://quip.com/wwffAFsyJDiL",750,["Informatics"],"Informatics"));
	articleItems.push(new Article("Bonk YT MOOCs","https://quip.com/g2b7A1S2DyaW",850,["Informatics"],"Informatics"));
	articleItems.push(new Article("Playable Models","https://quip.com/i8iCAp6qCDA2",850,["Informatics"],"Informatics"));
	articleItems.push(new Article("Exploratory Learning","https://quip.com/kLHtAybNmzVR",750,["Informatics"],"Informatics"));
	articleItems.push(new Article("Game Based Environment","https://quip.com/kDJrAkOl9Oc4",750,["Informatics"],"Informatics"));
	articleItems.push(new Article("P2P Diagramming","https://quip.com/7A41A4USdFnd",750,["Informatics"],"Informatics"));
	articleItems.push(new Article("Formative Research VR","https://quip.com/04XTASppwoxo",750,["Informatics"],"Informatics"));
	articleItems.push(new Article("GBL Systems Analysis","https://quip.com/kAszAdgx2GBx",750,["Informatics"],"Informatics"));
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
	articleItems.push(new Article("Meta Design in VW","https://quip.com/8oKBAmAcwv9K",810,["Informatics"],"Informatics"));
	articleItems.push(new Article("Collaborative Design","https://quip.com/c5mGAvdijRl3",810,["Informatics"],"Informatics"));
	articleItems.push(new Article("Experts & Novices","https://quip.com/pxnoA3kxzLHK",750,["Informatics"],"Informatics"));
	articleItems.push(new Article("PORTAAL Observation","https://quip.com/DQbjASMsl3i3",950,["Informatics"],"Informatics"));

	//Academic tools
	articleItems.push(new Article("Dissertation Framework","https://quip.com/ahaZA9ObgDVe",700,["Academic-Tools"],"Academic-Tools"));

	//Community
	articleItems.push(new Article("Evicted","https://quip.com/G6RWAvQtSjbK",700,["Community"],"Community"));


	//TLDR
	articleItems.push(new Article("TLDR Archive","https://quip.com/QDiJAu9KsTa7",1000,["tldr"],"tldr"));
	articleItems.push(new Article("As We May Think","https://quip.com/EZBEAmBUMlUr",1000,["tldr"],"tldr"));
	articleItems.push(new Article("Mother of All Demos","https://quip.com/47M5A3CR4jcz",1000,["tldr"],"tldr"));
	articleItems.push(new Article("Augmenting Intellect","https://quip.com/lkZbAKCZSWql",1000,["tldr"],"tldr"));
	articleItems.push(new Article("Crowdwork Future [TLDR]","https://quip.com/eGUBApQh3oaO",1000,["tldr"],"tldr"));














