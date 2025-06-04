const synth = window.speechSynthesis;
const recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.continuous = false;
recognition.interimResults = false;

let micActive = false;

function speak(text) {
    const utter = new SpeechSynthesisUtterance(text);
    synth.speak(utter);
    document.getElementById("responseBox").innerText = "🤖 " + text;
}

function startListening() {
    if (!micActive) {
        micActive = true;
        recognition.start();
    }

    recognition.onresult = function(event) {
        const command = event.results[0][0].transcript.toLowerCase();
        console.log("User said:", command);
        document.getElementById("responseBox").innerText = "🗣️ You said: " + command;

        if (command.includes("hello")) {
            speak("Hello there! How can I assist you?");
        } else if (command.includes("good morning")) {
            speak("Good morning! Hope you have a great day.");
        } else if (command.includes("good night")) {
            speak("Good night! Sweet dreams.");
        } else if (command.includes("how are you")) {
            speak("I'm doing fantastic! Always ready to assist you.");
        } else if (command.includes("thank you")) {
            speak("You're welcome!");
        } else if (command.includes("what is your name")) {
            speak("I'm your personal assistant Jarvis, at your service.");
        } else if (command.includes("open youtube")) {
            speak("Opening YouTube");
            window.open("https://youtube.com", "_blank");
        } else if (command.includes("open facebook")) {
            speak("Opening Facebook");
            window.open("https://facebook.com", "_blank");
        } else if (command.includes("open google")) {
            speak("Opening Google");
            window.open("https://google.com", "_blank");
        } else if (command.includes("open whatsapp")) {
            speak("Opening WhatsApp Web");
            window.open("https://web.whatsapp.com", "_blank");
        } else if (command.includes("open tiktok")) {
            speak("Opening TikTok");
            window.open("https://tiktok.com", "_blank");
        } else if (command.includes("open chatgpt")) {
            speak("Opening ChatGPT");
            window.open("https://chat.openai.com", "_blank");
        }
        // 🆕 Custom Commands
        else if (command.includes("who created you") || command.includes("who made you")) {
            speak("Nirmal Gandher Sahib, Computer Science student.");
        } else if (command.includes("who is your boss")) {
            speak("My boss is Nirmal Gandher Sahib – always in control!");
        } else if (command.includes("where do you live")) {
            speak("I live inside the browser, but my heart is coded by Nirmal Gandher.");
        } else if (command.includes("what can you do")) {
            speak("I can talk, open websites, and assist you – all with your voice!");
        } else {
            speak("Sorry, I didn't understand that. Please try again.");
        }

        micActive = false;
    };

    recognition.onerror = function(event) {
        console.error("Recognition error:", event.error);
        speak("Microphone access denied or not supported. Please check permissions.");
        micActive = false;
    };
}