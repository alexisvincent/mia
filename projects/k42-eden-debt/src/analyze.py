#!/usr/bin/env python3
"""
Revolut CSV Transaction Analyzer
Analyzes financial transactions and outputs structured analysis to JSON
"""

import csv
import json
import re
from datetime import datetime
from collections import defaultdict
from decimal import Decimal, InvalidOperation


def parse_amount(amount_str):
    """Parse amount string to float, handling negative values"""
    if not amount_str or amount_str == '':
        return 0.0
    try:
        return float(amount_str.replace(',', ''))
    except (ValueError, AttributeError):
        return 0.0


def analyze_revolut_csv(csv_file_path):
    """Analyze Revolut CSV and return structured data"""
    
    # Initialize analysis containers
    venture_debt_transactions = []
    director_loans = []
    payroll_transactions = []
    management_fees = []
    saas_expenses = []
    travel_expenses = []
    monthly_summary = defaultdict(lambda: {'inflow': 0, 'outflow': 0, 'net': 0})
    currency_summary = defaultdict(lambda: {'inflow': 0, 'outflow': 0, 'balance': 0})
    
    # Category mappings
    saas_keywords = ['anthropic', 'openai', 'google', 'github', 'vercel', 'notion', 'stable', 'windsurf', '1password', 'pulumi', 'codeium']
    travel_keywords = ['british', 'hotel', 'air france', 'swiss air', 'citizenm', 'marriott', 'booking']
    
    total_transactions = 0
    
    with open(csv_file_path, 'r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        
        for row in reader:
            total_transactions += 1
            
            # Extract key fields
            date_completed = row.get('Date completed (UTC)', '')
            transaction_type = row.get('Type', '')
            description = row.get('Description', '').lower()
            reference = row.get('Reference', '').lower()
            amount = parse_amount(row.get('Amount', '0'))
            currency = row.get('Payment currency', 'USD')
            payer = row.get('Payer', '')
            
            # Parse date for monthly analysis
            try:
                date_obj = datetime.strptime(date_completed.split(',')[0], '%Y-%m-%d')
                month_key = date_obj.strftime('%Y-%m')
            except:
                month_key = 'unknown'
            
            # Update monthly summary
            if amount > 0:
                monthly_summary[month_key]['inflow'] += amount
            else:
                monthly_summary[month_key]['outflow'] += abs(amount)
            monthly_summary[month_key]['net'] += amount
            
            # Update currency summary
            if amount > 0:
                currency_summary[currency]['inflow'] += amount
            else:
                currency_summary[currency]['outflow'] += abs(amount)
            currency_summary[currency]['balance'] += amount
            
            # Categorize transactions
            
            # Venture Debt from Eden Analytics
            if 'eden analytics' in description or 'eden analytics' in reference:
                venture_debt_transactions.append({
                    'date': date_completed,
                    'amount': amount,
                    'currency': currency,
                    'description': row.get('Description', ''),
                    'reference': reference
                })
            
            # Director Loans
            elif 'director loan' in reference or ('alexis vincent' in reference and transaction_type == 'TRANSFER'):
                director_loans.append({
                    'date': date_completed,
                    'amount': amount,
                    'currency': currency,
                    'description': row.get('Description', ''),
                    'reference': reference
                })
            
            # Payroll
            elif 'payroll' in reference or 'artem medeusheyev' in description:
                payroll_transactions.append({
                    'date': date_completed,
                    'amount': amount,
                    'currency': currency,
                    'description': row.get('Description', ''),
                    'reference': reference,
                    'beneficiary': row.get('Beneficiary IBAN', '')
                })
            
            # Management Fees
            elif 'geist ltd' in description or 'management' in reference:
                management_fees.append({
                    'date': date_completed,
                    'amount': amount,
                    'currency': currency,
                    'description': row.get('Description', ''),
                    'reference': reference
                })
            
            # SaaS Expenses
            elif any(keyword in description for keyword in saas_keywords):
                saas_expenses.append({
                    'date': date_completed,
                    'amount': amount,
                    'currency': currency,
                    'description': row.get('Description', ''),
                    'service': next((kw for kw in saas_keywords if kw in description), 'other')
                })
            
            # Travel Expenses
            elif any(keyword in description for keyword in travel_keywords) or transaction_type == 'CARD_PAYMENT' and ('hotel' in description or 'air' in description):
                travel_expenses.append({
                    'date': date_completed,
                    'amount': amount,
                    'currency': currency,
                    'description': row.get('Description', ''),
                    'location': row.get('Orig currency', currency)
                })
    
    # Calculate summary statistics
    total_venture_debt = sum(t['amount'] for t in venture_debt_transactions if t['amount'] > 0)
    total_director_loans = abs(sum(t['amount'] for t in director_loans if t['amount'] < 0))
    total_payroll = abs(sum(t['amount'] for t in payroll_transactions if t['amount'] < 0))
    total_management_fees = abs(sum(t['amount'] for t in management_fees if t['amount'] < 0))
    total_saas_costs = abs(sum(t['amount'] for t in saas_expenses if t['amount'] < 0))
    total_travel_costs = abs(sum(t['amount'] for t in travel_expenses if t['amount'] < 0))
    
    # Recent months burn rate (last 3 months)
    recent_months = sorted(monthly_summary.keys())[-3:] if len(monthly_summary) >= 3 else sorted(monthly_summary.keys())
    avg_monthly_burn = sum(monthly_summary[month]['outflow'] for month in recent_months) / len(recent_months) if recent_months else 0
    
    # Construct analysis result
    analysis = {
        'metadata': {
            'analysis_date': datetime.now().isoformat(),
            'total_transactions': total_transactions,
            'date_range': {
                'start': min(monthly_summary.keys()) if monthly_summary else None,
                'end': max(monthly_summary.keys()) if monthly_summary else None
            }
        },
        'summary_statistics': {
            'total_venture_debt_received': round(total_venture_debt, 2),
            'total_director_loans': round(total_director_loans, 2),
            'total_payroll_paid': round(total_payroll, 2),
            'total_management_fees': round(total_management_fees, 2),
            'total_saas_costs': round(total_saas_costs, 2),
            'total_travel_costs': round(total_travel_costs, 2),
            'average_monthly_burn_rate': round(avg_monthly_burn, 2)
        },
        'monthly_cash_flow': {
            month: {
                'inflow': round(data['inflow'], 2),
                'outflow': round(data['outflow'], 2),
                'net': round(data['net'], 2)
            }
            for month, data in sorted(monthly_summary.items())
        },
        'currency_breakdown': {
            currency: {
                'total_inflow': round(data['inflow'], 2),
                'total_outflow': round(data['outflow'], 2),
                'net_balance': round(data['balance'], 2)
            }
            for currency, data in currency_summary.items()
        },
        'transaction_categories': {
            'venture_debt': venture_debt_transactions,
            'director_loans': director_loans,
            'payroll': payroll_transactions,
            'management_fees': management_fees,
            'saas_expenses': saas_expenses,
            'travel_expenses': travel_expenses
        },
        'risk_indicators': {
            'low_cash_warning': any(data['balance'] < 1000 for data in currency_summary.values()),
            'high_burn_rate': avg_monthly_burn > 8000,
            'venture_debt_dependency': total_venture_debt > total_director_loans,
            'frequent_director_loans': len(director_loans) > 20
        }
    }
    
    return analysis


def main():
    """Main function to run the analysis"""
    csv_file = "data/Revolut Business Transaction Statement Sep 2024 to Jul 2025.csv"
    output_file = "gen/analysis.json"
    
    try:
        print(f"Analyzing {csv_file}...")
        analysis = analyze_revolut_csv(csv_file)
        
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(analysis, f, indent=2, ensure_ascii=False)
        
        print(f"Analysis complete! Results saved to {output_file}")
        
        # Print summary to console
        stats = analysis['summary_statistics']
        print("\n=== FINANCIAL SUMMARY ===")
        print(f"Total Venture Debt Received: ${stats['total_venture_debt_received']:,.2f}")
        print(f"Total Director Loans: ${stats['total_director_loans']:,.2f}")
        print(f"Monthly Burn Rate: ${stats['average_monthly_burn_rate']:,.2f}")
        print(f"Total Transactions Analyzed: {analysis['metadata']['total_transactions']}")
        
        risks = analysis['risk_indicators']
        if any(risks.values()):
            print("\n⚠️  RISK INDICATORS:")
            if risks['low_cash_warning']:
                print("- Low cash warning: Some accounts below $1,000")
            if risks['high_burn_rate']:
                print("- High burn rate: Monthly expenses exceed $8,000")
            if risks['venture_debt_dependency']:
                print("- Heavy venture debt dependency")
            if risks['frequent_director_loans']:
                print("- Frequent director loans indicate cash flow issues")
        
    except FileNotFoundError:
        print(f"Error: Could not find {csv_file}")
        print("Please ensure the CSV file is in the current directory.")
    except Exception as e:
        print(f"Error during analysis: {e}")


if __name__ == "__main__":
    main()