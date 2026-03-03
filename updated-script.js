let allNews = [];
let currentNewsIndex = 0;

function initializeAINews() {
    const generator = new AINewsGenerator();
    const aiNews = generator.generateMultipleNews(30);
    return aiNews;
}

function updateNewsDisplay() {
    const newsTicker = document.getElementById('newsTicker');
    newsTicker.innerHTML = '';

    allNews.forEach((news, index) => {
        setTimeout(() => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            newsItem.style.borderLeftColor = 
                news.importance > 3 ? '#ff0000' : '#ffaa00';
            
            newsItem.innerHTML = `
                <div class="news-time">${news.emoji} ${news.time}</div>
                <div class="news-title">${news.title}</div>
                <div class="news-description">${news.description}</div>
                <div class="news-importance">Önemlilik: ${'⭐'.repeat(news.importance)}</div>
            `;
            
            newsTicker.appendChild(newsItem);
        }, index * 400);
    });
}

function addLiveNews() {
    const generator = new AINewsGenerator();
    const newNews = generator.generateNews();
    
    const newsTicker = document.getElementById('newsTicker');
    const newsItem = document.createElement('div');
    newsItem.className = 'news-item';
    newsItem.style.animation = 'slideInRed 0.8s ease-out';
    newsItem.innerHTML = `
        <div class="news-time" style="color: #ff0000; font-weight: bold;">
            🔴 CANLIYAYINLA ${newNews.emoji} ${new Date().toLocaleTimeString('tr-TR')}
        </div>
        <div class="news-title" style="color: #ffff00;">${newNews.title}</div>
        <div class="news-description">${newNews.description}</div>
    `;
    
    newsTicker.insertBefore(newsItem, newsTicker.firstChild);
    
    while (newsTicker.children.length > 20) {
        newsTicker.removeChild(newsTicker.lastChild);
    }
}

function updateTime() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('tr-TR');
    const timeDisplay = document.getElementById('timeDisplay');
    if (timeDisplay) {
        timeDisplay.textContent = timeStr;
    }
}

class EnhancedWarMap {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.explosions = [];
        this.territories = [];
        this.armies = [];
        this.init();
    }

    init() {
        this.createTerritories();
        this.createArmies();
        this.animate();
    }

    createTerritories() {
        this.territories = [
            { x: 80, y: 100, w: 200, h: 150, owner: 'allah', name: 'ALLAH\'S KINGDOM' },
            { x: 520, y: 100, w: 200, h: 150, owner: 'emir', name: 'EMIR\'S EMPIRE' },
            { x: 380, y: 350, w: 120, h: 120, owner: 'neutral', name: 'NEUTRAL' }
        ];
    }

    createArmies() {
        this.armies = [
            { x: 150, y: 200, owner: 'allah', size: 60, dir: 1, speed: 0.8, angle: 0 },
            { x: 550, y: 200, owner: 'emir', size: 55, dir: -1, speed: 0.5, angle: Math.PI }
        ];
    }

    addExplosion(x, y) {
        this.explosions.push({
            x: x,
            y: y,
            radius: 5,
            maxRadius: 50,
            life: 100
        });
    }

    animate() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.territories.forEach(t => {
            if (t.owner === 'allah') {
                this.ctx.fillStyle = 'rgba(255, 51, 51, 0.2)';
                this.ctx.strokeStyle = '#ff3333';
            } else if (t.owner === 'emir') {
                this.ctx.fillStyle = 'rgba(51, 102, 255, 0.2)';
                this.ctx.strokeStyle = '#3366ff';
            } else {
                this.ctx.fillStyle = 'rgba(255, 170, 0, 0.15)';
                this.ctx.strokeStyle = '#ffaa00';
            }
            this.ctx.lineWidth = 3;
            this.ctx.fillRect(t.x, t.y, t.w, t.h);
            this.ctx.strokeRect(t.x, t.y, t.w, t.h);

            this.ctx.fillStyle = '#ffffff';
            this.ctx.font = '14px Arial Black';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(t.name, t.x + t.w / 2, t.y + t.h / 2);
        });

        this.armies.forEach(army => {
            army.x += army.speed * army.dir;
            army.angle += 0.05;

            if (army.x < 50) army.x = 50;
            if (army.x > this.canvas.width - 50) army.x = this.canvas.width - 50;

            const color = army.owner === 'allah' ? '#ff3333' : '#3366ff';
            const glowColor = army.owner === 'allah' ? '#ffaa00' : '#00ccff';

            this.ctx.shadowColor = glowColor;
            this.ctx.shadowBlur = 30;
            this.ctx.fillStyle = color;
            this.ctx.beginPath();
            this.ctx.arc(army.x, army.y, army.size / 2, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.strokeStyle = glowColor;
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(army.x, army.y, army.size / 2 + 8, 0, Math.PI * 2);
            this.ctx.stroke();

            this.drawStar(army.x, army.y, 5, 10, 15, color);
        });

        for (let i = this.explosions.length - 1; i >= 0; i--) {
            const exp = this.explosions[i];
            exp.life--;
            exp.radius = (exp.maxRadius * (100 - exp.life)) / 100;

            const opacity = exp.life / 100;
            this.ctx.strokeStyle = `rgba(255, 170, 0, ${opacity})`;
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.arc(exp.x, exp.y, exp.radius, 0, Math.PI * 2);
            this.ctx.stroke();

            if (exp.life <= 0) {
                this.explosions.splice(i, 1);
            }
        }

        this.ctx.shadowBlur = 0;
        requestAnimationFrame(() => this.animate());
    }

    drawStar(x, y, points, outer, inner, color) {
        let step = Math.PI / points;
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y - outer);

        for (let i = 1; i < points * 2; i++) {
            let r = i % 2 === 0 ? outer : inner;
            let angle = i * step - Math.PI / 2;
            this.ctx.lineTo(x + Math.cos(angle) * r, y + Math.sin(angle) * r);
        }
        this.ctx.closePath();
        this.ctx.fill();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    allNews = initializeAINews();
    updateNewsDisplay();

    const canvas = document.getElementById('warMap');
    if (canvas) {
        const warMap = new EnhancedWarMap(canvas);

        setInterval(() => {
            const x = Math.random() * (canvas.width - 100) + 50;
            const y = Math.random() * (canvas.height - 100) + 50;
            warMap.addExplosion(x, y);
        }, 2000);
    }

    setInterval(addLiveNews, 8000);
    setInterval(updateTime, 1000);
    updateTime();

    setInterval(() => {
        document.getElementById('statDeaths').textContent = 
            (Math.floor(Math.random() * 500000) + 200000).toLocaleString();
        document.getElementById('statVictory').textContent = 
            Math.floor(Math.random() * 50) + 10;
        document.getElementById('statTerritories').textContent = 
            Math.floor(Math.random() * 40) + 15;
    }, 5000);
});
