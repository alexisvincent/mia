#!/usr/bin/env python3
"""
Add income/expense classification column to CSV
Takes a CSV and adds a new column classifying each transaction as "income" or "expense"
"""

import csv


def add_classification_column(input_csv_path, output_csv_path):
    """Add income/expense classification column to CSV"""
    
    transactions_processed = 0
    income_count = 0
    expense_count = 0
    
    with open(input_csv_path, 'r', encoding='utf-8') as infile:
        reader = csv.DictReader(infile)
        fieldnames = reader.fieldnames + ['Classification']  # Add new column
        
        with open(output_csv_path, 'w', encoding='utf-8', newline='') as outfile:
            writer = csv.DictWriter(outfile, fieldnames=fieldnames)
            writer.writeheader()
            
            for row in reader:
                # Parse the amount
                amount_str = row.get('Amount', '0')
                try:
                    amount = float(amount_str.replace(',', ''))
                except (ValueError, AttributeError):
                    amount = 0
                
                # Classify based on amount sign
                if amount > 0:
                    classification = 'income'
                    income_count += 1
                elif amount < 0:
                    classification = 'expense'
                    expense_count += 1
                else:
                    classification = 'neutral'  # For zero amounts
                
                # Add classification to row
                row['Classification'] = classification
                writer.writerow(row)
                transactions_processed += 1
    
    print(f"Classification complete!")
    print(f"Transactions processed: {transactions_processed}")
    print(f"Income transactions: {income_count}")
    print(f"Expense transactions: {expense_count}")
    print(f"Classified CSV saved to: {output_csv_path}")


def main():
    """Main function"""
    input_file = "gen/filtered_transactions.csv"
    output_file = "gen/classified_transactions.csv"
    
    try:
        print(f"Adding classification column to {input_file}...")
        add_classification_column(input_file, output_file)
        
    except FileNotFoundError:
        print(f"Error: Could not find {input_file}")
        print("Run 'just filter-csv' first to create the filtered transactions file.")
    except Exception as e:
        print(f"Error during classification: {e}")


if __name__ == "__main__":
    main()