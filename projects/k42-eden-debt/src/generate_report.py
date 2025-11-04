#!/usr/bin/env python3
"""
Generate analysis.md from analysis.json data
"""

import json
from datetime import datetime


def generate_analysis_report():
    """Generate analysis.md from analysis.json"""
    
    try:
        # Load analysis data
        with open('gen/analysis.json', 'r') as f:
            data = json.load(f)
    except FileNotFoundError:
        print("Error: gen/analysis.json not found. Run 'just analyze' first.")
        return
    
    # Generate analysis.md
    report = f'''# Financial Analysis Report

*Generated on {datetime.now().strftime('%Y-%m-%d %H:%M:%S')} from analysis.json*

## Executive Summary

### Key Metrics
- **Total Venture Debt Received**: ${data['summary_statistics']['total_venture_debt_received']:,.2f}
- **Total Director Loans**: ${data['summary_statistics']['total_director_loans']:,.2f}
- **Average Monthly Burn Rate**: ${data['summary_statistics']['average_monthly_burn_rate']:,.2f}
- **Total Transactions**: {data['metadata']['total_transactions']}
- **Analysis Period**: {data['metadata']['date_range']['start']} to {data['metadata']['date_range']['end']}

### Risk Assessment
'''

    risks = data['risk_indicators']
    if any(risks.values()):
        report += '🚨 **CRITICAL RISKS IDENTIFIED:**\n'
        if risks['low_cash_warning']:
            report += '- **Low Cash Warning**: Some accounts below $1,000\n'
        if risks['high_burn_rate']:
            report += '- **High Burn Rate**: Monthly expenses exceed $8,000\n'
        if risks['venture_debt_dependency']:
            report += '- **Venture Debt Dependency**: Heavy reliance on external funding\n'
        if risks['frequent_director_loans']:
            report += '- **Cash Flow Issues**: Frequent director loans indicate working capital constraints\n'
    else:
        report += '✅ No critical risks identified\n'

    report += f'''

## Financial Breakdown

### Expense Categories
- **Payroll**: ${data['summary_statistics']['total_payroll_paid']:,.2f}
- **Management Fees**: ${data['summary_statistics']['total_management_fees']:,.2f}
- **SaaS Subscriptions**: ${data['summary_statistics']['total_saas_costs']:,.2f}
- **Travel & Expenses**: ${data['summary_statistics']['total_travel_costs']:,.2f}

### Currency Positions
'''

    for currency, details in data['currency_breakdown'].items():
        report += f'- **{currency}**: ${details["net_balance"]:,.2f} (Inflow: ${details["total_inflow"]:,.2f}, Outflow: ${details["total_outflow"]:,.2f})\n'

    report += '''

## Monthly Cash Flow Analysis

| Month | Inflow | Outflow | Net |
|-------|---------|---------|-----|
'''

    for month, flow in data['monthly_cash_flow'].items():
        report += f'| {month} | ${flow["inflow"]:,.2f} | ${flow["outflow"]:,.2f} | ${flow["net"]:,.2f} |\n'

    report += f'''

## Transaction Analysis

### Venture Debt Transactions
- **Count**: {len(data['transaction_categories']['venture_debt'])}
- **Total Amount**: ${sum(t['amount'] for t in data['transaction_categories']['venture_debt'] if t['amount'] > 0):,.2f}

### Director Loans
- **Count**: {len(data['transaction_categories']['director_loans'])}
- **Total Amount**: ${abs(sum(t['amount'] for t in data['transaction_categories']['director_loans'] if t['amount'] < 0)):,.2f}

### Payroll Transactions
- **Count**: {len(data['transaction_categories']['payroll'])}
- **Total Amount**: ${abs(sum(t['amount'] for t in data['transaction_categories']['payroll'] if t['amount'] < 0)):,.2f}

### SaaS Expenses
- **Count**: {len(data['transaction_categories']['saas_expenses'])}
- **Total Amount**: ${abs(sum(t['amount'] for t in data['transaction_categories']['saas_expenses'] if t['amount'] < 0)):,.2f}

---
*This report is automatically generated from analysis.json. Do not edit manually.*
'''

    with open('gen/analysis.md', 'w') as f:
        f.write(report)

    print('gen/analysis.md generated successfully!')


if __name__ == "__main__":
    generate_analysis_report()