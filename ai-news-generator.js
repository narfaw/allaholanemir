class AINewsGenerator {
    constructor() {
        this.newsPatterns = [
            "Allah Orduları {action} ile Emir'i ağır darbe aldı",
            "Emir İmparatorluğu {action} yaparak karşı saldırı başlattı",
            "Allah'ın tanrısal gücü {percentage}% kapasitede çalışıyor",
            "Savaş cephesinde {location} şehri {action} ile ele geçirildi",
            "{entity1} ile {entity2} arasında {action} yaşandı",
            "Nötr bölgede {action} ile kayıplar arttı",
            "Askeri analiz: {prediction}",
            "{location} halkı {action} nedeniyle göç etmeye başladı",
            "İstihbarat: Emir'in {weapon} {action} ile Allah'ı tehdit ediyor",
            "Allah'ın seçkin birlikleri {location}'da {action} gerçekleştirdi"
        ];

        this.actions = [
            "muhasara başlattı",
            "kaleyi işgal etti",
            "100 bin asker kaybetti",
            "yeni silahı test etti",
            "savunma hatlarını çöktü",
            "stratejik geri çekilişe başladı",
            "beklenmedik taarruz yaptı",
            "barış müzakereleri başlattı",
            "ekonomik ambargoyu uyguladı",
            "hava bombardımanı düzenleyen",
            "özel kuvvet operasyonu gerçekleştirdi",
            "topçu ateşi açtı",
            "tank birliklerini konuşlandırdı",
            "propaganda kampanyası başlattı",
            "müttefiklerinden destek istedi"
        ];

        this.locations = [
            "Meridian Şehri",
            "Kuzey Kalesi",
            "Doğu Cephesi",
            "Batı Limanı",
            "Başkent",
            "Gizli Üs",
            "Stratejik Tepe",
            "İmparatorluk Sarayı",
            "Ticaret Rotası",
            "Sınır Bölgesi",
            "Orman Mevkii",
            "Gümrük Kapısı"
        ];

        this.entities = [
            "Allah Orduları",
            "Emir İmparatorluğu",
            "BM Gözlemcileri",
            "Nötr Güçler",
            "Müttefikler",
            "Tanrısal Güçler",
            "İstihbarat Örgütü",
            "Askeri Karargah",
            "Halk Milisyası"
        ];

        this.weapons = [
            "ışın silahı",
            "nükleer başlık",
            "dronu",
            "lazer teknolojisi",
            "elektromanyetik silahı",
            "kimyasal silahı",
            "biyolojik virüsü",
            "zaman alaşımı",
            "boyut kırıcısı"
        ];

        this.predictions = [
            "Emir'in 3 gün içinde teslim olacağı tahmin ediliyor",
            "Allah'ın nihai zaferi çok yakın olabilir",
            "Emir'in Başkenti 48 saat içinde işgal edilebilir",
            "Ateşkes müzakereleri başlayabilir",
            "Büyük bir meydan muharebesi kaçınılmaz görünüyor",
            "Emir'in gizli silahları oyunun kurallarını değiştirebilir",
            "Nötr bölge savaşa çekilme riski taşıyor",
            "Dünya müdahalesi bekleniyor"
        ];

        this.percentages = [45, 52, 68, 75, 82, 88, 91, 95];
        this.newsCount = 0;
    }

    random(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    generateNewsTitle() {
        let pattern = this.random(this.newsPatterns);
        
        pattern = pattern.replace("{action}", this.random(this.actions));
        pattern = pattern.replace("{location}", this.random(this.locations));
        pattern = pattern.replace("{entity1}", this.random(this.entities));
        pattern = pattern.replace("{entity2}", this.random(this.entities));
        pattern = pattern.replace("{percentage}", this.random(this.percentages));
        pattern = pattern.replace("{weapon}", this.random(this.weapons));
        pattern = pattern.replace("{prediction}", this.random(this.predictions));

        return pattern;
    }

    generateNewsDescription() {
        const descriptions = [
            `Savaş raporlarına göre, {location}'da yoğun çatışmalar yaşandı. Kayıplar {count} askere ulaştı. Bölgede {entity} tarafından kurulan yeni üsler halen faaliyette.`,
            `Son gelişmelere göre {entity1} ile {entity2} arasında {action} meydana geldi. Savaş, {location} için kritik bir dönüm noktası olabilir.`,
            `Muhabir raporları, {location}'da yeni bir cephe açıldığını doğruluyor. Stratejik konumu nedeniyle bu alan çok önemli sayılıyor. {entity} bölgeyi tamamen kontrol etmek için ilerleme gösteriyor.`,
            `İstihbarat kaynakları, {entity}'un {weapon} geliştirdiğini ve test ettiğini duyurdu. Bu gelişme savaşın seyrini değiştirebilir. {prediction}`,
            `Bölge gözlemcileri, {location}'da sivil kayıpların arttığını rapor ediyor. İnsani durum giderek kötüleşiyor. Uluslararası yardım kuruluşları operasyonlarını durdurdu.`,
            `Askeri analistler, {entity1}'nın taktiklerini değiştirdiğini ve {entity2} karşısında yeni bir stratejiye geçtiğini belirtiyor. Bu hamle savaşı uzatabilir.`
        ];

        let description = this.random(descriptions);
        const count = Math.floor(Math.random() * 100000) + 10000;

        description = description.replace("{action}", this.random(this.actions));
        description = description.replace("{location}", this.random(this.locations));
        description = description.replace("{entity}", this.random(this.entities));
        description = description.replace("{entity1}", this.random(this.entities));
        description = description.replace("{entity2}", this.random(this.entities));
        description = description.replace("{weapon}", this.random(this.weapons));
        description = description.replace("{prediction}", this.random(this.predictions));
        description = description.replace("{count}", count.toLocaleString());

        return description;
    }

    generateTime() {
        const now = new Date();
        const minutes = now.getMinutes() - Math.floor(Math.random() * 15);
        const hours = minutes < 0 ? now.getHours() - 1 : now.getHours();
        
        return `${String(hours).padStart(2, '0')}:${String(Math.abs(minutes)).padStart(2, '0')}`;
    }

    getRandomEmoji() {
        const emojis = ["⚔️", "🔥", "💣", "🛡️", "⚡", "💥", "🎯", "📍", "🚁", "🛸", "🎖️", "💂"];
        return this.random(emojis);
    }

    generateNews() {
        const news = {
            id: ++this.newsCount,
            title: this.generateNewsTitle(),
            description: this.generateNewsDescription(),
            time: this.generateTime(),
            emoji: this.getRandomEmoji(),
            importance: Math.floor(Math.random() * 5) + 1,
            timestamp: Date.now()
        };

        return news;
    }

    generateMultipleNews(count = 15) {
        const newsList = [];
        for (let i = 0; i < count; i++) {
            newsList.push(this.generateNews());
        }
        return newsList.sort((a, b) => b.timestamp - a.timestamp);
    }
}
