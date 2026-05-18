import React, { useState, useEffect } from 'react';

export default function App() {
  const [status, setStatus] = useState('idle'); // idle, hacking, revealed
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);

  const hackLogs = [
    "> Sistem taraması başlatıldı: iPhone (iOS 17.4)",
    "> Konum doğrulandı: İstanbul / Türkiye",
    "> Apple ID (Kadir Özkan) bypass ediliyor...",
    "> iCloud Drive erişimi sağlandı: SUCCESS",
    "> Fotoğraflar ve Kişiler dışa aktarılıyor...",
    "> Yakınlardaki banka kartları (Apple Pay) taranıyor...",
    "> Kritik Hata: 'Trojan.iOS.Stealer.v4' aktif!",
    "> Veriler uzak sunucuya gönderiliyor: 185.12.XX.4"
  ];

  const startTroll = () => {
    if (status === 'idle') {
      setStatus('hacking');
      
      // Titreşim efekti (Kadir dokunduğu an telefon titrerse panik artar)
      if (navigator.vibrate) navigator.vibrate([100, 50, 100, 50, 300]);

      // Logları sırayla ekrana bas
      hackLogs.forEach((log, index) => {
        setTimeout(() => {
          setLogs(prev => [...prev, log]);
          setProgress((prev) => prev + 12);
        }, index * 900);
      });

      // 10 saniye sonra büyük patlama (Şaka açıklaması)
      setTimeout(() => {
        setStatus('revealed');
      }, 10000);
    }
  };

  return (
    <div 
      className="min-h-screen w-full bg-black text-white font-mono flex flex-col p-4 select-none"
      onClick={startTroll}
    >
      {/* Üst Bilgi Çubuğu */}
      <div className="flex justify-between items-center border-b border-gray-800 pb-2 mb-4">
        <span className="text-[10px] text-gray-500 uppercase tracking-widest leading-none">Security_Audit_v2.01.exe</span>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
      </div>

      {status === 'idle' && (
        <div className="flex-1 flex flex-col items-center justify-center space-y-6">
          <div className="w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-blue-500 text-lg animate-pulse font-bold uppercase tracking-widest">Sistem Analizi Bekleniyor</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-transform active:scale-95">
            Analizi Başlat
          </button>
        </div>
      )}

      {status === 'hacking' && (
        <div className="flex-1 flex flex-col space-y-4">
          {/* Sahte Terminal */}
          <div className="flex-1 overflow-hidden space-y-1">
            {logs.map((log, i) => (
              <p key={i} className={`text-xs ${log.includes('Hata') ? 'text-red-500 font-bold' : 'text-green-500'}`}>
                {log}
              </p>
            ))}
          </div>

          {/* Orta Kırmızı Panel */}
          <div className="bg-red-900/30 border border-red-600 p-4 rounded-lg animate-[shake_0.2s_infinite]">
            <h1 className="text-red-500 text-center font-black text-xl italic uppercase">Kritik Veri Sızıntısı</h1>
            <div className="mt-2 h-2 w-full bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-red-600 transition-all duration-500" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-[10px] text-center mt-2 text-red-200">
              Kullanıcı: <b>Kadir Özkan</b> | Cihaz: <b>iPhone</b> <br/>
              İşlem: iCloud Photos and Contacts Syncing...
            </p>
          </div>
        </div>
      )}

      {status === 'revealed' && (
        <div className="fixed inset-0 bg-[#007aff] z-50 flex flex-col items-center justify-center p-10 text-center">
          <span className="text-8xl mb-8">🤣</span>
          <h1 className="text-4xl font-black mb-4">LAN VİRÜS YEDİM DEDİN Mİ?</h1>
          <p className="text-xl">Kadir abi, yaş 22 oldu ama Efe'nin trolleri hala bitmedi!</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-10 bg-white text-[#007aff] px-6 py-2 rounded-full font-bold"
          >
            Tekrar Dene (Korkma Bu Sefer)
          </button>
        </div>
      )}

      {/* Tailwind için Özel Animasyon Tanımı (CSS dosyasına gerek kalmadan inline benzeri) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shake {
          0% { transform: translate(1px, 1px) rotate(0deg); }
          20% { transform: translate(-1px, -2px) rotate(-1deg); }
          40% { transform: translate(-3px, 0px) rotate(1deg); }
          60% { transform: translate(3px, 2px) rotate(0deg); }
          80% { transform: translate(-1px, -1px) rotate(1deg); }
          100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
      `}} />
    </div>
  );
}

