const smallCardsData = [
    {
        id: "1",
        title: "MS Word to PDF",
        img: " https://freeaiminds.com/images/FreeAIMind.png",
        icon: "open_in_new"
    },
    {
        id: "2",
        title: "MS PDF to Word",
        img: " https://freeaiminds.com/images/FreeAIMind.png",
        icon: "open_in_new"
    },
    {
        id: "3",
        title: "MS Excel to PDF",
        img: " https://freeaiminds.com/images/FreeAIMind.png",
        icon: "open_in_new"
    },
    {
        id: "4",
        title: "MS PDF to Excel",
        img: " https://freeaiminds.com/images/FreeAIMind.png",
        icon: "open_in_new"
    }
]

for (let i = 0; i < smallCardsData.length; i++) {
    const e = smallCardsData[i];
    document.getElementById("smallCard").innerHTML += `
    <article class="custom-border shadow-md overflow-hidden relative bg-zinc-500 bg-gradient-to-br from-bg-zinc-700 via-zinc-400 to-zinc-200 bg-blur-md bg-opacity-70">
        <div class="p-4 flex">
            <div class="w-1/3">
                <img src="${e.img}" alt="Image" class="w-full h-auto object-cover rounded-md">
            </div>
            <div class="flex justify-between items-center mb-2 w-full">
                <h2 class="text-xl font-bold ml-3 text-white">${e.title}</h2>
                <a target="_blank"><i class="material-icons text-white px-2 py-1 cursor-pointer">${e.icon}</i></a>
            </div>
        </div>
    </article>
    `;
}

//main card data 
const mainCardsData = [
    {
        "id": "0",
        "title": "Eleven labs - Text to speech",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://elevenlabs.io/speech-synthesis",
        "description": "Generate lifelike speech in any language and voice with the most powerful Text to Speech and Voice Cloning software."
    },
    {
        "id": "1",
        "title": "Mailmodo",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://www.mailmodo.com/",
        "description": "When writing for SEO, email marketing, or social media, you may unleash creativity and save time by using these expertly tested suggestions.\
        For instance, by allowing the AI to rapidly simplify it, you can instantly rewrite a difficult blog post in simple words. Make complex concepts understandable to everyone by breaking them down into simple terms.\
        In order to increase SEO ranking, you can also utilize AI prompts to analyze your blog post outline and find any hidden content gaps. In this way, you may simulate the services of a professional SEO agency.\
        Submit, evaluate, and review prompts in the community of active marketers. Assist peers with their insights, receive assistance from them, and add to the expansion of the AI prompt collection."
    },
    {
        "id": "2",
        "title": "Cat Bird",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://www.catbird.ai/",
        "description": "With just one cue, Catbird is an amazing multi-model image generator that allows you to let your creativity run wild. Just enter your concept, and presto! The best 17 picture models will be used to create 72 freshly created images.\
        It\'s also completely free and doesn\'t require registration, so you can begin exploring all of its endless possibilities right now.\
        Recall that the secret to reaching the stars—or a meadow full of kittens—and achieving the ideal outcomes is to be precise with your prompts. Additionally, you can ensure that every masterpiece you produce feels perfectly balanced because different models have varying resolutions.\
        "
    },
    {
        "id": "3",
        "title": "Riverside",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://riverside.fm/",
        "description": "Use Riverside\'s free audio transcription tool to transcribe audio or video files in more than 100 languages. This free transcribing service makes use of OpenAI\'s sophisticated Whisper AI tool, which has an easy-to-use interface and doesn\'t require an account. Caption videos, or transcribe lengthy audio files.\
        enough time to do a 50-minute interview in one to two minutes.\
        You can download the transcript in a variety of formats or copy it with time code markers even if it does not identify the speakers. Downloads are available in a number of formats, including an SRT file for captioning videos.\
        Please take note that uploading a custom vocabulary library is not feasible with this free program. Although transcripts are correct, it is nevertheless advised to proofread them.\
        "
    },
    {
        "id": "4",
        "title": "Content at Scale",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://contentatscale.ai/",
        "description": "Using AI-generated content reduces the possibility of Google penalizing you, thanks to this useful feature. You may quickly determine if content is authored by artificial intelligence (AI) or if it sounds more human by pasting or writing it into the detector. For the purpose of identifying information that sounds robotic, the Chat GPT detector goes beyond a simple AI classifier.\
        The exceptional accuracy of Content At Scale\'s AI content checker is a result of its training on billions of unique pages containing words and data. If your material is human-or AI-optimized, it can predict that. This free AI checker is one of the few resources that can reliably identify word strings and text produced by ChatGPT and other AI generators, even as AI-generated text becomes more prevalent.\
        A proprietary content platform is used by Content At Scale and was created"
    },
    {
        "id": "5",
        "title": "Skybox Lab",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://www.blockadelabs.com/",
        "description": "With just a few text prompts, Blockade Labs\' AI-powered Skybox Lab enables you to create breathtaking 360° virtual environments. It\'s like having an instantaneous magical paintbrush to quickly create immersive experiences. You may become a technowizard with Skybox Lab, eradicating boundaries between creativity and technology.\
        Skybox Lab\'s ease of use and its capacity to create original worlds in a matter of seconds distinguish it from rivals. Bring your most ambitious dreams to life fast and with minimal effort.\
        "
    },
    {
        "id": "6",
        "title": "PDF AI",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://pdf.ai/",
        "description": "Modify the way you work with other papers and PDFs. Talk to them!\
        Avoid poring over countless pages in search of that one elusive detail. Reach your goals more quickly by utilizing PDF.ai\'s natural language processing capabilities. It functions like a time-consuming document whispering tool.\
        Excellent for condensing research papers, contracts, business documents, and more. Get the main points of any paper quickly. So that you don\'t have to, let PDF.ai handle the effort.\
        Talk about any document: PDF.ai functions for research papers, financial reports, and legal agreements. You have never had this much access to your documents.\
        Instant responses: Use AI-powered information extraction, real-time Q&A, and summaries to sift through the clutter.\
        cited references: Each response is accompanied by credibility taken directly from the document."
    },
    {
        "id": "7",
        "title": "Safurai",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://www.safurai.com/",
        "description": "AI coding assistance that facilitates developers\' coding processes.\
        An AI-based IDE extension companion named Safuri was created to provide assistance when developing, debugging, and refactoring. Imagine having a virtual assistant who would provide you advice and solutions at every turn, facilitating and speeding up the development process.\
        Train the AI to respond with extreme precision to your project. Take use of shortcuts for asking for clarifications, improvements, or unit tests by utilizing natural-language search features for your projects.\
        Safurai is open to all users and is presently in beta. It is compatible with a number of well-known IDEs and supports all the major coding languages. includes Python, JavaScript, C#, C++, Java, and Go among the programming languages it supports."
    },
    {
        "id": "8",
        "title": "Luma AI",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://lumalabs.ai/",
        "description": "Luma AI is a ground-breaking program and service created by Palo Alto, California-based Luma Labs. Using a method called Neural Radiance Fields (NeRF), Luma AI is able to capture three-dimensional images with astonishing photo-realistic quality. High-end video games employ a similar technique called ray-tracing to produce pictures that are nearly impossible to tell apart from reality.\
        No matter your level of AI development ability or technological curiosity, Luma\'s NERF technology enables you to rapidly and effortlessly produce stunning 3D photos and films. The straightforward user interface makes it easy to get up to speed and begin exploring this sophisticated piece of software\'s features."
    },
    {
        "id": "9",
        "title": "Playground AI",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://playgroundai.com/",
        "description": "Master the art of creating and editing images like a pro, even without prior expertise.Unlock the potential to craft and enhance stunning images professionally, regardless of your background"
    },
    {
        "id": "10",
        "title": "Craiyon",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://www.craiyon.com/",
        "description": "Discover the remarkable AI-powered image creation tool, Craiyon, adept at transforming textual prompts into captivating illustrations. Leveraging the advanced training with Google TRC, it brings forth a plethora of impressive and imaginative images."
    },
    {
        "id": "11",
        "title": "AI Room Planner",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://airoomplanner.com/",
        "description": "Indulge in professionally designed rooms without straining your budget. Access an extensive collection of cost-free interior design ideas, catering to every space in your home. No restrictions, just endless inspiration to elevate your living spaces."
    },
    {
        "id": "12",
        "title": "Lexica",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://lexica.art/",
        "description": "The AI Image Stable Diffusion search engine is an advanced tool utilizing artificial intelligence to deliver smooth and precise image search results. Using cutting-edge diffusion algorithms, it ensures stable and visually coherent outcomes, enhancing the user\'s search experience like never before."
    },
    {
        "id": "13",
        "title": "House Generator",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://thishousedoesnotexist.org/generation-from-the-beach/45718642",
        "description": "This House Does Not Exist leverages latent text-to-image diffusion to create lifelike representations of modern houses. Ideal for website owners seeking royalty-free home images, this cutting-edge tool delivers a vast array of realistic visuals, enhancing the appeal of any online platform with stunning architectural depictions."
    },
    {
        "id": "14",
        "title": "Character AI",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://beta.character.ai/",
        "description": "Introducing an innovative chatbot that utilizes neural language models to simulate an intelligent conversation partner. With this interactive tool, users can initiate dialogues by crafting the first part, while the computer dynamically generates the subsequent responses, creating a seamless illusion of an engaging and thoughtful conversation"
    },
    {
        "id": "15",
        "title": "Slingshot",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://www.useslingshot.com/",
        "description": "Swag is Awesome, Managing It Sucks presents a vibrant exploration of the allure and excitement that swag brings to various aspects of life. Delve into a captivating journey of style, attitude, and self-expression, while acknowledging the challenges and complexities that come with managing and curating swag. This unique perspective offers valuable insights, tips, and anecdotes for embracing the best of both worlds - celebrating the awesomeness of swag while efficiently navigating the often tricky task of its management. Whether you\'re a trendsetter or simply seeking guidance on organizing your collection, this fascinating read is a must-have for swag enthusiasts of all kinds."
    },
    {
        "id": "16",
        "title": "ChatGPT Writer",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://chrome.google.com/webstore/detail/chatgpt-writer-write-mail/pdnenlnelpdomajfejgapbdpmjkfpjkp",
        "description": "Introducing ChatGPT Writer, a revolutionary Chrome extension that harnesses the power of artificial intelligence to effortlessly create complete emails, messages, and persuasive sales pitches on your behalf. This user-friendly tool streamlines your communication process, empowering you to craft professional and engaging content with ease, saving valuable time and effort. Say goodbye to writer\'s block and hello to efficient, AI-powered communication with ChatGPT Writer - your ultimate writing companion. Best of all, it\'s completely free!"
    },
    {
        "id": "17",
        "title": "Visily",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://www.visily.ai/",
        "description": "Discover the innovative platform of Visily, where you can access a vast collection of pre-designed templates and cutting-edge AI-based tools. Effortlessly transform images or sketches into fully customizable wireframes, streamlining your design process like never before. With Visily\'s intuitive interface and powerful features, you can bring your ideas to life in no time, empowering you to create stunning and functional wireframes with ease. Say hello to a new era of design efficiency and creativity with Visily."
    },
    {
        "id": "18",
        "title": "Fathom",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://hello.fathom.fm/",
        "description": "Discover our AI-powered iOS app for podcasts. Get tailored recommendations and highlights of favorite episodes with full transcripts and easy chapter access. Elevate your podcast experience today!"
    },
    {
        "id": "19",
        "title": "Magic Studio",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://magicstudio.com/",
        "description": "Unleash your creativity effortlessly with our feature-packed image editor! Instantly generate profile pictures with ease, explore generative image creation, and experience the magic of smart background eraser tools. Elevate your visuals in a snap!"
    },
    {
        "id": "20",
        "title": "Piggy",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://piggy.to/",
        "description": "Revolutionize your mobile social feeds with our instant content creator! Effortlessly craft unique story-style multi-image content by entering keywords and phrases. Say goodbye to content creation struggles and hello to engaging visuals in seconds!"
    },
    {
        "id": "21",
        "title": "Deep AI",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://deepai.org/machine-learning-model/text2img",
        "description": "Introducing our cutting-edge mobile content creator! Instantly generate captivating content for your social feeds with ease. Simply input keywords and phrases to create unique story-style multi-image posts. Say hello to hassle-free content creation and make your social media stand out!"
    },
    {
        "id": "22",
        "title": "Deciphr",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://www.deciphr.ai/",
        "description": "Deciphr: Free AI tool, timestamps & summarizes podcasts in <60s. End-to-end encryption ensures secure show notes & timestamps. Elevate your podcast experience now!"
    },
    {
        "id": "23",
        "title": "How to Leverage AI",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://www.howtoleverageai.com/midjourney-prompt-generator",
        "description": "Unlock boundless money-making opportunities with our expert AI guides and tutorials. Discover how to harness AI\'s potential for enhanced creativity and increased profits. Maximize your success with AI today!"
    },
    {
        "id": "24",
        "title": "AIPRM",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://www.aiprm.com/",
        "description": "AIPRM comes with curated prompts to help SEO professionals optimize their websites and boost rankings on search engines."
    },
    {
        "id": "25",
        "title": "Compose AI",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://www.compose.ai/",
        "description": "Compose AI: Free Chrome extension, AI-powered autocompletion & text generation for time-saving, automated writing. Streamline your content creation now!"
    },
    {
        "id": "26",
        "title": "Prompt Layer",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://promptlayer.com/",
        "description": "Introducing The First Platform Built for Prompt Engineers, a groundbreaking tool tailored for creative minds and engineers alike. Unleash the full potential of your writing prowess with AI-powered prompt generation, revolutionizing content creation and problem-solving. Elevate your projects and unlock limitless possibilities with this cutting-edge platform, designed to fuel innovation and streamline your creative process. Say hello to a new era of prompt engineering and watch your ideas come to life like never before!"
    },
    {
        "id": "27",
        "title": "2short AI",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://2short.ai/",
        "description": "Experience the power of 2short.ai - convert YouTube videos into captivating shorts with AI-generated captions for maximum reach and channel growth. The algorithm promotes your shorts, while AI takes care of editing, hassle-free and at no cost. Supercharge your content creation today!"
    },
    {
        "id": "28",
        "title": "Adobe Firefly",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://firefly.adobe.com/",
        "description": "Discover Adobe Firefly - the ultimate Generative AI designed for creators. Unleash your imagination and effortlessly create and edit content across diverse mediums. With Firefly, you can generate custom vectors, brushes, and textures with a few words or a simple sketch, opening up a world of creative possibilities at your fingertips. Experience content creation like never before with this versatile, creator-focused tool by Adobe."
    },
    {
        "id": "29",
        "title": "Casper AI",
        "img": " https://freeaiminds.com/images/FreeAIMind.png",
        "icon": "open_in_new",
        "link": "https://chrome.google.com/webstore/detail/casper-ai/fgfiokgecpkambjildjleljjcihnocel",
        "description": "Introducing a game-changing tool for professionals, streamlining workflows by summarizing articles, creating content, and sharing insights effortlessly with stakeholders. Unlock productivity and enhance collaboration with this powerful solution designed to revolutionize your work processes. Say goodbye to complexity and hello to seamless efficiency with our innovative tool."
    }
]

// const loadMoreBtn = document.getElementById("loadMoreBtn");
// main cards 

// for (let i = 0; i < mainCardsData.length; i++) {
//     // if (i > 7) {
//     //     loadMoreBtn.style.display = "block";
//     //     break;
//     // }
//     const e = mainCardsData[i];
//     document.getElementById("mainCards").innerHTML += `
//         <article class="rounded-lg shadow-md overflow-hidden relative bg-zinc-500 bg-gradient-to-br from-bg-zinc-700 via-zinc-400 to-zinc-200 bg-blur-md bg-opacity-70 border border-white border-opacity-30">
//             <div class="p-4">
//                 <div class="mb-4">
//                     <img src="${e.img}" alt="" class="mx-auto w-full" loading="lazy"/>
//                 </div>
//                 <div class="mb-4" style="height: 30px;">
//                     <h2 class="text-xl font-semibold float-left text-white">${e.title}</h2>
//                     <a href="${e.link}"><i class="material-icons float-right cursor-pointer text-white">${e.icon}</i></a>
//                 </div>
//                 <div class="mt-4">
//                     <button onclick="showDetails('${e.title}, ${e.link}, ${e.description}, ${e.img}')"
//                         class="px-4 py-2 rounded-lg text-white font-medium hover:bg-blue-800 w-full bg-gradient-to-r from-blue-400 to-blue-800 hover:from-blue-800 hover:to-blue-400">Detail</button>
//                 </div>
//             </div>
//         </article>
//     `;
// };


// const cardsToShowInitially = 4;
// const cardsPerLoadMore = 4;

// let currentDisplayedCards = cardsToShowInitially;

// function loadMoreCards() {
//     const mainCardsContainer = document.getElementById("mainCards");

//     for (let i = currentDisplayedCards; i < currentDisplayedCards + cardsPerLoadMore; i++) {
//         if (i >= mainCardsData.length) {
//             loadMoreBtn.style.display = "none";
//             break;
//         }

//         const card = mainCardsData[i];
//         mainCardsContainer.innerHTML += `
//         <article class="rounded-lg shadow-md overflow-hidden relative bg-zinc-500 bg-gradient-to-br from-bg-zinc-700 via-zinc-400 to-zinc-200 bg-blur-md bg-opacity-70 border border-white border-opacity-30">
//             <div class="p-4">
//                 <div class="mb-4">
//                     <img src="${card.img}" alt="" class="mx-auto w-full" loading="lazy"/>
//                 </div>
//                 <div class="mb-4" style="height: 30px;">
//                     <h2 class="text-xl font-semibold float-left text-white">${card.title}</h2>
//                     <a href="${card.link}"><i class="material-icons float-right cursor-pointer text-white">${card.icon}</i></a>
//                 </div>
//                 <div class="mt-4">
//                     <button onclick="showDetails('${card.title}, ${card.link}, ${card.description}, ${card.img}')"
//                         class="px-4 py-2 rounded-lg text-white font-medium hover:bg-blue-800 w-full bg-gradient-to-r from-blue-400 to-blue-800 hover:from-blue-800 hover:to-blue-400">Detail</button>
//                 </div>
//             </div>
//         </article>
//         `;
//     }

//     currentDisplayedCards += cardsPerLoadMore;
// }

// const cardsPerPage = 8;
// let currentCardIndex = 0;

// function showCards() {
//     const mainCardsElement = document.getElementById("mainCards");
//     const showMoreBtn = document.getElementById("showMoreBtn");

//     // Calculate the index of the last card to be displayed
//     const lastCardIndex = Math.min(currentCardIndex + cardsPerPage, mainCardsData.length);

//     // Generate and append the cards to the mainCardsElement
//     for (let i = currentCardIndex; i < lastCardIndex; i++) {
//         const e = mainCardsData[i];
//         mainCardsElement.innerHTML += `
//         <article class="rounded-lg shadow-md overflow-hidden relative bg-zinc-500 bg-gradient-to-br from-bg-zinc-700 via-zinc-400 to-zinc-200 bg-blur-md bg-opacity-70 border border-white border-opacity-30">
//         <div class="p-4">
//             <div class="mb-4">
//                 <img src="${e.img}" alt="" class="mx-auto w-full"/>
//             </div>
//             <div class="mb-4" style="height: 30px;">
//                 <h2 class="text-xl font-semibold float-left text-white">${e.title}</h2>
//                 <a href="${e.link}" target="_blank"><i class="material-icons float-right cursor-pointer text-white">${e.icon}</i></a>
//             </div>
//             <div class="mt-4">
//                 <button onclick="showDetails('${e.title}, ${e.link}, ${e.description}, ${e.img}')"
//                     class="px-4 py-2 rounded-lg text-white font-medium hover:bg-blue-800 w-full bg-gradient-to-r from-blue-400 to-blue-800 hover:from-blue-800 hover:to-blue-400">Detail</button>
//             </div>
//         </div>
//     </article>
//     `;
//     }

//     // Update the currentCardIndex for the next set of cards
//     currentCardIndex = lastCardIndex;

//     // Show or hide the "Show More" button based on remaining cards
//     if (currentCardIndex >= mainCardsData.length) {
//         showMoreBtn.style.display = "none";
//     } else {
//         showMoreBtn.style.display = "block";
//     }
// }

// function showMore() {
//     showCards();
// }

// // Attach event listener to the "Show More" button
// document.getElementById("showMoreBtn").addEventListener("click", showMore);

// // Initial call to show the first set of cards
// showCards();



function showDetails(topics) {
    //   var data = topics.split(",");
    var data = topics;
    // if (topic[0] === "Sentence Rewrite") {
    var queryParams = "?title=" + encodeURIComponent(data[0]) +
        "&link=" + encodeURIComponent('https://' + data[1]) +
        "&description=" + encodeURIComponent(data[2]) +
        "&img=" + encodeURIComponent('https://' + data[3]);

    // window.location.href = "details.html" + queryParams;

    const url = "details.html" + queryParams;
    window.open(url, "_blank");
}
