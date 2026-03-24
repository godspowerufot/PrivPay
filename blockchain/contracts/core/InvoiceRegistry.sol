// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "../interfaces/IInvoice.sol";

contract InvoiceRegistry is IInvoice {
    uint256 private _nextId;
    mapping(uint256 => InvoiceData) public invoices;
    mapping(address => uint256[]) public vendorInvoices;
    mapping(address => uint256[]) public payerInvoices;

    function createInvoice(
        address payer,
        bytes calldata encryptedAmount,
        bytes calldata encryptedTax,
        string calldata metadataHash,
        uint256 dueDate
    ) external override returns (uint256) {
        uint256 id = _nextId++;
        
        invoices[id] = InvoiceData({
            vendor: msg.sender,
            payer: payer,
            encryptedAmount: encryptedAmount,
            encryptedTax: encryptedTax,
            metadataHash: metadataHash,
            dueDate: dueDate,
            status: Status.Pending
        });

        vendorInvoices[msg.sender].push(id);
        payerInvoices[payer].push(id);

        emit InvoiceCreated(id, msg.sender, payer);
        return id;
    }

    function markAsPaid(uint256 id) external override {
        // In a real app, only PaymentManager would call this
        invoices[id].status = Status.Paid;
        emit InvoicePaid(id);
    }

    function getInvoice(uint256 id) external view returns (InvoiceData memory) {
        return invoices[id];
    }
}
