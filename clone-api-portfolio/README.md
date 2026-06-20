# Clone API Portfolio Edition

This repository is a public-safe portfolio edition of a private finance operations dashboard.

It intentionally excludes:

- live credentials and environment values
- database migrations and data exports
- private workflow notes
- third-party integration code
- real names, account labels, and financial figures
- the original Git history

The code here demonstrates the public parts of the work: dashboard layout, masked financial UI, reconciliation states, signed transaction concepts, and operational review patterns.

## Local Setup

```bash
npm install
npm run dev
```

The app runs on [http://localhost:3090](http://localhost:3090).

## Verification

```bash
npm run typecheck
npm run build
```

## Safety Notes

All values in this repository are placeholders or masked labels. The original private repository should stay private.
