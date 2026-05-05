export type ConceptDomain = "지권" | "대기" | "해양" | "천문" | "지질 시대";

export type Concept = {
  id: string;
  title: string;
  domain: ConceptDomain;
  summary: string;
  explanation: string;
  examPoints: string[];
  misconceptions: string[];
  relatedConcepts: string[];
  tags: string[];
};
