import { Suspense } from "react";
import SearchBar from "@/components/SearchBar";
import SearchResult from "@/components/SearchResult";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <Suspense fallback={<div>Loading search bar...</div>}>
        <SearchBar />
      </Suspense>
      <Suspense fallback={<div>Loading results...</div>}>
        <SearchResult />
      </Suspense>
    </main>
  );
}
