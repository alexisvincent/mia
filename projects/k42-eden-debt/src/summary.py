#!/usr/bin/env python3
"""
Display quick summary from analysis.json
"""

import json


def show_summary():
    """Show quick analysis summary"""
    
    try:
        with open('gen/analysis.json', 'r') as f:
            data = json.load(f)
        
        stats = data['summary_statistics']
        print('=== QUICK SUMMARY ===')
        print(f'Venture Debt: ${stats["total_venture_debt_received"]:,.2f}')
        print(f'Director Loans: ${stats["total_director_loans"]:,.2f}')
        print(f'Monthly Burn: ${stats["average_monthly_burn_rate"]:,.2f}')
        print(f'Transactions: {data["metadata"]["total_transactions"]}')
        
        # Show risk indicators
        risks = data['risk_indicators']
        if any(risks.values()):
            print('\n⚠️  ACTIVE RISKS:')
            if risks['low_cash_warning']:
                print('  - Low cash warning')
            if risks['high_burn_rate']:
                print('  - High burn rate')
            if risks['venture_debt_dependency']:
                print('  - Venture debt dependency')
            if risks['frequent_director_loans']:
                print('  - Frequent director loans')
        else:
            print('\n✅ No critical risks')
            
    except FileNotFoundError:
        print('No gen/analysis.json found. Run: just analyze')
    except Exception as e:
        print(f'Error reading analysis: {e}')


if __name__ == "__main__":
    show_summary()