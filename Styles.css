* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
    color: #00ff00;
    font-family: 'Courier New', monospace;
    height: 100vh;
    overflow: hidden;
    position: relative;
}

body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        0deg,
        rgba(0, 255, 0, 0.03) 1px,
        transparent 1px
    );
    background-size: 100% 4px;
    pointer-events: none;
    z-index: 10;
    animation: scanlines 8s linear infinite;
}

@keyframes scanlines {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(10px);
    }
}

/* Top Bar */
.top-bar {
    background: linear-gradient(90deg, rgba(255, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border-bottom: 3px solid #ff0000;
    box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
    z-index: 100;
}

.time-display {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffff00;
    text-shadow: 0 0 10px #ffff00;
    font-family: 'Arial Black', sans-serif;
}

.status-indicator {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.2rem;
    color: #ff3333;
    font-weight: bold;
    text-shadow: 0 0 10px #ff3333;
}

.pulse {
    width: 12px;
    height: 12px;
    background: #ff3333;
    border-radius: 50%;
    animation: pulse 1s infinite;
    box-shadow: 0 0 10px #ff3333;
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.5;
        transform: scale(1.2);
    }
}

/* Main Container */
.main-container {
    display: grid;
    grid-template-columns: 1fr 1.2fr 1fr;
    height: calc(100vh - 50px - 80px);
    gap: 10px;
    padding: 10px;
    overflow: hidden;
}

/* Paneller */
.left-panel,
.center-panel,
.right-panel {
    background: rgba(0, 0, 0, 0.7);
    border: 2px solid;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
}

.left-panel {
    border-color: #ff3333;
    display: flex;
    flex-direction: column;
}

.center-panel {
    border-color: #ffaa00;
    display: flex;
    flex-direction: column;
}

.right-panel {
    border-color: #3366ff;
    display: flex;
    flex-direction: column;
}

/* Panel Header */
.panel-header {
    background: linear-gradient(90deg, rgba(255, 0, 0, 0.3), rgba(0, 0, 0, 0.5));
    padding: 15px;
    border-bottom: 2px solid #ff3333;
}

.panel-header h1,
.panel-header h2 {
    font-size: 1.2rem;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.panel-header h2 {
    color: #00ccff;
    text-shadow: 0 0 10px #00ccff;
}

.header-line {
    height: 1px;
    background: linear-gradient(90deg, transparent, #ff3333, transparent);
    margin-top: 8px;
}

/* Haber Ticker */
.news-ticker {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
}

.news-item {
    background: rgba(0, 0, 0, 0.5);
    border-left: 3px solid #ff3333;
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 3px;
    animation: slideIn 0.5s ease-out;
    cursor: pointer;
    transition: all 0.3s;
}

.news-item:hover {
    background: rgba(255, 0, 0, 0.1);
    border-left-color: #ffff00;
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.news-time {
    font-size: 0.8rem;
    color: #ffaa00;
    margin-bottom: 5px;
}

.news-title {
    font-size: 0.95rem;
    color: #ffff00;
    font-weight: bold;
    margin-bottom: 5px;
}

.news-description {
    font-size: 0.85rem;
    color: #00ff00;
    line-height: 1.4;
}

/* Stats Container */
.stats-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    padding: 10px;
    border-top: 2px solid #ff3333;
}

.stat-box {
    background: rgba(255, 0, 0, 0.1);
    border: 1px solid #ff3333;
    padding: 12px;
    text-align: center;
    border-radius: 3px;
}

.stat-number {
    font-size: 1.8rem;
    font-weight: bold;
    color: #ffff00;
    text-shadow: 0 0 10px #ffff00;
}

.stat-label {
    font-size: 0.75rem;
    color: #ff3333;
    text-transform: uppercase;
    margin-top: 5px;
}

/* Harita */
#warMap {
    width: 100%;
    height: calc(100% - 60px);
    background: rgba(0, 0, 0, 0.5);
    border-bottom: 2px solid #ffaa00;
}

.map-legend {
    background: rgba(0, 0, 0, 0.8);
    padding: 10px;
    display: flex;
    gap: 15px;
    justify-content: center;
    border-top: 1px solid #ffaa00;
}

.legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    color: #00ff00;
}

.legend-color {
    width: 15px;
    height: 15px;
    border-radius: 2px;
}

/* Sağ Panel - Detaylar */
.details-container {
    flex: 1;
    overflow-y: auto;
    padding: 15px;
}

.detail-item {
    margin-bottom: 20px;
}

.detail-label {
    display: block;
    font-size: 0.9rem;
    color: #00ccff;
    margin-bottom: 5px;
    text-transform: uppercase;
}

.progress-bar {
    width: 100%;
    height: 20px;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid #3366ff;
    border-radius: 2px;
    overflow: hidden;
    margin-bottom: 5px;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #ff3333, #ffaa00);
    width: 50%;
    transition: width 0.5s ease;
}

.detail-value {
    font-size: 0.85rem;
    color: #ffaa00;
    font-weight: bold;
}

.battle-log {
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid #3366ff;
    padding: 12px;
    border-radius: 3px;
    margin-top: 20px;
}

.battle-log h3 {
    color: #00ccff;
    font-size: 0.95rem;
    margin-bottom: 10px;
    text-shadow: 0 0 10px #00ccff;
}

.log-entries {
    max-height: 300px;
    overflow-y: auto;
}

.log-entry {
    font-size: 0.8rem;
    color: #00ff00;
    padding: 5px 0;
    border-bottom: 1px solid rgba(0, 255, 0, 0.1);
    animation: slideIn 0.5s ease-out;
}

.log-entry:last-child {
    border-bottom: none;
}

.log-time {
    color: #ffaa00;
    margin-right: 5px;
}

/* Bottom Ticker */
.bottom-ticker {
    height: 80px;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.8), rgba(255, 0, 0, 0.1));
    border-top: 2px solid #ff3333;
    overflow: hidden;
    display: flex;
    align-items: center;
    position: relative;
}

.ticker-content {
    display: flex;
    gap: 50px;
    animation: scroll 30s linear infinite;
    white-space: nowrap;
}

@keyframes scroll {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
}

.ticker-item {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 1.1rem;
    color: #ffff00;
    font-weight: bold;
    padding: 0 30px;
}

.ticker-emoji {
    font-size: 1.5rem;
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}

/* Scrollbar Styling */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar-thumb {
    background: #ff3333;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #ffaa00;
}

/* Responsive */
@media (max-width: 1400px) {
    .main-container {
        grid-template-columns: 1fr;
    }
    
    .left-panel,
    .center-panel,
    .right-panel {
        display: none;
    }
}
