const API_BASE_URL = "https://api.green-api.com";

function showResponse(data) {
    document.getElementById("response").value = JSON.stringify(data, null, 2);
}

async function getSettings() {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;

    if (!idInstance || !apiTokenInstance) {
        alert("Заполните idInstance и ApiTokenInstance");
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/waInstance${idInstance}/getSettings/${apiTokenInstance}`);
        const result = await response.json();
        showResponse(result);
    } catch (error) {
        showResponse({ error: error.message });
    }
}

async function getStateInstance() {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;

    if (!idInstance || !apiTokenInstance) {
        alert("Заполните idInstance и ApiTokenInstance");
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`);
        const result = await response.json();
        showResponse(result);
    } catch (error) {
        showResponse({ error: error.message });
    }
}

async function sendMessage() {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const message = document.getElementById("message").value;

    if (!idInstance || !apiTokenInstance || !phoneNumber || !message) {
        alert("Заполните все поля для отправки сообщения");
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chatId: `${phoneNumber}@c.us`,
                message
            })
        });
        const result = await response.json();
        showResponse(result);
    } catch (error) {
        showResponse({ error: error.message });
    }
}

async function sendFileByUrl() {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;
    const phoneNumber = document.getElementById("filePhoneNumber").value;
    const fileUrl = document.getElementById("fileUrl").value;

    if (!idInstance || !apiTokenInstance || !phoneNumber || !fileUrl) {
        alert("Заполните все поля для отправки файла");
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chatId: `${phoneNumber}@c.us`,
                urlFile: fileUrl,
                caption: "Файл отправлен через GREEN-API"
            })
        });
        const result = await response.json();
        showResponse(result);
    } catch (error) {
        showResponse({ error: error.message });
    }
}
