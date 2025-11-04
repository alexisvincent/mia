#!/usr/bin/env python3
"""
Filter CSV to remove internal transfer pairs
Takes the Revolut CSV and removes paired transactions that represent internal transfers
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
        if len(transactions) == 2:  # Exactly 2 transactions with same ID
            tx1, tx2 = transactions
            
            # Parse amounts
            try:
                amount1 = float(tx1.get('Amount', '0').replace(',', ''))
                amount2 = float(tx2.get('Amount', '0').replace(',', ''))
            except (ValueError, AttributeError):
                continue
            
            # Check if amounts are opposite (sum to zero)
            if abs(amount1 + amount2) < 0.01:  # Allow small floating point errors
                
                # Check if descriptions indicate internal transfers
                desc1 = tx1.get('Description', '').lower()
                desc2 = tx2.get('Description', '').lower()
                
                # Keywords that indicate internal transfers
                internal_keywords = [
                    'from main', 'to main',
                    'from saas', 'to saas', 
                    'from infrastructure', 'to infrastructure',
                    'to alexis vincent', 'from alexis vincent'
                ]
                
                # Check if either description contains internal keywords
                is_internal_transfer = any(
                    keyword in desc1 or keyword in desc2 
                    for keyword in internal_keywords
                )
                
                # Also check for director loan patterns with Alexis Vincent as payer
                is_director_loan_pair = (
                    'director loan' in tx1.get('Reference', '').lower() and
                    'director loan' in tx2.get('Reference', '').lower() and
                    (tx1.get('Payer', '') == 'Alexis Vincent' or tx2.get('Payer', '') == 'Alexis Vincent')
                )
                
                if is_internal_transfer or is_director_loan_pair:
                    internal_transfer_ids.add(tx_id)
                    print(f"Removing internal transfer pair: {tx_id}")
                    print(f"  - {desc1} ({amount1})")
                    print(f"  - {desc2} ({amount2})")
    
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
    input_file = "data/Revolut Business Transaction Statement Sep 2024 to Jul 2025.csv"
    output_file = "gen/filtered_transactions.csv"
    
    try:
        print(f"Filtering internal transfers from {input_file}...")
        filter_internal_transfers(input_file, output_file)
        
    except FileNotFoundError:
        print(f"Error: Could not find {input_file}")
    except Exception as e:
        print(f"Error during filtering: {e}")


if __name__ == "__main__":
    main()