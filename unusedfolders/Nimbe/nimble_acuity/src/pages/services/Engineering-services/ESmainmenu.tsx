import React, { useEffect, useRef, useState } from "react";

// ---------- Types ----------
interface MenuLink {
  label: string;
  href: string;
  isHeading?: boolean;
}

interface MenuSection {
  title: string;
  description?: string;
  mainHref: string;
  links: MenuLink[];
}

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownProps {
  title: string;
  heading?: string;
  headingHref: string;
  description?: string;
  descriptionLinkText?: string;
  descriptionHref?: string;
  items: DropdownItem[];
}

// ---------- Data ----------
const MenuLink: MenuSection[] = [
  {
  title: "Mechanical Engineering",
  description:
    "We offer specialized engineering services. Get more information on our mechanical engineering services and sub-services.",
  mainHref: "/engineering/mechanical-engineering-services/",
  links: [
    { label: "Modular Plant Design Services", href: "/engineering/mechanical/modular-plant-design-services.asp" },
    { label: "Proposal Review and Bid Management Services", href: "/engineering/mechanical/proposal-review-and-bid-management.asp" },
    { label: "Virtual Prototyping Services", href: "/engineering/mechanical/virtual-prototyping-services.asp" },
    { label: "Detailed Engineering Design Services", href: "/engineering/mechanical/detailed-engineering-design-services.asp" },
    { label: "Plant Design Engineering Services", href: "/engineering/mechanical/plant-design-engineering-services.asp" },
    { label: "Thermal Modeling Services", href: "/engineering/mechanical/thermal-modeling-services.asp" },
    { label: "Tolerance Stackup Analysis", href: "/engineering/mechanical/tolerance-stackup-analysis-services.asp" },
    { label: "Mechanical Engineering Analysis Services", href: "/engineering/mechanical/mechanical-engineering-analysis-services.asp" },
    { label: "Visual Merchandising & Display", href: "/engineering/mechanical/visual-merchandising-and-display-services.asp" },
    { label: "CNC Services", href: "/engineering/mechanical/cnc-programming-services.asp" },
    { label: "3D Product Rendering and Modeling Services", href: "/engineering/mechanical/3d-product-rendering-modeling-services.asp" },
    { label: "3D Rendering, Modeling, & Drafting Services", href: "/engineering/mechanical/3d-rendering-modeling-drafting-services.asp" },
    { label: "3D Part Modeling Services", href: "/engineering/mechanical/3d-part-modeling-services.asp" },
    { label: "Assembly Modeling Services", href: "/engineering/mechanical/assembly-modeling-services.asp" },
    { label: "3ds Max Modeling Services", href: "/engineering/mechanical/3ds-max-modeling-services.asp" },
    { label: "3D Product Animation Services", href: "/engineering/mechanical/mechanical-3d-product-animation-services.asp" },
    { label: "2D Drafting Services", href: "/engineering/mechanical/2d-drafting-services.asp" },
    { label: "Raster to Vector Conversions", href: "/engineering/mechanical/raster-to-vector-conversion-services.asp" },
    { label: "MicroStation Conversion Services", href: "/engineering/mechanical/microstation-conversion-services.asp" },
    { label: "PDF to DWG Conversion", href: "/engineering/mechanical/pdf-to-dwg-conversion-services.asp" },
    { label: "DWG to DGN Conversion", href: "/engineering/mechanical/dwg-to-dgn-conversion-services.asp" },
    { label: "MCD to DWG Conversion", href: "/engineering/mechanical/mcd-to-dwg-conversion-services.asp" },
    { label: "Scanning and Measurement Services", href: "/engineering/mechanical/scanning-measurement-digitizing-services.asp" },
    { label: "PLM Implementation & Customization", href: "/engineering/mechanical/plm-implementation-customization-services.asp" },
    { label: "Prototyping and Rapid Prototyping Services", href: "/engineering/mechanical/prototyping-rapid-prototyping-services.asp" },
    { label: "Finite Element Analysis - FEA Services", href: "/engineering/mechanical/finite-element-analysis-services.asp" },
    { label: "Product Design and Development", href: "/engineering/mechanical/product-design-and-development-services.asp" },
    { label: "Value Engineering Services", href: "/engineering/mechanical/value-engineering-services.asp" },
    { label: "Plant Design Management System", href: "/engineering/mechanical/plant-design-management-system-services.asp" },
    { label: "Piping Design and Drafting Services", href: "/engineering/mechanical/piping-design-drafting-services.asp" },
    { label: "Sheet Metal Design Services", href: "/engineering/mechanical/sheet-metal-design-services.asp" },
    { label: "Casting Design and Manufacturing", href: "/engineering/mechanical/casting-design-and-manufacturing-services.asp" },
    { label: "Reverse Engineering Services", href: "/engineering/mechanical/reverse-engineering-services.asp" },
    { label: "Process Planning and Automation", href: "/engineering/mechanical/process-planning-automation-solutions.asp" },
    { label: "Structural and Stress Analysis", href: "/engineering/mechanical/structural-stress-analysis-services.asp" },
    { label: "Outsourcing CAE - Modal Analysis", href: "/engineering/mechanical/cae-modal-analysis-services.asp" },
    { label: "Jigs and Fixture Design Services", href: "/engineering/mechanical/jigs-and-fixture-design-services.asp" },
    { label: "Tooling & Fixture Design and Drafting Services", href: "/engineering/mechanical/tooling-fixture-design-drafting-services.asp" },
    { label: "Tower Design", href: "/engineering/mechanical/tower-design-services.asp" },
    { label: "Project Management Tools and Services", href: "/engineering/mechanical/project-management-tools-and-services.asp" },
    { label: "Manufacturing Support and Process Planning", href: "/engineering/mechanical/manufacturing-process-planning-and-support-services.asp" },
    { label: "Design for Manufacturing (DFM) Services", href: "/engineering/mechanical/design-for-manufacturing-services.asp" },
    { label: "Product Engineering and Development", href: "/engineering/mechanical/product-engineering-and-development-services.asp" },
    { label: "Plumbing and Firefighting Services", href: "/engineering/mechanical/plumbing-and-firefighting-services.asp" },
    { label: "Engineering Fabrication and Production Cost Estimation", href: "/engineering/mechanical/fabrication-production-cost-estimation-services.asp" },
    { label: "Industrial Automation Services", href: "/engineering/mechanical/industrial-automation-services.asp" },
    { label: "Failure Analysis Services", href: "/engineering/mechanical/failure-analysis-services.asp" },
    { label: "Computational Fluid Dynamics Services", href: "/engineering/mechanical/computational-fluid-dynamics-services.asp" },
    { label: "Crash Analysis Services", href: "/engineering/mechanical/crash-analysis-services.asp" },
    { label: "Technical Publication Services", href: "/engineering/mechanical/technical-publication-services.asp" },
    { label: "Product Lifecycle Support", href: "/engineering/mechanical/product-lifecycle-support-services.asp" },
    { label: "Fatigue Analysis Services", href: "/engineering/mechanical/fatigue-analysis-services.asp" },
    { label: "CATIA Services", href: "/engineering/mechanical/catia-services.asp" },
    { label: "Autodesk Inventor Services", href: "/engineering/mechanical/autodesk-inventor-services.asp" },
    { label: "Mechanical Concept Design Services", href: "/engineering/mechanical/mechanical-concept-design-services.asp" },
    { label: "Revit Family Creation Services", href: "/engineering/bim/revit-family-creation-services.asp" },
    { label: "3D Laser Scanning Services", href: "/engineering/mechanical/3d-laser-scanning-services.asp" },
    { label: "SolidWorks Design Services", href: "/engineering/mechanical/solidworks-design-services.asp" },
    { label: "Assembly Drawings Services", href: "/engineering/mechanical/assembly-drawing-services.asp" },
    { label: "Engineering Change Order Services", href: "/engineering/mechanical/engineering-change-order-services.asp" },
    { label: "Machine Design and Development Services", href: "/engineering/mechanical/machine-design-and-development-services.asp" },
    { label: "HVAC System Replacement Services", href: "/engineering/mechanical/hvac-system-replacement-services.asp" },
    { label: "Fire Protection Engineering Services", href: "/engineering/mechanical/fire-protection-engineering-services.asp" },
    { label: "Office Furniture Design Services", href: "/engineering/mechanical/office-furniture-design-services.asp" },
    { label: "Parametric 3D Modeling Services", href: "/engineering/mechanical/parametric-3d-modeling-services.asp" },
    { label: "Simulation Engineering Services", href: "/engineering/mechanical/simulation-engineering-services.asp" },
    { label: "Radon Testing Services", href: "/engineering/mechanical/radon-testing-services.asp" },
    { label: "3D Modeling, Drafting, and Rendering Services for OEM", href: "/engineering/mechanical/3d-modeling-drafting-rendering-oem.asp" },
    { label: "3D Rendering, Modeling, and Drafting Services for Visual Merchandisers", href: "/engineering/mechanical/3d-rendering-modeling-drafting-for-visual-merchandising-manufacturers.asp" },
    { label: "Ship Deck Design and Drafting Services", href: "/engineering/mechanical/ship-deck-design-drafting-services.asp" }
  ],
},
 {
  title: "Architectural Services",
  description:
    "We offer specialized engineering services. Get more information on our architectural services and sub-services.",
  mainHref: "/engineering/architectural-engineering-services/",
  links: [
    { label: "Augmented Reality Interior Design Services", href: "/engineering/architectural/augmented-reality-interior-design-services.asp" },
    { label: "MicroStation Drafting and Modeling Services", href: "/engineering/architectural/microstation-drafting-and-modeling-services.asp" },
    { label: "Vacuum Casting Services", href: "/engineering/mechanical/vacuum-casting-services.asp" },
    { label: "Architectural Schematic Design Services", href: "/engineering/architectural/architectural-schematic-design-services.asp" },
    { label: "Piping Spool Drawing Services", href: "/engineering/architectural/piping-spool-drawing-services.asp" },
    { label: "Retail Visual Merchandising", href: "/engineering/architectural/retail-visual-merchandising-services.asp" },
    { label: "3D Architectural Walkthroughs", href: "/engineering/architectural/3d-architectural-walkthrough-services.asp" },
    { label: "Technical Drawing Services", href: "/engineering/architectural/technical-drawing-services.asp" },
    { label: "Virtual Staging Services", href: "/engineering/architectural/virtual-staging-services.asp" },
    { label: "Landscape Design & Drafting Services", href: "/engineering/architectural/landscape-design-drafting-services.asp" },
    { label: "Retail Space Design Service", href: "/engineering/architectural/retail-space-planning-design-services.asp" },
    { label: "3D Furniture Modeling", href: "/engineering/architectural/3d-furniture-modeling-services.asp" },
    { label: "3D Rendering Services", href: "/engineering/architectural/architectural-3d-modeling-drafting-rendering-services.asp" },
    { label: "3D Floor Plan Creation Services", href: "/engineering/architectural/3d-floor-plan-creation-services.asp" },
    { label: "3D Printing File Creation", href: "/engineering/architectural/3d-printing-file-creation-services.asp" },
    { label: "Architectural Drafting & Detailing (CAD)", href: "/engineering/architectural/architectural-drafting-services.asp" },
    { label: "Millwork Drawings", href: "/engineering/architectural/millwork-drafting-services.asp" },
    { label: "SketchUp Modeling Services", href: "/engineering/architectural/sketchup-services.asp" },
    { label: "Point Cloud Services", href: "/engineering/architectural/point-cloud-services.asp" },
    { label: "Parametric and Computational Modeling Services", href: "/engineering/architectural/parametric-computational-modeling-services.asp" },
    { label: "Cabinet Drawing Services using Cabinet Vision Software", href: "/engineering/architectural/cabinet-drawing-services-using-cabinet-vision-software.asp" },
    { label: "Kitchen Cabinet Design Services", href: "/engineering/architectural/kitchen-cabinet-design-services.asp" },
    { label: "Revit Modeling Services", href: "/engineering/architectural/revit-modeling-services.asp" },
    { label: "4D Construction Simulation Services", href: "/engineering/architectural/4d-construction-simulation-services.asp" },
    { label: "2D Floor Plan Creation Services", href: "/engineering/architectural/2d-floor-plan-creation-services.asp" },
    { label: "Presentation Drawings Services", href: "/engineering/architectural/presentation-drawing-services.asp" },
    { label: "3D Architectural Visualization Services", href: "/eso/construction/3d-architectural-visualization-services.asp" },
    { label: "Augmented Reality Engineering Services", href: "/engineering/architectural/augmented-reality-engineering-services.asp" },
    { label: "360 Degree Panorama Rendering Services", href: "/engineering/architectural/360-degree-panorama-rendering-services.asp" },
    { label: "3D Virtual Tours and Walkthroughs", href: "/engineering/architectural/3d-virtual-tours-and-walkthrough-services.asp" },
    { label: "Mixed Reality Engineering Services", href: "/engineering/architectural/mixed-reality-engineering-services.asp" },
    { label: "Virtual Reality Engineering Services", href: "/engineering/architectural/virtual-reality-engineering-services.asp" },
    { label: "Construction Solid Geometry Modeling Services", href: "/engineering/architectural/construction-solid-geometry-modeling-services.asp" },
    { label: "Presentation Modeling Services", href: "/engineering/architectural/presentation-modeling-services.asp" },
    { label: "Boundary Representation Modeling Services", href: "/engineering/architectural/boundary-representation-modeling-services.asp" },
    { label: "Real Estate Rendering Services", href: "/engineering/architectural/real-estate-rendering-services.asp" },
    { label: "Isometric Drawing Services", href: "/engineering/architectural/isometric-drawing-services.asp" },
    { label: "Architectural Model Making Services", href: "/engineering/architectural/architectural-model-making-services.asp" },
    { label: "Facade Engineering Services", href: "/engineering/architectural/facade-engineering-services.asp" },
    { label: "Telecom Network Drawings Services", href: "/engineering/architectural/telecom-network-drawings-services.asp" },
    { label: "Interior Rendering Services", href: "/engineering/architectural/interior-rendering-services.asp" },
    { label: "Photorealistic Rendering Services", href: "/engineering/architectural/photorealistic-rendering-services.asp" },
    { label: "BIM Level of Development Services", href: "/engineering/architectural/bim-level-of-development-services.asp" },
    { label: "Skylight Detailing Services", href: "/engineering/architectural/skylight-detailing-services.asp" },
    { label: "Construction Administration Services", href: "/engineering/architectural/construction-administration-services.asp" },
    { label: "Leed Consulting Services", href: "/engineering/architectural/leed-consulting-services.asp" },
    { label: "As-Built Drawings Services", href: "/engineering/architectural/as-built-drawings-services.asp" },
    { label: "Construction Detail Drawings Services", href: "/engineering/architectural/construction-detail-drawings-services.asp" },
    { label: "Component Drawing Services", href: "/engineering/architectural/component-drawing-services.asp" }
  ],
},
   {
  title: "Civil Engineering",
  description:
    "We offer specialized engineering services. Get more information on our civil engineering services and sub-services.",
  mainHref: "/engineering/civil-engineering-services/",
  links: [
    { label: "Drone Mapping Services", href: "/engineering/civil/drone-mapping-services.asp" },
    { label: "Contour Mapping Services", href: "/engineering/civil/contour-mapping-services.asp" },
    { label: "Residential Drainage Design Services", href: "/engineering/civil/residential-drainage-design-services.asp" },
    { label: "Construction Drawing Services", href: "/engineering/civil/construction-drawing-services.asp" },
    { label: "HVAC Services", href: "/engineering/civil/hvac-services.asp" },
    { label: "MEP Design & Drafting Services", href: "/engineering/civil/mep-design-drafting-services.asp" },
    { label: "Remote Drafting Services", href: "/engineering/civil/remote-drafting-services.asp" },
    { label: "Land Surveying Services", href: "/engineering/civil/land-surveying-services.asp" },
    { label: "Geospatial Services", href: "/engineering/civil/geospatial-services.asp" },
    { label: "Planimetric Mapping Services", href: "/engineering/civil/planimetric-mapping-services.asp" },
    { label: "Orthophoto Production Services", href: "/engineering/civil/orthophoto-production-services.asp" },
    { label: "Topographic Mapping Services", href: "/engineering/civil/topographic-mapping-services.asp" },
    { label: "Photogrammetric Services", href: "/engineering/civil/photogrammetric-services.asp" },
    { label: "Digital Elevation Modeling", href: "/engineering/civil/digital-elevation-modeling-services.asp" },
    { label: "Terrain Modeling Services", href: "/engineering/civil/terrain-modeling-services.asp" },
    { label: "LiDAR Mapping Services", href: "/engineering/civil/lidar-mapping-services.asp" },
    { label: "GIS Surveying Services", href: "/engineering/civil/gis-surveying-services.asp" },
    { label: "Cadastral Mapping Services", href: "/engineering/civil/cadastral-mapping-services.asp" },
    { label: "Drainage Design Services", href: "/engineering/civil/drainage-design-services.asp" },
    { label: "3D Coordination Services", href: "/engineering/civil/3d-coordination-services.asp" },
    { label: "Civil Information Modeling Services", href: "/engineering/civil/civil-information-modeling-services.asp" },
    { label: "Virtual Construction Services", href: "/engineering/civil/virtual-construction-services.asp" },
    { label: "Construction Scheduling and Tracking Services", href: "/engineering/civil/construction-scheduling-tracking-services.asp" },
    { label: "5D Simulation Services", href: "/engineering/civil/5d-simulation-services.asp" },
    { label: "4D Simulation Services", href: "/engineering/bim/4d-simulation-services.asp" },
    { label: "Contractor Support Services", href: "/engineering/civil/contractor-support-services.asp" },
    { label: "Construction Quality Assurance Services", href: "/engineering/civil/construction-quality-assurance-services.asp" },
    { label: "Traffic Engineering Services", href: "/engineering/civil/traffic-engineering-services.asp" },
    { label: "Geothermal Engineering services", href: "/engineering/civil/geothermal-engineering-services.asp" },
    { label: "Digital Twin Implementation Services", href: "/engineering/civil/digital-twin-implementation-services.asp" },
    { label: "Plumbing Design Services", href: "/engineering/civil/plumbing-design-services.asp" },
    { label: "Construction Quantity Takeoff Services", href: "/engineering/civil/construction-quantity-takeoff-services.asp" },
    { label: "Stormwater Management Services", href: "/engineering/civil/stormwater-management-services.asp" },
    { label: "Indoor Mapping Services", href: "/engineering/civil/indoor-mapping-services.asp" },
    { label: "Remote Sensing Services", href: "/engineering/civil/remote-sensing-services.asp" },
    { label: "Drone Survey Services", href: "/engineering/civil/drone-survey-services.asp" },
    { label: "Resilience Engineering Services", href: "/engineering/architectural/resilience-engineering-services.asp" },
    { label: "Aerial Mapping Services", href: "/engineering/civil/aerial-mapping-services.asp" },
    { label: "Civil 3D Modeling, Drafting & Rendering Services", href: "/eso/construction/civil-3d-modeling-drafting-rendering-services.asp" }
  ],
},
   {
  title: "Structural Engineering Design",
  description:
    "We offer specialized engineering services. Get more information on our structural engineering design services.",
  mainHref: "/engineering/structural-engineering-services/",
  links: [
    { label: "Precast Panel Detailing Services", href: "/engineering/structural/precast-panel-detailing-services.asp" },
    { label: "Skid Design Services", href: "/engineering/structural/skid-design-services.asp" },
    { label: "High Rise Structures Design & Analysis", href: "/engineering/structural/high-rise-structures-design-analysis-services.asp" },
    { label: "Industrial Structures Design & Analysis", href: "/engineering/structural/industrial-structures-design-and-analysis-services.asp" },
    { label: "Custom Homes Design & Analysis", href: "/engineering/structural/custom-home-design-and-analysis-services.asp" },
    { label: "Retrofitting & Rehabilitation of Structures", href: "/engineering/structural/retrofitting-rehabilitation-existing-structures.asp" },
    { label: "Peer Review Services", href: "/engineering/structural/peer-review-services.asp" },
    { label: "Structural Design and Drafting Services", href: "/engineering/structural/structural-design-and-drafting-services.asp" },
    { label: "Structural Fabrication Drawing Services", href: "/engineering/structural/structural-fabrication-drawing-services.asp" },
    { label: "Structural Steel Detailing Services", href: "/engineering/structural/structural-steel-detailing-services.asp" },
    { label: "Structural Shop Drawing Services", href: "/engineering/structural/structural-shop-drawings-services.asp" },
    { label: "Structural 3D Modeling, Drafting, and Rendering Services", href: "/structural-design/structural-3d-modeling-drafting-rendering-services.asp" },
    { label: "Rebar Detailing Services", href: "/engineering/structural/rebar-detailing-services.asp" },
  ],
},
  {
  title: "CAD Services",
  description:
    "We offer specialized engineering services. Get more information on our CAD services.",
  mainHref: "/engineering/cad-services.asp",
  links: [
    { label: "CAD Design & Drafting Services", href: "/engineering/cad/cad-design-and-drafting-services.asp" },
    { label: "CAD Conversion Services", href: "/engineering/mechanical/cad-conversion-services.asp" },
    { label: "AutoCAD Drafting Services", href: "/engineering/cad/autocad-drafting-services.asp" },
    { label: "Mechanical CAD Drafting", href: "/engineering/mechanical/mechanical-cad-drafting-services.asp" },
    { label: "AutoCAD Conversion", href: "/engineering/mechanical/autocad-conversion-services.asp" },
    { label: "Matterport to CAD Conversion Services", href: "/engineering/architectural/matterport-cad-conversion-services.asp" },
    { label: "Legacy Conversion Services", href: "/engineering/mechanical/legacy-conversion-services.asp" },
    { label: "Paper to CAD Conversion Services", href: "/engineering/civil/paper-to-cad-conversion-services.asp" },
    { label: "CAD Automation Services", href: "/engineering/mechanical/cad-automation-services.asp" },
    { label: "CAD Migration Services", href: "/engineering/mechanical/cad-migration-services.asp" },
  ],
},
  {
  title: "BIM",
  description:
    "We offer specialized engineering services. Get more information on our BIM services and sub-services.",
  mainHref: "/engineering/bim-services/",
  links: [
    { label: "Mechanical BIM Services", href: "/engineering/bim/mechanical-bim-services.asp" },
    { label: "BIM 5D Cost Estimation Services", href: "/engineering/bim/bim-5d-cost-estimation-services.asp" },
    { label: "BIM Component Creation Services", href: "/engineering/bim/bim-component-creation-services.asp" },
    { label: "Laser Scan to BIM Services", href: "/engineering/bim/laser-scan-to-bim-services.asp" },
    { label: "As-built BIM Modeling Services", href: "/engineering/bim/as-built-bim-modeling-services.asp" },
    { label: "BIM App Development Services", href: "/engineering/bim/bim-app-development-services.asp" },
    { label: "BIM Model Auditing Services", href: "/engineering/bim/bim-model-auditing-services.asp" },
    { label: "BIM Execution Planning Services", href: "/engineering/bim/bim-execution-planning-services.asp" },
    { label: "BIM Clash Detection Services", href: "/engineering/bim/bim-clash-detection-services.asp" },
    { label: "BIM 6D Modeling Services", href: "/engineering/bim/bim-6d-modeling-services.asp" },
    { label: "BIM Coordination Services", href: "/engineering/bim/bim-coordination-services.asp" },
    { label: "BIM Quantity Estimation Services", href: "/engineering/bim/bim-quantity-estimation-services.asp" },
    { label: "BIM and 3D Virtual Reality Services", href: "/engineering/bim/bim-3d-virtual-reality-services.asp" },
    { label: "BIM for Facility Management Services", href: "/engineering/bim/bim-for-facility-management-services.asp" },
    { label: "Structural BIM Consulting and Design Services", href: "/engineering/bim/structural-bim-consulting-design-services.asp" },
    { label: "BIM for Civil and Infrastructure Projects", href: "/engineering/bim/bim-for-civil-infrastructure-projects.asp" },
    { label: "Civil BIM Services", href: "/engineering/bim/civil-bim-services.asp" },
    { label: "Architectural BIM Services", href: "/engineering/bim/architectural-bim-services.asp" },
    { label: "Electrical BIM Services", href: "/engineering/bim/electrical-bim-services.asp" },
    { label: "Structural BIM Drafting Services", href: "/engineering/bim/structural-bim-drafting-services.asp" },
    { label: "BIM Energy Modeling Services", href: "/engineering/bim/bim-energy-modeling-services.asp" },
    { label: "BIM Lean Construction Services", href: "/engineering/bim/bim-lean-construction-services.asp" },
    { label: "4D BIM Modeling Services", href: "/engineering/bim/4d-bim-modeling-services.asp" },
  ],
},
   {
  title: "Electrical Engineering",
  description:
    "We offer specialized engineering services. Get more information on our electrical engineering services and sub-services.",
  mainHref: "/engineering/electrical-engineering-services/",
  links: [
    { label: "Lighting Control and Design Services", href: "/engineering/electrical/lighting-control-and-design-services.asp" },
    { label: "Control System Engineering Services", href: "/engineering/electrical/control-system-engineering-services.asp" },
    { label: "VLSI Design Services", href: "/engineering/electrical/vlsi-design-services.asp" },
    { label: "Hardware Design Services", href: "/engineering/electrical/hardware-design-services.asp" },
    { label: "Electrical Instrumentation Services", href: "/engineering/electrical/electrical-instrumentation-services.asp" },
    { label: "Electrical Systems Design", href: "/engineering/electrical/electrical-systems-design-and-drafting-services.asp" },
    { label: "Electrical Design and Layout Services", href: "/engineering/electrical/electrical-design-and-layout-services.asp" },
    { label: "PCB Design and Layout Services", href: "/engineering/electrical/PCB-design-and-layout-services.asp" },
    { label: "Solar Panel Design Services", href: "/engineering/electrical/solar-panel-design-services.asp" },
    { label: "FPGA Design Services", href: "/engineering/electrical/fpga-design-services.asp" },
    { label: "Embedded System Design Services", href: "/engineering/electrical/embedded-system-design-services.asp" },
    { label: "Electrical Schematic Drawing Services", href: "/engineering/electrical/electrical-schematic-drawing-services.asp" },
    { label: "Electronic Circuit Design Services", href: "/engineering/electrical/electronic-circuit-design-services.asp" },
    { label: "Energy Modeling Services", href: "/engineering/electrical/energy-modeling-services.asp" },
    { label: "Electrical Grounding System Design Services", href: "/engineering/electrical/electrical-grounding-system-design-services.asp" },
    { label: "Electrical Drafting Services", href: "/engineering/electrical/electrical-drafting-services.asp" },
    { label: "PCB Reverse Engineering Services", href: "/engineering/electrical/pcb-reverse-engineering-services.asp" },
    { label: "Electrical 2D Drafting Services", href: "/engineering/electrical/electrical-2d-drafting-services.asp" },
    { label: "Electrical Calibration Services", href: "/engineering/electrical/electrical-calibration-services.asp" },
  ],
},
{
  title: "Infrastructure Engineering",
  description:
    "We offer specialized engineering services. Get more information on our infrastructure engineering design services and sub-services.",
  mainHref: "/engineering/infrastructure-engineering-services/",
  links: [
    { label: "Construction Documentation Services", href: "/engineering/infrastructure/construction-documentation-services.asp" },
    { label: "Construction Support Services", href: "/engineering/infrastructure/construction-support-services.asp" },
    { label: "Thematic Mapping Services", href: "/engineering/infrastructure/thematic-mapping-services.asp" },
    { label: "Parcel Mapping Services", href: "/engineering/infrastructure/parcel-mapping-services.asp" },
    { label: "Land Development Design Services", href: "/engineering/infrastructure/land-development-design-services.asp" },
    { label: "Town Planning Services", href: "/engineering/infrastructure/town-planning-services.asp" },
    { label: "Urban Development Services", href: "/engineering/infrastructure/urban-development-services.asp" },
    { label: "Storm and Sewer Drainage Design Services", href: "/engineering/infrastructure/storm-sewer-drainage-design-services.asp" },
    { label: "Geographic Information System Services", href: "/engineering/infrastructure/geographic-information-system-services.asp" },
    { label: "GIS and CADD Data Development and Maintenance", href: "/engineering/infrastructure/gis-cadd-data-development-maintenance.asp" },
    { label: "Underground Utility Mapping Services", href: "/engineering/infrastructure/underground-utility-mapping-services.asp" },
    { label: "Highway Engineering Services", href: "/engineering/infrastructure/highway-engineering-services.asp" },
    { label: "Public Health Engineering Services", href: "/engineering/infrastructure/public-health-engineering-services.asp" },
    { label: "3D Corridor Mapping and Generation of GIS Database Services", href: "/engineering/infrastructure/3d-corridor-mapping-generation-of-gis-database-services.asp" },
    { label: "Construction Sequencing Services", href: "/engineering/infrastructure/construction-sequencing-services.asp" },
    { label: "Infrastructure Planning Services", href: "/engineering/infrastructure/infrastructure-planning-services.asp" },
    { label: "Geotechnical Engineering Services", href: "/engineering/infrastructure/geotechnical-engineering-services.asp" },
    { label: "Construction Phase Services", href: "/engineering/infrastructure/construction-phase-services.asp" },
    { label: "Energy Auditing Services", href: "/engineering/infrastructure/energy-auditing-services.asp" },
    { label: "Public Health Engineering Design Services", href: "/engineering/infrastructure/public-health-engineering-design-services.asp" },
  ],
},
{
  title: "Industries",
  description: "Explore our specialized engineering services for different industries.",
  mainHref: "/engineering/industries/",
  links: [
    { label: "Engineering Design for Retail Stores", href: "/engineering/engineering-design-for-retail-stores.asp" },
    { label: "Engineering Services for Construction Companies", href: "/engineering/engineering-services-for-construction-companies.asp" },
    { label: "CAD Engineering Services for Glass Industry", href: "/engineering/cad-engineering-for-glass-industry.asp" },
    { label: "Engineering for the Oil and Gas Industry", href: "/eso/construction/engineering-for-oil-gas-industry.asp" },
    { label: "Engineering Services for Kitchen Equipment Manufacturer", href: "/eso/construction/engineering-for-kitchen-equipment-manufacturer.asp" },
    { label: "Engineering Services for Quick Service Restaurant", href: "/engineering/engineering-services-for-quick-service-restaurant.asp" },
  ],
},
{
  title: "Engineering - UK",
  description: "We offer specialized engineering services. Get more information on our Engineering - UK services and sub-services.",
  mainHref: "/uk/engineering/",
  links: [
    { label: "BIM Services UK", href: "/uk/engineering/bim-services.asp" },
    { label: "3D Architectural Modelling, Drafting and Rendering Services in the UK", href: "/uk/engineering/architectural-3d-modelling-drafting-rendering-services.asp" },
    { label: "CAD Services for UK", href: "/uk/engineering/cad-services.asp" },
    { label: "Revit Modelling Services UK", href: "/uk/engineering/revit-modeling-services.asp" },
  ],
},

    // ... add your other sections here (Business Research, Pharma, etc.)

];


// ---------- DropdownMenu Component --------

// ---------- DropdownMenu Component (Desktop only) ----------
const DropdownMenu: React.FC<MenuSection> = ({ title, mainHref, description, links }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [alignRight, setAlignRight] = useState(false);

  useEffect(() => {
    const handlePosition = () => {
      if (dropdownRef.current) {
        const rect = dropdownRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        setAlignRight(rect.right > viewportWidth);
      }
    };
    handlePosition();
    window.addEventListener("resize", handlePosition);
    return () => window.removeEventListener("resize", handlePosition);
  }, []);

  return (
    <li className="relative group">
      <button className="px-5 py-2 font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-lg text-left break-words">
        {title}
      </button>

      <div
        ref={dropdownRef}
        className={`
          absolute top-full mt-2 z-50 p-4
          opacity-0 scale-95 -translate-y-2
          group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
          pointer-events-none group-hover:pointer-events-auto
          bg-white rounded-xl border border-gray-200 shadow-lg
          w-[90vw] sm:w-[400px] md:w-[600px] lg:w-[700px] xl:w-[800px]
          max-h-[500px] overflow-auto
          ${alignRight ? "right-0 origin-top-right" : "left-0 origin-top-left"}
          transition-all duration-300 ease-out
        `}
      >
        {description && <p className="text-sm text-gray-600 mb-2">{description}</p>}
        <div className="grid grid-cols-2 gap-2">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="block px-3 py-2 rounded-md text-gray-700 text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </li>
  );
};

// ---------- Main Menu Component ----------
const ESmainmenu: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const toggleSection = (idx: number) => {
    setExpandedSections((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center justify-start flex-wrap gap-2">
            {MenuLink.map((section, idx) => (
              <DropdownMenu key={idx} {...section} />
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-all duration-300"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Accordion Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-2 bg-white rounded-xl shadow-lg">
            {MenuLink.map((section, idx) => {
              const isExpanded = expandedSections.includes(idx);
              return (
                <div key={idx} className="border-b last:border-b-0 mb-2">
                  <button
                    onClick={() => toggleSection(idx)}
                    className="w-full flex justify-between items-center px-3 py-2 text-left font-semibold text-gray-800 hover:text-green-600 transition-all duration-300 rounded-lg"
                  >
                    <span>{section.title}</span>
                    <span className="text-gray-500">{isExpanded ? "−" : "+"}</span>
                  </button>

                  {isExpanded && (
                    <div className="mt-1 pl-4">
                      {section.description && (
                        <p className="text-sm text-gray-600 mb-1">{section.description}</p>
                      )}
                      <div className="flex flex-col gap-1">
                        {section.links.map((link, linkIdx) => (
                          <a
                            key={linkIdx}
                            href={link.href}
                            className="text-sm text-gray-700 hover:text-green-600 hover:underline px-2 py-1 rounded-lg transition-all duration-200"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};


export default ESmainmenu;