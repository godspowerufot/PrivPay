# PRIVPAY — Private Invoice Audit System

**Privacy-preserving financial infrastructure for Web3.**

## 💡 What it does
PRIVPAY is a privacy-first invoicing and payment system that allows businesses and freelancers to get paid on-chain without exposing their financial data. It uses **Fully Homomorphic Encryption (FHE)** and **Zero-Knowledge Proofs (ZK)** to ensure that invoice amounts, client identities, and transaction details remain private to only the parties involved, while still being verifiable by authorized auditors.

## 🚀 The problem it solves: The Privacy-Transparency Paradox
On a standard public blockchain, every transaction is a public book. 
- **Income Exposure**: Anyone can track a freelancer's income just by looking at their wallet.
- **Pricing Conflicts**: Clients can see what you charge others (e.g., Nigerian Freelancers charging ₦500k vs ₦1.5m for different complexities), leading to price disputes.
- **Stealth Leakage**: Startups building in stealth have their activity exposed just by paying their vendors.

**PRIVPAY** gives you the **trust** of blockchain with the **privacy** of traditional finance.

## 🛠️ Technologies I used
- **Next.js 15 (App Router)**: For the frontend architecture.
- **Tailwind CSS (V4)**: For the high-contrast Neobrutalist design.
- **Solidity**: Modular smart contracts for registry, payment, and auditing.
- **FHE (Fully Homomorphic Encryption)**: Handled via Fhenix/Zama style simulations for private computation.
- **ZK (Zero-Knowledge Proofs)**: Used for private payment authorization verification.
- **IPFS**: For decentralized, encrypted storage of invoice metadata.

## 🏗️ How we built it
1.  **Domain-Driven Frontend**: Structured by `/vendor`, `/payer`, and `/auditor` to ensure a clean separation of concerns.
2.  **Modular Smart Contracts**: Separated into `InvoiceRegistry`, `PaymentManager`, and `AuditEngine` to allow for independent audits and protocol upgrades.
3.  **Neobrutalist Design System**: Built a custom design language using raw black/white tones and heavy borders to reflect the "raw truth" of blockchain and the secrecy of encryption.
4.  **Crypto Integration**: Simulated FHE precompiles and ZK proving schemes to show a working flow of "Blind Auditing".

## 🚧 Challenges I ran into
- **FHE Logic Complexity**: Designing an interface where an auditor can run a "Greater Than" check on an encrypted value without decrypting it required careful simulation of FHE state transitions.
- **JSX State Management**: Handling multiple roles (Vendor, Payer, Auditor) within a shared component architecture while maintaining strict UI consistency.
- **Tailwind V4 Refactoring**: Navigating the breaking changes in Tailwind 4's `@apply` logic to achieve the precise Neobrutalist look without compiler errors.

## 🧠 What we learned
- **Privacy is UX**: Users don't just want encryption; they want to *see* that things are private while still having it "just work". 
- **Auditing is the key to Web3**: Pure privacy is suspicious; *verifiable* privacy is the future of institutional and professional financial growth on-chain.

## 🔮 What's next for PRIVPAY
- **Invoices as Collateral**: Allow vendors to take out low-interest loans against their unpaid, encrypted invoices via private lending protocols.
- **Multi-Auditor Multi-Sig**: Requiring multiple auditors to confirm compliance before results are released.
- **Tax-Engine Integration**: Automated, private tax withholding and reporting directly from encrypted invoices.

---

## 🛠️ System Architecture

### 📂 Frontend Folder Structure (Domain-Driven)
Organizing by domain ensures the project scales cleanly without feature leakage.

```text
/src
  /app                     # Next.js App Router (Pages & Layouts)
    /vendor                # Vendor Dashboard
    /payer                 # Payer Dashboard
    /auditor               # Auditor Dashboard
  /domains                 # Business Logic & Component Domains
    /invoice               # Invoice Creation, Listing, Encryption
    /payment               # ZK-Proof Settlement Logic
    /audit                 # Compliance & FHE Computation Logic
  /shared                  # App-wide Shared Resources
    /components            # Neobrutalist UI Kit (Button, Card, Box)
    /lib                   # Crypto Clients (FHE, ZK, IPFS Simulations)
    /utils                 # Formatting & Helpers
  /styles                  # Global CSS & Tailwind Theme
```

### ⛓️ Smart Contract Design (Modular)
Separating concerns into core modules, libraries, and interfaces.

```text
/blockchain/contracts
  /core
    - InvoiceRegistry.sol  # Handles encrypted state & storage
    - PaymentManager.sol   # Verifies ZK proofs & handles ETH
    - AuditEngine.sol     # Runs FHE operations on-chain
  /interfaces
    - IInvoice.sol        # Unified invoice interface
  /libraries
    - FHEHelpers.sol      # Mock FHE precompile interface
  /types
    - DataTypes.sol       # Shared struct definitions
```

## 🏁 How to Run

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Visit**:
   - `http://localhost:3000` (Landing)
   - `http://localhost:3000/vendor`
   - `http://localhost:3000/payer`
   - `http://localhost:3000/auditor`

---

Built for the future of private Web3 infrastructure. 🏗️🔐
