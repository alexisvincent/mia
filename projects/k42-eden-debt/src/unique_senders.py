#!/usr/bin/env python3
"""
Find unique entities who have sent money into the company
Excludes internal account transfers
"""

import csv
import json
from collections import defaultdict


def analyze_unique_senders(csv_file_path):
    """Find unique entities sending money to the company"""
    
    unique_senders = {}
    
    # Read transactions from classified CSV and filter for income only
    with open(csv_file_path, 'r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        
        for row in reader:
            # Only process income transactions
            classification = row.get('Classification', '').lower()
            if classification != 'income':
                continue
            
            amount = float(row.get('Amount', '0').replace(',', '')) if row.get('Amount', '0') else 0
            transaction_type = row.get('Type', '')
            description = row.get('Description', '')
            reference = row.get('Reference', '')
            payer = row.get('Payer', '')
            date = row.get('Date completed (UTC)', '')
            currency = row.get('Payment currency', '')
            
            # Extract sender name from description
            sender_name = description.strip()
            
            # Use sender name as key (normalize for grouping)
            sender_key = sender_name.lower()
            
            if sender_key not in unique_senders:
                unique_senders[sender_key] = {
                    'name': sender_name,
                    'total_amount': 0,
                    'transaction_count': 0,
                    'transactions': []
                }
            
            unique_senders[sender_key]['total_amount'] += amount
            unique_senders[sender_key]['transaction_count'] += 1
            unique_senders[sender_key]['transactions'].append({
                'date': date,
                'amount': amount,
                'currency': currency,
                'type': transaction_type,
                'description': description,
                'reference': reference
            })
    
    return unique_senders


def main():
    """Main function to analyze unique senders"""
    csv_file = "gen/classified_transactions.csv"
    output_file = "gen/unique_senders.json"
    
    try:
        print(f"Analyzing unique senders from {csv_file}...")
        senders = analyze_unique_senders(csv_file)
        
        # Sort by total amount descending
        sorted_senders = dict(sorted(senders.items(), key=lambda x: x[1]['total_amount'], reverse=True))
        
        # Create summary
        analysis_result = {
            'metadata': {
                'total_unique_senders': len(sorted_senders),
                'total_external_inflow': sum(data['total_amount'] for data in sorted_senders.values()),
                'analysis_date': '2025-07-07'
            },
            'senders': sorted_senders
        }
        
        # Save to JSON
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(analysis_result, f, indent=2, ensure_ascii=False)
        
        print(f"Analysis complete! Results saved to {output_file}")
        
        # Print summary
        print(f"\n=== UNIQUE EXTERNAL SENDERS ===")
        print(f"Total unique entities: {len(sorted_senders)}")
        print(f"Total external inflow: ${sum(data['total_amount'] for data in sorted_senders.values()):,.2f}")
        print(f"\nTop senders:")
        
        for i, (key, data) in enumerate(sorted_senders.items()):
            if i >= 10:  # Show top 10
                break
            print(f"{i+1}. {data['name']}: ${data['total_amount']:,.2f} ({data['transaction_count']} transactions)")
        
    except FileNotFoundError:
        print(f"Error: Could not find {csv_file}")
        print("Run 'just classify-transactions' first to create the classified transactions file.")
    except Exception as e:
        print(f"Error during analysis: {e}")


if __name__ == "__main__":
    main()