// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./InvoiceRegistry.sol";
import "../libraries/FHEHelpers.sol";

contract PaymentManager {
    using FHEHelpers for bytes;

    InvoiceRegistry public registry;
    
    event PaymentReceived(uint256 indexed invoiceId, address indexed payer);

    constructor(address _registry) {
        registry = InvoiceRegistry(_registry);
    }

    function payInvoice(uint256 invoiceId, bytes calldata proof) external payable {
        // In a real app, 'proof' would be a ZK proof verified here
        // We verify that msg.value matches the encrypted amount (mocked)
        
        IInvoice.InvoiceData memory invoice = registry.getInvoice(invoiceId);
        require(msg.sender == invoice.payer, "Not the payer");
        require(invoice.status == IInvoice.Status.Pending, "Not pending");

        // Simulate ZK proof verification
        require(proof.length > 0, "Invalid ZK proof");

        registry.markAsPaid(invoiceId);
        
        payable(invoice.vendor).transfer(msg.value);
        
        emit PaymentReceived(invoiceId, msg.sender);
    }
}
