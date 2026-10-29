import type { Metadata } from "next";
import DetailPage from "@/components/DetailPage";
import { sonyLogistics } from "@/data/experience/sony-logistics";

export const metadata: Metadata = {
  title: "Sony Logistics | Bikash Shaw",
  description: "Software Engineer at Sony Logistics, September 2026–Present.",
};

export default function SonyLogisticsPage() {
  return <DetailPage kind="experience" item={sonyLogistics} />;
}
