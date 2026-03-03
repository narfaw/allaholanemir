// Haberler Veri Tabanı
const newsDatabase = [
    {
        title: "Allah Orduları Emir'i Ağır Darbe Aldı",
        description: "Son muhasebede Allah'ın seçkin birlikleri Emir'in kuzey kalelerini işgal etti. Tahminlere göre 50.000 asker kayıp verildi.",
        time: "09:45",
        emoji: "⚔️"
    },
    {
        title: "Emir Karşı Saldırı Başlattı - Büyük Ordu Meydan Harbi İçin Hazırlanıyor",
        description: "Emir İmparatorluğu 200.000 kişilik bir ordu ile karşı taarruz başlattı. Savaş cephesi her an kızışabilir.",
        time: "10:12",
        emoji: "🛡️"
    },
    {
        title: "Allah'ın Tanrısal Gücü Tam Kapasitede Çalışıyor",
        description: "Rahipler, Allah'ın tanrısal enerjisinin %95'e çıktığını ve saldırı için hazır olduğunu duyurdu.",
        time: "10:30",
        emoji: "✨"
    },
    {
        title: "Nötr Bölgeden Gözlemciler Savaşın Şiddetinden Endişeli",
        description: "BM temsilcileri, iki gücün çatışmasının yerel halkı etkileyebileceği konusunda uyarı yayınladı.",
        time: "11:05",
        emoji: "🚨"
    },
    {
        title: "Emir'in Gizli Silahı Ortaya Çıktı - Allah İçin Tehdit Mi?",
        description: "İstihbarat raporları Emir'in yeni teknoloji kullanarak Allah'ın saldırılarını deflect ettiğini gösteriyor.",
        time: "11:45",
        emoji: "💣"
    },
    {
        title: "Allah'ın Seçkin Birliği Emir'in En Savunmasız Şehrini İşgal Etti",
        description: "Stratejik lokasyonundaki Meridian Şehri, Allah Orduları tarafından ele geçirildi. Emir'in doğu cephesi tehlikede.",
        time: "12:20",
        emoji: "🏰"
    },
    {
        title: "Emir'in Ekonomisi Savaş Nedeniyle %40 Çöktü",
        description: "Ticaret rotaları kesildi ve Emir'in hazinesine ağır darbeler indi. Mali kriz kapıda.",
        time: "13:10",
        emoji: "💰"
    },
    {
        title: "Allah'ın Orduları Emir'in Başkentine 200km Mesafede",
        description: "Hızlı ilerleyen Allah Orduları, Emir İmparatorluğunun kalbi olan başkente yaklaşıyor. Muhasara çok yakın.",
        time: "14:00",
        emoji: "🗺️"
    },
    {
        title: "Emir Son Çabada Tüm Ordusunu Sefere Çıkarıyor",
        description: "Emir, tüm askeri gücünü harekete geçirerek son büyük meydan muharebesini planlıyor. Bu savaş seçimin zamanı olacak.",
        time: "14:55",
        emoji: "⚡"
    },
    {
        title: "Dünya Liderler Allah ve Emir'in Barış Görüşmelerine Çağırıyor",
        description: "ABD, Rusya ve Çin temsilcileri iki savaşçı taraf arasında ateşkes için arabuluculuk yapmaya çalışıyor.",
        time: "15:30",
        emoji: "🕊️"
    }
];

const battleLogMessages = [
    "Allah'ın ordusu doğuya ilerledi",
    "Emir'in savunma hattı çöktü",
    "5000 asker Tanrısal ışında buharlaştı",
    "Emir karşı saldırı başlattı",
    "Nötr bölge işgal tehdidi altında",
    "Allah'ın gücü arttı",
    "Emir'in stratejisi değişti",
    "Cephede ateşkes imkânı ortaya çıktı",
    "Askeri birliklerin morali düştü",
    "Yeni cephe açılmaya hazırlanıyor"
];

// Zaman Güncelleme
function updateTime() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('tr-TR');
    document.getElementById('timeDisplay').textContent = timeStr;
}

setInterval(updateTime, 1000);
updateTime();

// Harita Çizimi
const canvas = document.getElementById('warMap');
const ctx = canvas.getContext('2d');

class WarMap {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.territories = [];
        this.armies = [];
        this.init();
    }

    init() {
        this.createTerritories();
        this.createArmies();
        this.draw();
        setInterval(() => this.update(), 100);
    }

    createTerritories() {
        // Allah'ın toprakları
        this.territories.push({
            x: 100,
            y: 150,
            width: 200,
            height: 150,
            owner: 'allah',
            name: 'Allah\'s Kingdom'
        });

        // Emir'in toprakları
        this.territories.push({
            x: 500,
            y: 150,
            width: 200,
            height: 150,
            owner: 'emir',
            name: 'Emir\'s Empire'
        });

        // Nötr bölge
        this.territories.push({
            x: 350,
            y: 350,
            width: 100,
            height: 100,
            owner: 'neutral',
            name: 'Neutral Zone'
        });
    }

    createArmies() {
        this.armies = [
            {
                x: 250,
                y: 200,
                owner: 'allah',
                size: 50,
                direction: 1,
                speed: 0.5
            },
            {
                x: 450,
                y: 200,
                owner: 'emir',
                size: 45,
                direction: -1,
                speed: 0.3
            }
        ];
    }

    draw() {
        // Arka plan
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Topraklar
        this.territories.forEach(territory => {
            if (territory.owner === 'allah') {
                this.ctx.fillStyle = 'rgba(255, 51, 51, 0.3)';
                this.ctx.strokeStyle = '#ff3333';
            } else if (territory.owner === 'emir') {
                this.ctx.fillStyle = 'rgba(51, 102, 255, 0.3)';
                this.ctx.strokeStyle = '#3366ff';
            } else {
                this.ctx.fillStyle = 'rgba(255, 170, 0, 0.2)';
                this.ctx.strokeStyle = '#ffaa00';
            }

            this.ctx.lineWidth = 2;
            this.ctx.fillRect(territory.x, territory.y, territory.width, territory.height);
            this.ctx.strokeRect(territory.x, territory.y, territory.width, territory.height);

            // İsim
            this.ctx.fillStyle = '#ffffff';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(
                territory.name,
                territory.x + territory.width / 2,
                territory.y + territory.height / 2
            );
        });

        // Ordular
        this.armies.forEach(army => {
            if (army.owner === 'allah') {
                this.ctx.fillStyle = '#ff3333';
            } else {
                this.ctx.fillStyle = '#3366ff';
            }

            // Ordu noktası
            this.ctx.beginPath();
            this.ctx.arc(army.x, army.y, army.size / 2, 0, Math.PI * 2);
            this.ctx.fill();

            // Parlama efekti
            this.ctx.strokeStyle = army.owner === 'allah' ? '#ffaa00' : '#00ccff';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(army.x, army.y, army.size / 2 + 5, 0, Math.PI * 2);
            this.ctx.stroke();
        });
    }

    update() {
        // Ordular hareket ediyor
        this.armies.forEach(army => {
            army.x += army.speed * army.direction;

            // Sınırlar içinde kalmasını sağla
            if (army.x < 50) army.x = 50;
            if (army.x > this.canvas.width - 50) army.x = this.canvas.width - 50;
        });

        this.draw();
    }
}

// Harita başlat
const warMap = new WarMap(canvas);

// Haberler Sistemi
function generateNews() {
    const newsTicker = document.getElementById('newsTicker');
    newsTicker.innerHTML = '';

    newsDatabase.forEach((news, index) => {
        setTimeout(() => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            newsItem.innerHTML = `
                <div class="news-time">${news.emoji} ${news.time}</div>
                <div class="news-title">${news.title}</div>
                <div class="news-description">${news.description}</div>
            `;
            newsTicker.appendChild(newsItem);
        }, index * 500);
    });
}

// Alt Ticker Sistemi
function generateBottomTicker() {
    const tickerContent = document.getElementById('tickerContent');
    tickerContent.innerHTML = '';

    const tickerItems = [
        "🔴 ALLAH'S FORCES ADVANCING TOWARDS CAPITAL",
        "🔵 EMIR EMPIRE LOSES 50,000 SOLDIERS",
        "⚡ DIVINE POWER AT 85% CAPACITY",
        "💣 NEW WEAPONS DEPLOYED IN BATTLE",
        "🛡️ EMIR COUNTER-ATTACK IMMINENT",
        "🗺️ NEUTRAL ZONE UNDER THREAT",
        "💰 EMIR'S ECONOMY COLLAPSED BY 40%",
        "🕊️ WORLD LEADERS CALL FOR PEACE TALKS"
    ];

    tickerItems.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'ticker-item';
        itemEl.innerHTML = item;
        tickerContent.appendChild(itemEl);

        // Tekrarla
        const itemEl2 = document.createElement('div');
        itemEl2.className = 'ticker-item';
        itemEl2.innerHTML = item;
        tickerContent.appendChild(itemEl2);
    });
}

// İstatistik Güncelleme
function updateStats() {
    const allaahPower = Math.floor(Math.random() * 20) + 65;
    const emirPower = Math.floor(Math.random() * 20) + 70;
    const deaths = Math.floor(Math.random() * 50000) + 100000;
    const victories = Math.floor(Math.random() * 20) + 15;
    const territories = Math.floor(Math.random() * 30) + 25;

    document.getElementById('allaahPower').style.width = allaahPower + '%';
    document.getElementById('allaahPowerText').textContent = allaahPower + '%';

    document.getElementById('emirPower').style.width = emirPower + '%';
    document.getElementById('emirPowerText').textContent = emirPower + '%';

    document.getElementById('statDeaths').textContent = deaths.toLocaleString();
    document.getElementById('statVictory').textContent = victories;
    document.getElementById('statTerritories').textContent = territories;
}

// Savaş Günlüğü Güncelleme
function updateBattleLog() {
    const battleLog = document.getElementById('battleLog');
    const randomMessage = battleLogMessages[Math.floor(Math.random() * battleLogMessages.length)];
    const logEntry = document.createElement('div');
    logEntry.className = 'log-entry';
    const time = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    logEntry.innerHTML = `<span class="log-time">[${time}]</span> ${randomMessage}`;
    battleLog.insertBefore(logEntry, battleLog.firstChild);

    // Eski girdileri kaldır
    while (battleLog.children.length > 10) {
        battleLog.removeChild(battleLog.lastChild);
    }
}

// Başlangıç
window.addEventListener('load', () => {
    generateNews();
    generateBottomTicker();
    updateStats();

    // Periyodik Güncellemeler
    setInterval(updateStats, 5000);
    setInterval(updateBattleLog, 3000);
    setInterval(() => {
        if (Math.random() > 0.7) {
            const newNews = newsDatabase[Math.floor(Math.random() * newsDatabase.length)];
            const newsTicker = document.getElementById('newsTicker');
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            newsItem.innerHTML = `
                <div class="news-time">${newNews.emoji} ${newNews.time}</div>
                <div class="news-title">${newNews.title}</div>
                <div class="news-description">${newNews.description}</div>
            `;
            newsTicker.insertBefore(newsItem, newsTicker.firstChild);
        }
    }, 8000);
});
