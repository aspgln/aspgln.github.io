---
layout: page
title: Research
permalink: /research/
nav: true
nav_order: 1
---

My research focuses on making **minimally invasive interventions safer and more precise** — building the imaging, AI, and computational tools that help clinicians see clearly and act precisely, right where it matters most.

My work spans two parts. **(1) Technical development:** real-time imaging and reconstruction, machine-learning models for guidance and analysis, computational modeling, and integrated hardware/software systems — including two patent-pending technologies. **(2) Full-arc validation:** testing each method from phantom to *ex vivo* to *in vivo* across multiple imaging platforms and therapeutic modalities (microwave ablation, HIFU, biopsy, robotics), with clinical, engineering, and industry partners.

## Real-time imaging and monitoring for MRI-guided thermal ablation

I develop imaging and computational methods that improve MRI-guided thermal ablation — including a software-based EMI suppression system that eliminates device interference without hardware modifications (patent pending) [[1]](/publications/#dai2026emi), a volumetric thermometry framework that tracks temperature across the entire liver during free-breathing with <1.5°C accuracy [[2]](/publications/#dai2026thermometry), and calibrated computational models that predict ablation outcomes for pre-procedural planning [[3]](/publications/#dai2026pulsedmwa).

<p class="theme-keywords"><span class="keyword-tag">Signal Processing</span><span class="keyword-tag">Motion Tracking</span><span class="keyword-tag">Image Reconstruction</span><span class="keyword-tag">Computational Modeling (EM & Bioheat Transfer)</span><span class="keyword-tag">Real-Time Imaging</span></p>

<div class="research-grid research-grid--3">
  <figure style="--ar: 1.311">
    <img src="{{ '/assets/img/active-suppression.jpg' | relative_url }}" loading="lazy" alt="Active EMI suppression for MRI-guided microwave ablation">
    <figcaption>Active EMI suppression for MRI-guided microwave ablation</figcaption>
  </figure>
  <figure style="--ar: 1.444">
    <img src="{{ '/assets/img/temperature-mapping.jpg' | relative_url }}" loading="lazy" alt="Motion-robust 3D temperature mapping in the liver">
    <figcaption>Motion-robust 3D temperature mapping in the liver</figcaption>
  </figure>
  <figure style="--ar: 1.311">
    <img src="{{ '/assets/img/mwa-modeling.jpg' | relative_url }}" loading="lazy" alt="MWA computational modeling with MR thermometry validation">
    <figcaption>MWA computational modeling with MR thermometry validation</figcaption>
  </figure>
</div>

## Theranostic imaging for nanoparticle drug delivery

I develop MRI-based methods for confirming and monitoring nanoparticle-mediated drug delivery triggered by focused ultrasound [[6]](/publications/#deng2025nanoparticles). This spans imaging pipeline design, HIFU protocol optimization, and in vivo validation — demonstrating spatially targeted visualization of nanoparticle delivery with 139× signal amplification and improved therapeutic outcomes in murine cancer models. In collaboration with the [Zink Group](https://www.chem.ucla.edu/dept/Faculty/zink/Zink_Group/Zink_Group_Research.html) (UCLA Chemistry & Biochemistry).

<p class="theme-keywords"><span class="keyword-tag">Contrast Enhancement</span><span class="keyword-tag">HIFU</span><span class="keyword-tag">Nanoparticle Drug Delivery</span><span class="keyword-tag">Theranostic Imaging</span><span class="keyword-tag">Imaging Pipeline Design</span><span class="keyword-tag">In Vivo Validation</span></p>

<div class="research-grid research-grid--2">
  <figure style="--ar: 2.409">
    <img src="{{ '/assets/img/activation-mechanism.jpg' | relative_url }}" loading="lazy" alt="HIFU-triggered nanoparticle activation mechanism">
    <figcaption>HIFU-triggered nanoparticle activation mechanism</figcaption>
  </figure>
  <figure style="--ar: 1.229">
    <img src="{{ '/assets/img/mri-spotlight.jpg' | relative_url }}" loading="lazy" alt="HIFU-activated MRI 'spotlight' on the nanoparticle region">
    <figcaption>HIFU-activated MRI &lsquo;spotlight&rsquo; on the nanoparticle region</figcaption>
  </figure>
</div>

## Machine learning and computer vision for medical imaging

I co-develop deep learning methods for real-time procedural guidance and clinical image analysis. This includes a keypoint detection network for needle localization during MRI-guided interventions that requires minimal annotation (<2 mm error, <35 ms inference; patent pending) [[7]](/publications/#zhou2026keypoint), 2.5D deep learning frameworks for automated renal tumor grading on the UCSF RMaC dataset (800+ subjects) [[8]](/publications/#sahin2026rmac), a U-Net pharmacokinetic estimation framework for hyperpolarized ¹³C MRI [[9]](/publications/#sahin2025hyperpolarized), and automated neuron segmentation pipelines benchmarking deep learning against classical methods [[10]](/publications/#pham2018cellcounting).

<p class="theme-keywords"><span class="keyword-tag">Machine Learning</span><span class="keyword-tag">Image Segmentation</span><span class="keyword-tag">Device Tracking</span><span class="keyword-tag">Pharmacokinetic Modeling</span><span class="keyword-tag">Large-Scale Clinical Data</span><span class="keyword-tag">Real-Time Inference</span></p>

<div class="research-grid research-grid--3">
  <figure style="--ar: 1.208">
    <img src="{{ '/assets/img/keypoint-detection.jpg' | relative_url }}" loading="lazy" alt="Keypoint detection enables reliable device localization">
    <figcaption>Keypoint detection enables reliable device localization</figcaption>
  </figure>
  <figure style="--ar: 1.035">
    <img src="{{ '/assets/img/renal-tumor-dataset.jpg' | relative_url }}" loading="lazy" alt="Multi-phase renal tumor CT from the UCSF RMaC dataset">
    <figcaption>Multi-phase renal tumor CT from the UCSF RMaC dataset</figcaption>
  </figure>
  <figure style="--ar: 1.063">
    <img src="{{ '/assets/img/cell-segmentation.jpg' | relative_url }}" loading="lazy" alt="Deep learning vs classical methods for automated cell segmentation">
    <figcaption>Deep learning vs classical methods for automated cell segmentation</figcaption>
  </figure>
</div>

## Pre-clinical translation and validation

The technical innovations above only matter if they work in practice. Working shoulder-to-shoulder with clinicians, I was a core contributor to UCLA's pre-clinical MRI-guided intervention program across various imaging platforms (Siemens 3T/0.55T, Bruker 3T), therapeutic modalities (microwave ablation, HIFU, biopsy, surgical robotics), and teams spanning radiology, pharmacology, engineering, and industry — culminating in successful demonstrations from phantom testing through ex vivo validation to in vivo animal models including Oncopig and murine cancer models [[4]](/publications/#dai2022hifu)[[5]](/publications/#dai2025oncopig). In collaboration with [Dr. David Lu](https://www.uclahealth.org/providers/david-s-lu) (UCLA Interventional Radiology), the [Chiang Lab](https://chianglab.healthsciences.ucla.edu/), and the [MAC Lab](https://maclab.seas.ucla.edu/) (UCLA Mechanical & Aerospace Engineering).

<p class="theme-keywords"><span class="keyword-tag">MRI</span><span class="keyword-tag">CT</span><span class="keyword-tag">Ultrasound</span><span class="keyword-tag">Microwave Ablation</span><span class="keyword-tag">HIFU</span><span class="keyword-tag">Surgical Robotics</span><span class="keyword-tag">Animal Models</span><span class="keyword-tag">Rapid Prototyping</span><span class="keyword-tag">System Integration</span><span class="keyword-tag">Cross-Functional Collaboration</span><span class="keyword-tag">Phantom-to-In Vivo Validation</span></p>

<div class="research-grid research-grid--4">
  <figure style="--ar: 1.146">
    <img src="{{ '/assets/img/ex-vivo-pathology.jpg' | relative_url }}" loading="lazy" alt="Ex vivo tissue pathology evaluation for microwave ablation">
    <figcaption>Ex vivo tissue pathology evaluation for microwave ablation</figcaption>
  </figure>
  <figure style="--ar: 1.218">
    <img src="{{ '/assets/img/hifu-drug-delivery.jpg' | relative_url }}" loading="lazy" alt="MRI-guided HIFU-triggered drug delivery in murine colorectal tumor models">
    <figcaption>MRI-guided HIFU-triggered drug delivery in murine colorectal tumor models</figcaption>
  </figure>
  <figure style="--ar: 1.289">
    <img src="{{ '/assets/img/mwa-workflow.jpg' | relative_url }}" loading="lazy" alt="Microwave ablation workflow optimization in porcine models">
    <figcaption>Microwave ablation workflow optimization in porcine models</figcaption>
  </figure>
  <figure style="--ar: 1.544">
    <img src="{{ '/assets/img/robotic-prototype.jpg' | relative_url }}" loading="lazy" alt="Remote-controlled MRI-compatible robotic prototype for needle interventions">
    <figcaption>Remote-controlled MRI-compatible robotic prototype for needle interventions</figcaption>
  </figure>
</div>
