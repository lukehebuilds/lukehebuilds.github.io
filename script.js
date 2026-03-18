const expertiseAreas = [
  {
    id: "core-resources",
    name: "Core Resources",
    proficiency: "Anchor",
    description: "The strategic reference layer of the workspace, centered on the wiki, mapping resources, and the digital plan.",
    focus: "Keep source knowledge close to campaign execution.",
    strengthArea: "Turns scattered references into a stable starting point.",
    useCase: "Wiki lookup, planning reference, and campaign context alignment.",
    relatedToolIds: ["wiki", "mapp", "digital-plan"],
  },
  {
    id: "collaboration-tools",
    name: "Collaboration & Tools",
    proficiency: "Active",
    description: "Working pages that hold shared notes, reusable references, and execution support material.",
    focus: "Reduce context switching while campaigns are live.",
    strengthArea: "Supports shared execution instead of isolated note taking.",
    useCase: "Cross-team coordination, working notes, and quick-reference materials.",
    relatedToolIds: ["collaborate-page", "vault", "random-writing", "list-page"],
  },
  {
    id: "learning-skills",
    name: "Learning & Skills",
    proficiency: "Deep",
    description: "A large archive spanning marketing, strategy, technical topics, design, communication, and Notion.",
    focus: "Keep capability building adjacent to the real work.",
    strengthArea: "Shows the role growing through deliberate study and tooling.",
    useCase: "Skill refresh, strategic study, and technical context for campaigns.",
    relatedToolIds: ["organic-social", "sem", "seo-page", "strategy-page", "design-page", "notion-page"],
  },
  {
    id: "projects",
    name: "Projects & Brain Dump",
    proficiency: "Live",
    description: "A project database used as the workspace scratchpad for in-flight initiatives, fixes, and experiments.",
    focus: "Make unfinished ideas visible enough to become execution.",
    strengthArea: "Bridges thinking, troubleshooting, and delivery.",
    useCase: "Project capture, work-in-progress tracking, and operational problem solving.",
    relatedToolIds: ["projects-db", "webinar-ai-enrich"],
  },
  {
    id: "content-production",
    name: "Content Production",
    proficiency: "Output",
    description: "The publishing layer of the workspace: social posts, newsletter, blog, KB, video, streaming, proposals, and research.",
    focus: "Translate technical knowledge into outward-facing marketing formats.",
    strengthArea: "Organizes production by output type instead of mixing everything together.",
    useCase: "Editorial planning, campaign assets, research packaging, and production support.",
    relatedToolIds: ["social-posts", "newsletter", "blog", "kb", "video-making", "research-page"],
  },
  {
    id: "paid-media",
    name: "Paid Media Channels",
    proficiency: "Execution",
    description: "A dedicated lane for paid social, Google/Bing Ads, agency coordination, and Baidu Ads.",
    focus: "Give channel builds their own documentation layer.",
    strengthArea: "Makes acquisition work easier to revisit, localize, and improve.",
    useCase: "Paid media builds, channel drafts, and market-specific acquisition planning.",
    relatedToolIds: ["paid-social-page", "bing-google-ads", "agency-page", "baidu-ads"],
  },
  {
    id: "prompt-library",
    name: "Prompt Library",
    proficiency: "Reusable",
    description: "An inline prompt database that turns repetitive marketing tasks into reusable AI instructions.",
    focus: "Preserve prompting logic for faster repeat execution.",
    strengthArea: "Supports the workflow-first, AI-assisted side of the role.",
    useCase: "Prompt reuse, drafting acceleration, and campaign assistance.",
    relatedToolIds: ["prompt-db", "webinar-prompts", "anti-repetition-system"],
  },
];

const tools = [
  {
    id: "wiki",
    name: "Blf - Wiki",
    category: "Core Resource",
    description: "The main knowledge base behind the workspace.",
    useCase: "Reference material for product, campaign, and operating context.",
    expertiseIds: ["core-resources"],
  },
  {
    id: "mapp",
    name: "mapp",
    category: "Core Resource",
    description: "A linked support page surfaced directly from the workspace home page.",
    useCase: "Supplementary mapping or planning material.",
    expertiseIds: ["core-resources"],
  },
  {
    id: "digital-plan",
    name: "2025 Digital Plan",
    category: "Core Resource",
    description: "Strategic planning material connected to the BLF workspace.",
    useCase: "Longer-range digital planning and direction.",
    expertiseIds: ["core-resources"],
  },
  {
    id: "collaborate-page",
    name: "Collaborate Page",
    category: "Collaboration",
    description: "Shared execution layer connecting operational pages and marketing work.",
    useCase: "Coordination for active campaign tasks.",
    expertiseIds: ["collaboration-tools"],
  },
  {
    id: "vault",
    name: "Vault",
    category: "Collaboration",
    description: "A reference-heavy page inside the collaboration cluster.",
    useCase: "Stored notes, links, and reusable material.",
    expertiseIds: ["collaboration-tools"],
  },
  {
    id: "random-writing",
    name: "Random Writing Improve",
    category: "Collaboration",
    description: "A working page for drafting and language refinement.",
    useCase: "Writing support and iteration.",
    expertiseIds: ["collaboration-tools"],
  },
  {
    id: "list-page",
    name: "List",
    category: "Collaboration",
    description: "A list-style page acting as a quick inventory of linked material.",
    useCase: "Fast navigation and cataloging.",
    expertiseIds: ["collaboration-tools"],
  },
  {
    id: "organic-social",
    name: "Organic Social",
    category: "Learning",
    description: "A learning page focused on organic content and social planning.",
    useCase: "Reference material for social strategy.",
    expertiseIds: ["learning-skills"],
  },
  {
    id: "sem",
    name: "SEM",
    category: "Learning",
    description: "A search-engine-marketing learning page inside the archive.",
    useCase: "Search marketing study and working reference.",
    expertiseIds: ["learning-skills"],
  },
  {
    id: "seo-page",
    name: "SEO",
    category: "Learning",
    description: "A page dedicated to search visibility knowledge.",
    useCase: "SEO reference and content planning support.",
    expertiseIds: ["learning-skills"],
  },
  {
    id: "strategy-page",
    name: "Strategy",
    category: "Learning",
    description: "Strategy notes and planning material kept within the workspace.",
    useCase: "Strategic framing and message thinking.",
    expertiseIds: ["learning-skills"],
  },
  {
    id: "design-page",
    name: "Design",
    category: "Learning",
    description: "A creative reference page in the extended skills archive.",
    useCase: "Design inspiration and visual support.",
    expertiseIds: ["learning-skills"],
  },
  {
    id: "notion-page",
    name: "Notion",
    category: "Learning",
    description: "A page about Notion itself as a platform in the workflow.",
    useCase: "Process improvement and documentation craft.",
    expertiseIds: ["learning-skills"],
  },
  {
    id: "projects-db",
    name: "Projects",
    category: "Project Tracking",
    description: "Inline database for current ideas, experiments, and active work.",
    useCase: "Track in-flight projects and unresolved questions.",
    expertiseIds: ["projects"],
  },
  {
    id: "webinar-ai-enrich",
    name: "Teams Webinar Registration AI Enrich",
    category: "Project Tracking",
    description: "A project exploring AI-based enrichment for incomplete webinar registration data.",
    useCase: "Workflow improvement for webinar lead handling.",
    expertiseIds: ["projects", "prompt-library"],
  },
  {
    id: "social-posts",
    name: "Social Posts",
    category: "Content Production",
    description: "Dedicated page for social assets and messaging drafts.",
    useCase: "Social publishing and campaign copy support.",
    expertiseIds: ["content-production"],
  },
  {
    id: "newsletter",
    name: "Newsletter",
    category: "Content Production",
    description: "A page for newsletter planning and publication work.",
    useCase: "Recurring email-style content and updates.",
    expertiseIds: ["content-production"],
  },
  {
    id: "blog",
    name: "Blog",
    category: "Content Production",
    description: "A home for longer-form editorial and campaign-support content.",
    useCase: "Blog drafting and content packaging.",
    expertiseIds: ["content-production"],
  },
  {
    id: "kb",
    name: "KB",
    category: "Content Production",
    description: "Knowledge-base style content for reusable information.",
    useCase: "Reference content and evergreen documentation.",
    expertiseIds: ["content-production"],
  },
  {
    id: "video-making",
    name: "Video Making",
    category: "Content Production",
    description: "A production page for video assets tied to marketing work.",
    useCase: "Video planning and execution support.",
    expertiseIds: ["content-production"],
  },
  {
    id: "research-page",
    name: "Research",
    category: "Content Production",
    description: "Research material that informs topics and production quality.",
    useCase: "Topic discovery and supporting evidence.",
    expertiseIds: ["content-production"],
  },
  {
    id: "paid-social-page",
    name: "Paid Social",
    category: "Paid Media",
    description: "A page containing campaign copy, lead-gen offers, and product-focused paid social drafts.",
    useCase: "Paid social asset development and reuse.",
    expertiseIds: ["paid-media"],
  },
  {
    id: "bing-google-ads",
    name: "Bing/Google Ads",
    category: "Paid Media",
    description: "The paid search area for keyword planning and campaign setup.",
    useCase: "Search campaign structure and build notes.",
    expertiseIds: ["paid-media"],
  },
  {
    id: "agency-page",
    name: "Agency",
    category: "Paid Media",
    description: "A page likely used for agency coordination or oversight.",
    useCase: "External partner alignment and handoff support.",
    expertiseIds: ["paid-media"],
  },
  {
    id: "baidu-ads",
    name: "Baidu Ads",
    category: "Paid Media",
    description: "A localized paid media lane for China-relevant acquisition work.",
    useCase: "Regional search and media planning.",
    expertiseIds: ["paid-media"],
  },
  {
    id: "prompt-db",
    name: "Prompt Database",
    category: "AI Workflow",
    description: "Inline database for reusable prompts connected to the workspace.",
    useCase: "Prompt retrieval and repeatable task acceleration.",
    expertiseIds: ["prompt-library"],
  },
  {
    id: "webinar-prompts",
    name: "Webinar Prompt Work",
    category: "AI Workflow",
    description: "Prompt patterns for webinar invitations, reminders, and social drafts.",
    useCase: "Reuse prompt structures for event marketing.",
    expertiseIds: ["prompt-library"],
  },
  {
    id: "anti-repetition-system",
    name: "Invitation Anti-Repetition System",
    category: "AI Workflow",
    description: "A systemized prompt workflow to avoid repetitive webinar invitation copy.",
    useCase: "Keep writing varied while staying fast.",
    expertiseIds: ["prompt-library"],
  },
];

const filterContainer = document.querySelector("#expertise-filters");
const expertiseGrid = document.querySelector("#expertise-grid");
const toolsGrid = document.querySelector("#tools-grid");

let activeFilter = "all";

function createFilterButtons() {
  const filters = [{ id: "all", name: "All" }, ...expertiseAreas.map(({ id, name }) => ({ id, name }))];

  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-chip";
    button.textContent = filter.name;
    button.setAttribute("aria-pressed", String(filter.id === activeFilter));
    button.dataset.filter = filter.id;
    button.addEventListener("click", () => {
      activeFilter = filter.id;
      updateActiveFilter();
      renderCards();
    });
    filterContainer.appendChild(button);
  });
}

function matchesActiveFilter(itemExpertiseIds) {
  return activeFilter === "all" || itemExpertiseIds.includes(activeFilter);
}

function expertiseCardTemplate(item) {
  return `
    <article class="spectrum-card${matchesActiveFilter([item.id]) ? "" : " is-hidden"}" data-expertise="${item.id}">
      <div class="card-topline">
        <span class="pill">${item.proficiency}</span>
        <span class="pill">${item.relatedToolIds.length} linked pages</span>
      </div>
      <div>
        <h3 class="card-title">${item.name}</h3>
        <p>${item.description}</p>
      </div>
      <div class="meta-stack">
        <div class="meta-item">
          <span class="meta-label">Focus</span>
          <strong>${item.focus}</strong>
        </div>
        <div class="meta-item">
          <span class="meta-label">Strength Area</span>
          <strong>${item.strengthArea}</strong>
        </div>
        <div class="meta-item">
          <span class="meta-label">Common Use Case</span>
          <strong>${item.useCase}</strong>
        </div>
      </div>
    </article>
  `;
}

function toolCardTemplate(item) {
  const linkedHubs = item.expertiseIds
    .map((expertiseId) => expertiseAreas.find(({ id }) => id === expertiseId)?.name)
    .filter(Boolean)
    .join(", ");

  return `
    <article class="spectrum-card${matchesActiveFilter(item.expertiseIds) ? "" : " is-hidden"}" data-tool="${item.id}">
      <div class="card-topline">
        <span class="pill">${item.category}</span>
      </div>
      <div>
        <h3 class="card-title">${item.name}</h3>
        <p>${item.description}</p>
      </div>
      <div class="meta-stack">
        <div class="meta-item">
          <span class="meta-label">Common Use Case</span>
          <strong>${item.useCase}</strong>
        </div>
        <div class="meta-item">
          <span class="meta-label">Linked Hub</span>
          <strong>${linkedHubs}</strong>
        </div>
      </div>
    </article>
  `;
}

function renderCards() {
  expertiseGrid.innerHTML = expertiseAreas.map(expertiseCardTemplate).join("");
  toolsGrid.innerHTML = tools.map(toolCardTemplate).join("");
}

function updateActiveFilter() {
  filterContainer.querySelectorAll(".filter-chip").forEach((button) => {
    const isActive = button.dataset.filter === activeFilter;
    button.setAttribute("aria-pressed", String(isActive));
  });
}

createFilterButtons();
renderCards();
