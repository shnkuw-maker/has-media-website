export default function Home() {
  return (
    <main dir="rtl" style={{
      minHeight: "100vh",
      background: "#f7f1e7",
      padding: "22px",
      fontFamily: "Arial, sans-serif",
      color: "#6f6358"
    }}>
      <header style={{
        height: 86,
        background: "white",
        borderRadius: 28,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 28px",
        boxShadow: "0 18px 40px rgba(120,90,45,.08)",
        marginBottom: 28
      }}>
        <div style={{
          display: "flex",
          direction: "ltr",
          border: "1px solid #eadbbd",
          borderRadius: 50,
          padding: 7,
          gap: 8
        }}>
          <span style={{padding:"10px 18px"}}>EN</span>
          <span style={{padding:"10px 18px", background:"#c9a33a", color:"white", borderRadius:40}}>AR</span>
        </div>

        <div style={{color:"#c0932f", fontWeight:900, textAlign:"center"}}>
          HAS<br/><small>MEDIA ADS COMPANY</small>
        </div>
      </header>

      <section style={{
        background: "white",
        borderRadius: 34,
        minHeight: 760,
        padding: "95px 28px 70px",
        textAlign: "center",
        boxShadow: "0 20px 45px rgba(120,90,45,.08)",
        border: "1px solid #f0e3cc"
      }}>
        <div style={{
          color:"#c0932f",
          fontSize:64,
          fontWeight:900,
          lineHeight:.9,
          marginBottom:70
        }}>
          HAS<br/>
          <small style={{fontSize:13, letterSpacing:2}}>MEDIA ADS COMPANY</small>
        </div>

        <div style={{
          width:120,
          height:2,
          background:"#d8c089",
          margin:"0 auto 55px"
        }} />

        <p style={{
          color:"#b9943a",
          letterSpacing:8,
          fontSize:18,
          lineHeight:2
        }}>
          HAS MEDIA · شركة دعاية وإعلان · الكويت
        </p>

        <h1 style={{
          color:"#c97056",
          fontSize:42,
          lineHeight:1.7,
          fontWeight:900,
          margin:"40px 0 35px"
        }}>
          شركة هاس ميديا<br/>
          للدعاية والإعلان
        </h1>

        <p style={{
          fontSize:22,
          lineHeight:2,
          color:"#8a8178",
          marginBottom:45
        }}>
          حلول إعلانية متكاملة بهوية مؤسسية رسمية
        </p>

        <p style={{
          fontSize:23,
          lineHeight:2.25,
          maxWidth:650,
          margin:"0 auto",
          color:"#756d65"
        }}>
          تقدم HAS MEDIA حلولاً متكاملة في الدعاية والإعلان
          والتصميم والتخطيط الإعلامي، مع تنفيذ احترافي
          يواكب احتياجات الشركات والمؤسسات في الكويت.
        </p>
      </section>
    </main>
  );
}
