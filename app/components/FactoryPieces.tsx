import { createComponent } from "./Factory";

export const JobBoards = createComponent({
    name: "Job Boards",
    initialCost: 15,
    incrementRate: 1.15,
    threshold: 30,
    timerRate: (quantity) => (quantity > 0 ? 1000 / quantity : 1000),
});

export const Recruiters = createComponent({
    name: "Recruiters",
    initialCost: 75,
    incrementRate: 1.14,
    threshold: 100,
    timerRate: (quantity) => (quantity > 0 ? 199 / quantity : 1000),
});

export const Resumes = createComponent({
    name: "Resumes",
    initialCost: 400,
    incrementRate: 1.2,
    threshold: 500,
    timerRate: (quantity) => (quantity > 0 ? 39 / quantity : 1000),
});

export const CoverLetters = createComponent({
    name: "Cover Letters",
    initialCost: 1900,
    incrementRate: 1.35,
    threshold: 2300,
    timerRate: (quantity) => (quantity > 0 ? 6 / quantity : 1000),
});