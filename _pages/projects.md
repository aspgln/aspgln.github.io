---
layout: page
title: projects
permalink: /projects/
nav: false
nav_order: 1
---

### Active EMI Suppression for MRI-Guided Thermal Ablation

**Problem:** Microwave ablation devices flood the MRI scanner with electromagnetic interference, corrupting the temperature images clinicians need to guide the procedure.

**Approach:** I developed a software-based active EMI suppression system that estimates and removes device interference directly from MRI raw data using a separate receiver coil array as a noise reference — requiring zero modifications to the ablation hardware.

**Outcome:** The system achieves 91% EMI suppression and real-time capability (~15 ms/slice), enabling continuous MR thermometry during active ablation with temperature accuracy of 1.3°C validated against fiber-optic probes.


**Related:**
- Dai Q et al. — Active EMI suppression for MR thermometry during MRI-guided microwave ablation. *(Manuscript Under Review)*
- U.S. Provisional Patent Application, filed March 2026.
- [ISMRM 2025, Honolulu — Abstract #0677 *(Summa Cum Laude & AMPC Selected — top 1%)*](https://archive.ismrm.org/2025/0677.html)

---

### Volumetric MR Thermometry in Moving Tissues

**Problem:** Monitoring temperature during liver ablation requires 3D coverage, but the liver moves with every breath, corrupting standard thermometry.

**Approach:** I developed a volumetric PRF thermometry framework combining golden-angle 3D stack-of-radial MRI acquisition with an image-navigated multi-baseline method that tracks respiratory motion directly from reconstructed images — eliminating the need for external navigators.

**Outcome:** The system achieves full-liver coverage (~72 mm) refreshing every ~1 second with 1.44°C accuracy, reducing temperature measurement error by over two-thirds compared to conventional single-baseline methods.


**Related:**
- [Dai Q et al. — Volumetric thermometry in moving tissues using stack-of-radial MRI. *MRM* 2026;95(2):803–819.](https://doi.org/10.1002/mrm.70074)
- ISMRM 2024, Singapore — Abstract #1277. *(Summa Cum Laude & AMPC Selected — top 1%)*
- ISMRM 2023, Toronto — Abstract #4987. *(Summa Cum Laude)*

---

### Computational Modeling for Microwave Ablation Treatment Planning

**Problem:** Ablation treatment planning relies on computational models to predict ablation zone geometry, but existing models use generic tissue parameters that limit predictive accuracy — especially for pulsed protocols with complex cooling-reheating dynamics.

**Approach:** I built a calibrated EM–bioheat computational model in COMSOL Multiphysics, with tissue-specific parameters derived via inverse-problem optimization against experimental measurements rather than literature values.

**Outcome:** The calibrated model is validated against independent MR thermometry data acquired during ex vivo ablations with active EMI suppression, enabling direct comparison of simulated and measured spatiotemporal temperature evolution.


**Related:**
- [Dai Q et al. — Characterizing spatiotemporal thermal effects of pulsed microwave ablation. ISMRM 2026, Cape Town. *(Accepted, Oral)*](/publications/)

---

### MRI-Guided Thermal Ablation in Oncopig Cancer Models

**Problem:** MR thermometry can estimate ablation zones during treatment, but whether those predictions match actual tissue damage requires systematic validation in a biologically realistic model.

**Approach:** I designed and executed an end-to-end MRI-guided microwave ablation workflow in Oncopig subjects with induced liver tumors — from planning MRI and real-time needle targeting through respiratory-triggered MR thermometry with thermal dose evaluation to post-ablation imaging and gross pathology confirmation.

**Outcome:** Ablation zone dimensions from thermometry, post-ablation MRI, and pathology showed agreement across all procedures, establishing a preclinical framework directly translatable to clinical deployment.


**Related:**
- [Dai Q et al. — Real-time MR thermometry to monitor microwave ablation: Validation in an Oncopig cancer model. ISMRM 2025, Honolulu — Abstract #2189.](/publications/)
- 14th Interventional MRI Symposium, 2024, Annapolis.

---

### MRI-Compatible Surgical Robotics

**Problem:** MRI-guided liver procedures face a practical constraint: the scanner bore limits the clinician's physical access to the patient during imaging.

**Approach:** I collaborated with the UCLA Mechanical Engineering Department on developing and validating MRI-compatible surgical robots designed to overcome this limitation for liver biopsy and thermal ablation. My contributions spanned real-time device tracking and visualization on MRI, workflow optimization, and prototype testing — validated through in-bore, ex vivo, and in vivo experiments.

**Outcome:** The integrated system demonstrated successful device localization and procedure execution within the MRI bore, establishing feasibility for robot-assisted MRI-guided liver interventions.


**Related:**
- [Zhou W, Dai Q et al. — Keypoint detection network for needle localization on intra-procedural MRI. *IJCARS* 2026.](https://doi.org/10.1007/s11548-026-03592-5)
- U.S. Provisional Patent Application (Keypoint Detection Network), filed March 2026.
- ISMRM 2026, Cape Town. *(Accepted)*

---

### Focused Ultrasound-Mediated Drug Delivery with MRI Confirmation

**Problem:** When delivering a therapeutic agent to a tumor using focused ultrasound, confirming that the drug reached its target during the procedure remains a key challenge.

**Approach:** I develop MRI-based acquisition and monitoring methods for verifying focused-ultrasound-mediated nanoparticle delivery across stimuli-responsive platforms. In one line of work, I designed a modulation enhancement mapping framework ("Spotlight MRI") that uses cycled HIFU to toggle temperature-sensitive nanoparticle contrast on and off. In a second, I used MRI and MR thermometry to confirm targeted drug release from a mechanosensitive nanoparticle platform triggered by HIFU.

**Outcome:** The Spotlight MRI framework achieved 139-fold signal amplification localized to the HIFU focal zone. The mechanosensitive platform demonstrated improved therapeutic outcomes versus controls in vivo.


**Related:**
- [Deng T†, Dai Q† et al. — Thermoresponsive polymer-modified SiO₂/Gd-DTPA nanoparticles for MRI-guided ultrasound-modulated contrast enhancement. *ACS Applied Nano Materials* 2025;8(47):22835–22844.](https://doi.org/10.1021/acsanm.5c04320) *(† equal contribution)*

---

### Renal Tumor AI and Open Dataset

I curated a large multi-phase contrast-enhanced CT dataset of renal mass patients at UCSF and developed deep learning-based models for tumor detection, classification, and aggressiveness prediction. The dataset has been prepared for public release as an open benchmark for the research community.


**Related:**
- [UCSF RMaC Dataset — GitHub](https://github.com/LarsonLab/UCSF-RMaC)

---

### Hyperpolarized ¹³C MRI for Renal Tumors

I built data-driven kinetic models and metabolic quantification pipelines for dynamic hyperpolarized ¹³C pyruvate MRI in patients with renal tumors, supporting non-invasive assessment of tumor metabolism.


**Related:**
- [Sahin S et al. — Spatially constrained hyperpolarized ¹³C MRI pharmacokinetic rate constant map estimation. *Journal of Magnetic Resonance* 2025.](https://doi.org/10.1016/j.jmr.2025.107832)
- Invited Talk, Hyperpolarized Carbon-13 MRI Technology Development Workshop, 2020.
