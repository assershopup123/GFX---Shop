const translations = {
    ar: {
        title: "🔥 GFX Shop",
        subtitle: "أفضل تصميمات احترافية",
        orderBtn: "اطلب الآن 🎮",
        galleryTitle: "🎨 أعمالي",
        orderTitle: "🎨 اطلب تصميمك",
        orderDesc: "املأ البيانات وسيتم إرسال الطلب",
        send: "إرسال 🚀",
        back: "رجوع",
        name: "اسمك",
        email: "إيميلك",
        discord: "Discord",
        details: "تفاصيل الطلب",
        serviceLabel: "عدد الصور المطلوبة",
        opt1: "صورة",
        opt2: "صورتين",
        opt3: "3 صور",
        opt4: "4 صور",
        paymentTitle: "طرق الدفع المتاحة",
        discordBtn: "💬 انضم لسيرفر الديسكورد"
    },
    en: {
        title: "GFX Shop",
        subtitle: "Best Professional Designs",
        orderBtn: "Order Now 🎮",
        galleryTitle: "🎨 My Works",
        orderTitle: "Order Your Design",
        orderDesc: "Fill the information and the request will be sent",
        send: "Send 🚀",
        back: "Back",
        name: "Your Name",
        email: "Your Email",
        discord: "Discord",
        details: "Order Details",
        serviceLabel: "Number of Images",
        opt1: "Image",
        opt2: "Images",
        opt3: "Images",
        opt4: "Images",
        paymentTitle: "Available Payment Methods",
        discordBtn: "💬 Join Discord Server"
    },
    fr: {
        title: "Boutique GFX",
        subtitle: "Meilleurs designs professionnels",
        orderBtn: "Commander maintenant 🎮",
        galleryTitle: "🎨 Mes travaux",
        orderTitle: "Commandez votre design",
        orderDesc: "Remplissez les informations",
        send: "Envoyer 🚀",
        back: "Retour",
        name: "Votre nom",
        email: "Votre email",
        discord: "Discord",
        details: "Détails de la commande",
        serviceLabel: "Nombre d'images",
        opt1: "image",
        opt2: "images",
        opt3: "images",
        opt4: "images",
        paymentTitle: "Méthodes de paiement",
        discordBtn: "💬 Rejoindre le serveur Discord"
    },
    es: {
        title: "Tienda GFX",
        subtitle: "Los mejores diseños profesionales",
        orderBtn: "Ordenar ahora 🎮",
        galleryTitle: "🎨 Mis trabajos",
        orderTitle: "Solicita tu diseño",
        orderDesc: "Completa los datos y se enviará la solicitud",
        send: "Enviar 🚀",
        back: "Volver",
        name: "Tu nombre",
        email: "Tu email",
        discord: "Discord",
        details: "Detalles del pedido",
        serviceLabel: "Número de imágenes",
        opt1: "Imagen",
        opt2: "Imágenes",
        opt3: "Imágenes",
        opt4: "Imágenes",
        paymentTitle: "Métodos de pago disponibles",
        discordBtn: "💬 Únete al servidor de Discord"
    },
    zh: {
        title: "GFX 商店",
        subtitle: "最佳专业设计",
        orderBtn: "立即订购 🎮",
        galleryTitle: "🎨 我的作品",
        orderTitle: "订购您的设计",
        orderDesc: "填写信息，请求将被发送",
        send: "发送 🚀",
        back: "返回",
        name: "您的姓名",
        email: "您的邮箱",
        discord: "Discord",
        details: "订单详情",
        serviceLabel: "图像数量",
        opt1: "图像",
        opt2: "图像",
        opt3: "图像",
        opt4: "图像",
        paymentTitle: "可用支付方式",
        discordBtn: "💬 加入 Discord 服务器"
    },
    ru: {
        title: "GFX Магазин",
        subtitle: "Лучшие профессиональные дизайны",
        orderBtn: "Заказать сейчас 🎮",
        galleryTitle: "🎨 Мои работы",
        orderTitle: "Закажите свой дизайн",
        orderDesc: "Заполните данные, запрос будет отправлен",
        send: "Отправить 🚀",
        back: "Назад",
        name: "Ваше имя",
        email: "Ваш email",
        discord: "Discord",
        details: "Детали заказа",
        serviceLabel: "Количество изображений",
        opt1: "Изображение",
        opt2: "Изображения",
        opt3: "Изображения",
        opt4: "Изображения",
        paymentTitle: "Доступные способы оплаты",
        discordBtn: "💬 Присоединяйтесь к Discord серверу"
    },
    de: {
        title: "GFX Shop",
        subtitle: "Beste professionelle Designs",
        orderBtn: "Jetzt bestellen 🎮",
        galleryTitle: "🎨 Meine Arbeiten",
        orderTitle: "Bestellen Sie Ihr Design",
        orderDesc: "Füllen Sie die Daten aus, die Anfrage wird gesendet",
        send: "Senden 🚀",
        back: "Zurück",
        name: "Ihr Name",
        email: "Ihre E-Mail",
        discord: "Discord",
        details: "Bestelldetails",
        serviceLabel: "Anzahl der Bilder",
        opt1: "Bild",
        opt2: "Bilder",
        opt3: "Bilder",
        opt4: "Bilder",
        paymentTitle: "Verfügbare Zahlungsmethoden",
        discordBtn: "💬 Discord Server beitreten"
    }
};

function applyLang(lang) {
    const t = translations[lang] || translations.ar;

    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.body.style.direction = (lang === 'ar') ? 'rtl' : 'ltr';
    document.body.style.textAlign = (lang === 'ar') ? 'right' : 'left';

    if (document.getElementById('title')) document.getElementById('title').textContent = t.title;
    if (document.getElementById('subtitle')) document.getElementById('subtitle').textContent = t.subtitle;
    if (document.getElementById('galleryTitle')) document.getElementById('galleryTitle').textContent = t.galleryTitle;
    if (document.getElementById('orderTitle')) document.getElementById('orderTitle').textContent = t.orderTitle;
    if (document.getElementById('orderDesc')) document.getElementById('orderDesc').textContent = t.orderDesc;
    if (document.getElementById('orderBtn')) document.getElementById('orderBtn').textContent = t.orderBtn;
    if (document.getElementById('sendBtn')) document.getElementById('sendBtn').textContent = t.send;
    if (document.getElementById('backBtn')) document.getElementById('backBtn').textContent = t.back;
    if (document.getElementById('paymentTitle')) document.getElementById('paymentTitle').textContent = t.paymentTitle;

    // Discord Button
    if (document.getElementById('discordLink')) {
        document.getElementById('discordLink').innerHTML = t.discordBtn;
    }

    if (document.getElementById('nameInput')) document.getElementById('nameInput').placeholder = t.name;
    if (document.getElementById('emailInput')) document.getElementById('emailInput').placeholder = t.email;
    if (document.getElementById('discordInput')) document.getElementById('discordInput').placeholder = t.discord;
    if (document.getElementById('detailsInput')) document.getElementById('detailsInput').placeholder = t.details;

    if (document.getElementById('text1')) document.getElementById('text1').textContent = `1 ${t.opt1}`;
    if (document.getElementById('text2')) document.getElementById('text2').textContent = `2 ${t.opt2}`;
    if (document.getElementById('text3')) document.getElementById('text3').textContent = `3 ${t.opt3}`;
    if (document.getElementById('text4')) document.getElementById('text4').textContent = `4 ${t.opt4}`;

    localStorage.setItem("lang", lang);
}

function toggleLangMenu() {
    const menu = document.getElementById("langMenu");
    if (menu) {
        menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
    }
}

function setLang(lang) {
    applyLang(lang);
    const menu = document.getElementById("langMenu");
    if (menu) menu.style.display = "none";
}

function openImg(img) {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    if (popup && popupImg && img) {
        popupImg.src = img.src;
        popup.style.display = "flex";
        setTimeout(() => popup.classList.add("show"), 10);
    }
}

function closeImg() {
    const popup = document.getElementById("popup");
    if (popup) {
        popup.classList.remove("show");
        setTimeout(() => { popup.style.display = "none"; }, 300);
    }
}

window.onload = function() {
    const savedLang = localStorage.getItem("lang") || "ar";
    applyLang(savedLang);

    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") closeImg();
    });

    const popup = document.getElementById("popup");
    if (popup) {
        popup.addEventListener("click", function(e) {
            if (e.target === popup) closeImg();
        });
    }
};