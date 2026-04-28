import { HasLogo } from "../components/has-logo";
import { LanguageToggle } from "../components/language-toggle";
import { SectionHeading } from "../components/section-heading";
import { siteContent } from "../components/site-content";

export default function Home() {
  return (
    <main dir="rtl" style={{
      background: "#f7f1e7",
      minHeight: "100vh",
      padding: 20,
      fontFamily: "Arial"
    }}>

      {/* HEADER */}
      <div style={{
        background: "#fff",
        borderRadius: 30,
        padding: "15px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
      }}>
        <LanguageToggle />
        <HasLogo />
      </div>

      {/* MAIN CARD */}
      <div style={{
        background: "#fff",
        borderRadius: 30,
        marginTop: 20,
        padding: 40,
        textAlign: "center",
        boxShadow: "0 15px 40px rgba(0,0,0,0.05)"
      }}>

        <HasLogo />

        <div style={{
          height: 2,
          width: 120,
          background: "#d4b16a",
          margin: "25px auto"
        }} />

        <p style={{
          color: "#b79a5b",
          letterSpacing: 5
        }}>
          HAS MEDIA · شركة دعاية وإعلان · الكويت
        </p>

        <h1 style={{
          color: "#c56c55",
          fontSize: 34,
          margin: "20px 0"
        }}>
          {siteContent.title}
        </h1>

        <p style={{
          color: "#777",
          fontSize: 18
        }}>
          {siteContent.subtitle}
        </p>

        <p style={{
          marginTop: 20,
          lineHeight: 2,
          color: "#666"
        }}>
          تقدم HAS MEDIA حلولاً متكاملة في الدعاية والإعلان
          والتصميم والتخطيط الإعلامي، مع تنفيذ احترافي
          يواكب احتياجات الشركات والمؤسسات في الكويت.
        </p>

      </div>

    </main>
  );
}
