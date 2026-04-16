import type { Meta, StoryObj } from "@storybook/react";
import { Terminal } from "./terminal";

const meta: Meta<typeof Terminal> = {
  title: "Domain/Terminal",
  component: Terminal,
};
export default meta;

type Story = StoryObj<typeof Terminal>;

export const Default: Story = {
  args: {
    title: "bash",
    children: `$ npx visdom-review init

  ✓ Detected repository: acme/api-service
  ✓ Created .visdom/config.yml
  ✓ Registered GitHub Actions workflow
  ✓ Layer 0–1 gates enabled

  Run \`visdom review --dry-run\` to test your setup.`,
  },
};

export const InstallCommand: Story = {
  args: {
    title: "Terminal",
    children: `# Install Visdom CLI
$ npm install -g @visdom/cli

# Authenticate with your workspace
$ visdom auth login

# Run a review on the current branch
$ visdom review --branch feature/new-api`,
  },
};

export const ReviewOutput: Story = {
  args: {
    title: "visdom review",
    children: `Reviewing PR #247: feat: add rate limiting middleware

  Layer 0  ✓  Context collected (1.2s)
  Layer 1  ✓  Lint: 0 errors, 3 warnings (8.4s)
           ✓  Types: no errors (12.1s)
           ✓  Coverage: 84% (+2% delta) (15.3s)
  Layer 2  ✓  AI Quick Scan complete (22.7s)

  ⚠  2 findings (0 critical, 1 high, 1 medium)

  HIGH   src/middleware/rate-limit.ts:47
         Redis TTL not set — keys will persist indefinitely

  MED    src/middleware/rate-limit.ts:91
         Missing error handling for Redis connection failure

  Review complete. Merge blocked until HIGH finding is resolved.`,
  },
};

export const CustomTitle: Story = {
  args: {
    title: "zsh — visdom-demo",
    children: `$ git push origin feature/ai-review

  Counting objects: 12, done.
  Delta compression using up to 8 threads.
  Compressing objects: 100% (8/8), done.

  remote: Visdom review triggered...
  remote: Layer 1–2 scan running...
  remote: ✓ All gates passed
  remote:
  remote: To https://github.com/acme/api
     a1b2c3d..e4f5g6h  feature/ai-review -> feature/ai-review`,
  },
};
