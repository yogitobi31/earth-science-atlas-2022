import { concepts } from "@/data/concepts";
import type { Concept, ConceptDomain } from "@/types";
import ConceptsClient from "./ConceptsClient";

export default async function ConceptsPage({ searchParams }: { searchParams: Promise<{ domain?: string }> }) {
  const params = await searchParams;
  const domain = params.domain as ConceptDomain | undefined;
  return <ConceptsClient concepts={concepts} initialDomain={domain} />;
}
