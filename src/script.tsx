const form = document.querySelector('form');
declare const grecaptcha: {
    getResponse(): string;
    captchaResponse: any
    // Diğer gerekli yöntemler buraya eklenebilir
};

if (form !== null) {
    // form değişkeni null değilse işlemleri yapabilirsiniz
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const captchaResponse = grecaptcha.getResponse();
        if (!captchaResponse.length) {
            throw new Error("Captcha not complete");
        }
    });
} else {
    console.error("Form not found");
}

export{};