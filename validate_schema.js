const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://dogukanturan.com.tr/#person",
      "name": "Doğukan Turan",
      "alternateName": "dogukanturan",
      "jobTitle": "Yazılım Uzmanı ve ERP Sistem Yöneticisi",
      "description": "Sanayi ve üretim şirketleri için kurumsal ERP, üretim yönetimi (MES) ve süreç otomasyonu sistemleri geliştiren yazılım uzmanı.",
      "url": "https://dogukanturan.com.tr",
      "email": "dogukanturan67@gmail.com",
      "telephone": "+905340719640",
      "nationality": "TR",
      "address": { "@type": "PostalAddress", "addressCountry": "TR" },
      "knowsAbout": ["ERP", "Manufacturing Execution Systems", "Üretim Takip Sistemi", "Python", "Flask", "Microsoft SQL Server", "Süreç Otomasyonu", "Lazer Kesim Yazılımı", "DXF", "Yapay Zekâ Entegrasyonu"],
      "knowsLanguage": ["tr", "en"],
      "sameAs": ["https://www.linkedin.com/in/dogukanturan67/", "https://github.com/dogukanturan1"]
    },
    {
      "@type": "WebSite",
      "@id": "https://dogukanturan.com.tr/#website",
      "url": "https://dogukanturan.com.tr",
      "name": "Doğukan Turan — Yazılım Uzmanı ve ERP Sistem Yöneticisi",
      "inLanguage": "tr",
      "publisher": { "@id": "https://dogukanturan.com.tr/#person" }
    },
    {
      "@type": "Service",
      "@id": "https://dogukanturan.com.tr/#services",
      "serviceType": "Kurumsal yazılım geliştirme",
      "provider": { "@id": "https://dogukanturan.com.tr/#person" },
      "areaServed": "TR",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Hizmetler",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kurumsal ERP geliştirme" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Üretim ve MES sistemleri" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobil ve web uygulamaları" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Süreç otomasyonu" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Yapay zekâ entegrasyonu" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Veri ve raporlama çözümleri" } }
        ]
      }
    }
  ]
};

console.log("Schema.org JSON-LD Structure Analysis:");
console.log("========================================\n");

// Check @graph property
console.log("1. @graph validity:", schema["@graph"] ? "✓ Present" : "✗ Missing");
console.log("   Items in @graph:", schema["@graph"].length);

// Check Person object
const person = schema["@graph"][0];
console.log("\n2. Person object:");
console.log("   - @type:", person["@type"], "✓");
console.log("   - @id:", person["@id"] ? "✓" : "✗");
console.log("   - name:", person.name ? "✓" : "✗");
console.log("   - jobTitle:", person.jobTitle ? "✓" : "✗");
console.log("   - image:", person.image ? "✓ Present" : "✗ MISSING - will affect Knowledge Panel");

// Check WebSite
const website = schema["@graph"][1];
console.log("\n3. WebSite object:");
console.log("   - @type:", website["@type"], "✓");
console.log("   - name:", website.name ? "✓" : "✗");
console.log("   - potentialAction:", website.potentialAction ? "✓" : "✗ (search action optional but recommended)");

// Check Service
const service = schema["@graph"][2];
console.log("\n4. Service object:");
console.log("   - @type:", service["@type"], "✓");
console.log("   - provider reference:", service.provider ? "✓" : "✗");
console.log("   - hasOfferCatalog.itemListElement count:", service.hasOfferCatalog?.itemListElement?.length || 0);

console.log("\n========================================");
console.log("WARNINGS:");
console.log("- Person missing 'image' property (impacts Knowledge Panel appearance)");
console.log("- WebSite should optionally include 'potentialAction' for search");
