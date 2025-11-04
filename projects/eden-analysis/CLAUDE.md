# Eden Analysis Project

## Overview
This project contains financial analysis tools for bank statement analysis. It provides a standardized pipeline for processing transaction data, filtering internal transfers, and classifying transactions.

## Analysis Workflow for Questions
**Important**: When asked questions requiring new analysis:
1. Create a new script or update existing ones as needed
2. Run the analysis to generate output
3. Answer based ONLY on the generated output data
4. Do not provide manual analysis - always use script-generated results

## Usage

### Available Commands (via just)
```bash
# Filter CSV to remove internal transfer pairs
just filter-csv

# Add income/expense classification column to filtered CSV
just classify-transactions

# Run complete data processing pipeline
just process-data

# Clean generated files
just clean

# Show help and available commands
just help
```

### Setup
1. Place your bank statement CSV file in `data/bank_statement.csv`
2. Run `just process-data` to execute the complete pipeline
3. Analyze results in the `gen/` directory

### Files

#### Scripts
- `src/filter_csv.py` - Removes internal transfer pairs from CSV
- `src/add_classification.py` - Adds income/expense classification column to CSV

#### Data
- `data/bank_statement.csv` - Source bank statement CSV file (place your file here)

#### Generated Files
- `gen/filtered_transactions.csv` - CSV with internal transfers removed (generated)
- `gen/classified_transactions.csv` - CSV with income/expense classification added (generated)

## Data Processing Pipeline

### Step 1: Filter Internal Transfers
```bash
just filter-csv
```
- Reads from `data/bank_statement.csv`
- Identifies paired transactions with same ID and opposite amounts
- Removes transactions matching internal transfer patterns
- Outputs to `gen/filtered_transactions.csv`

### Step 2: Classify Transactions
```bash
just classify-transactions
```
- Reads from `gen/filtered_transactions.csv`
- Adds "Classification" column with "income"/"expense" based on amount sign
- Outputs to `gen/classified_transactions.csv`

### Complete Pipeline
```bash
just process-data
```
Runs both steps in sequence for complete data processing.

## Customization

### Internal Transfer Filtering
To customize internal transfer detection, edit the `internal_keywords` list in `src/filter_csv.py`:

```python
internal_keywords = [
    'from main', 'to main',
    'from account', 'to account', 
    'internal transfer', 'account transfer',
    # Add your company-specific patterns here
]
```

### Classification Logic
The current classification is based on amount sign:
- Positive amounts = "income"
- Negative amounts = "expense" 
- Zero amounts = "neutral"

This can be customized in `src/add_classification.py` for more sophisticated classification rules.

## File Requirements

### Expected CSV Format
The scripts expect standard bank statement CSV format with these columns:
- `ID` - Transaction identifier
- `Amount` - Transaction amount (positive for income, negative for expenses)
- `Description` - Transaction description
- Additional columns are preserved through the pipeline

## Important Notes

- **Source of truth**: The CSV file in `data/` and generated files in `gen/` are authoritative
- **Pipeline order**: Always run filter-csv before classify-transactions
- **Customization**: Adapt internal transfer keywords for each company's specific patterns
- **Generated files**: All files in `gen/` are auto-generated and can be safely deleted/regenerated

---
*Place your bank statement CSV in data/bank_statement.csv and run `just process-data` to begin analysis*