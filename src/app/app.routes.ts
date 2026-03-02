import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';


import { DemoComponent } from './demo/demo.component';



import { ProductionPlanningComponent } from './pages/production-planning/production-planning.component';
import { QualityComponent } from './pages/quality/quality.component';
import { WarehouseComponent } from './pages/warehouse/warehouse.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { FinanceComponent } from './pages/finance/finance.component';
import { MultiPlantComponent } from './pages/multi-plant/multi-plant.component';




// INTELLIGENCE
import { PocketMarginAiComponent } from './pages/nxt/pocket-margin-ai/pocket-margin-ai.component';
import { CommodityCostSimulationComponent } from './pages/nxt/commodity-cost-simulation/commodity-cost-simulation.component';
import { OrderRiskDetectionComponent } from './pages/nxt/order-risk-detection/order-risk-detection.component';
import { MarginMonitoringComponent } from './pages/nxt/margin-monitoring/margin-monitoring.component';

// DOMAIN CONTROL
import { DrumTraceabilityComponent } from './pages/nxt/drum-traceability/drum-traceability.component';
import { MultiLevelBomComponent } from './pages/nxt/multi-level-bom/multi-level-bom.component';
import { StageValidationComponent } from './pages/nxt/stage-validation/stage-validation.component';
import { BatchGenealogyComponent } from './pages/nxt/batch-genealogy/batch-genealogy.component';

// MARGIN & RISK
import { MetalPriceIntegrationComponent } from './pages/nxt/metal-price-integration/metal-price-integration.component';
import { MarginValidationComponent } from './pages/nxt/margin-validation/margin-validation.component';
import { ProfitSimulationComponent } from './pages/nxt/profit-simulation/profit-simulation.component';
import { CreditGovernanceComponent } from './pages/nxt/credit-governance/credit-governance.component';

// EXECUTIVE CONTROL
import { CxoDashboardComponent } from './pages/nxt/cxo-dashboard/cxo-dashboard.component';
import { OrderProfitabilityComponent } from './pages/nxt/order-profitability/order-profitability.component';
import { WorkingCapitalComponent } from './pages/nxt/working-capital/working-capital.component';
import { CrossPlantPerformanceComponent } from './pages/nxt/cross-plant-performance/cross-plant-performance.component';


export const routes: Routes = [
  { path: 'home', component: HeroComponent },

  

  { path: 'cm/production-planning', component: ProductionPlanningComponent },
  { path: 'cm/quality', component: QualityComponent },
  { path: 'cm/warehouse', component: WarehouseComponent },
  { path: 'cm/orders', component: OrdersComponent },
  { path: 'cm/finance', component: FinanceComponent },
  { path: 'cm/multi-plant', component: MultiPlantComponent },




  // ================= CABLE NXT =================

// INTELLIGENCE
{ path: 'nxt/pocket-margin-ai', component: PocketMarginAiComponent },
{ path: 'nxt/commodity-cost-simulation', component: CommodityCostSimulationComponent },
{ path: 'nxt/order-risk-detection', component: OrderRiskDetectionComponent },
{ path: 'nxt/margin-monitoring', component: MarginMonitoringComponent },

// DOMAIN CONTROL
{ path: 'nxt/drum-traceability', component: DrumTraceabilityComponent },
{ path: 'nxt/multi-level-bom', component: MultiLevelBomComponent },
{ path: 'nxt/stage-validation', component: StageValidationComponent },
{ path: 'nxt/batch-genealogy', component: BatchGenealogyComponent },

// MARGIN & RISK
{ path: 'nxt/metal-price-integration', component: MetalPriceIntegrationComponent },
{ path: 'nxt/margin-validation', component: MarginValidationComponent },
{ path: 'nxt/profit-simulation', component: ProfitSimulationComponent },
{ path: 'nxt/credit-governance', component: CreditGovernanceComponent },

// EXECUTIVE CONTROL
{ path: 'nxt/cxo-dashboard', component: CxoDashboardComponent },
{ path: 'nxt/order-profitability', component: OrderProfitabilityComponent },
{ path: 'nxt/working-capital', component: WorkingCapitalComponent },
{ path: 'nxt/cross-plant-performance', component: CrossPlantPerformanceComponent },

  //
  { path: 'demo', component: DemoComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
