export type Kpi = {
  label: string;
  value: string;
  detail: string;
  tone: "steady" | "positive" | "warning" | "attention";
};

export type ReviewRow = {
  source: string;
  status: string;
  classification: string;
  visibility: string;
};

export type WorkflowStep = {
  title: string;
  description: string;
  state: "done" | "active" | "queued";
};

export const kpis: Kpi[] = [
  {
    label: "Cash Position",
    value: "Masked",
    detail: "Signed inflow and outflow model",
    tone: "positive"
  },
  {
    label: "Review Queue",
    value: "Ready",
    detail: "Exceptions routed before close",
    tone: "warning"
  },
  {
    label: "Reconciliation",
    value: "Current",
    detail: "Source totals checked against ledger",
    tone: "steady"
  },
  {
    label: "Access Control",
    value: "Role Gated",
    detail: "Sensitive values hidden by default",
    tone: "attention"
  }
];

export const reviewRows: ReviewRow[] = [
  {
    source: "Card charge",
    status: "Needs receipt",
    classification: "Operating expense",
    visibility: "Masked"
  },
  {
    source: "Incoming payment",
    status: "Matched",
    classification: "Revenue",
    visibility: "Masked"
  },
  {
    source: "Transfer",
    status: "Confirmed",
    classification: "Internal movement",
    visibility: "Masked"
  },
  {
    source: "Subscription",
    status: "Review vendor",
    classification: "Software",
    visibility: "Masked"
  }
];

export const workflowSteps: WorkflowStep[] = [
  {
    title: "Import",
    description: "Read source records without exposing credentials in the browser.",
    state: "done"
  },
  {
    title: "Classify",
    description: "Apply repeatable rules and route uncertain records to review.",
    state: "active"
  },
  {
    title: "Close",
    description: "Lock reviewed periods after reconciliation checks pass.",
    state: "queued"
  }
];

export const categories = [
  "Revenue",
  "Operating expense",
  "Software",
  "Transfer",
  "Tax",
  "Unclassified"
];
