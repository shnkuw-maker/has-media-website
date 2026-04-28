export function LanguageToggle() {
  return (
    <div style={{
      display: "flex",
      border: "1px solid #e6d3a3",
      borderRadius: 50,
      padding: 5,
      width: 120,
      justifyContent: "space-between"
    }}>
      <span style={{padding:"6px 12px"}}>EN</span>
      <span style={{
        background:"#caa63c",
        color:"white",
        borderRadius:40,
        padding:"6px 12px"
      }}>
        AR
      </span>
    </div>
  );
}
