import { redirect } from "next/navigation";

// Today is the default landing per the design doc's §6 screen table.
export default function Home() {
  redirect("/today");
}
