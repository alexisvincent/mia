# K42 Eden Debt Project

## Overview
This project contains financial analysis tools for Revolut Business transactions, focusing on Eden Analytics Ltd venture debt and business operations.

## Analysis Workflow for Questions
**Important**: When asked questions requiring new analysis:
1. Create a new script or update existing ones as needed
2. Run the analysis to generate output
3. Answer based ONLY on the generated output data
4. Do not provide manual analysis - always use script-generated results

## Usage

### Available Commands (via just)
```bash
# Run financial analysis on CSV data
just analyze

# Generate formatted report from analysis data
just generate-report

# Run complete analysis pipeline
just full-analysis

# Show quick summary
just summary

# Find unique entities sending money to company
just unique-senders

# Filter CSV to remove internal transfer pairs
just filter-csv

# Add income/expense classification column to filtered CSV
just classify-transactions

# Clean generated files
just clean
```

### Files

#### Scripts
- `src/analyze.py` - Main analysis script that processes the Revolut CSV
- `src/generate_report.py` - Generates formatted analysis.md from analysis.json
- `src/summary.py` - Shows quick summary from analysis data
- `src/unique_senders.py` - Finds unique external entities sending money to company
- `src/filter_csv.py` - Removes internal transfer pairs from CSV
- `src/add_classification.py` - Adds income/expense classification column to CSV

#### Data
- `data/` - Source CSV files

#### Generated Files
- `gen/analysis.json` - Raw analysis data (generated)
- `gen/analysis.md` - Formatted analysis report (generated)
- `gen/unique_senders.json` - Analysis of external money senders (generated)
- `gen/filtered_transactions.csv` - CSV with internal transfers removed (generated)
- `gen/classified_transactions.csv` - CSV with income/expense classification added (generated)

## Analysis Workflows

### Primary Analysis
1. **Run Analysis**: `just analyze` processes the CSV and creates `gen/analysis.json`
2. **Generate Report**: `just generate-report` creates `gen/analysis.md` from the JSON data
3. **Review**: Check `gen/analysis.md` for formatted financial analysis

### Data Processing Pipeline
1. **Filter Internal Transfers**: `just filter-csv` removes paired internal transfers → `gen/filtered_transactions.csv`
2. **Classify Transactions**: `just classify-transactions` adds income/expense classification → `gen/classified_transactions.csv`
3. **Find External Senders**: `just unique-senders` identifies entities sending money → `gen/unique_senders.json`

## Important Notes

- **gen/analysis.md is auto-generated**: This file should ONLY be created from `gen/analysis.json` data
- **Never edit analysis.md manually**: Always regenerate using `just generate-report`
- **Source of truth**: The CSV files in `data/` and `gen/analysis.json` are the authoritative data sources

## Analysis.md Template

The generated `analysis.md` should always follow this structure:

```markdown
# Financial Analysis Report

*Generated on [timestamp] from analysis.json*

## Executive Summary
### Key Metrics
- Total Venture Debt Received
- Total Director Loans  
- Average Monthly Burn Rate
- Total Transactions
- Analysis Period

### Risk Assessment
- Risk indicators with status

## Financial Breakdown
### Expense Categories
- Payroll, Management Fees, SaaS, Travel

### Currency Positions
- Net positions by currency

## Monthly Cash Flow Analysis
- Table with monthly inflow/outflow/net

## Transaction Analysis
- Counts and totals by category

---
*This report is automatically generated from analysis.json. Do not edit manually.*
```

---
*Use `just summary` for quick overview or `just full-analysis` for complete refresh*