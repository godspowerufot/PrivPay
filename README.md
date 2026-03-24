# PRIVPAY — Private Invoice Audit System

**Privacy-preserving financial infrastructure for Web3.**

## 🕵️ The Problem: The Privacy-Transparency Paradox

Imagine you're a freelance developer building for startups. For one project, you charge ₦500,000. For another, more complex project, you charge ₦1,500,000. 

On a standard public blockchain:
- **Pricing is Exposed**: Anyone can see your rates.
- **Client Conflicts**: Clients can compare prices and demand lower rates.
- **Income Tracking**: Your entire financial history is a public book.
- **Stealth Exposure**: Your clients building in stealth have their activity leaked just by paying you.

Current Web3 users are forced to choose between the **trust of the blockchain** and the **privacy of traditional finance**.

## 🛡️ The Solution: PRIVPAY

PRIVPAY gives you both. It allows you to create, send, and settle invoices on-chain while keeping the sensitive data encrypted.

- **Private Amounts**: Invoice totals are encrypted using **Fully Homomorphic Encryption (FHE)**.
- **Private Metadata**: Descriptions and line items are stored encrypted on **IPFS**.
- **Private Settlement**: Payments are verified using **Zero-Knowledge Proofs (ZK)** without exposing the underlying transaction details.

### 🧐 The Key Innovation: "Blind" Auditing
An auditor can verify that an invoice is compliant, that taxes are correctly calculated, or that a payment matches the invoice **without ever seeing the actual numbers**.

## 🚀 Key Features

- **Vendor Portal**: Create encrypted invoices and manage receivables privately.
- **Payer Portal**: Decrypt invoices locally and settle them with ZK-proof authorization.
- **Auditor Dashboard**: Run threshold and compliance checks on encrypted data.
- **Neobrutalist UI**: A high-contrast, bold design emphasizing clarity and de-centralization.

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
