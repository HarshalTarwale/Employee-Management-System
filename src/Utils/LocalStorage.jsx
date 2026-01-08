localStorage.clear()


const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 3,      // ids: 1,2,3
      newTask: 1,     // id: 1 (upcoming date)
      completed: 1,   // id: 4
      failed: 1       // id: 5
    },
    tasks: [
      {
        id: 1,
        title: "Client Proposal Review",
        description: "Review and provide feedback on Q1 client proposal document",
        date: "2026-01-10",
        category: "Sales",
        active: true,
        complicated: true,
        failed: false,
        status: "newTask"
      },
      {
        id: 2,
        title: "Website Bug Fix",
        description: "Fix responsive layout issue on mobile checkout page",
        date: "2026-01-08",
        category: "Development",
        active: true,
        complicated: false,
        failed: false,
        status: "active"
      },
      {
        id: 3,
        title: "Team Meeting Prep",
        description: "Prepare slides and agenda for weekly team sync",
        date: "2026-01-07",
        category: "Management",
        active: true,
        complicated: false,
        failed: false,
        status: "active"
      },
      {
        id: 4,
        title: "Code Review",
        description: "Review PR #456 - User authentication module",
        date: "2026-01-06",
        category: "Development",
        active: false,
        complicated: true,
        failed: false,
        status: "completed"
      },
      {
        id: 5,
        title: "Database Backup",
        description: "Schedule and verify monthly database backup",
        date: "2025-12-31",
        category: "IT",
        active: false,
        complicated: false,
        failed: true,
        status: "failed"
      },
    ],
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 4,      // 1,2,3,6
      newTask: 1,     // 1
      completed: 1,   // 5
      failed: 1       // 4
    },
    tasks: [
      {
        id: 1,
        title: "API Rate Limit Fix",
        description: "Implement rate limiting for external API calls",
        date: "2026-01-12",
        category: "Development",
        active: true,
        complicated: true,
        failed: false,
        status: "newTask"
      },
      {
        id: 2,
        title: "Performance Audit",
        description: "Run Lighthouse audit and optimize page speed",
        date: "2026-01-09",
        category: "Development",
        active: true,
        complicated: true,
        failed: false,
        status: "active"
      },
      {
        id: 3,
        title: "Documentation Update",
        description: "Update API documentation for v2.1 endpoints",
        date: "2026-01-11",
        category: "Documentation",
        active: true,
        complicated: false,
        failed: false,
        status: "active"
      },
      {
        id: 4,
        title: "Security Patch",
        description: "Apply latest security patches to production servers",
        date: "2026-01-05",
        category: "IT",
        active: false,
        complicated: true,
        failed: true,
        status: "failed"
      },
      {
        id: 5,
        title: "User Feedback Review",
        description: "Categorize and prioritize user feedback tickets",
        date: "2026-01-04",
        category: "Support",
        active: false,
        complicated: false,
        failed: false,
        status: "completed"
      },
      {
        id: 6,
        title: "Training Session",
        description: "Conduct React workshop for new team members",
        date: "2026-01-13",
        category: "Training",
        active: true,
        complicated: false,
        failed: false,
        status: "active"
      },
    ],
  },
  {
    id: 3,
    firstName: "Vihaan",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 3,      // 1,2,3
      newTask: 1,     // 1
      completed: 1,   // 4
      failed: 0
    },
    tasks: [
      {
        id: 1,
        title: "Financial Report",
        description: "Prepare monthly financial summary for leadership",
        date: "2026-01-15",
        category: "Finance",
        active: true,
        complicated: true,
        failed: false,
        status: "newTask"
      },
      {
        id: 2,
        title: "Budget Approval",
        description: "Get Q2 marketing budget approved by finance team",
        date: "2026-01-10",
        category: "Finance",
        active: true,
        complicated: false,
        failed: false,
        status: "active"
      },
      {
        id: 3,
        title: "Invoice Processing",
        description: "Process pending vendor invoices (12 total)",
        date: "2026-01-08",
        category: "Finance",
        active: true,
        complicated: false,
        failed: false,
        status: "active"
      },
      {
        id: 4,
        title: "Expense Report Review",
        description: "Review and approve team expense reports",
        date: "2026-01-07",
        category: "Finance",
        active: false,
        complicated: false,
        failed: false,
        status: "completed"
      },
    ],
  },
  {
    id: 4,
    firstName: "Kabir",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 4,      // 1,2,3,4
      newTask: 1,     // 1
      completed: 2,   // 6,7
      failed: 1       // 5
    },
    tasks: [
      {
        id: 1,
        title: "UI Design System",
        description: "Create Tailwind component library for design system",
        date: "2026-01-14",
        category: "Design",
        active: true,
        complicated: true,
        failed: false,
        status: "newTask"
      },
      {
        id: 2,
        title: "Dashboard Mockups",
        description: "Design 5 dashboard screen mockups in Figma",
        date: "2026-01-11",
        category: "Design",
        active: true,
        complicated: false,
        failed: false,
        status: "active"
      },
      {
        id: 3,
        title: "Icon Set Creation",
        description: "Design 50 custom icons for employee dashboard",
        date: "2026-01-09",
        category: "Design",
        active: true,
        complicated: false,
        failed: false,
        status: "active"
      },
      {
        id: 4,
        title: "Animation Prototypes",
        description: "Create GSAP animation prototypes for task cards",
        date: "2026-01-12",
        category: "Design",
        active: true,
        complicated: true,
        failed: false,
        status: "active"
      },
      {
        id: 5,
        title: "Style Guide Update",
        description: "Update design system style guide document",
        date: "2026-01-06",
        category: "Design",
        active: false,
        complicated: false,
        failed: true,
        status: "failed"
      },
      {
        id: 6,
        title: "Client Presentation",
        description: "Prepare design presentation for client review",
        date: "2026-01-16",
        category: "Design",
        active: false,
        complicated: false,
        failed: false,
        status: "completed"
      },
      {
        id: 7,
        title: "Color Palette Research",
        description: "Research premium color palettes for dashboard",
        date: "2026-01-05",
        category: "Design",
        active: false,
        complicated: false,
        failed: false,
        status: "completed"
      },
    ],
  },
  {
    id: 5,
    firstName: "Reyansh",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 6,      // 1,2,3,4,5,8
      newTask: 1,     // 3
      completed: 1,   // 7
      failed: 1       // 6
    },
    tasks: [
      {
        id: 1,
        title: "Customer Support Tickets",
        description: "Resolve 25 high-priority support tickets",
        date: "2026-01-10",
        category: "Support",
        active: true,
        complicated: true,
        failed: false,
        status: "active"
      },
      {
        id: 2,
        title: "FAQ Update",
        description: "Update FAQ section with 10 new questions",
        date: "2026-01-08",
        category: "Support",
        active: true,
        complicated: false,
        failed: false,
        status: "active"
      },
      {
        id: 3,
        title: "User Onboarding Guide",
        description: "Create step-by-step onboarding guide video",
        date: "2026-01-12",
        category: "Support",
        active: true,
        complicated: true,
        failed: false,
        status: "newTask"
      },
      {
        id: 4,
        title: "Chatbot Training",
        description: "Train AI chatbot with 100 new conversation patterns",
        date: "2026-01-11",
        category: "Support",
        active: true,
        complicated: true,
        failed: false,
        status: "active"
      },
      {
        id: 5,
        title: "Support Analytics",
        description: "Analyze support ticket trends for Q4 report",
        date: "2026-01-14",
        category: "Support",
        active: true,
        complicated: true,
        failed: false,
        status: "active"
      },
      {
        id: 6,
        title: "Email Template Design",
        description: "Design 3 new customer support email templates",
        date: "2026-01-07",
        category: "Support",
        active: false,
        complicated: false,
        failed: true,
        status: "failed"
      },
      {
        id: 7,
        title: "SLA Review",
        description: "Review and update customer support SLA document",
        date: "2026-01-09",
        category: "Support",
        active: false,
        complicated: false,
        failed: false,
        status: "completed"
      },
      {
        id: 8,
        title: "Knowledge Base Cleanup",
        description: "Clean up outdated articles in knowledge base",
        date: "2026-01-13",
        category: "Support",
        active: true,
        complicated: false,
        failed: false,
        status: "active"
      },
    ],
  },
];

const Admin = [
  {
    id: 1,
    firstName: "Pranav",
    email: "admin@example.com",
    password: "123",
    taskCounts: {
      active: 4,      // all are active
      newTask: 1,     // 2 (far future)
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        id: 1,
        title: "System Performance Review",
        description: "Review server performance metrics and optimize",
        date: "2026-01-15",
        category: "Admin",
        active: true,
        complicated: true,
        failed: false,
        status: "active"
      },
      {
        id: 2,
        title: "Security Audit",
        description: "Conduct quarterly security vulnerability scan",
        date: "2026-01-20",
        category: "Admin",
        active: true,
        complicated: true,
        failed: false,
        status: "newTask"
      },
      {
        id: 3,
        title: "Backup Verification",
        description: "Verify all backup systems are working correctly",
        date: "2026-01-10",
        category: "Admin",
        active: true,
        complicated: false,
        failed: false,
        status: "active"
      },
      {
        id: 4,
        title: "User Access Review",
        description: "Review employee permissions and access levels",
        date: "2026-01-18",
        category: "Admin",
        active: true,
        complicated: true,
        failed: false,
        status: "active"
      },
    ],
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(Admin));
  console.log("Admin data set:", Admin);
};

export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  console.log("Retrieved from localStorage:", { employee, admin });
  return { employee, admin };
};
