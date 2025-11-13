# Octrace - Technical Asset Documentation

## Project Context

This directory contains documentation and analysis for **Octrace**, a company being prepared for sale. The focus is on documenting technical assets and capabilities to communicate value to potential buyers.

**Role**: Supporting the CEO in articulating technical aspects and product capabilities.

## Company Overview

Octrace specializes in **predictive sales and lead generation** for the European market, powered by a comprehensive B2B database and intelligent data processing pipeline.

## Core Technical Assets

### 1. European Company Database

- **Scale**: ~40 million company records
- **Coverage**: European companies
- **Use Case**: Predictive sales and lead generation

### 2. Data Processing Pipeline

#### Data Ingestion
- **~20 crawlers/data streams** continuously feeding the system
- Multiple data sources providing overlapping and potentially conflicting information
- Real-time ingestion and processing

#### Matching and Trust System (Match & Merge Strategy)
- **Purpose**: Intelligent matching and conflict resolution for incoming data
- **Matching**: Identifies which incoming records correspond to existing database entities
- **Trust/Scoring**: Ranks data reliability by:
  - Crawler/data source
  - Data type
  - Other quality signals
- **Merge Strategy**: Generates automated merge decisions based on trust scores when conflicts arise
- Ensures highest quality data is prioritized in the database

#### Data Provenance Tracking
- **Cell-level provenance**: Every data point tracks its origin
- **Metadata stored**:
  - Source (which crawler/stream)
  - Last updated timestamp
- **Implementation**: Parallel columns storing provenance alongside actual data
- **Benefit**: Full audit trail and data lineage for compliance and debugging

### 3. Technology Stack

#### Application Framework
- **Backend**: NestJS (Node.js/TypeScript)
- **Event Processing**: BullMQ (message queue/job processing)
- **Infrastructure**: Kubernetes (container orchestration)

#### Data Layer
- **Primary Database**: PostgreSQL
- **Caching & Queue Backend**: Redis
  - BullMQ job queue backing store
  - Performance caching layer

#### Architecture Pattern
- Event-driven architecture using BullMQ
- Microservices deployed on Kubernetes
- Scalable pipeline processing

### 4. Agentic Research Framework (In Development)

**Capabilities**:
- **Column expansion**: Similar to Clay.com functionality - enriching records with additional data points
- **Autonomous research**: AI agents that can:
  - Conduct research across the web
  - Leverage the internal 40M company database
  - Execute complex research workflows autonomously

**Value Proposition**: Combines proprietary database with agentic AI for advanced B2B intelligence gathering

## Key Differentiators

1. **Scale**: 40M European company records with continuous updates
2. **Data Quality**: Sophisticated matching and trust system ensures reliability through intelligent source ranking and merge strategies
3. **Provenance**: Full data lineage and audit trail at the cell level
4. **Modern Architecture**: Cloud-native, scalable infrastructure built on proven technologies
5. **AI-Ready**: Foundation for agentic research capabilities built on top of proprietary data asset

---

**Status**: Active documentation effort to support company sale process
**Last Updated**: 2025-11-12
