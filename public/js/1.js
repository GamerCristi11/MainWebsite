//  ---MESSAGES---
console.log(`%c
   ___     _    _         
  / __|_ _(_)__| |____  _ 
 | (__| '_| (_-< |_ / || |
  \\___|_| |_/__/_/__|\\_, |
                     |__/ 
        crisLzy.xyz
`,
"color: cyan;"
);

console.log(
    "%cDo NOT paste anything here unless you understand exactly what it does.",
    "background: red; color: white; padding: 10px; font-size: 15px;"
);

console.log(
    "%cYou can use the console to navigate the website. First, type: help()",
    "background: black; color: white; padding: 10px; font-size: 15px;"
)

//  ---COMMANDS---
window.help = function () {
    console.log("Commands:");
    console.log("- about() - About Me");
    console.log("- projects() - Projects");
    console.log("- contact() - Contact Me");
    console.log("- blog() - Blog");
};

window.about = function () {
    console.log("Hi, I'm Cris(@crislzy)");
    console.log("A teen wanna-be developer from Romania who likes to mess with tech and to code.");
    console.log("Also I'm a proud HackClub member!")
    console.log("Links:");
    console.log("- GitHub: https://github.com/GamerCristi11");
    console.log("- Itch.io: https://crislzy.itch.io");
};

window.projects = function () {
    console.log("Current projects:");
    console.log("- Meow Gallery : https://meowg.code2craft.xyz");
    console.log("- The Solar System : https://solar-system.webcris.icu/");
};

window.contact = function () {
    console.log("Contact me:");
    console.log("- Email: me@crislzy.xyz");
    console.log("- Discord: https://discord.com/users/920617892444258305")
}

window.blog = function () {
    console.log("Work in progress...")
}

// ---SECRET MESSAGE :3---
window.cat = function () {
    console.log(
        "%c=^.^= - YOU JUST FOUND THE CONSOLE CAT!!!",
        "background: yellow; color: black; padding: 10px; font-size: 15px;"
    )
}

async function copyCode(id) {
    if (id == "Button1") {
        try {
            await navigator.clipboard.writeText('<a href="https://crislzy.xyz" target="_blank"><img src="https://crislzy.xyz/media/buttons/88x31.gif"></a>');
            alert("Code copied!");
        } catch (err) {
            console.error("Copy failed", err);
        }
    }
}