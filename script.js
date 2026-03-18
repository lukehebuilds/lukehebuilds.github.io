const expertiseAreas = [
  {
    id: "content",
    name: "Content",
    proficiency: "Advanced",
    description: "Editorial planning, content systems, and campaign messaging shaped for brand and conversion goals.",
    focus: "Planning message architecture and content formats across the funnel.",
    strengthArea: "Bridging brand narrative with channel-specific execution.",
    useCase: "Campaign concepts, content calendars, landing page copy, and asset briefs.",
    relatedToolIds: ["canva", "chatgpt", "hubspot", "html-css", "vibe-coding"],
  },
  {
    id: "social-media",
    name: "Social Media",
    proficiency: "Advanced",
    description: "Organic social planning with platform-aware content, publishing rhythm, and audience engagement intent.",
    focus: "Matching content strategy to platform behavior and community response.",
    strengthArea: "Turning campaign themes into repeatable social systems.",
    useCase: "Brand storytelling, post planning, social content adaptation, and channel management.",
    relatedToolIds: ["canva", "chatgpt", "meta-suite", "hubspot"],
  },
  {
    id: "paid-social",
    name: "Paid Social",
    proficiency: "Advanced",
    description: "Audience testing, creative iteration, and paid social optimization across campaign stages.",
    focus: "Translating audience insights into scalable paid distribution.",
    strengthArea: "Creative-performance feedback loops for efficient optimization.",
    useCase: "Prospecting, retargeting, creative testing, and performance reporting.",
    relatedToolIds: ["meta-ads", "tiktok-ads", "ga4", "looker-studio", "chatgpt"],
  },
  {
    id: "paid-search",
    name: "Paid Search",
    proficiency: "Advanced",
    description: "Search intent mapping, keyword strategy, ad structure, and landing page alignment.",
    focus: "Capturing demand with clear offer positioning and strong query intent control.",
    strengthArea: "Turning performance data into structured campaign improvements.",
    useCase: "Search acquisition, conversion-led campaigns, and intent-based testing.",
    relatedToolIds: ["google-ads", "ga4", "looker-studio", "html-css"],
  },
  {
    id: "edm",
    name: "EDM / Email Marketing",
    proficiency: "Advanced",
    description: "Lifecycle messaging, list segmentation, automation logic, and email content optimization.",
    focus: "Building useful, timely email journeys instead of isolated blasts.",
    strengthArea: "Balancing CRM hygiene, copywriting, and trigger-based automation.",
    useCase: "Welcome flows, nurture sequences, reactivation, and promotional sends.",
    relatedToolIds: ["hubspot", "mailchimp", "chatgpt", "canva"],
  },
  {
    id: "seo",
    name: "SEO",
    proficiency: "Working",
    description: "Search visibility foundations through on-page structure, content alignment, and technical awareness.",
    focus: "Improving discoverability through content quality and site clarity.",
    strengthArea: "Coordinating content intent with site structure and keyword targets.",
    useCase: "On-page optimization, content briefs, metadata, and search-driven page planning.",
    relatedToolIds: ["ga4", "search-console", "chatgpt", "html-css"],
  },
  {
    id: "analytics",
    name: "Analytics",
    proficiency: "Advanced",
    description: "Measurement setup, reporting logic, and interpretation of campaign and lifecycle signals.",
    focus: "Separating noise from useful performance direction.",
    strengthArea: "Making channel data legible for decisions and next actions.",
    useCase: "Dashboards, KPI tracking, attribution discussions, and optimization reviews.",
    relatedToolIds: ["ga4", "looker-studio", "python"],
  },
  {
    id: "automation",
    name: "Marketing Automation",
    proficiency: "Advanced",
    description: "Workflow design that connects CRM, email, forms, content, and reporting processes.",
    focus: "Reducing manual work and improving consistency across touchpoints.",
    strengthArea: "Combining platform logic with practical marketing operations.",
    useCase: "Lead routing, follow-up sequences, lifecycle triggers, and internal workflows.",
    relatedToolIds: ["hubspot", "python", "chatgpt", "vibe-coding"],
  },
];

const tools = [
  {
    id: "canva",
    name: "Canva",
    category: "Creative Production",
    description: "Fast asset design for social, email, and campaign support materials.",
    useCase: "Campaign visuals, social content, and presentation-ready marketing assets.",
    expertiseIds: ["content", "social-media", "edm"],
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "AI Workflow",
    description: "Idea expansion, draft generation, prompt-based workflow support, and analysis assistance.",
    useCase: "Content ideation, copy variants, research synthesis, and workflow acceleration.",
    expertiseIds: ["content", "social-media", "paid-social", "edm", "seo", "automation"],
  },
  {
    id: "hubspot",
    name: "HubSpot",
    category: "CRM and Automation",
    description: "Campaign operations, email workflows, segmentation, and lifecycle orchestration.",
    useCase: "Lead management, nurture flows, forms, lists, and reporting.",
    expertiseIds: ["content", "social-media", "edm", "automation"],
  },
  {
    id: "python",
    name: "Python",
    category: "Data and Automation",
    description: "Light scripting for reporting cleanup, data handling, and workflow experimentation.",
    useCase: "Data formatting, small automations, and repetitive task reduction.",
    expertiseIds: ["analytics", "automation"],
  },
  {
    id: "html-css",
    name: "HTML / CSS",
    category: "Web Production",
    description: "Landing page structure, content formatting, and front-end presentation control.",
    useCase: "Campaign pages, content layouts, and basic web customization.",
    expertiseIds: ["content", "paid-search", "seo"],
  },
  {
    id: "vibe-coding",
    name: "Vibe Coding",
    category: "Rapid Prototyping",
    description: "Practical no-friction making for quick prototypes, experiments, and problem solving.",
    useCase: "Fast concept testing, one-off tools, and workflow scaffolding.",
    expertiseIds: ["content", "automation"],
  },
  {
    id: "meta-suite",
    name: "Meta Business Suite",
    category: "Social Management",
    description: "Publishing, scheduling, and organic social coordination across Meta properties.",
    useCase: "Post management, publishing workflows, and social upkeep.",
    expertiseIds: ["social-media"],
  },
  {
    id: "meta-ads",
    name: "Meta Ads Manager",
    category: "Paid Media",
    description: "Campaign structure, targeting, creative testing, and paid social optimization.",
    useCase: "Acquisition, retargeting, and budget allocation on Meta.",
    expertiseIds: ["paid-social"],
  },
  {
    id: "tiktok-ads",
    name: "TikTok Ads Manager",
    category: "Paid Media",
    description: "Short-form paid campaign execution with creative-led iteration.",
    useCase: "Paid reach, testing native-style creatives, and audience expansion.",
    expertiseIds: ["paid-social"],
  },
  {
    id: "google-ads",
    name: "Google Ads",
    category: "Search Marketing",
    description: "Search campaign setup, keyword targeting, bidding strategy, and ad performance review.",
    useCase: "Demand capture, search intent campaigns, and conversion optimization.",
    expertiseIds: ["paid-search"],
  },
  {
    id: "ga4",
    name: "Google Analytics 4",
    category: "Analytics",
    description: "Measurement, event interpretation, and channel performance analysis.",
    useCase: "Traffic analysis, event tracking, and conversion review.",
    expertiseIds: ["paid-social", "paid-search", "seo", "analytics"],
  },
  {
    id: "looker-studio",
    name: "Looker Studio",
    category: "Reporting",
    description: "Readable dashboards for campaign summaries and stakeholder reporting.",
    useCase: "Performance dashboards, trend views, and recurring reporting.",
    expertiseIds: ["paid-social", "paid-search", "analytics"],
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    category: "Email Marketing",
    description: "Email build, segmentation, sending, and simple customer journey workflows.",
    useCase: "Newsletter delivery, promotions, and lifecycle sequences.",
    expertiseIds: ["edm"],
  },
  {
    id: "search-console",
    name: "Google Search Console",
    category: "SEO",
    description: "Search performance visibility, indexing checks, and query-level insights.",
    useCase: "Search visibility review, indexing support, and SEO diagnostics.",
    expertiseIds: ["seo"],
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
        <span class="pill">${item.relatedToolIds.length} linked tools</span>
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
          <span class="meta-label">Linked Expertise</span>
          <strong>${item.expertiseIds.map((expertiseId) => expertiseAreas.find(({ id }) => id === expertiseId)?.name).join(", ")}</strong>
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
