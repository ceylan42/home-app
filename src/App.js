import { useState } from “react”;

export default function App() {
const [screen, setScreen] = useState(“login”);
const [email, setEmail] = useState(””);
const [pass, setPass] = useState(””);
const [role, setRole] = useState(null);
const [error, setError] = useState(false);

const bg = {
minHeight: “100vh”,
background: “linear-gradient(180deg, #C5D9EC 0%, #D8CCBA 45%, #C4956A 100%)”,
display: “flex”,
justifyContent: “center”,
alignItems: “center”,
padding: 16,
fontFamily: “-apple-system, Helvetica, sans-serif”,
};

const phone = {
width: “100%”,
maxWidth: 390,
minHeight: 700,
borderRadius: 40,
background: “rgba(255,255,255,0.5)”,
backdropFilter: “blur(20px)”,
border: “1px solid rgba(255,255,255,0.7)”,
display: “flex”,
flexDirection: “column”,
overflow: “hidden”,
boxShadow: “0 30px 80px rgba(0,0,0,0.2)”,
padding: 24,
};

const btn = (color) => ({
width: “100%”,
padding: 16,
borderRadius: 14,
background: color || “#007AFF”,
color: “#fff”,
fontSize: 17,
fontWeight: 600,
border: “none”,
cursor: “pointer”,
marginBottom: 12,
});

const input = {
width: “100%”,
padding: “14px 16px”,
borderRadius: 12,
border: “1px solid rgba(0,0,0,0.12)”,
background: “rgba(255,255,255,0.6)”,
fontSize: 16,
marginBottom: 12,
fontFamily: “inherit”,
outline: “none”,
boxSizing: “border-box”,
};

if (screen === “login”) return (
<div style={bg}>
<div style={phone}>
<div style={{ textAlign: “center”, marginBottom: 32, marginTop: 20 }}>
<div style={{ fontSize: 60, marginBottom: 12 }}>🏠</div>
<div style={{ fontSize: 32, fontWeight: 800, color: “#1C1C1E”, marginBottom: 6 }}>HOME</div>
<div style={{ fontSize: 15, color: “rgba(60,60,67,0.6)” }}>Akilli Site Yonetimi</div>
</div>

```
    <div style={{ background: "rgba(0,122,255,0.08)", border: "1px solid rgba(0,122,255,0.2)", borderRadius: 12, padding: "12px 16px", marginBottom: 20 }}>
      <div style={{ fontSize: 12, fontWeight: 600, color: "#007AFF", marginBottom: 4 }}>TEST KULLANICISI</div>
      <div style={{ fontSize: 13, color: "rgba(60,60,67,0.6)", lineHeight: 1.8 }}>
        E-posta: <strong style={{ color: "#1C1C1E" }}>ahmet@homeapp.com</strong><br />
        Sifre: <strong style={{ color: "#1C1C1E" }}>home2026</strong>
      </div>
    </div>

    <input
      style={input}
      type="email"
      placeholder="E-posta adresi"
      value={email}
      onChange={e => setEmail(e.target.value)}
    />
    <input
      style={input}
      type="password"
      placeholder="Sifre"
      value={pass}
      onChange={e => setPass(e.target.value)}
    />

    {error && (
      <div style={{ color: "#FF3B30", fontSize: 14, textAlign: "center", marginBottom: 12 }}>
        E-posta veya sifre hatali
      </div>
    )}

    <button style={btn()} onClick={() => {
      if (email === "ahmet@homeapp.com" && pass === "home2026") {
        setError(false);
        setScreen("role");
      } else {
        setError(true);
      }
    }}>
      Giris Yap
    </button>
  </div>
</div>
```

);

if (screen === “role”) return (
<div style={bg}>
<div style={phone}>
<div style={{ textAlign: “center”, marginBottom: 28, marginTop: 20 }}>
<div style={{ fontSize: 50, marginBottom: 10 }}>🏠</div>
<div style={{ fontSize: 24, fontWeight: 700, color: “#1C1C1E”, marginBottom: 6 }}>Hos Geldiniz</div>
<div style={{ fontSize: 15, color: “rgba(60,60,67,0.6)” }}>Rolunuzu secin</div>
</div>

```
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div onClick={() => { setRole("resident"); setScreen("app"); }}
        style={{ background: "rgba(255,255,255,0.65)", borderRadius: 20, padding: 20, border: "1px solid rgba(255,255,255,0.8)", cursor: "pointer", display: "flex", alignItems: "center", gap: 14, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
        <div style={{ fontSize: 40 }}>🏡</div>
        <div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#1C1C1E", marginBottom: 3 }}>Site Sakini</div>
          <div style={{ fontSize: 13, color: "rgba(60,60,67,0.6)" }}>Aidat ode, duyurulari gor</div>
        </div>
      </div>

      <div onClick={() => { setRole("manager"); setScreen("app"); }}
        style={{ background: "rgba(255,255,255,0.65)", borderRadius: 20, padding: 20, border: "1px solid rgba(255,255,255,0.8)", cursor: "pointer", display: "flex", alignItems: "center", gap: 14, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
        <div style={{ fontSize: 40 }}>⚙️</div>
        <div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#1C1C1E", marginBottom: 3 }}>Yonetici</div>
          <div style={{ fontSize: 13, color: "rgba(60,60,67,0.6)" }}>Tahsilat, gider, duyurular</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

);

if (screen === “app” && role === “resident”) return (
<div style={bg}>
<div style={phone}>
<div style={{ display: “flex”, justifyContent: “space-between”, alignItems: “center”, marginBottom: 24, marginTop: 8 }}>
<div>
<div style={{ fontSize: 13, color: “rgba(60,60,67,0.5)”, marginBottom: 3 }}>Yesilvadi Konutlari</div>
<div style={{ fontSize: 26, fontWeight: 700, color: “#1C1C1E” }}>Merhaba, Ahmet</div>
</div>
<div style={{ width: 44, height: 44, borderRadius: “50%”, background: “linear-gradient(135deg,#007AFF,#5856D6)”, display: “flex”, alignItems: “center”, justifyContent: “center”, color: “#fff”, fontWeight: 700 }}>AY</div>
</div>

```
    <div style={{ background: "rgba(255,255,255,0.65)", borderRadius: 18, padding: 20, marginBottom: 14, border: "1px solid rgba(255,255,255,0.8)" }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: "#FF3B30", letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 6 }}>Odenmemis Aidat</div>
      <div style={{ fontSize: 36, fontWeight: 700, color: "#1C1C1E", marginBottom: 4 }}>850 TL</div>
      <div style={{ fontSize: 13, color: "rgba(60,60,67,0.6)", marginBottom: 16 }}>Son odeme: 31 Mart 2026</div>
      <button style={{ ...btn(), width: "auto", padding: "11px 22px", marginBottom: 0 }}>
        Hemen Ode
      </button>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
      {[{ icon: "📢", val: 2, label: "Yeni duyuru" }, { icon: "🔧", val: 1, label: "Acik talep" }].map(s => (
        <div key={s.label} style={{ background: "rgba(255,255,255,0.65)", borderRadius: 16, padding: 16, border: "1px solid rgba(255,255,255,0.8)" }}>
          <div style={{ fontSize: 22, marginBottom: 6 }}>{s.icon}</div>
          <div style={{ fontSize: 24, fontWeight: 700, color: "#1C1C1E" }}>{s.val}</div>
          <div style={{ fontSize: 12, color: "rgba(60,60,67,0.5)", marginTop: 3 }}>{s.label}</div>
        </div>
      ))}
    </div>

    <div style={{ background: "rgba(255,255,255,0.65)", borderRadius: 16, padding: 16, marginBottom: 20, border: "1px solid rgba(255,255,255,0.8)" }}>
      <div style={{ fontSize: 15, fontWeight: 600, color: "#1C1C1E", marginBottom: 12 }}>Son Duyurular</div>
      {["Su Kesintisi - Bugun", "Asansor Bakimi - 2 gun once"].map((d, i) => (
        <div key={i} style={{ fontSize: 14, color: "rgba(60,60,67,0.7)", padding: "8px 0", borderBottom: i === 0 ? "0.5px solid rgba(0,0,0,0.08)" : "none" }}>{d}</div>
      ))}
    </div>

    <button style={{ ...btn("rgba(255,59,48,0.1)"), color: "#FF3B30", marginBottom: 0 }}
      onClick={() => setScreen("role")}>
      Rol Degistir / Cikis
    </button>
  </div>
</div>
```

);

if (screen === “app” && role === “manager”) return (
<div style={bg}>
<div style={phone}>
<div style={{ display: “flex”, justifyContent: “space-between”, alignItems: “center”, marginBottom: 24, marginTop: 8 }}>
<div>
<div style={{ fontSize: 13, color: “rgba(60,60,67,0.5)”, marginBottom: 3 }}>Yesilvadi Konutlari</div>
<div style={{ fontSize: 26, fontWeight: 700, color: “#1C1C1E” }}>Yonetim Paneli</div>
</div>
<div style={{ width: 44, height: 44, borderRadius: “50%”, background: “linear-gradient(135deg,#FF9500,#FF6B00)”, display: “flex”, alignItems: “center”, justifyContent: “center”, color: “#fff”, fontWeight: 700 }}>KA</div>
</div>

```
    <div style={{ background: "rgba(255,255,255,0.65)", borderRadius: 18, padding: 20, marginBottom: 14, border: "1px solid rgba(255,255,255,0.8)" }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: "#34C759", letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 6 }}>Cari Bakiye</div>
      <div style={{ fontSize: 36, fontWeight: 700, color: "#1C1C1E", marginBottom: 12 }}>12,650 TL</div>
      <div style={{ display: "flex", gap: 20 }}>
        {[["Tahsilat", "8,500", "#34C759"], ["Gider", "23,750", "#FF3B30"]].map(([l, v, c]) => (
          <div key={l}>
            <div style={{ fontSize: 11, color: "rgba(60,60,67,0.5)" }}>{l}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: c }}>{v} TL</div>
          </div>
        ))}
      </div>
    </div>

    <div style={{ background: "rgba(255,255,255,0.65)", borderRadius: 16, padding: 16, marginBottom: 14, border: "1px solid rgba(255,255,255,0.8)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "#1C1C1E" }}>Mart Tahsilati</div>
        <div style={{ fontSize: 22, fontWeight: 700, color: "#34C759" }}>%75</div>
      </div>
      <div style={{ height: 7, background: "rgba(0,0,0,0.08)", borderRadius: 4, overflow: "hidden" }}>
        <div style={{ height: "100%", width: "75%", background: "#34C759", borderRadius: 4 }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 7 }}>
        <span style={{ fontSize: 11, color: "#34C759" }}>9 odedi</span>
        <span style={{ fontSize: 11, color: "#FF3B30" }}>3 bekliyor</span>
      </div>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
      {[{ icon: "🏠", val: 12, label: "Toplam daire" }, { icon: "🔧", val: 2, label: "Acik talep" }].map(s => (
        <div key={s.label} style={{ background: "rgba(255,255,255,0.65)", borderRadius: 16, padding: 16, border: "1px solid rgba(255,255,255,0.8)" }}>
          <div style={{ fontSize: 22, marginBottom: 6 }}>{s.icon}</div>
          <div style={{ fontSize: 24, fontWeight: 700, color: "#1C1C1E" }}>{s.val}</div>
          <div style={{ fontSize: 12, color: "rgba(60,60,67,0.5)", marginTop: 3 }}>{s.label}</div>
        </div>
      ))}
    </div>

    <button style={{ ...btn("rgba(255,59,48,0.1)"), color: "#FF3B30", marginBottom: 0 }}
      onClick={() => setScreen("role")}>
      Rol Degistir / Cikis
    </button>
  </div>
</div>
```

);

return null;
}
