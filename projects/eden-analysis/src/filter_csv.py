#!/usr/bin/env python3
"""
Filter CSV to remove internal transfer pairs
Takes the bank statement CSV and removes paired transactions that represent internal transfers
"""

import csv
from collections import defaultdict


def filter_internal_transfers(input_csv_path, output_csv_path):
    """Remove internal transfer pairs from CSV"""
    
    # First pass: load all transactions and group by ID
    all_transactions = []
    transaction_groups = defaultdict(list)
    
    with open(input_csv_path, 'r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        fieldnames = reader.fieldnames
        
        for row in reader:
            all_transactions.append(row)
            tx_id = row.get('ID', '')
            if tx_id:
                transaction_groups[tx_id].append(row)
    
    # Identify internal transfer pairs to remove
    internal_transfer_ids = set()
    
    for tx_id, transactions in transaction_groups.items():
        if len(transactions) == 2:  # Exactly 2 transactions with same ID - remove both
            tx1, tx2 = transactions
            internal_transfer_ids.add(tx_id)
            desc1 = tx1.get('Description', '').lower()
            desc2 = tx2.get('Description', '').lower()
            print(f"Removing transaction pair: {tx_id}")
            print(f"  - {desc1}")
            print(f"  - {desc2}")
    
    # Filter out internal transfers and write to new CSV
    filtered_transactions = []
    removed_count = 0
    
    for transaction in all_transactions:
        tx_id = transaction.get('ID', '')
        if tx_id not in internal_transfer_ids:
            filtered_transactions.append(transaction)
        else:
            removed_count += 1
    
    # Write filtered CSV
    with open(output_csv_path, 'w', encoding='utf-8', newline='') as file:
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(filtered_transactions)
    
    print(f"\nFiltering complete!")
    print(f"Original transactions: {len(all_transactions)}")
    print(f"Removed transactions: {removed_count}")
    print(f"Filtered transactions: {len(filtered_transactions)}")
    print(f"Internal transfer pairs removed: {len(internal_transfer_ids)}")
    print(f"Filtered CSV saved to: {output_csv_path}")


def main():
    """Main function"""
    input_file = "data/bank_statement.csv"  # Generic filename
    output_file = "gen/filtered_transactions.csv"
    
    try:
        print(f"Filtering internal transfers from {input_file}...")
        filter_internal_transfers(input_file, output_file)
        
    except FileNotFoundError:
        print(f"Error: Could not find {input_file}")
        print("Make sure to place your bank statement CSV in the data/ directory as 'bank_statement.csv'")
    except Exception as e:
        print(f"Error during filtering: {e}")


if __name__ == "__main__":
    main()