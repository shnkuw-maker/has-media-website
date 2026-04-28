export default function Home() {
  return (
    <main style={{ padding: 20, fontFamily: "Arial", direction: "rtl", background: "#f7f5f2" }}>
      
      <div style={{ maxWidth: 900, margin: "auto", background: "#fff", borderRadius: 20, padding: 20 }}>
        
        <h1 style={{ textAlign: "center", color: "#c89b3c" }}>
          HAS MEDIA ADS COMPANY
        </h1>

        <h2 style={{ textAlign: "center", color: "#c44b2a" }}>
          شركة هاس ميديا للدعاية والإعلان
        </h2>

        <p style={{ textAlign: "center", color: "#666" }}>
          حلول إعلانية متكاملة بهوية مؤسسية رسمية
        </p>

        <hr />

        <h3 style={{ textAlign: "center", marginTop: 30 }}>خدماتنا</h3>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 15 }}>
          
          <div>التصميم</div>
          <div>إعلانات الصحف</div>
          <div>إدارة السوشيال ميديا</div>
          <div>التصوير الاحترافي</div>
          <div>تنظيم الفعاليات</div>
          <div>الإعلانات الخارجية</div>
          <div>الطباعة التجارية</div>
          <div>الخطة الإعلامية</div>

        </div>

        <hr />

        <h3 style={{ textAlign: "center" }}>تواصل معنا</h3>

        <p style={{ textAlign: "center" }}>
          واتساب: 96555859392+
        </p>

      </div>

    </main>
  );
}
