import { fw } from "./framework";
import { verticals } from "./verticals";
import { stories } from "./stories";

// ─── SLIDE DATA (auto-generated from messaging hierarchy) ─────────────────────
function generateMockSlides() {
  const out = [];
  let counter = 0;
  const mid = () => `s-${++counter}`;

  // Company slide
  out.push({ id: mid(), title: fw.company.headline, type: "company", productId: null, initiativeId: null, useCaseIndex: null, verticals: ["general"], subtitle: fw.company.tagline });

  // Solution slide
  out.push({ id: mid(), title: fw.solutionCategory.headline, type: "solution", productId: null, initiativeId: null, useCaseIndex: null, verticals: ["general"], subtitle: fw.solutionCategory.tagline });

  // Pillar slides
  fw.solutionCategory.pillars.forEach(p => {
    out.push({ id: mid(), title: p.label, type: "solution", productId: null, initiativeId: null, useCaseIndex: null, verticals: ["general"], subtitle: "Architectural pillar" });
  });

  // General products, initiatives, use cases
  fw.products.forEach(prod => {
    out.push({ id: mid(), title: prod.name, type: "product", productId: prod.id, initiativeId: null, useCaseIndex: null, verticals: ["general"], subtitle: prod.tagline });
    prod.initiatives.forEach(init => {
      out.push({ id: mid(), title: init.name, type: "initiative", productId: prod.id, initiativeId: init.id, useCaseIndex: null, verticals: ["general"], subtitle: init.tagline });
      init.projects.forEach((proj, idx) => {
        out.push({ id: mid(), title: proj.name, type: "useCase", productId: prod.id, initiativeId: init.id, useCaseIndex: idx, verticals: ["general"], subtitle: proj.detail.slice(0, 80) });
      });
    });
  });

  // Vertical-specific slides
  Object.entries(verticals).forEach(([vKey, vData]) => {
    if (vKey === "general" || !vData.products) return;
    vData.products.forEach(prod => {
      prod.initiatives.forEach(init => {
        out.push({ id: mid(), title: init.name, type: "initiative", productId: prod.id, initiativeId: init.id, useCaseIndex: null, verticals: [vKey], subtitle: init.tagline });
        init.projects.forEach((proj, idx) => {
          out.push({ id: mid(), title: proj.name, type: "useCase", productId: prod.id, initiativeId: init.id, useCaseIndex: idx, verticals: [vKey], subtitle: proj.detail.slice(0, 80) });
        });
      });
    });
  });

  return out;
}
export const allSlides = generateMockSlides();

// ─── STORY SLIDES (3 per story: title, solution, outcome) ──────────────────────
(function generateStorySlides() {
  let sc = 200;
  stories.forEach(story => {
    const ids = [];
    const base = { type: "story", storyId: story.id, productId: story.tags.products[0] || null, initiativeId: story.tags.initiatives[0] || null, useCaseIndex: null, verticals: [story.industry] };

    // Title slide
    const titleId = `ss-${++sc}`;
    allSlides.push({ ...base, id: titleId, title: story.customer, subtitle: story.summary, storySlideVariant: "title", storyCustomer: story.customer, storyIndustry: story.industry, storyMetrics: story.metrics });
    ids.push(titleId);

    // Solution slide
    const solId = `ss-${++sc}`;
    allSlides.push({ ...base, id: solId, title: `${story.customer} — Solution`, subtitle: story.solution.slice(0, 120), storySlideVariant: "solution", storyCustomer: story.customer, storyIndustry: story.industry, storySolutionText: story.solution, storyProducts: story.tags.products, storyInitiatives: story.tags.initiatives });
    ids.push(solId);

    // Outcome slide
    const outId = `ss-${++sc}`;
    allSlides.push({ ...base, id: outId, title: `${story.customer} — Outcome`, subtitle: story.outcome.slice(0, 120), storySlideVariant: "outcome", storyCustomer: story.customer, storyIndustry: story.industry, storyMetrics: story.metrics, storyOutcomeText: story.outcome });
    ids.push(outId);

    story.storySlideIds = ids;
  });
})();

