"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  BarChart3,
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Edit3,
  Eye,
  FolderKanban,
  Globe2,
  ImageIcon,
  Inbox,
  LayoutDashboard,
  Languages,
  Menu,
  MessageSquare,
  MoreHorizontal,
  Palette,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Upload,
  Workflow,
  X
} from "lucide-react";
import KayiLogo from "@/components/KayiLogo";
import { projects } from "@/lib/projects";

const navItems = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Projects", icon: FolderKanban },
  { label: "Content", icon: Edit3 },
  { label: "Media", icon: ImageIcon },
  { label: "Inquiries", icon: Inbox },
  { label: "Settings", icon: Settings }
];

const inquiries = [
  {
    name: "M. Arslan",
    type: "Marine Applications",
    value: "High",
    message: "Yalikavak marina signage and deck detailing request.",
    time: "12 min ago"
  },
  {
    name: "E. Demir",
    type: "Interior Decoration",
    value: "Medium",
    message: "Bodrum villa material consultation and styling.",
    time: "2 h ago"
  },
  {
    name: "L. Kaya",
    type: "Custom Carpentry",
    value: "High",
    message: "Private cabin panels and built-in storage.",
    time: "Yesterday"
  }
];

const contentSections = [
  { name: "Hero", status: "Live", quality: 98, updated: "Today" },
  { name: "Services", status: "Live", quality: 92, updated: "Today" },
  { name: "Projects", status: "Draft review", quality: 86, updated: "Yesterday" },
  { name: "Turkish Copy", status: "Live", quality: 91, updated: "Today" },
  { name: "SEO Metadata", status: "Needs review", quality: 74, updated: "2 days ago" }
];

const tasks = [
  "Replace temporary Unsplash images with owned photography",
  "Confirm Turkish contact copy with client",
  "Add real CRM endpoint for inquiries",
  "Prepare launch SEO title set"
];

const media = [
  { name: "Hero Yacht", src: "/images/hero-yacht.jpg", type: "Hero" },
  { name: "Cabin Interior", src: "/images/interior-wood.jpg", type: "Interior" },
  { name: "Workshop", src: "/images/workshop.jpg", type: "Atelier" },
  { name: "Yacht Detail", src: "/images/yacht-detail.jpg", type: "Marine" }
];

const defaultProjectDraft = {
  titleEn: "",
  titleTr: "",
  category: "Marine",
  location: "Bodrum",
  year: "2026",
  status: "Planning",
  objective: "",
  story: "",
  materials: "",
  nextStep: "Collect final photography",
  approval: false,
  translation: false,
  images: false,
  seo: false
};

const initialSiteInfo = {
  company: "KAYI Bodrum",
  phone: "0539 385 9187",
  address: "Bahçelievler Mah. Gümüşlük Cad. No:39/39 Bodrum Muğla",
  heroEn: "Mediterranean Craftsmanship for Marine & Interior Spaces",
  heroTr: "Marine ve İç Mekanlar için Akdeniz Zanaatkarlığı"
};

const workspaceDescriptions: Record<string, string> = {
  Overview: "A complete command view across projects, content, media, inquiries and launch readiness.",
  Projects: "Review, search and manage the portfolio items shown on the public website.",
  Content: "Track copy health, language status, SEO readiness and section-level publishing quality.",
  Media: "Browse current visual assets and prepare replacements for the public site.",
  Inquiries: "Triage client messages by service type, priority and response timing.",
  Settings: "Configure publishing tools, language behavior, SEO defaults and brand system controls."
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function StatCard({
  label,
  value,
  trend,
  icon: Icon
}: {
  label: string;
  value: string;
  trend: string;
  icon: typeof LayoutDashboard;
}) {
  return (
    <div className="rounded-[1.6rem] border border-black/10 bg-white p-5 shadow-[0_24px_70px_rgba(15,15,15,0.06)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[0.65rem] uppercase tracking-label text-black/45">{label}</p>
          <p className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-black">{value}</p>
        </div>
        <div className="grid h-11 w-11 place-items-center rounded-full bg-black text-bronze">
          <Icon size={18} />
        </div>
      </div>
      <p className="mt-5 flex items-center gap-2 text-sm text-emerald-700">
        <CheckCircle2 size={15} />
        {trend}
      </p>
    </div>
  );
}

function SectionShell({
  title,
  action,
  children
}: {
  title: string;
  action?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[1.8rem] border border-black/10 bg-white p-5 shadow-[0_24px_70px_rgba(15,15,15,0.05)]">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold tracking-[-0.03em] text-black">{title}</h2>
        {action ? (
          <button className="rounded-full border border-black/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-black/55 transition hover:border-bronze hover:text-black">
            {action}
          </button>
        ) : null}
      </div>
      {children}
    </section>
  );
}

export default function AdminDashboard() {
  const [active, setActive] = useState("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [projectDraft, setProjectDraft] = useState(defaultProjectDraft);
  const [siteInfo, setSiteInfo] = useState(initialSiteInfo);
  const [selectedProjectSlug, setSelectedProjectSlug] = useState(projects[0]?.slug ?? "");
  const [savedNotice, setSavedNotice] = useState("");

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return projects;
    }

    return projects.filter((project) =>
      [project.title.en, project.title.tr, project.category.en, project.location]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [query]);

  const selectedProject = projects.find((project) => project.slug === selectedProjectSlug) ?? projects[0];
  const projectReadiness = [
    projectDraft.approval,
    projectDraft.translation,
    projectDraft.images,
    projectDraft.seo,
    projectDraft.titleEn.length > 2,
    projectDraft.titleTr.length > 2,
    projectDraft.objective.length > 10
  ].filter(Boolean).length;
  const readinessPercent = Math.round((projectReadiness / 7) * 100);

  const handleDraftFromProject = (slug: string) => {
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
      return;
    }

    setSelectedProjectSlug(slug);
    setProjectDraft({
      titleEn: project.title.en,
      titleTr: project.title.tr,
      category: project.category.en,
      location: project.location,
      year: project.year,
      status: "Review",
      objective: project.summary.en,
      story: project.overview.en,
      materials: project.materials.en.join(", "),
      nextStep: "Review edited copy and publish",
      approval: true,
      translation: true,
      images: true,
      seo: false
    });
    setActive("Projects");
  };

  return (
    <main className="min-h-screen bg-[#ECE7DD] text-black">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_12%_8%,rgba(194,164,118,0.22),transparent_26%),radial-gradient(circle_at_90%_10%,rgba(15,15,15,0.08),transparent_26%)]" />

      <aside
        className={cx(
          "fixed inset-y-0 left-0 z-40 w-[min(310px,88vw)] overflow-y-auto border-r border-ivory/10 bg-black p-5 text-ivory transition-transform duration-500 ease-luxury lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <KayiLogo size="admin" tone="bronze" />
          </Link>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)} aria-label="Close admin menu">
            <X size={20} />
          </button>
        </div>

        <div className="mt-10 rounded-[1.4rem] border border-bronze/20 bg-ivory/[0.04] p-4">
          <p className="text-[0.62rem] uppercase tracking-label text-bronze">Admin Studio</p>
          <p className="mt-3 text-sm leading-6 text-ivory/62">Manage projects, copy, media and client inquiries from one calm workspace.</p>
        </div>

        <nav className="mt-8 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                setActive(item.label);
                setSidebarOpen(false);
              }}
              className={cx(
                "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm transition",
                active === item.label ? "bg-bronze text-black" : "text-ivory/58 hover:bg-ivory/10 hover:text-ivory"
              )}
            >
              <span className="flex items-center gap-3">
                <item.icon size={17} />
                {item.label}
              </span>
              <ChevronRight size={15} />
            </button>
          ))}
        </nav>

        <div className="mt-8 rounded-[1.4rem] border border-ivory/10 p-4 lg:absolute lg:inset-x-5 lg:bottom-5 lg:mt-0">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-bronze text-black">
              <ShieldCheck size={18} />
            </div>
            <div>
              <p className="text-sm text-ivory">KAYI Admin</p>
              <p className="text-xs text-ivory/45">Owner access</p>
            </div>
          </div>
        </div>
      </aside>

      {sidebarOpen ? <button className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={() => setSidebarOpen(false)} aria-label="Close overlay" /> : null}

      <div className="relative z-10 lg:pl-[310px]">
        <header className="sticky top-0 z-20 border-b border-black/10 bg-[#ECE7DD]/80 backdrop-blur-xl">
          <div className="flex min-h-20 flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <button
                className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white lg:hidden"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open admin menu"
              >
                <Menu size={18} />
              </button>
              <div>
                <p className="text-[0.62rem] uppercase tracking-label text-taupe">Luxury CMS / Dashboard</p>
                <h1 className="mt-1 text-xl font-semibold tracking-[-0.05em] text-black sm:text-2xl md:text-4xl">KAYI Bodrum Admin</h1>
              </div>
            </div>

            <div className="hidden min-w-[280px] items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-3 md:flex">
              <Search size={16} className="text-black/35" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search projects, locations, content..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-black/35"
              />
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/"
                className="hidden rounded-full border border-black/10 bg-white px-4 py-3 text-xs font-medium uppercase tracking-[0.16em] text-black/60 transition hover:border-bronze hover:text-black sm:inline-flex"
              >
                View site
              </Link>
              <button className="hidden h-11 w-11 place-items-center rounded-full border border-black/10 bg-white sm:grid">
                <Bell size={17} />
              </button>
              <button
                onClick={() => {
                  setProjectDraft(defaultProjectDraft);
                  setActive("Projects");
                }}
                className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-3 text-xs font-medium uppercase tracking-[0.14em] text-ivory sm:px-4"
              >
                <Plus size={15} />
                New
              </button>
            </div>
          </div>
        </header>

        <div className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="mb-6 rounded-[1.4rem] border border-black/10 bg-black p-5 text-ivory shadow-[0_24px_70px_rgba(15,15,15,0.08)] sm:rounded-[1.8rem] sm:p-6">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-[0.62rem] uppercase tracking-label text-bronze">Active Workspace</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] sm:text-4xl md:text-6xl">{active}</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-ivory/58">{workspaceDescriptions[active]}</p>
            </div>
          </div>

          <div className={cx("grid gap-4 md:grid-cols-2 xl:grid-cols-4", active !== "Overview" && "hidden")}>
            <StatCard label="Live Projects" value={String(projects.length)} trend="+2 ready for review" icon={FolderKanban} />
            <StatCard label="New Inquiries" value="18" trend="+28% this month" icon={MessageSquare} />
            <StatCard label="Content Health" value="92%" trend="Copy and SEO stable" icon={Sparkles} />
            <StatCard label="Media Assets" value="41" trend="9 need replacement" icon={ImageIcon} />
          </div>

          <div className={cx("mt-6 grid gap-6 xl:grid-cols-[1.45fr_0.85fr]", !["Overview", "Projects"].includes(active) && "hidden")}>
            <SectionShell title="Project Command Center" action="Manage all">
              <div className="overflow-hidden rounded-[1.2rem] border border-black/10">
                <div className="hidden bg-black px-4 py-3 text-[0.62rem] uppercase tracking-label text-ivory/55 md:grid md:grid-cols-[1.25fr_0.7fr_0.5fr_0.45fr]">
                  <span>Project</span>
                  <span>Category</span>
                  <span>Year</span>
                  <span>Status</span>
                </div>
                <div className="divide-y divide-black/10 bg-white">
                  {filteredProjects.map((project) => (
                    <div
                      key={project.slug}
                      className="grid grid-cols-1 gap-3 px-4 py-4 transition hover:bg-sand/20 md:grid-cols-[1.25fr_0.7fr_0.5fr_0.45fr] md:items-center"
                    >
                      <span className="flex items-center gap-3">
                        <span className="relative h-12 w-16 overflow-hidden rounded-xl bg-black">
                          <Image src={project.cover} alt={project.title.en} fill sizes="64px" className="object-cover" />
                        </span>
                        <span>
                          <span className="block font-medium tracking-[-0.03em]">{project.title.en}</span>
                          <span className="text-xs text-black/45">{project.location}</span>
                        </span>
                      </span>
                      <span className="text-sm text-black/58">{project.category.en}</span>
                      <span className="text-sm text-black/58">{project.year}</span>
                      <span className="flex flex-wrap gap-2">
                        <Link href={`/projects/${project.slug}`} className="w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700">
                          Live
                        </Link>
                        <button
                          onClick={() => handleDraftFromProject(project.slug)}
                          className="w-fit rounded-full bg-black px-3 py-1 text-xs text-bronze"
                        >
                          Edit
                        </button>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionShell>

            <div className={cx(active !== "Projects" && "hidden")}>
              <SectionShell title="New Developed Project Planner" action={`${readinessPercent}% ready`}>
                {selectedProject ? (
                  <div className="mb-5 rounded-[1.2rem] border border-black/10 bg-black p-4 text-ivory">
                    <div className="flex items-start gap-4">
                      <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl bg-charcoal">
                        <Image src={selectedProject.cover} alt={selectedProject.title.en} fill sizes="112px" className="object-cover opacity-80" />
                      </div>
                      <div>
                        <p className="text-[0.62rem] uppercase tracking-label text-bronze">Editing Source</p>
                        <p className="mt-2 font-medium">{selectedProject.title.en}</p>
                        <p className="mt-1 text-sm text-ivory/50">{selectedProject.location} / {selectedProject.year}</p>
                      </div>
                    </div>
                  </div>
                ) : null}
                <div className="mb-5 rounded-[1.2rem] border border-black/10 bg-[#F7F2EA] p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Publishing readiness</span>
                    <span className="text-black/48">{readinessPercent}%</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/10">
                    <div className="h-full rounded-full bg-bronze transition-all" style={{ width: `${readinessPercent}%` }} />
                  </div>
                  <p className="mt-3 text-xs leading-5 text-black/48">
                    A project should only go live after story, images, Turkish copy and SEO are reviewed.
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-[0.62rem] uppercase tracking-[0.16em] text-black/45">Title EN</span>
                      <input
                        value={projectDraft.titleEn}
                        onChange={(event) => setProjectDraft({ ...projectDraft, titleEn: event.target.value })}
                        placeholder="Yacht Exterior Identity"
                        className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-bronze"
                      />
                    </label>
                    <label className="block">
                      <span className="text-[0.62rem] uppercase tracking-[0.16em] text-black/45">Title TR</span>
                      <input
                        value={projectDraft.titleTr}
                        onChange={(event) => setProjectDraft({ ...projectDraft, titleTr: event.target.value })}
                        placeholder="Yat Dış Kimliği"
                        className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-bronze"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <label className="block">
                      <span className="text-[0.62rem] uppercase tracking-[0.16em] text-black/45">Category</span>
                      <select
                        value={projectDraft.category}
                        onChange={(event) => setProjectDraft({ ...projectDraft, category: event.target.value })}
                        className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-bronze"
                      >
                        <option>Marine</option>
                        <option>Carpentry</option>
                        <option>Decoration</option>
                        <option>Craftsmanship</option>
                      </select>
                    </label>
                    <label className="block">
                      <span className="text-[0.62rem] uppercase tracking-[0.16em] text-black/45">Location</span>
                      <input
                        value={projectDraft.location}
                        onChange={(event) => setProjectDraft({ ...projectDraft, location: event.target.value })}
                        className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-bronze"
                      />
                    </label>
                    <label className="block">
                      <span className="text-[0.62rem] uppercase tracking-[0.16em] text-black/45">Status</span>
                      <select
                        value={projectDraft.status}
                        onChange={(event) => setProjectDraft({ ...projectDraft, status: event.target.value })}
                        className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-bronze"
                      >
                        <option>Planning</option>
                        <option>Draft</option>
                        <option>Review</option>
                        <option>Ready to publish</option>
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-[0.62rem] uppercase tracking-[0.16em] text-black/45">Strategic Objective</span>
                    <textarea
                      value={projectDraft.objective}
                      onChange={(event) => setProjectDraft({ ...projectDraft, objective: event.target.value })}
                      placeholder="What should this project communicate about KAYI Bodrum?"
                      className="mt-2 min-h-24 w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-bronze"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[0.62rem] uppercase tracking-[0.16em] text-black/45">Project Story</span>
                    <textarea
                      value={projectDraft.story}
                      onChange={(event) => setProjectDraft({ ...projectDraft, story: event.target.value })}
                      placeholder="Describe the process, materials, client need and final atmosphere."
                      className="mt-2 min-h-28 w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-bronze"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[0.62rem] uppercase tracking-[0.16em] text-black/45">Materials</span>
                    <input
                      value={projectDraft.materials}
                      onChange={(event) => setProjectDraft({ ...projectDraft, materials: event.target.value })}
                      placeholder="Teak, bronze, linen, travertine"
                      className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-bronze"
                    />
                  </label>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      ["Client approved", "approval"],
                      ["Turkish copy ready", "translation"],
                      ["Final images selected", "images"],
                      ["SEO prepared", "seo"]
                    ].map(([label, key]) => (
                      <label key={key} className="flex items-center justify-between rounded-2xl border border-black/10 bg-[#F7F2EA] px-4 py-3 text-sm">
                        <span>{label}</span>
                        <input
                          type="checkbox"
                          checked={Boolean(projectDraft[key as keyof typeof projectDraft])}
                          onChange={(event) => setProjectDraft({ ...projectDraft, [key]: event.target.checked })}
                          className="accent-bronze"
                        />
                      </label>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setSavedNotice("Project draft saved locally for review.")}
                      className="rounded-full bg-black px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-ivory transition hover:bg-bronze hover:text-black"
                    >
                      Save draft
                    </button>
                    <button
                      onClick={() => setSavedNotice("Project sent to review queue.")}
                      className="rounded-full border border-black/10 bg-white px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-black/60 transition hover:border-bronze hover:text-black"
                    >
                      Send review
                    </button>
                  </div>
                  {savedNotice ? <p className="text-sm text-emerald-700">{savedNotice}</p> : null}
                </div>
              </SectionShell>
            </div>

            <div className={cx(active !== "Overview" && "hidden")}>
              <SectionShell title="Launch Priorities" action="Assign">
              <div className="space-y-3">
                {tasks.map((task, index) => (
                  <label key={task} className="flex items-start gap-3 rounded-2xl border border-black/10 bg-[#F7F2EA] p-4">
                    <input type="checkbox" defaultChecked={index === 1} className="mt-1 accent-bronze" />
                    <span>
                      <span className="block text-sm font-medium leading-6">{task}</span>
                      <span className="mt-1 flex items-center gap-2 text-xs text-black/42">
                        <Clock3 size={13} />
                        Due this week
                      </span>
                    </span>
                  </label>
                ))}
              </div>
              </SectionShell>
            </div>
          </div>

          <div className={cx("mt-6 grid gap-6 xl:grid-cols-3", !["Overview", "Content", "Media", "Inquiries"].includes(active) && "hidden")}>
            <div className={cx(!["Overview", "Content"].includes(active) && "hidden")}>
              <SectionShell title="Content Quality" action="Open editor">
              {active === "Content" ? (
                <div className="mb-5 rounded-[1.2rem] border border-black/10 bg-[#F7F2EA] p-4">
                  <p className="text-sm font-medium">Site Information Editor</p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-[0.62rem] uppercase tracking-[0.16em] text-black/45">Company Name</span>
                      <input
                        value={siteInfo.company}
                        onChange={(event) => setSiteInfo({ ...siteInfo, company: event.target.value })}
                        className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-bronze"
                      />
                    </label>
                    <label className="block">
                      <span className="text-[0.62rem] uppercase tracking-[0.16em] text-black/45">Address</span>
                      <input
                        value={siteInfo.address}
                        onChange={(event) => setSiteInfo({ ...siteInfo, address: event.target.value })}
                        className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-bronze"
                      />
                    </label>
                    <label className="block">
                      <span className="text-[0.62rem] uppercase tracking-[0.16em] text-black/45">Phone</span>
                      <input
                        value={siteInfo.phone}
                        onChange={(event) => setSiteInfo({ ...siteInfo, phone: event.target.value })}
                        className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-bronze"
                      />
                    </label>
                  </div>
                  <div className="mt-4 grid gap-4">
                    <label className="block">
                      <span className="text-[0.62rem] uppercase tracking-[0.16em] text-black/45">Hero Headline EN</span>
                      <textarea
                        value={siteInfo.heroEn}
                        onChange={(event) => setSiteInfo({ ...siteInfo, heroEn: event.target.value })}
                        className="mt-2 min-h-20 w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-bronze"
                      />
                    </label>
                    <label className="block">
                      <span className="text-[0.62rem] uppercase tracking-[0.16em] text-black/45">Hero Headline TR</span>
                      <textarea
                        value={siteInfo.heroTr}
                        onChange={(event) => setSiteInfo({ ...siteInfo, heroTr: event.target.value })}
                        className="mt-2 min-h-20 w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-bronze"
                      />
                    </label>
                  </div>
                  <button
                    onClick={() => setSavedNotice("Site information saved as a content draft.")}
                    className="mt-4 rounded-full bg-black px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-ivory transition hover:bg-bronze hover:text-black"
                  >
                    Save content draft
                  </button>
                </div>
              ) : null}
              <div className="space-y-4">
                {contentSections.map((section) => (
                  <div key={section.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium">{section.name}</span>
                      <span className="text-black/45">{section.status}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-black/8">
                      <div className="h-full rounded-full bg-bronze" style={{ width: `${section.quality}%` }} />
                    </div>
                    <p className="mt-1 text-xs text-black/38">Updated {section.updated}</p>
                  </div>
                ))}
              </div>
              </SectionShell>
            </div>

            <div className={cx(!["Overview", "Media"].includes(active) && "hidden")}>
              <SectionShell title="Media Library" action="Upload">
              <div className="grid grid-cols-2 gap-3">
                {media.map((asset) => (
                  <div key={asset.name} className="group overflow-hidden rounded-[1.1rem] border border-black/10 bg-black">
                    <div className="relative h-32">
                      <Image src={asset.src} alt={asset.name} fill sizes="180px" className="object-cover opacity-80 transition group-hover:scale-105" />
                    </div>
                    <div className="flex items-center justify-between bg-white p-3">
                      <div>
                        <p className="text-xs font-medium">{asset.name}</p>
                        <p className="text-[0.65rem] uppercase tracking-[0.14em] text-black/38">{asset.type}</p>
                      </div>
                      <MoreHorizontal size={16} className="text-black/35" />
                    </div>
                  </div>
                ))}
              </div>
              </SectionShell>
            </div>

            <div className={cx(!["Overview", "Inquiries"].includes(active) && "hidden")}>
              <SectionShell title="Client Inquiries" action="CRM">
              <div className="space-y-3">
                {inquiries.map((inquiry) => (
                  <div key={inquiry.name} className="rounded-2xl border border-black/10 bg-[#F7F2EA] p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium">{inquiry.name}</p>
                        <p className="text-xs uppercase tracking-[0.16em] text-taupe">{inquiry.type}</p>
                      </div>
                      <span className={cx("rounded-full px-3 py-1 text-xs", inquiry.value === "High" ? "bg-black text-bronze" : "bg-sand/40 text-black/58")}>
                        {inquiry.value}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-black/58">{inquiry.message}</p>
                    <p className="mt-3 text-xs text-black/35">{inquiry.time}</p>
                  </div>
                ))}
              </div>
              </SectionShell>
            </div>
          </div>

          <div className={cx("mt-6 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]", !["Overview", "Settings"].includes(active) && "hidden")}>
            <SectionShell title="Publishing Tools" action="Configure">
              {active === "Settings" ? (
                <div className="mb-5 rounded-[1.2rem] border border-black/10 bg-[#F7F2EA] p-4">
                  <p className="text-sm font-medium">Site Settings</p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-[0.62rem] uppercase tracking-[0.16em] text-black/45">Default Language</span>
                      <select className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-bronze">
                        <option>English</option>
                        <option>Turkish</option>
                      </select>
                    </label>
                    <label className="block">
                      <span className="text-[0.62rem] uppercase tracking-[0.16em] text-black/45">Publishing Mode</span>
                      <select className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-bronze">
                        <option>Manual review</option>
                        <option>Auto publish</option>
                      </select>
                    </label>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {["Require image approval", "Enable inquiry notifications", "Show admin preview banner", "Auto-generate SEO drafts"].map((setting, index) => (
                      <label key={setting} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm">
                        <span>{setting}</span>
                        <input type="checkbox" defaultChecked={index !== 2} className="accent-bronze" />
                      </label>
                    ))}
                  </div>
                  <button className="mt-4 rounded-full bg-black px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-ivory transition hover:bg-bronze hover:text-black">
                    Save settings
                  </button>
                </div>
              ) : null}
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Language Manager", "EN/TR copy status", Languages],
                  ["SEO Control", "Titles, OG images, sitemap", Globe2],
                  ["Brand System", "Palette, logo, typography", Palette],
                  ["Review Workflow", "Draft, approval, publish gates", Workflow],
                  ["Asset Upload", "Replace live visuals", Upload]
                ].map(([title, text, Icon]) => (
                  <button key={title as string} className="rounded-2xl border border-black/10 bg-[#F7F2EA] p-4 text-left transition hover:border-bronze hover:bg-white">
                    <Icon size={19} className="text-bronze" />
                    <p className="mt-4 font-medium">{title as string}</p>
                    <p className="mt-1 text-sm text-black/45">{text as string}</p>
                  </button>
                ))}
              </div>
            </SectionShell>

            <SectionShell title="Performance Snapshot">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Avg. session", "3m 42s", BarChart3],
                  ["Preview opens", "284", Eye],
                  ["Next review", "Friday", CalendarDays]
                ].map(([label, value, Icon]) => (
                  <div key={label as string} className="rounded-2xl bg-black p-5 text-ivory">
                    <Icon size={19} className="text-bronze" />
                    <p className="mt-8 text-[0.62rem] uppercase tracking-label text-ivory/40">{label as string}</p>
                    <p className="mt-2 text-3xl font-semibold tracking-[-0.05em]">{value as string}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl border border-bronze/25 bg-sand/20 p-4">
                <p className="text-sm leading-6 text-black/58">
                  This dashboard is ready for backend connection: projects, media, inquiries and language copy can later be connected to a CMS or database.
                </p>
              </div>
            </SectionShell>
          </div>
        </div>
      </div>
    </main>
  );
}
