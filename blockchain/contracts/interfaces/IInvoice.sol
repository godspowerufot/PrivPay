// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IInvoice {
    enum Status { Pending, Paid, Cancelled }

    struct InvoiceData {
        address vendor;
        address payer;
        bytes encryptedAmount; // FHE encrypted
        bytes encryptedTax;    // FHE encrypted
        string metadataHash;   // IPFS hash
        uint256 dueDate;
        Status status;
    }

    event InvoiceCreated(uint256 indexed id, address indexed vendor, address indexed payer);
    event InvoicePaid(uint256 indexed id);

    function createInvoice(
        address payer,
        bytes calldata encryptedAmount,
        bytes calldata encryptedTax,
        string calldata metadataHash,
        uint256 dueDate
    ) external returns (uint256);

    function markAsPaid(uint256 id) external;
}
