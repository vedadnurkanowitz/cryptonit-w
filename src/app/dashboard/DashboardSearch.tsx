"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import styles from "./Dashboard.module.css";

export default function DashboardSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <div className={styles.searchWrapper}>
      <Search className={styles.searchIcon} size={18} />
      <input
        type="text"
        placeholder="Search assets..."
        className={styles.searchInput}
        defaultValue={searchParams.get("search") || ""}
        onChange={(e) => {
          const term = e.target.value;
          if (term) {
            router.push(`/dashboard?search=${encodeURIComponent(term)}`);
          } else {
            router.push("/dashboard");
          }
        }}
      />
    </div>
  );
}
