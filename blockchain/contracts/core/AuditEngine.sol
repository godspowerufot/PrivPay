// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "../libraries/FHEHelpers.sol";
import "../interfaces/IInvoice.sol";

contract AuditEngine {
    using FHEHelpers for bytes;

    struct AuditResult {
        uint256 invoiceId;
        address auditor;
        bytes encryptedComplianceResult; // Encrypted boolean
        uint256 timestamp;
    }

    mapping(uint256 => AuditResult) public auditResults;

    event AuditPerformed(uint256 indexed invoiceId, address indexed auditor);

    function performComplianceCheck(
        uint256 invoiceId,
        bytes calldata amountThreshold,
        IInvoice registry
    ) external {
        IInvoice.InvoiceData memory invoice = registry.getInvoice(invoiceId);
        
        // FHE computation: amount > threshold
        bytes memory complianceResult = invoice.encryptedAmount.gt(amountThreshold);
        
        auditResults[invoiceId] = AuditResult({
            invoiceId: invoiceId,
            auditor: msg.sender,
            encryptedComplianceResult: complianceResult,
            timestamp: block.timestamp
        });

        emit AuditPerformed(invoiceId, msg.sender);
    }
}
