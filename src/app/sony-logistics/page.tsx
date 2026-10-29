import DetailPage from "@/components/DetailPage";
import { sonyLogistics } from "@/data/experience/sony-logistics";
import { pageMetadata, absoluteUrl } from "@/lib/seo";
import { breadcrumbSchema, personId, websiteId } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";

const description =
  "Bikash Shaw's software engineering work at Sony Logistics: fleet management for 7 vendors and 30+ trucks, role-based portals, billing, and CI/CD.";

export const metadata = pageMetadata({
  title: "Sony Logistics Experience | Bikash Shaw",
  description,
  path: "/sony-logistics",
});

export default function SonyLogisticsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": absoluteUrl("/sony-logistics#webpage"),
              url: absoluteUrl("/sony-logistics"),
              name: "Sony Logistics — Software Engineer Experience",
              description,
              author: { "@id": personId },
              isPartOf: { "@id": websiteId },
              about: {
                "@type": "Organization",
                name: sonyLogistics.title,
                url: sonyLogistics.link,
              },
            },
            breadcrumbSchema(sonyLogistics.title, "/sony-logistics"),
          ],
        }}
      />
      <DetailPage kind="experience" item={sonyLogistics} />
    </>
  );
}
