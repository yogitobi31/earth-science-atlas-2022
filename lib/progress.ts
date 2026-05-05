export type QuestionDomain = "지권" | "대기" | "천문" | "해양" | "지질 시대";
export type ConceptStat = { correct: number; wrong: number };

export type LearningProgress = {
  completedMissions: string[];
  answeredQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  conceptStats: Record<string, ConceptStat>;
  weakConcepts: string[];
  lastStudiedAt: string | null;
  lastMissionId: string | null;
};

const STORAGE_KEY = "earth-science-atlas.progress.v1";
const emptyProgress = (): LearningProgress => ({ completedMissions: [], answeredQuestions: 0, correctAnswers: 0, wrongAnswers: 0, conceptStats: {}, weakConcepts: [], lastStudiedAt: null, lastMissionId: null });
const isBrowser = () => typeof window !== "undefined";
const computeWeakConcepts = (conceptStats: Record<string, ConceptStat>): string[] => Object.entries(conceptStats).filter(([, s]) => s.wrong > s.correct).sort((a,b)=>(b[1].wrong-b[1].correct)-(a[1].wrong-a[1].correct)).map(([id])=>id);

export function getProgress(): LearningProgress {
  if (!isBrowser()) return emptyProgress();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress();
    const parsed = JSON.parse(raw) as Partial<LearningProgress>;
    const merged: LearningProgress = { ...emptyProgress(), ...parsed, conceptStats: parsed.conceptStats ?? {}, completedMissions: parsed.completedMissions ?? [] };
    merged.weakConcepts = computeWeakConcepts(merged.conceptStats);
    return merged;
  } catch { return emptyProgress(); }
}

export function saveProgress(progress: LearningProgress) {
  if (!isBrowser()) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...progress, weakConcepts: computeWeakConcepts(progress.conceptStats) }));
}

export function recordAnswer(_questionId: string, conceptId: string, missionId: string, isCorrect: boolean) {
  const progress = getProgress();
  const stat = progress.conceptStats[conceptId] ?? { correct: 0, wrong: 0 };
  progress.answeredQuestions += 1;
  if (isCorrect) { progress.correctAnswers += 1; stat.correct += 1; } else { progress.wrongAnswers += 1; stat.wrong += 1; }
  progress.conceptStats[conceptId] = stat;
  progress.lastMissionId = missionId;
  progress.lastStudiedAt = new Date().toISOString().slice(0,10);
  if (!progress.completedMissions.includes(missionId)) progress.completedMissions.push(missionId);
  progress.weakConcepts = computeWeakConcepts(progress.conceptStats);
  saveProgress(progress);
}

export function getWeakConcepts() { return getProgress().weakConcepts; }
export function resetProgress() { if (isBrowser()) window.localStorage.removeItem(STORAGE_KEY); }
